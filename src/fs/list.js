import { readdir } from "fs/promises";
import { getPathFromFolder } from './../utils/getPathFromFolder.js'

export const list = async () => {
  const path = getPathFromFolder(import.meta.url);
  const message = "FS operation failed";

  try {
    const files = await readdir(path);
    files.forEach((item) => console.log(item));
  } catch (err) {
    throw new Error(message);
  }
};

list();
