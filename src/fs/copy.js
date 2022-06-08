import { copyFile, mkdir, readdir } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const copy = async () => {
  const source = __dirname + "/files";
  const destination = __dirname + "/files_copy";
  const message = "FS operation filed";

  try {
    await mkdir(destination);
    const dirFiles = await readdir(source);
    await Promise.all(
      dirFiles.map((i) => copyFile(`${source}/${i}`, `${destination}/${i}`))
    );
    console.log(JSON.stringify(dirFiles));
  } catch (err) {
    console.log(message);
  }
};

copy();
