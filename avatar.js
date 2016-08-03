//used to define our server .
const port =8080;
const http =require('http');
const md5 =require('md5');
let server = http.createServer((req,res) => {
//Request Handler 
//every time u have request this will beinvoked"
console.log("request method:",req.method);
console.log("request url :",req.url);
console.log('\n');
//return [] if no match
//let urlParts =req.url.split()
let urlParts = req.url.match(/[^/]+/g) || [] ;
let email = urlParts[0];
let hash =md5(email);

 //'square'
console.log("Email Address is ",`http://www.gravatar.com/avatar/${hash}`);


res.end()
});

server.listen(port,err => {
  console.log(err || `server listening on port ${port}`);
});
