// const http =  require('http'); // commonjs module system

import http from "http"; // es6 module system

const port = 5000; // port number

const server = http.createServer((req,res)=>{

  if(req.url === '/'){
    res.end("Home pgae welcomes uwu");
  }else if(req.url === '/about'){
    res.end("About page welcomes uwu");
  }else{
    res.end("404 page not found uwu");
  }

  
  




}) // created server method

server.listen(port,()=>{
  console.log(`server is listening on port ${port}`);
}); // makes this server listen on port 5000 