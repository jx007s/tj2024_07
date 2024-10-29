const express = require('express')
const app = express()


// routing 주소가 중첩될 경우 먼저 설정한 함수가 실행
app.get('/zxcv/on.png',(req,res)=>{
    res.sendFile(__dirname+"/ccc/bg1.jpg")
})



app.use('/zxcv',express.static(__dirname+"/ddd"))
/*
/zxcv 로 시작하는 url 은 static 접근한다
mount 되는 위치는 __dirname+"/aaa" 폴더이다

ex)  url : /zxcv/child_1.jpg   -->  __dirname+/aaa/child_1.jpg
*/
app.use('/zxcv',express.static(__dirname+"/aaa"))


/*
/시작하는 url 은 static 접근한다
mount 되는 위치는 __dirname+"/bbb" 폴더이다

ex)  url : /car.jpg   -->  __dirname+/bbb/car.jpg
*/

app.use(express.static(__dirname+"/bbb"))

app.get('/',(req,res)=>{
    res.send("/ 입니다.")
})

app.get('/ccc/son_3.jpg',(req,res)=>{
    res.sendFile(__dirname+"/ccc/son_3.jpg")
})

app.get('/rrr',(req,res)=>{
    res.sendFile(__dirname+"/rrr.html")
})


app.get('/qqq/yyy',(req,res)=>{
    res.sendFile(__dirname+"/rrr.html")
})

app.get('/rrr2',(req,res)=>{
    res.sendFile(__dirname+"/rrr2.html")
})


app.get('/qqq/yyy2',(req,res)=>{
    res.sendFile(__dirname+"/rrr2.html")
})
app.get('/qqq/yyy3',(req,res)=>{
    res.sendFile(__dirname+"/rrr3.html")
})



app.listen(3000,()=>{
    console.log("static 서버 실행")
})