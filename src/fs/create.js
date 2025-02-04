import { writeFile } from "fs/promises";
import { getPathFromFiles } from './../utils/getPathFromFiles.js'


export const create = async () => {
  const src = getPathFromFiles(import.meta.url, "fresh.txt") ;
  const content = "I am fresh and young";
  const message = "FS operation failed";

  try {
    await writeFile(src, content, { flag: "wx" });
  } catch (err) {
    throw new Error(message);
  }
};

create();
