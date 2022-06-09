import { rename as renameFile } from "fs/promises";
import { getPathFromFiles } from './../utils/getPathFromFiles.js'

export const rename = async () => {
  const name = getPathFromFiles(import.meta.url, "wrongFilename.txt");
  const newName = getPathFromFiles(import.meta.url, "properFilename.md");
  const message = "FS operation failed";

  try {
    await renameFile(name, newName);
  } catch (err) {
    throw new Error(message);
  }
};

rename();
