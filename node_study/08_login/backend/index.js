const express = require('express')
const conn = require('./ddbb')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/bk/",(req,res)=>{
    console.log("/ 진입성공")
    res.send("/ 진입성공")
})


app.get("/bk/memberOne/:pid/:pw", async (req,res)=>{
    console.log("/memberOne 진입성공")

    try {
        const {pid, pw} = req.params

        const sql = "select pid, pname from member where pid = ? and pw = ?"
        const param = [pid,pw]
        const [rows] = await conn.execute(sql,param)
        console.log(rows);
        res.json(rows[0])
    } catch (error) {
        res.status(500).send("로그인 서버 오류")
    }
    
})


app.post("/bk/memberOne", async (req,res)=>{
    console.log("/memberOne 진입성공")

    try {
        const {pid, pw} = req.body

        const sql = "select pid, pname from member where pid = ? and pw = ?"
        const param = [pid,pw]
        const [rows] = await conn.execute(sql,param)
        console.log(rows);
        res.json(rows[0])
    } catch (error) {
        res.status(500).send("로그인 서버 오류")
    }
    
})



app.listen(5000,()=>{
    console.log("db 연결 서버 실행")
})