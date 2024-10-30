const express = require('express')
const app = express()
const path =  require('path')
const fs =  require('fs').promises



app.get('/',(req,res)=>{
    console.log('/진입')
    res.sendFile(__dirname+'/views/index.html')
    
})
app.get('/season/:ss', async (req,res)=>{
    let ss = req.params.ss
    console.log('/season 진입 : ', ss)
    //res.sendFile(__dirname+'/views/season.html')


    let ttt = await fs.readFile(__dirname+'/views/season.html')
    ttt = ttt.toString().replaceAll('{{ss}}',ss )
    res.setHeader("Content-type","text/html; charset=utf-8").send(ttt)
})

app.get('/aaa.html',(req,res)=>{
    console.log('/aaa.html 진입')
    res.send('aaa.html 입니다.')
    
})


app.use(express.static(path.join(__dirname,'cars')))
app.use(express.static(path.join(__dirname,'flowers')))

app.use('/public',express.static(path.join(__dirname,'cars')))
app.use('/public',express.static(path.join(__dirname,'flowers')))

app.listen(3000,()=>{
    console.log("static member 서버 실행")
})