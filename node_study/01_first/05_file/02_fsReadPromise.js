const fs = require('fs').promises

fs.readFile('./aaa.txt')
.then((data)=>{
    //console.log(data)
    console.log(data.toString())
})
.catch((err)=>{
    console.log(err.message)
})