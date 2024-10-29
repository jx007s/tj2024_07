const express = require('express')
const app = express()


/*

/
    info
    prod

/myPage
    order
    addr

/admin
    mem
    sale


    info - 회사소개   
    prod - 제품
    order - 주문내역
    addr - 주소
    mem - 회원관리
    sale - 판매내역
    
    /myPage --> 시작하는 경우 상단 : 회원님 안녕하세요
    /admin --> 시작하는 경우 상단 : 관리자님 근무시간입니다.

*/

let ttt = ""

app.use((req,res, next)=>{
    ttt = ""
    next()
})

app.use('/myPage/',(req,res, next)=>{
    ttt = "회원님 안녕하세요<br/>"
    next()
})
app.use('/admin',(req,res, next)=>{
    ttt = "관리자님 근무시간입니다.<br/>"
    next()
})

app.get('/info',(req,res)=>{

    ttt+="회사소개"
    res.send(ttt)
})
app.get('/prod',(req,res)=>{

    ttt+="제품"
    res.send(ttt)
})

app.get('/myPage/order',(req,res)=>{

    ttt+="주문내역"
    res.send(ttt)
})
app.get('/myPage/addr',(req,res)=>{

    ttt+="주소"
    res.send(ttt)
})

app.get('/admin/mem',(req,res)=>{

    ttt+="회원관리"
    res.send(ttt)
})

app.get('/admin/sale',(req,res)=>{

    ttt+="판매내역"
    res.send(ttt)
})

app.listen(3000,()=>{
    console.log('middleMenu 서버 실행')
})