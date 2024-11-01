const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//파일 업로드 설정 객체
const upload = multer({
   storage : multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, 'qqq/')   //파일 저장될 경로
    },
    filename :  (req, file, cb)=>{
        const ext = path.extname(file.originalname)   //파일 확장자명


        console.log("ext : ", ext)

        if(['.png','.jpg','.gif'].includes(ext)){
            cb(null, path.basename(file.originalname, ext)+Date.now()+ext)  //저장되는 파일 이름 설정하기
        }else{
            //res.send('파일이 안맞아')
            cb(new Error('확장자가 안맞아'))
        }

        

    }
   }),
   limits :{fileSize : 5 * 1024 * 1024}   //파일 최대 크기 5mb
})




app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

// upload.single('ff')  파일 업로드 처리
app.post('/single', upload.single('ff'), (req,res)=>{
    console.log("/single--------------- ")

    console.log("pname : ",req.body.pname)
    console.log("ff : ",req.file)
    res.send('single 파일 업로드 완료')
})


//파일 업로드를 하지 않겠다 - 파일 업로드시 에러-*
app.post('/none', upload.none(), (req,res)=>{
    console.log("/none--------------- ")

    console.log("pname : ",req.body.pname)
    console.log("ff : ",req.file)
    res.send('none post 완료')
})


app.post('/array', upload.array('ff'), (req,res)=>{
    console.log("/array--------------- ")

    console.log("pname : ",req.body.pname)
    console.log("ff : ",req.files)
    res.send('array 파일 업로드 완료')
})


//파일 갯수 제한
app.post('/array2', upload.array('ff', 3), (req,res)=>{
    console.log("/array2--------------- ")

    console.log("pname : ",req.body.pname)
    console.log("ff : ",req.files)
    res.send('array2 파일 업로드 완료')
})

let arr = [
    {name:'ff1', maxCount:1},
    {name:'ff2'},
    {name:'ff3', maxCount:3},
    {name:'ff4'}
]

//fields
app.post('/fields', upload.fields(arr), (req,res)=>{
    console.log("/fields--------------- ")

    console.log("pname : ",req.body.pname)
    console.log("ff : ",req.files)
    res.send('fields 파일 업로드 완료')
})



app.use((err,req,res,next)=>{
    if(err){
        return res.status(500).send(err.message)
    }
})


app.listen(5000,()=>{
    console.log('multer 서버 실행')
})