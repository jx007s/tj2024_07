const http = require('http')
const fs = require('fs').promises
const url = require('url')

let maxNum = 4

let mems={
    1:{id:1,pname:'정우성',age:37},
    2:{id:2,pname:'장서건',age:27},
    3:{id:3,pname:'한가인',age:47}
}

/// req.on을 동기식으로 처리하는 함수
function reqParam(reqqq){

    return new Promise((resolve, reject)=>{
        let res = ''
        reqqq.on('data',ddd=>{
            res += ddd.toString()  //요청 query 받기
        })
        reqqq.on('end',()=>{
            //param 내보내기
            resolve(decodeURIComponent(res) )
        })
        reqqq.on('error',err=>{
            reject(err)  //에러발생시 reject
        })
    })
}



http.createServer(async(req,res)=>{
    const myUrl = url.parse(req.url, true)

    let ttt = '난 memberList 서버야'
    if(myUrl.pathname == '/'){
        ttt = await fs.readFile('07_memberList.html')

        let memsStr = JSON.stringify(mems)
        console.log(memsStr)
        ttt = ttt.toString().replaceAll("'{{mems}}'", memsStr)


    }else if(myUrl.pathname == '/detail'){
        ttt = await fs.readFile('07_memberDetail.html')

        let nowId = myUrl.query.id
        console.log(nowId)

        let memsStr = JSON.stringify(mems[nowId])
        console.log(memsStr)
        ttt = ttt.toString().replaceAll("'{{mem}}'", memsStr)

    }else if(myUrl.pathname == '/join'){
        if(req.method == 'GET'){
            ttt = await fs.readFile('07_memberJoinForm.html')
        }
        if(req.method == 'POST'){

            /*
            req.on('data', ddd=>{

            })*/


            // "pname=운마니&age=23"   -> URLSearchParams { 'pname' => '운마니', 'age' => '23' }  
            let param = new URLSearchParams(await reqParam(req))
            //console.log(param)
            let newMember = {
                'pname':param.get('pname'),
                'age':param.get('age'),
                'id':maxNum
            }
            //console.log(newMember)
            mems[maxNum] = newMember
            maxNum++

            let msg = '가입되었습니다.'
            let dst = '/'
            ttt = await fs.readFile('07_memberAlert.html')
            ttt = ttt.toString()
            .replaceAll('{{msg}}',msg)
            .replaceAll('{{dst}}',dst)
        }
    }

    
    
    res.writeHead(200,{'content-Type':'text/html; charset=UTF-8'})
    res.end(ttt)
})
.listen(8082,()=>{
    console.log('member 서버 실행')
})