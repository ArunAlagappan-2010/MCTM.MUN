import sharp from "sharp";
import path from "node:path";

const src = path.resolve("Content/STYLE_sample/logo.jpeg");
const out = path.resolve("public/brand/logo.webp");

sharp(src)
  .resize({ width: 640, withoutEnlargement: true })
  .webp({ quality: 90 })
  .toFile(out)
  .then(() => console.log("done"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
