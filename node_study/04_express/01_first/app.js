const express = require('express')
const qwer = express()
const path = require('path')

// restful 의 method = get으로 접근시 호출되는 함수 호출
// 매개변수 1 : 매핑url주소
// 매개변수 2 : callback 함수 --> 서버에 요청되었을때 작업내용
qwer.get('/',(req, res)=>{

    res.send('/ 에 왔지롱')
})

qwer.get('/info',(req, res)=>{

    //res.send('/info 에 왔지롱')
    res.sendFile('D:\\public\\tj\\2024_07\\node_study\\04_express\\01_first\\aaa.html')
})

qwer.get('/center',(req, res)=>{

    console.log('__dirname : ',__dirname)
    //res.send('/center 에 왔지롱')
    res.sendFile(__dirname+'\\bbb.html')
})


qwer.get('/prod',(req, res)=>{

    console.log(path.join(__dirname,'/ccc.html'))
    //res.send('/prod 에 왔지롱')
    res.sendFile(path.join(__dirname,'/ccc.html'))
})


qwer.listen(3000, ()=>{
    console.log('express first 3000번 포트 실행')
})

// 02_sec 폴더 생성후 express, nodemon 설치
// npm 초기화
// port 3003
// /,  /member   , /order  로 접근 가능토록 하세요
//  /member -> mmm.html 파일 내용으로 응답

// npm init -y