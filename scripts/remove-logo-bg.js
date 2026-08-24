// One-off: strip the flat off-white background from public/brand/logo.webp,
// producing a transparent-background PNG. The source background is a
// uniform flat color (247,247,247), so a distance-based key + color
// decontamination on the anti-aliased edges gives a clean cutout.
const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "brand", "logo.webp");
const OUT = path.join(__dirname, "..", "public", "brand", "logo-transparent.png");

const BG = [247, 247, 247];
const LOW = 12; // distance below this from bg -> fully transparent
const HIGH = 45; // distance above this from bg -> fully opaque

async function main() {
  const { data, info } = await sharp(SRC)
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const si = i * channels;
    const r = data[si];
    const g = data[si + 1];
    const b = data[si + 2];

    const dr = r - BG[0];
    const dg = g - BG[1];
    const db = b - BG[2];
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);

    let alpha = (dist - LOW) / (HIGH - LOW);
    alpha = Math.max(0, Math.min(1, alpha));

    const di = i * 4;
    if (alpha <= 0) {
      out[di] = r;
      out[di + 1] = g;
      out[di + 2] = b;
      out[di + 3] = 0;
    } else {
      // Decontaminate: undo the blend with the background color so
      // anti-aliased edge pixels don't carry a whitish fringe.
      const nr = BG[0] + (r - BG[0]) / alpha;
      const ng = BG[1] + (g - BG[1]) / alpha;
      const nb = BG[2] + (b - BG[2]) / alpha;
      out[di] = Math.max(0, Math.min(255, Math.round(nr)));
      out[di + 1] = Math.max(0, Math.min(255, Math.round(ng)));
      out[di + 2] = Math.max(0, Math.min(255, Math.round(nb)));
      out[di + 3] = Math.round(alpha * 255);
    }
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(OUT);

  console.log("wrote", OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
