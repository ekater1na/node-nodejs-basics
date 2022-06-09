import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { getPathFromFiles } from "./../utils/getPathFromFiles.js";

export const compress = async () => {
  const sourcePath = getPathFromFiles(import.meta.url, "fileToCompress.txt");
  const destinationPath = getPathFromFiles(import.meta.url, "archive.gz");

  const gzip = createGzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
    console.log("Done");
  });
};

compress();
