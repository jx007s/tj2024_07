const express = require('express')
const app = express()
const path =  require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/info',(req,res)=>{
    console.log('/info 진입')
    res.sendFile(__dirname+'/views/info.html')
})


// 다수 url의 라우팅
app.get(['/prod','/gall'],(req,res)=>{
    console.log('/prod or /gall 진입 : ', req.path)
    res.sendFile(__dirname+'/views/'+req.path+'.html')
})

app.get('/center/:id/:pname',(req,res)=>{
    console.log('/center 진입 : ', req.path)
    console.log('/center param : ', req.params.id,req.params.pname)
    res.sendFile(__dirname+'/views/center.html')
})

app.listen(3000,()=>{
    console.log("static member 서버 실행")
})


/*
11_static_home  폴더를 구축하세요

이미지 폴더
// 꽃 , 자동차

카테고리
봄/여름/가을/겨울

봄 - 꽃, 자동차




*/
