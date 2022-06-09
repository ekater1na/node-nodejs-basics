import { createReadStream } from "fs";
import { pipeline } from "stream";
import { getPathFromFiles } from "./../utils/getPathFromFiles.js";

export const read = async () => {
  const path = getPathFromFiles(import.meta.url, "fileToRead.txt");

  const readableStream = createReadStream(path, "utf8");

  // readableStream.on("data", (chunk) => {
  //   process.stdout.write(chunk);
  // });

  //   readableStream.pipe(process.stdout);

  pipeline(readableStream, process.stdout, (err) => {
    if (err) {
      console.error("Pipeline failed", err);
    } else {
      console.log("Pipeline succeeded");
    }
  });
};

read();
