const _ =require('lodash');
let names = ['a','b','c','d'];
let pairs = _.chunk(_.shuffle(names),2);
console.log(pairs);