import sharp from "sharp";
import path from "node:path";

const src = path.resolve("world imge.png");
const outDir = path.resolve("public/fog");

async function run() {
  const meta = await sharp(src).metadata();
  console.log("source", meta.width, meta.height);

  // Desktop: cap width at 2400px (retina-ish for typical hero widths)
  await sharp(src)
    .resize({ width: 2400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(outDir, "map_bg.webp"));

  // Mobile: portrait crop-friendly, cap width at 900px
  await sharp(src)
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(outDir, "sp_map_bg.webp"));

  console.log("done");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
