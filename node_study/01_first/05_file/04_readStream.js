const fs = require('fs')

const arr = []  // 버퍼로 가져온 데이터를 담을 배열

//highWaterMark : buffer 크기
const rs = fs.createReadStream('qqq.txt',{highWaterMark:16})

//rs.on : 이벤트 핸들러
// 'data' : 버퍼로 담아 스트림에 옮길때 마다 실행
rs.on('data',(chunk)=>{
    console.log(chunk,chunk.length)
    //chunk -- 버퍼에 담아온 데이터 (데이터 조각)
    //chunk.length -- 받아온 데이터 크기
    console.log(chunk.toString())

    arr.push(chunk)  //버퍼를 배열에 추가
    //console.log(arr.toString())
    
})

// 'end' : 스트림 종료시 실행
rs.on('end',()=>{
    console.log('읽기 스트림 종료')

    //종료 후 데이터 확인
    //console.log(arr.toString())
    
    //배열원소를 하나로 연결하기
    let ddd = Buffer.concat(arr)
    console.log(ddd)

    //문자열로 변형 출력
    console.log(ddd.toString())
})

// 'error' : 에러발생시 실행
rs.on('error',(err)=>{
    console.log('에러 : ',err)
})

console.log("끝")

/*
파일 2개의 내용을 가져와 1개의 파일로 합쳐 출력하세요
스트림 사용

*/