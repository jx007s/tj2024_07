const fs = require('fs')

console.log('시작')

fs.readFile('bbb.txt',(err,data)=>{
    console.log('1번',data.toString())
})
fs.readFile('bbb.txt',(err,data)=>{
    console.log('2번',data.toString())
})
fs.readFile('bbb.txt',(err,data)=>{
    console.log('3번',data.toString())
})
fs.readFile('bbb.txt',(err,data)=>{
    console.log('4번',data.toString())
})

console.log('끝')