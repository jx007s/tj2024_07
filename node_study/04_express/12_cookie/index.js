const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get('/make',(req,res)=>{

    /*

    쿠키 생성 --> 클라이언트 브라우저에 전달
    name: string, 
    val: string, 
    options: CookieOptions
    

    Options:

    maxAge max-age in milliseconds, converted to expires
    signed sign the cookie
    path defaults to "/"
    Examples:

// "Remember Me" for 15 minutes 
res.cookie('rememberme', '1', 
{ expires: new Date(Date.now() + 900000), 
 언제까지 : 기간
 httpOnly: true });

// save as above 
res.cookie(
'rememberme',   키 
'1',            값
{ maxAge: 900000, httpOnly: true, path:'/' }  옵션
   언제까지(밀리초),       보안정책     사용가능경로
    */
    res.cookie('pname','장동건')
    res.cookie('pid','aaa')

    res.send("쿠키 생성했습니다.")
})


app.get('/view',(req,res)=>{

    console.log(req.cookies)
    let pname = req.cookies.pname
    let pid = req.cookies.pid

    //res.send(`쿠키 보기 : `)
    res.send(`쿠키 보기 : ${pname} , ${pid}`)
})

app.get('/modify',(req,res)=>{
                                //5초
    res.cookie('pname','장서건',{maxAge:5000})
    res.cookie('pid','ccc')

    res.send("쿠키 수정했습니다.")
})


app.get('/delete',(req,res)=>{
 
    res.clearCookie('pid')

    res.send("쿠키 삭제했습니다.")
})

app.listen(5000,()=>{
    console.log("cookie 서버 실행")
})