//Path Module
const path = require('path');

console.log(path.sep)



const filePath = path.join('/Node.FreeCodeCamp/','subFolde','test.txt')
console.log(filePath);


const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'Node.FreeCodeCamp','SubFolde','text.txt')
console.log(absolute);