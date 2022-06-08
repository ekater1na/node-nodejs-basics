import { rm } from "fs/promises";
import { getPathFromFiles } from './../utils/getPathFromFiles.js'

export const remove = async () => {
  const path = getPathFromFiles(import.meta.url, "fileToRemove.txt");
  const message = "FS operation failed";

  try {
    await rm(path);
  } catch (err) {
    throw new Error(message);
  }
};

remove();
