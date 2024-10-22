const http = require('http')
const url = require('url')

http.createServer((req, res)=>{

    console.log("req.url:"+req.url)

    //const myUrl = url.parse(req.url)   // false(혹은 생략):: query -> 문자열
    const myUrl = url.parse(req.url, true)  // true :: query -> 객체(key 배열)로 변환
    console.log("hostname : "+myUrl.hostname)
    console.log("pathname : "+myUrl.pathname)
    //console.log("query : "+myUrl.query)
    console.log(myUrl.query)    // true 일경우  ::>key 배열로 확인

    res.writeHead(200,{'content-Type':'text/html; charset=UTF-8'})
    res.end('get 파라미터 서버 이지롱')
}).listen(8082,()=>{
    console.log('get 파라미터 서버 실행')
})