const http = require('http')
const url = require('url')
const fs = require('fs')

let members = {

    'aaa': {'pw':'111', name: '장동건'},
    'bbb': {'pw':'222', name: '장서건'},
    'ccc': {'pw':'333', name: '장남건'},
    'ddd': {'pw':'444', name: '장중건'}    
}



http.createServer((req, res)=>{

    let myUrl = url.parse(req.url, true)

    let a = 10
    let b = '아기상어'
    let c = true
    let d = [11,22,33,44,55]

    let ttt = `a : ${a} , b : ${b} , c : ${c} , d: ${d}`

    //console.log('ttt : ', ttt)

    res.writeHead(200,{'content-Type' : 'text/html; charset=UTF-8'})

    //console.log(myUrl.pathname )
    if(myUrl.pathname=='/info'){
        ttt = '회사소개입니다.'

    }else if(myUrl.pathname=='/prod'){

        ttt = `제품입니다. id : ${myUrl.query.id} , 색상 : ${myUrl.query.color}`

    }else if(myUrl.pathname=='/center'){
        
        let ddd = fs.readFileSync('center.html').toString()
        .replaceAll('{{a}}',a)
        .replaceAll('{{b}}',b)
        .replaceAll('{{c}}',c)
        .replaceAll('{{d}}',d)

        ttt = ddd


    }else if(myUrl.pathname=='/login'){
        ttt = '로그인 실패'
        if(myUrl.query.id in members && members[myUrl.query.id].pw == myUrl.query.pw){
            ttt = `${members[myUrl.query.id].name} 님 로그인 되었습니다.`
        }

        
    }


    res.end(ttt)


    /*
        login 주소로 로그인 구현하세요
        aaa 111 장동건
        bbb 222 장서건
        ccc 333 장남건
        ddd 444 장중건

        성공시 : 
        장동건 님 로그인 되었습니다.
        실패시 :
        로그인 실패
    
    */

})
.listen(8082,()=>{
    console.log("getUrlparamServer 실행")
})