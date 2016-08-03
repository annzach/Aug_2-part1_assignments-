const port =8080;
const http =require('http');
let server = http.createServer((req,res) => {
//Request Handler 
//every time u have request this will beinvoked"
console.log("request method:",req.method);
console.log("request url :",req.url);
console.log('\n');
//return [] if no match
//let urlParts =req.url.split()
let urlParts = req.url.match(/[^/]+/g) || [] ;
let mystring = decodeURI(urlParts[0]);
console.log(mystring);
var word_arr = mystring.split(" ");
let word_count = word_arr.length;
var char_count = 0;
var obj = {};
console.log("word count", word_count);
console.log(word_arr);
for(var i =0; i< mystring.length; i++) {
  if(mystring[i] !== ' ')
    char_count++;
}
console.log("character count",char_count);
obj = {"word_count":`${word_count}`, "char_count":`${char_count}`};
console.log("obj in console",obj);
var s = JSON.stringify(obj);
res.write(`obj is ${s}`);
res.end()
});

server.listen(port,err => {
  console.log(err || `server listening on port ${port}`);
});
