const express = require('express')
const app = express()
const db = require('mysql2')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer =  require('multer')
const path =  require('path')
const fs =  require('fs')



const upload = multer({
    storage : multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'fff/')
        },
        filename:(req,file,cb)=>{
            const ext = path.extname(file.originalname)
            let fName = path.basename(file.originalname,ext)+Date.now()+ext
            //한글인코딩
            let newFName = Buffer.from(fName,'latin1').toString('utf8')

            cb(null, newFName)
        }
    }),
    limits:{fileSize:5*1024*1024}
    
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//static 폴더 설정 --> 이미지 파일 프론트앤드에 서빙 
app.use('/bk/fff',express.static(path.join(__dirname,"fff")))

//frontend static 처리
app.use(express.static(path.join(__dirname,"qwer")))

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


app.get('/bk',(req,res)=>{

    console.log("백엔드 목록 접근")
    conn.query('select * from exam',(err, ret)=>{
        if(err){
            console.log('sql 실패 : ', err.message)
        }else{
            res.json(ret)
           
        }
    })
})


//detail 
app.get('/bk/detail/:id',(req,res)=>{

    console.log(req.params.id)
    

    conn.query('select * from exam where id = ?',
                [req.params.id],
    (err, ret)=>{
        if(err){
            console.log('sql 실패 : ', err.message)
        }else{
            res.json(ret[0])
        }
    })
})


// 쓰기
app.post('/bk/join',upload.single('upfile'),(req,res)=>{
   
    console.log(req.file)
 
    let sql = 'insert into exam (name,hakgi,pid,kor,eng,mat,upSystem, upOri, reg_date)'
        sql +=' values (?,?,?,?,?,?,?,?,sysdate())'
    
    //한글인코딩
    let newFName = Buffer.from(req.file.originalname,'latin1').toString('utf8')
           
    let data = [
        req.body.name,
        req.body.hakgi,
        req.body.pid,
        req.body.kor,
        req.body.eng,
        req.body.mat,
        req.file.filename,
        newFName
    ]   
    
    console.log(data)
    conn.query(sql,
        data,
    (err, ret)=>{
        if(err){
            console.log('sql 실패 : ', err.message)
        }else{
            res.json(ret)
        }
    }) 
})

app.delete('/bk/delete/:id',(req,res)=>{
    console.log('삭제 진입:'+req.params.id)
    console.log(req.body)

    //파일삭제
    //파일에 작성한 내용이 있다면
    if(req.body.delUPfile){
    //파일이 존재한다면
        fs.access('fff/'+req.body.delUPfile, fs.constants.F_OK,(err)=>{
            if(!err){
                fs.unlink('fff/'+req.body.delUPfile,(err)=>{
                    if(!err){
                        console.log(req.body.delUPfile+" 삭제")
                    }
                })
            }
        })
    }
    

    conn.query('delete from exam where id = ?',
        [req.params.id],
        (err, ret)=>{
        if(err){
            res.status(500).send(err)
        }else{
            //res.json(ret)
            res.send('삭제 성공:'+req.params.id)
        }
    })
 
   
})



app.put('/bk/modify',(req,res)=>{

    //console.log(req.body)
    let data = [
        req.body.name,
        req.body.hakgi,
        req.body.pid,
        req.body.kor,
        req.body.eng,
        req.body.mat,
        parseInt(req.body.id) 
    ]
    console.log(data)
    conn.query('update exam set name=?, hakgi = ?, pid=?, kor=?, eng=?,mat=? where id = ?',
               data,
    (err, ret)=>{
        if(err){
            console.log(err.stack)
            res.status(500).send(err)
        }else{
            //res.json(ret)
            res.send('수정성공')
        }
    })
})


//위에 거론하지 않은 라우팅 주소는 프론트앤드(qwer)의 index.html 로 접근
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"qwer","index.html"))
})


app.listen(5000,()=>{
    console.log("db 연결 서버 실행")
})