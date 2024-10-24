const http = require('http')
const fs = require('fs').promises
const url = require('url')

http.createServer(async(req,res)=>{
    const myUrl = url.parse(req.url, true)

    if(myUrl.pathname == '/'){

        console.log(`method : ${req.method}`)
        console.log(`headers : ${req.headers}`)
        console.log(`headers.content-type : ${req.headers['content-type']}`)

        req.on('data', ddd =>{
            let receiveStr = ddd.toString()
            console.log(receiveStr)
            let arr = JSON.parse(receiveStr)
            console.log(arr)
        })



        let ttt = '난 put_delete_fetch 서버야'
        ttt = await fs.readFile('07_home.html')
        res.writeHead(200,{'content-Type':'text/html; charset=UTF-8'})
        res.end(ttt)
    }

})
.listen(8082,()=>{
    console.log('put_delete_fetch 서버 실행')
})