const express = require('express')
const app = express()
const path = require('path')


/*
id, 이름, 국어,영어,수학
1, 장동건, 77,72,75
... 5명


시험추가 (이름, 국어,영어,수학), 
시험수정(id, 이름, 국어,영어,수학), 
시험보기(id), 
시험삭제(id)
*/


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'))
})



app.get('/detail/:qqq',(req,res)=>{
//       /detail/3
//           qqq : 3

    console.log('/detail 실행')
    console.log(req.params)
   
    
    res.send('detail 도착')
})

app.delete('/',(req,res)=>{
    console.log('/delete 실행')
    console.log(req.query)
    
    res.send('delete 도착')
})

app.post('/',(req,res)=>{
    console.log('post 실행')
    req.on('data',ddd=>{
        console.log(ddd.toString())
    })
    res.send('post 도착')
})

app.put('/',(req,res)=>{
    console.log('put 실행')
    req.on('data',ddd=>{
        console.log(ddd.toString())
    })
    res.send('put 도착')
})

app.listen(3000,()=>{

    console.log('04_examrestful 서버 실행')
})