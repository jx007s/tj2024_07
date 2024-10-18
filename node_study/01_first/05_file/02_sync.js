const fs = require('fs')

console.log('시작')

let data = fs.readFileSync('bbb.txt')
console.log('1번',data.toString())

data = fs.readFileSync('bbb.txt')
console.log('2번',data.toString())

fs.readFile('bbb.txt',(err,data)=>{
    console.log('비동기',data.toString())
})

data = fs.readFileSync('bbb.txt')
console.log('3번',data.toString())
data = fs.readFileSync('bbb.txt')
console.log('4번',data.toString())

console.log('끝')