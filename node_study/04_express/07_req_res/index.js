const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req, res)=>{
    
    //res.sendfile('home.html')
    res.sendFile(__dirname+"\\home.html")
})

app.get('/info/:id', (req, res)=>{
    console.log('/info/:id get 실행-------------')
    console.log(`req.params>>`)
    console.log(req.params)
    console.log(`req.query>>`)
    console.log(req.query)
    console.log(`req.ip>>${req.ip}`)
    console.log("content-type : ",req.get("content-type"))

    res.send('너에게 나를 보낸다')
})



app.post('/info/:id', (req, res)=>{
    console.log('/info/:id post 실행-------------')
    console.log(`req.params>>`)
    console.log(req.params)
    console.log(`req.query>>`)
    console.log(req.query)
    console.log(`req.ip>>${req.ip}`)
    console.log(`req.body>>`)
    console.log(req.body)
    console.log("content-type : ",req.get("content-type"))

    res.send('너에게 나를 보낸다')
})

app.get('/jjson', (req, res)=>{
    console.log('/jjson 실행-------------')
    
    res.json({
        id : 'aaa',
        age : 34,
        arr : [11,22,33,44]
    })
})


app.get('/red', (req, res)=>{
    console.log('/red 실행-------------')
    
    res.redirect('/notice')
})

app.get('/stat', (req, res)=>{
    console.log('/stat 실행-------------')
    
    res.status(404).send('이건페이지가 없는거로 보여')
})
app.get('/head', (req, res)=>{
    console.log('/head 실행-------------')
    
    res.setHeader("Content-Type",'image/jpeg').send('head 페이지이지롱')
})

app.get('/enddd', (req, res)=>{
    console.log('/enddd 실행-------------')
    
    res.end('end 지롱')
    /*
    json()
    redirect()
    send()
    메소드 사용 후 자동으로 응답 종료됨

    end()  --> 응답 종료 명령이긴 하나 유의미 하지 않음
    
    */
})

app.get('/notice', (req, res)=>{
    console.log('/notice 실행-------------')
    
    res.send('notice 이지롱')
})


app.listen(3000,()=>{
    console.log("req_res 서버 실행")
})