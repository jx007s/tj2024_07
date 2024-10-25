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

        if(req.method == 'GET'){
            ttt = await fs.readFile('07_memberList.html')

            let memsStr = JSON.stringify(mems)
            console.log(memsStr)
            ttt = ttt.toString().replaceAll("'{{mems}}'", memsStr)

        }else if(req.method == 'DELETE'){
            console.log('삭제')
            let param = JSON.parse(await reqParam(req))
            
            
            ttt = mems[param.id].pname + ' 삭제했습니다.'
            //console.log(ttt)

            //삭제
            delete mems[param.id]
            console.log(mems)

        } else if(req.method == 'POST'){

            let param = JSON.parse(await reqParam(req))
            console.log(param)

            let newMember = {
                'pname':param.pname,
                'age':param.age,
                'id':maxNum
            }
            //console.log(newMember)
            mems[maxNum] = newMember
            maxNum++
            console.log(mems)
            ttt = '가입되었습니다'

        }else if(req.method == 'PUT'){
            console.log('put 왔다')
            
            // json 문자열로 서버로 전달됨{"id":2,"pname":"장서건","age":27}
            // 파싱하여 처리
             let param = JSON.parse(await reqParam(req)) 
             console.log(param)  // 수정 입력된 데이터
             let nowMem = mems[param.id]
             //console.log(nowMem) //mems의 원본데이터
             nowMem.pname = param.pname
             nowMem.age = param.age
             console.log(mems) //mems

            ttt = "수정성공"
        }

    }

    res.writeHead(200,{'content-Type':'text/html; charset=UTF-8'})
    res.end(ttt)
})
.listen(8082,()=>{
    console.log('member 서버 실행')
})