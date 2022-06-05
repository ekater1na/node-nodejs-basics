import process from 'process';

export const parseEnv = () => {
    // Write your code here
    const prefix = 'RSS_';

    for (let key in process.env) {
        console.log(`${prefix}${key}=${process.env[key]}`);
    }
};

parseEnv(process.env)

