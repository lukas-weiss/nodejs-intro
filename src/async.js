import fs from 'fs';
import path from 'path';

const packageLockFile = path.join(path.resolve(), '../package-lock.json');
const result = fs.readFile(packageLockFile, {}, (error, data) => {
    if(error) {
        throw error;
    }
    console.log(`length of package-lock.json ${data.length}`);
});

console.log(result);