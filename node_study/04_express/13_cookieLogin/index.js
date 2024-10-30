const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fs = require('fs').promises
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',async (req,res)=>{


    let pid = req.cookies.pid


    if(pid){
        let ttt = await fs.readFile('loginComplete.html') 
        ttt = ttt.toString().replaceAll('{{pid}}', pid)
        //res.send(`로그인 성공 : ${pid}`)
        res.send(ttt)
    }else{
        res.sendFile(__dirname+`/loginForm.html`)
    }

    
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.cookie('pid', req.body.pid)
    let ttt = `<script>alert("${req.body.pid} 님 로그인 되었습니다.");`
     ttt += ' location.href="/" </script>'
    
    res.send(ttt)
})




app.get('/logout',(req,res)=>{

    let pid = req.cookies.pid

    res.clearCookie('pid')

    let ttt = `<script>alert("${pid} 님 로그아웃 되었습니다.");`
     ttt += ' location.href="/" </script>'
    
    res.send(ttt)
})

app.listen(5000,()=>{
    console.log("쿠키 로그인 서버 실행")
})