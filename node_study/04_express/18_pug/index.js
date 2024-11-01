const express = require('express')

const app = express()

// 뷰 엔진 -> pug 로 설정
app.set('view engine', 'pug')
app.set('views', __dirname+'/views')

app.get('/',(req,res)=>{
    res.send('/ 이지롱')
})

app.get('/hhh',(req,res)=>{
    let ddd = {
        aa : '내가 제목이다',
        arr : [11,22,33,44],
        age : 23
    }

    res.render('home',ddd)
})

app.get('/calc',(req,res)=>{
    res.render('calc')
})
app.get('/if',(req,res)=>{

    res.render('if',{aa:90, pid:'qwer'})
})

app.get('/for',(req,res)=>{

    res.render('for', {qqq:['아기상어','엄마상어','아빠상어']})
})

app.get('/include',(req,res)=>{

    let ddd = {
        pid:'aaa',
        arr:[123,456,789],
        age:34
    }
    res.render('include',{data:ddd})
})

app.listen(5000,()=>{
    console.log('pug 서버 실행')
})