const db = require('mysql2')

// 데이터베이스 연결 객체 생성
const conn = db.createConnection({
    host:'localhost',
    user:'tj',
    password:'1234',
    database:'study_db'
})

//연결 시도
conn.connect((err)=>{
    if(err){
        console.log('연결실패 : ', err.message)
    }else{
        console.log('연결성공 : ', conn.threadId)
    }
})

//sql 실행
conn.query('select * from exam',(err, res)=>{
    if(err){
        console.log('sql 실패 : ', err.message)
    }else{
        console.log(res)
    }
})


//연결종료
conn.end()

