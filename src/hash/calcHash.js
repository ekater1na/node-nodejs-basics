import crypto from "crypto";
import { readFile } from "fs/promises";
import { getPathFromFiles } from "./../utils/getPathFromFiles.js";

export const calculateHash = async () => {
  const path = getPathFromFiles(import.meta.url, "fileToCalculateHashFor.txt");

  try {
    const data = await readFile(path, "utf8");
    const hash = crypto.createHash("sha256").update(data).digest("hex");
    console.log(hash);
  } catch (err) {
    throw new Error(message);
  }
};

calculateHash();
