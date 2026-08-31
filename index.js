// const http =  require('http'); // commonjs module system

import http from "http"; // es6 module system

const server = http.createServer((req,res)=>{
  res.end("hello world");
}) // created server method

server.listen(5000,()=>{
  console.log("server is listening on port 5000");
}); // makes this server listen on port 5000 