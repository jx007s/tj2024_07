const express = require('express')
const nunjucks = require('nunjucks')
const app = express()


//nunjucks 설정
nunjucks.configure('views',{
    autoescape:true,
    express : app
})


app.get('/',(req,res)=>{
    res.send('/ 이지롱')
})

app.get('/info',(req,res)=>{
    let data = {
        title :'내가 제목이다',
        arr:[11,22,33,44],
        age:45
    }
    res.render('info.html',data)
})

app.get('/include',(req,res)=>{
    let data = {
        title :'내가 제목이다',
        arr:[11,22,33,44],
        age:45
    }
    res.render('include.html',data)
})

app.listen(5000,()=>{
    console.log('nunjucks 서버 실행')
})