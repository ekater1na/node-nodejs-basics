import { createWriteStream } from "fs";
import { pipeline, finished } from "stream";

import { getPathFromFiles } from "./../utils/getPathFromFiles.js";

export const write = async () => {
  const path = getPathFromFiles(import.meta.url, "fileToWrite.txt");

  let writeableStream = createWriteStream(path);

  // process.stdin.on("data", (chunk) => {
  //   writeableStream.write(chunk.toString());
  // });
  
  //   process.stdin.pipe(writeableStream)
  //   console.log("Please, write something to console\n");

  console.log("Please, write something to console\n");
  pipeline(process.stdin, writeableStream, (err) => {
    if (err) {
      console.error("Pipeline failed", err);
    } else {
      console.log("Pipeline succeeded");
    }
  });
};

write();
