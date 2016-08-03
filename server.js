//used to define our server .
const port =8080;
const http =require('http');
/*var moment= require('moment');*/




let server = http.createServer((req,res) => {
//Request Handler 
//every time u have request this will beinvoked"
console.log("request method:",req.method);
console.log("request url :",req.url);
console.log('\n');
//return [] if no match
//let urlParts =req.url.split()
let urlParts = req.url.match(/[^/]+/g) || [] ;

let path = urlParts[0]; //'square'
console.log("value entered is ",path);
let arr =path.split('');
console.log("arra is",arr)
let operator1 =parseInt(arr[0]);
console.log("First arg",operator1)
let operator =arr[1];
console.log(operator);
let operator2= parseInt(arr[2]);
console.log("First arg",operator2)
var result = 0;

switch(operator)  {

case '+' : 
           result = operator1 + operator2;
           console.log(result);
           res.write(`${result}`);
           break;
case '-' : 
            result = operator1 - operator2;
           console.log(result);
           res.write(`${result}`);
           break;

case '*' : 
          result = operator1 * operator2;
           console.log(result);
           res.write(`${result}`);
           break;

case '%' : 
           result = operator1 / operator2;
           console.log(result);
           res.write(`${result}`);
           break;


case '^' : 
           result = Math.pow(opeartor1,operator)
           console.log(result);
           res.write(`${result}`);
           break;

default:   res.statusCode=404;
           res.end('Not found\n'); 
           break;

}
res.end()
});

server.listen(port,err => {
  console.log(err || `server listening on port ${port}`);
});
     /*  switch(path) {

    case 'square':
                  let num = parseInt(urlParts[1]);
                  let square =Math.pow(num,2);
                  res.write(`${square}`);
                  res.end('\n');
                  break;
        
      case 'age':    let enter_date=urlParts[1];
                      var s= moment(enter_date,'MM_DD_YYYY').fromNow(true);
                      var a = parseInt(s.slice(0,2));
                      res.write(age(enter_date));
                      res.end('\n');
                      break;
          
      default:    res.statusCode=404;
                      res.end('Not found\n'); 
                      break;



      }
});





/////////////////////

//get /square/5 - >25




//get /age/03-29-1989*/