const http = require('http')
//서버1
http.createServer(
    (req, res)=>{
        res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'})
        res.end("안녕 난 강사서버 1 이야")
    }  
).listen(8081, () => {
    console.log("강사서버1 실행 및 대기")
})

//서버2
http.createServer(
    (req, res)=>{
        res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'})
        res.write("<h2>서버2</h2>")
        res.end("<p>안녕 난 강사서버 2 이야</p>")
    }  
).listen(8082, () => {
    console.log("강사서버2 실행 및 대기")
})
