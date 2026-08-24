// Rewrites an MP4 so the `moov` atom (the index the browser must read before
// it can decode anything) sits before `mdat` instead of after it — a pure
// container-level box move, no re-encoding. Fixes videos that stall/never
// render because the browser has to fetch the whole file first to find moov.
import fs from "node:fs";
import path from "node:path";

const CONTAINER_TYPES = new Set([
  "moov",
  "trak",
  "mdia",
  "minf",
  "stbl",
  "dinf",
  "edts",
  "mvex",
  "udta",
]);

function readBoxes(buf, start, end) {
  const boxes = [];
  let offset = start;
  while (offset < end) {
    let size = buf.readUInt32BE(offset);
    const type = buf.toString("ascii", offset + 4, offset + 8);
    let headerSize = 8;
    if (size === 1) {
      size = Number(buf.readBigUInt64BE(offset + 8));
      headerSize = 16;
    } else if (size === 0) {
      size = end - offset;
    }
    boxes.push({ type, start: offset, headerSize, size });
    offset += size;
  }
  return boxes;
}

function patchOffsets(buf, start, end, delta) {
  for (const box of readBoxes(buf, start, end)) {
    const dataStart = box.start + box.headerSize;
    const dataEnd = box.start + box.size;
    if (box.type === "stco") {
      const entryCount = buf.readUInt32BE(dataStart + 4);
      for (let i = 0; i < entryCount; i++) {
        const p = dataStart + 8 + i * 4;
        buf.writeUInt32BE(buf.readUInt32BE(p) + delta, p);
      }
    } else if (box.type === "co64") {
      const entryCount = buf.readUInt32BE(dataStart + 4);
      for (let i = 0; i < entryCount; i++) {
        const p = dataStart + 8 + i * 8;
        const v = buf.readBigUInt64BE(p) + BigInt(delta);
        buf.writeBigUInt64BE(v, p);
      }
    } else if (CONTAINER_TYPES.has(box.type)) {
      patchOffsets(buf, dataStart, dataEnd, delta);
    }
  }
}

function faststart(inputPath, outputPath) {
  const buf = fs.readFileSync(inputPath);
  const top = readBoxes(buf, 0, buf.length);

  const ftyp = top.find((b) => b.type === "ftyp");
  const moov = top.find((b) => b.type === "moov");
  const mdat = top.find((b) => b.type === "mdat");
  if (!ftyp || !moov || !mdat) {
    throw new Error("Missing ftyp/moov/mdat top-level box");
  }
  if (moov.start < mdat.start) {
    console.log(`${path.basename(inputPath)}: moov already before mdat, copying as-is`);
    fs.copyFileSync(inputPath, outputPath);
    return;
  }

  const ftypBuf = buf.subarray(ftyp.start, ftyp.start + ftyp.size);
  const moovBuf = Buffer.from(buf.subarray(moov.start, moov.start + moov.size));
  const mdatBuf = buf.subarray(mdat.start, mdat.start + mdat.size);

  const newMdatOffset = ftypBuf.length + moovBuf.length;
  const delta = newMdatOffset - mdat.start;
  patchOffsets(moovBuf, 0, moovBuf.length, delta);

  fs.writeFileSync(outputPath, Buffer.concat([ftypBuf, moovBuf, mdatBuf]));
  console.log(
    `${path.basename(inputPath)}: moved moov (${moov.size}B) before mdat, offsets shifted by ${delta}B`
  );
}

const [, , input, output] = process.argv;
if (!input) {
  console.error("usage: node faststart-mp4.mjs <input.mp4> [output.mp4]");
  process.exit(1);
}
faststart(input, output ?? input);
