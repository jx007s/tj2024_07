const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fs = require('fs').promises
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

let mems = {
    'aaa' : {pid:'aaa', pw:'1111',pname:'장동건'},
    'bbb' : {pid:'bbb', pw:'2222',pname:'장서건'},
    'ccc' : {pid:'ccc', pw:'3333',pname:'장남건'},
    'ddd' : {pid:'ddd', pw:'4444',pname:'장중건'},
    'eee' : {pid:'eee', pw:'5555',pname:'북두신건'}
}


app.get('/',async (req,res)=>{


    let pname = req.cookies.pname


    if(pname){
        let ttt = await fs.readFile('loginComplete.html') 
        ttt = ttt.toString().replaceAll('{{pid}}', pname)
        //res.send(`로그인 성공 : ${pid}`)
        res.send(ttt)
    }else{
        res.sendFile(__dirname+`/loginForm.html`)
    }

    
})

app.post('/', async (req,res)=>{
    //console.log(req.body)
    let pid = req.body.pid
    let pw =  req.body.pw
    let ttt = await fs.readFile('alert.html')
    
    let msg = '로그인 실패'
    let title = '로그인시도'

    if(pid in mems  && mems[pid].pw == pw){
        msg = `${mems[pid].pname} 로그인 성공`
        res.cookie('pid', pid)
        res.cookie('pname', mems[pid].pname)
    }


    ttt = ttt.toString().replaceAll('{{msg}}', msg)
    .replaceAll('{{title}}', title)

    res.send(ttt)
})




app.get('/logout',async (req,res)=>{

    let pname = req.cookies.pname

    res.clearCookie('pid')
    res.clearCookie('pname')

    let ttt = await fs.readFile('alert.html')
    
    let msg = `${pname} 님 로그아웃 되었습니다.`
    let title = '로그아웃'

    ttt = ttt.toString().replaceAll('{{msg}}', msg)
    .replaceAll('{{title}}', title)
    
    res.send(ttt)
})

app.listen(5000,()=>{
    console.log("쿠키 로그인 서버 실행")
})