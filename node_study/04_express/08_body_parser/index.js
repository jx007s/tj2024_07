const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/mem',(req,res)=>{
    res.sendFile(path.join(__dirname,'memForm.html'))
})


app.post('/mem',(req,res)=>{
    console.log(req.body)
    //res.send('mem post 여')
    res.json(req.body)
})


app.get('/mem2',(req,res)=>{
    res.sendFile(path.join(__dirname,'memForm2.html'))
})

let title = "pname,age,job".split(",")
app.post('/mem2',(req,res)=>{
    console.log(req.body.pname)


    let arr = []
    for(i in req.body.pname){
       // console.log(i, req.body["pname"][i], req.body["age"][i], req.body["job"][i])

       let mm = {}
       for (const tt of title) {
        //console.log(i, req.body[tt][i])
            mm[tt] = req.body[tt][i]
       }
       //console.log(mm)
       arr.push(mm)
    }
    console.log(arr)
    //res.send('mem post 여')
    //res.json(req.body)
    res.json(arr)
})




app.get('/exam',(req,res)=>{
    res.sendFile(path.join(__dirname,'examForm.html'))
})

let examTitle = "kor,eng,mat".split(",")
app.post('/exam',(req,res)=>{

    let ret = []
    for(i in req.body.pname){
        let st = {pname:req.body.pname[i]}
        st.jum = []
        for (const tt of examTitle) {
            st.jum.push(parseInt(req.body[tt][i]))
        }

        st.tot = 0
        for (const j of st.jum) {
            st.tot += j
        }
        st.avg = st.tot/ st.jum.length
        //console.log(st)
        ret.push(st)
    }

    console.log(ret)
    res.json(ret)
})



app.listen(3000,()=>{
    console.log('body-parser 서버 실행')
})
/*
5명의 학생
이름 국어 영어 수학  ==>  이름 국어 영어 수학 총점 평균




*/
