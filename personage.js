const port = 8080;
const moment = require('moment');
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
let birth_date = urlParts[0];
let birth_date_format =moment(birth_date,'MM_DD-YYYY');
let age_diff = birth_date_format.diff(moment());
let durationStr =moment.duration(age_diff).humanize(true);


 //'square'
console.log("Birthdate is",urlParts[0]);
console.log("Age differnce",durationStr);


res.end()
});

server.listen(port,err => {
  console.log(err || `server listening on port ${port}`);
});
