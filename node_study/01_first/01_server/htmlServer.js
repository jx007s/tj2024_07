const http = require('http')
const fs = require('fs')


http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'})

    let ttt = fs.readFileSync('bbb.html')
    //console.log(ttt)
    res.end(ttt)
    
    //res.end("안녕 난 강사서버야")
}).listen(80, ()=>{
    console.log('htmlServer 실행')
})


