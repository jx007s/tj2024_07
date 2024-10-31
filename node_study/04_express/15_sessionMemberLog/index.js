const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const fs = require('fs').promises
const app = express()

app.use(session({
    secret:'1234',
    resave : false,
    saveUninitialized : false, 
    cookie:{
        secure : false ,   
        httpOnly : false
    }
}))
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


    if(req.session.mem){

        let nowMem = req.session.mem
        let ttt = await fs.readFile('loginComplete.html') 
        ttt = ttt.toString().replaceAll('{{pid}}', nowMem.pname)
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
        req.session.mem = mems[pid]
    }


    ttt = ttt.toString().replaceAll('{{msg}}', msg)
    .replaceAll('{{title}}', title)

    res.send(ttt)
})




app.get('/logout',(req,res)=>{

    let nowMem = req.session.mem

    req.session.regenerate(async err=>{
        let ttt = await fs.readFile('alert.html')
    
        let msg = `${nowMem.pname} 님 로그아웃 되었습니다.`
        let title = '로그아웃'
    
        ttt = ttt.toString().replaceAll('{{msg}}', msg)
        .replaceAll('{{title}}', title)
        
        res.send(ttt)
    })

    
})

app.listen(5000,()=>{
    console.log("session 로그인 서버 실행")
})