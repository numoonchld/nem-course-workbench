const fs = require('fs')

// 00. print to console 
// console.log('Hello World')

// synchronous methods (blocking) --------------------------------------------------------

// 01. read a file 
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn)

// 02. write to files
const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut)

// asynchronous methods (non-blocking) --------------------------------------------------------

fs.readFile('./txt/start.txt', 'utf-8', (err, res) => {
    console.log(res)
})