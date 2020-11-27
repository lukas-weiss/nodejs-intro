import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageLockFile = path.join(__dirname, '../package-lock.json');
const result = fs.readFile(packageLockFile, {}, (error, data) => {
    if(error) {
        throw error;
    }
    console.log(`length of package-lock.json ${data.length}`);
});

console.log(result);
console.log(5+4);
console.log('another log output');