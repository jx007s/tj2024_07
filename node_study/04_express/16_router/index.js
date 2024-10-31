const express = require('express')
const app = express()

let arr = [11,22,33,44]
let abcd = [999,888,777]
let no = 1357

const homeRR = require('./home')
const noticeRR = require('./notice')
//const prodRR = require('./prod')
const prod = require('./prod')
const gall = require('./gall')
const order = require('./order')

const {router:infoRR, ddd} = require('./info')

const orderRR = order(ddd)


// 라우터를 리턴하는 함수를 가져옴 : 매개변수를 받게 함
// 매개변수로 arr을 가져옴
const prodRR = prod(arr, no)
const gallRR = gall(arr)



app.use('/', homeRR)
app.use('/notice', noticeRR)
app.use('/prod', prodRR)
app.use('/gall', gallRR)
app.use('/info', infoRR)
app.use('/order', orderRR)

app.get('/arr',(req,res)=>{

    ddd[1].pname = '한가인'
    console.log(ddd)
    res.send(`/arr index.js 에서 실행 ${abcd}  @@@  ${arr}  @@@  ${no}  @@@  ${ddd}`)
})

app.listen(5000,()=>{
    console.log('router 서버 실행')
})