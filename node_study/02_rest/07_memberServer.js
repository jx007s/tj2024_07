const http = require('http')
const fs = require('fs').promises
const url = require('url')

let maxNum = 4

let mems={
    1:{id:1,pname:'정우성',age:37},
    2:{id:2,pname:'장서건',age:27},
    3:{id:3,pname:'한가인',age:47}
}

http.createServer(async(req,res)=>{
    const myUrl = url.parse(req.url, true)

    let ttt = '난 memberList 서버야'
    if(myUrl.pathname == '/'){
        ttt = await fs.readFile('07_memberList.html')

        let memsStr = JSON.stringify(mems)
        console.log(memsStr)
        ttt = ttt.toString().replaceAll("'{{mems}}'", memsStr)

    }

    if(myUrl.pathname == '/detail'){
        ttt = await fs.readFile('07_memberDetail.html')

        let nowId = myUrl.query.id
        console.log(nowId)

        let memsStr = JSON.stringify(mems[nowId])
        console.log(memsStr)
        ttt = ttt.toString().replaceAll("'{{mem}}'", memsStr)

    }

    
    
    res.writeHead(200,{'content-Type':'text/html; charset=UTF-8'})
    res.end(ttt)
})
.listen(8082,()=>{
    console.log('member 서버 실행')
})