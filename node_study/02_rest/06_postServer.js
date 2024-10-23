const http = require('http')
const url = require('url')
const fs = require('fs').promises



http.createServer(async (req, res)=>{
    //console.log(req.method)
    const myUrl = url.parse(req.url, true)

    let ttt = '본진이야'
    try {
        if(myUrl.pathname=='/'){
            ttt = await fs.readFile('06_home.html')
            ttt = ttt.toString().replaceAll('{{me}}',me)

            res.writeHead(200,{'content-Type':'text/html; charset=UTF-8'})
            res.end(ttt)

        }else if(myUrl.pathname=='/korea'){
            //ttt = '난 코리아'
            //console.log(req.method)
            if(req.method=='GET'){
                //ttt = '난 코리아 에게 뭐 물어볼라고?'
                ttt = await fs.readFile('06_koreaForm.html')

                res.writeHead(200,{'content-Type':'text/html; charset=UTF-8'})
                res.end(ttt)

            }else if(req.method=='POST'){

                ttt = await fs.readFile('06_koreaReg.html')

                /// 데이터 수신시 실행하는 이벤트
                req.on('data', aaa=>{

                    // 인코딩 : decodeURIComponent()
                    let qwer = decodeURIComponent(aaa.toString())

                    // 쿼리 문자열 parsing
                    let vvs = new url.URLSearchParams(qwer)
                    console.log('데이터 수신:',qwer, vvs)

                    vvs.forEach((vv, kk)=>{
                        console.log(`${kk} : ${vv}`)
                    })
                    console.log(vvs.get("pname"))

                    let msg = '입력 오류'
                    let dst = '/korea'
                    if(vvs.get("pname")){
                       
                        msg = `${vvs.get("pname")} 등록되었습니다`
                        dst = '/'
                    }


                    ttt = ttt.toString()
                        .replaceAll('{{msg}}', msg)
                        .replaceAll('{{dst}}', dst)

                    //ttt = '난 코리아 가 해결해주지'
                   
                    res.writeHead(200,{'content-Type':'text/html; charset=UTF-8'})
                    res.end(ttt)
                })

                //console.log(`koreaPost : ${myUrl.query.pname},${myUrl.query.age},${myUrl.query.marriage}`)
                
            }
        }
    } catch (error) {
        
    }

    
})
.listen(8082,()=>{
    console.log('post 서버 실행')
})