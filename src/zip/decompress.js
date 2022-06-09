import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { getPathFromFiles } from "./../utils/getPathFromFiles.js";

export const decompress = async () => {
  const sourcePath = getPathFromFiles(import.meta.url, "archive.gz");
  const destinationPath = getPathFromFiles(
    import.meta.url,
    "fileToCompress.txt"
  );

  const gzip = createUnzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  source.pipe(gzip).pipe(destination);
  console.log("Done");
};

decompress();
