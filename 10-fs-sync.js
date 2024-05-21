const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./Node.FreeCodeCamp/text.txt','utf-8')
const second = readFileSync('./Node.FreeCodeCamp/second.txt','utf-8')

console.log(first);
console.log(second);

writeFileSync(
  './Node.FreeCodeCamp/first.txt',`Here is the result:${first},${second}`,
  {flag:'a'}
)