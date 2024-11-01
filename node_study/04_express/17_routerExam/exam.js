const express = require('express')
const router = express.Router()

const exams = [
    {sid:'aaa', jum:[75,76,78]},
    {sid:'aaa', jum:[55,56,58]},
    {sid:'bbb', jum:[65,66,68]},
    {sid:'ccc', jum:[95,96,98]},
    {sid:'bbb', jum:[85,86,88]},
    {sid:'ddd', jum:[45,46,48]},
    {sid:'eee', jum:[35,36,38]},
    {sid:'ccc', jum:[25,26,28]},
    {sid:'bbb', jum:[15,16,18]},
    {sid:'fff', jum:[75,86,98]}
]

function createExamRouter(nowSt){

    router.get('/',(req,res)=>{
        //res.send('/exam 이지롱')
        res.json(exams)
        console.log(nowSt)
    })

    router.get('/me',(req,res)=>{
        let nowExam = []

        if(nowSt.me!=null){
            for (const ex of exams) {
                if(nowSt.me == ex.sid){
                    let dupEx = {sid:ex.sid, jum:ex.jum}

                    dupEx.tot = 0
                    for (const j of dupEx.jum) {
                        dupEx.tot += j
                    }
                    dupEx.avg = dupEx.tot / dupEx.jum.length
                    nowExam.push(dupEx)
                }
            }
            res.json(nowExam)
        }else{
            res.send('현재 선택한 학생이 없습니다.')
        }
    })


    return router
}


module.exports = createExamRouter