import { readFile } from "fs/promises";
import { getPathFromFiles } from './../utils/getPathFromFiles.js'

export const read = async () => {
  const path = getPathFromFiles(import.meta.url, "hello.txt");
  const message = "FS operation failed";

  try {
    const data = await readFile(path, "utf8");
    console.log(data);
  } catch (err) {
    throw new Error(message);
  }
};

read();
