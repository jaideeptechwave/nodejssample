// const fs = require('fs');
// fs.writeFileSync('node.txt','hello world');
// fs.appendFileSync('node.txt',' this is jaideep');

// const add = require('./utils.js')
// const sum = add(4,6);
// console.log(sum);

const validator =require('validator')
const notes =require('./notes.js')

//console.log(notes())
//console.log(validator.isEmail('jaideep@gmail.com'))
console.log(validator.isURL('http://google.com'))
