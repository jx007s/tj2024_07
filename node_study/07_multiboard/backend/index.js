const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const multer =  require('multer')
const path =  require('path')




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


// 각 라우터 연결
const examRouter = require('./controller/exam.js')
app.use('/bk/', examRouter(upload))

const noticeRouter = require('./controller/notice.js')
app.use('/bk/notice/', noticeRouter(upload))




//위에 거론하지 않은 라우팅 주소는 프론트앤드(qwer)의 index.html 로 접근
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"qwer","index.html"))
})


app.listen(5000,()=>{
    console.log("db 연결 서버 실행")
})