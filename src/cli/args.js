import process from "process";

export const parseArgs = () => {
    // Write your code here
    let value = process.argv[2];
    let value2 = process.argv[3];

    console.log(`propName is ${value}, prop2Name is ${value2}`);
};

parseArgs();
