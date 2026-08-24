// Turns a non-seamless texture into a repeatable tile: shifts the image by
// half its width/height (wrapping), which moves the original edge-seam into
// a cross through the center, then softly blurs a band around that cross so
// the mismatch isn't a hard line. The image's own outer edges (formerly the
// smooth middle of the source) are untouched and already continuous when
// tiled, so this only needs to fix the new center seam.
import sharp from "sharp";
import path from "node:path";

const [, , input, output, blurRadiusArg, bandArg] = process.argv;
if (!input || !output) {
  console.error("usage: node make-seamless-tile.mjs <input> <output> [blurRadius=24] [bandHalfPx=90]");
  process.exit(1);
}
const blurRadius = blurRadiusArg ? Number(blurRadiusArg) : 24;
const bandHalf = bandArg ? Number(bandArg) : 90;

async function run() {
  const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const halfW = Math.floor(width / 2);
  const halfH = Math.floor(height / 2);

  const shifted = Buffer.alloc(data.length);
  for (let y = 0; y < height; y++) {
    const srcY = (y + halfH) % height;
    const srcRow = srcY * width * channels;
    const dstRow = y * width * channels;
    for (let x = 0; x < width; x++) {
      const srcX = (x + halfW) % width;
      const srcIdx = srcRow + srcX * channels;
      const dstIdx = dstRow + x * channels;
      for (let c = 0; c < channels; c++) shifted[dstIdx + c] = data[srcIdx + c];
    }
  }

  const blurredBuf = await sharp(shifted, { raw: { width, height, channels } })
    .blur(blurRadius)
    .raw()
    .toBuffer();

  // Alpha mask: full strength right on the center cross, fading to 0 by bandHalf px away.
  const mask = Buffer.alloc(width * height);
  for (let y = 0; y < height; y++) {
    const dy = Math.min(Math.abs(y - halfH), height - Math.abs(y - halfH));
    for (let x = 0; x < width; x++) {
      const dx = Math.min(Math.abs(x - halfW), width - Math.abs(x - halfW));
      const d = Math.min(dx, dy);
      mask[y * width + x] = d < bandHalf ? Math.round(255 * (1 - d / bandHalf)) : 0;
    }
  }

  // Build an RGBA buffer of the blurred image using `mask` as alpha, then
  // composite it over the shifted (sharp) base so only the seam band blurs.
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0, p = 0; i < width * height; i++, p += 4) {
    rgba[p] = blurredBuf[i * channels];
    rgba[p + 1] = blurredBuf[i * channels + 1];
    rgba[p + 2] = blurredBuf[i * channels + 2];
    rgba[p + 3] = mask[i];
  }

  await sharp(shifted, { raw: { width, height, channels } })
    .composite([{ input: rgba, raw: { width, height, channels: 4 }, blend: "over" }])
    .webp({ quality: 86 })
    .toFile(output);

  console.log(`${path.basename(input)} -> ${path.basename(output)}: seam-blended (${width}x${height}, blur ${blurRadius}, band ${bandHalf}px)`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
