const express = require('express')
const app = express()
const db = require('mysql2')
const bodyParser = require('body-parser')
const nunjucks =  require('nunjucks')
const multer =  require('multer')
const path =  require('path')

nunjucks.configure('views',{
    autoescape : true,
    express:app
})

const upload = multer({
    storage : multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'fff/')
        },
        filename:(req,file,cb)=>{
            const ext = path.extname(file.originalname)
            cb(null, path.basename(file.originalname,ext)+Date.now()+ext)
        }
    }),
    limits:{fileSize:5*1024*1024}
    
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// 데이터베이스 연결 객체 생성
const conn = db.createConnection({
    host:'localhost',
    user:'tj',
    password:'1234',
    database:'study_db'
})


//연결 시도
conn.connect((err)=>{
    if(err){
        console.log('연결실패 : ', err.message)
    }else{
        console.log('연결성공 : ', conn.threadId)
    }
})


app.get('/',(req,res)=>{
    conn.query('select * from exam',(err, ret)=>{
        if(err){
            console.log('sql 실패 : ', err.message)
        }else{
            //res.json(ret)
            res.render('home.html',{exam: ret})
        }
    })
})

app.get('/detail/:id',(req,res)=>{

    console.log(req.params.id)
    

    conn.query('select * from exam where id = ?',
                [req.params.id],
    (err, ret)=>{
        if(err){
            console.log('sql 실패 : ', err.message)
        }else{
            //res.json(ret)
            res.render('detail.html',{st: ret[0]})
        }
    })
})


app.get('/join',(req,res)=>{

    res.sendFile(__dirname+'/joinForm.html')
   
})

app.post('/join',upload.single('upfile'),(req,res)=>{

    res.sendFile(__dirname+'/joinForm.html')
   
})
/*
21_odbc_tran
*/


app.listen(5000,()=>{
    console.log("db 연결 서버 실행")
})