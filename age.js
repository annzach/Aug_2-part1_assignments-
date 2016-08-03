const moment = require('moment');

function age(dateStr) {
         let s= moment(dateStr,'MM_DD_YYYY').fromNow(true);
                     let a = parseInt(s.slice(0,2));
                  return `${a}\n`;
                    
  }

  module.exports =age;