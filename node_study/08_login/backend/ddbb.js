const db = require('mysql2')

// 데이터베이스 연결 객체 생성
const conn = db.createPool({
    host:'localhost',
    user:'tjrr',
    password:'1234',
    database:'react_db'
})

// 서버 종료시 DB 연결 종료
process.on('SIGINT',()=>{
    conn.end((err)=>{
        if(err){
            console.log('종료 실패 : ', err.message)
        }else{
            console.log('종료 성공 : ', conn.threadId)
        }

        process.exit(0)  //프로세스 정상 종료
    })
})

// 커넥션 풀을 promise 방식으로 리턴
module.exports = conn.promise()

