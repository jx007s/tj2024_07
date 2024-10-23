const http = require('http')
const fs = require('fs').promises
const url = require('url')

let members = {

    'aaa': {'pw':'111', name: '장동건'},
    'bbb': {'pw':'222', name: '장서건'},
    'ccc': {'pw':'333', name: '장남건'},
    'ddd': {'pw':'444', name: '장중건'}    
}

let me = ''

const head = {'content-Type':'text/html; charset=UTF-8'}
http.createServer(async (req, res)=>{
    const myUrl = url.parse(req.url, true)

    if(myUrl.pathname == '/'){


        res.writeHead(200,head)
        let ttt = await fs.readFile('06_loginHome.html')
        ttt = ttt.toString().replaceAll("{{me}}", me )
        //console.log(ttt)
        res.end(ttt)

    } else if(myUrl.pathname == '/logout'){
            let msg = `${me}님 로그아웃 되었습니다.`
            let dst = '/'

            me = ''

            let ttt = await (await fs.readFile('06_loginReg.html')).toString()

            ttt = ttt.replaceAll("{{msg}}",msg)
                        .replaceAll("{{dst}}",dst)
                res.writeHead(200,head)
                res.end(ttt)

    } else if(myUrl.pathname == '/login'){

        if(req.method === 'GET'){
            res.writeHead(200,head)
            let ttt = await fs.readFile('06_loginForm.html')
            res.end(ttt)

        }else if(req.method === 'POST'){

            let ttt = await (await fs.readFile('06_loginReg.html')).toString()

            req.on('data',( qq )=>{

                let msg = '로그인 실패'
                let dst = '/login'

                let qqs = new url.URLSearchParams(qq.toString())

                if(qqs.get('pid') in members && 
                   members[qqs.get('pid')].pw ==qqs.get('pw')){

                    me = members[qqs.get('pid')].name
                    msg = `${members[qqs.get('pid')].name} 님 로그인 되었습니다.`
                    dst = '/'
                }
                
                ttt = ttt.replaceAll("{{msg}}",msg)
                        .replaceAll("{{dst}}",dst)
                res.writeHead(200,head)
                res.end(ttt)
            })

        }

        
    }

}).listen(8082,()=>{
    console.log('POST LOGIN 서버 실행')
})