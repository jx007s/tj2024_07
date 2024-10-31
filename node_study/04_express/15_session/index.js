const express = require('express')
const session = require('express-session')
const app = express()


//session 사용 --> sid 를 cookie로 전송
app.use(session({
    secret:'1234',   //인증키 설정 (필수) --> 세션 무결성, 세션데이터 저장시 사용
    //P@$$\0rd
    //1q2w3e4r
    resave : false, //세션 수정하지않아도 새로 저장 : true
                    //세션 변경시에만 저장 : false
                    // 생략시 true
    saveUninitialized : false, //초기화되지않은 세션 저장 
                               //생략시 true 
    cookie:{
        secure : false ,   //true - https 에서만 가능, 
                            //false - http , https 모두 가능 (기본값)
        httpOnly : false,    //javascript로 접근 유무 - true 접근불가
                           //                        false 접근가능(기본값)
       // maxAge : 5 * 1000
    },
    //name : 'awsx'    //세션 쿠키 이름 변경
}))

app.get('/',(req, res)=>{

    console.log(`sid : ${req.sessionID}`)
    //s%3Aom8yw3hAZDhTsVZL_TLLPFxvTdcWkWSJ.6xhnywDIpzZvCzG8pmAukdC6P2rPrtzaeCbBDFOcTZM
    //    om8yw3hAZDhTsVZL_TLLPFxvTdcWkWSJ


    res.sendFile(__dirname+"/index.html")
})


app.get('/make',(req, res)=>{

    req.session.pid = 'aaa'
    req.session.pname = '장동건'
    req.session.jum = [11,22,33]
    req.session.age = 56
    console.log(`make  :`)
    
    res.send("세션 생성")
})

app.get('/view',(req, res)=>{

    // req.session.pid = 'aaa'
    // req.session.pname = '장동건'
    // req.session.jum = [11,22,33]
    // req.session.age = 56
     console.log(req.session)
    
    res.send(`세션 보기 : ${req.session.pid}, ${req.session.pname}, ${req.session.jum}, ${req.session.age}`)
})


app.get('/modify',(req, res)=>{

    req.session.pname = '이효리'
    req.session.jum = [77,88,99,12]
    
    res.send("세션 수정")
})


app.get('/deleteOne',(req, res)=>{

    delete req.session.jum
    
    
    res.send("세션 삭제 1")
})

app.get('/deleteAll',(req, res)=>{


    // 세션의 내용만 삭제함 (sid 변경하지 않음)
    req.session.destroy(err=>{
        if(err){
            console.log('삭제시 에러발생')
        }

        //수동으로 쿠키의 세션id 삭제
        res.clearCookie('connect.sid')
        res.send("세션 삭제 전체")
    })
    
})


app.get('/regen',(req, res)=>{

    req.session.regenerate(err=>{
        if(err){
            console.log('초기화시 에러발생')
        }
        res.send("세션 초기화")
    })
    
})


app.listen(5000,()=>{
    console.log('session 서버 실행')
})