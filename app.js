// const http = require('http');

// const server = http.createServer((req,res)=>{
//   if(req.url==='/'){
//     res.end('Welcome to our home Page')
//   }
//   if(req.url === '/about'){
//     res.end('Here is Our short History')
//   }
//   res.end(
//     `
//     <h1>Oops<h1>`
//   )

// })

// server.listen(5000)

//package.json - manifest(stores important info about project/package)
//npm init(step by step )

//manaul approach (create package.json in the root,create properties etc)
//npm init (step by step ,press enter to skip)
//npm init -y (everthing default)

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]

const newItems = _.flatMapDeep(items);
console.log(newItems);
