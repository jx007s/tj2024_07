const express = require("express")
const app = express()
const nunjucks = require('nunjucks')

app.set('view engine','pug')
app.set('views', __dirname+'/views')

nunjucks.configure('views', {
    autoescape:true,
    express:app
})

const {router:studRR, nowSt} = require('./stud')

const exam = require('./exam')
const examRR = exam(nowSt)

app.use('/stud', studRR)
app.use('/exam', examRR)

app.get('/now',(req,res)=>{
    res.json(nowSt)
})

app.listen(5000,()=>{
    console.log('router Exam 서버 실행')
})