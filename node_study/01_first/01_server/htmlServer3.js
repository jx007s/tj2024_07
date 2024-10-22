const http = require('http')
const fs = require('fs').promises


http.createServer(async (req, res)=>{
/*
06~12 : aaa.html
12~20 : ccc.html
20~06 : ddd.html

*/
    let now = new Date().getHours()

    let fName = 'aaa'
    if(now >= 12 && now < 20){
        fName = 'ccc'
    }else if(now >= 20 || now < 6){
        fName = 'ddd'
    }

    try {
        res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'})

        let ttt = await fs.readFile(fName+'.html')
        res.end(ttt)

    } catch (error) {
        res.writeHead(500, {'content-type': 'text/html; charset=UTF-8'})

        res.end('에러다')
    }
    
    
    //res.end("안녕 난 강사서버야")
}).listen(8082, ()=>{
    console.log('htmlServer 8082 실행')
})


