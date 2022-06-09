import { pipeline, Transform } from "stream";
import { EOL } from "os";

export const transform = async () => {
  
    let data = new Transform({
      transform(chunk, encoding, callback) {
        callback(
          null,
          chunk.toString().replace(EOL, "").split("").reverse().join("") + EOL
        );
      },
    });

    pipeline(
        process.stdin,
        data,
        process.stdout,
        (err) => {
            if (err) {
                console.error('Pipeline failed', err);
              } else {
                console.log('Pipeline succeeded');
              }
        }
    )

    // process.stdin.pipe(data).pipe(process.stdout);

    console.log("Please, write something to console\n");
  
};

transform();
