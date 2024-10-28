const express = require('express')
const asdf = express()
const path = require('path')

asdf.get('/',(req,res)=>{
    //res.send('/ get 이지롱')
    console.log('get 진입')
    res.sendFile(path.join(__dirname,'home.html'))
})

asdf.post('/',(req,res)=>{
    console.log('post 진입')
    res.send('/ post 이지롱')
})

asdf.put('/',(req,res)=>{
    console.log('put 진입')
    res.send('/ put 이지롱')
})
asdf.delete('/',(req,res)=>{
    console.log('delete 진입')
    req.on('data',ddd=>{
        console.log(ddd.toString())
    })
    res.send('/ delete 이지롱')
})

asdf.listen(3000, ()=>{
    console.log('restful 서버 실행')
})

/*
04_examRestful 폴더에 구현
exam.html 
학생  시험 정보가 들어있다 
서버에 필요기능을 요청하는 프로그램을 구현하세요

id, 이름, 국어,영어,수학
1, 장동건, 77,72,75
... 5명


시험추가 (이름, 국어,영어,수학), 
시험수정(id, 이름, 국어,영어,수학), 
시험보기(id), 
시험삭제(id)



*/





