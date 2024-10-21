const fs = require('fs')

const ws = fs.createWriteStream('hhh.txt')

ws.on('finish', ()=>{
    console.log('파일쓰기 완료')
})

ws.write('아기상어\n')
ws.write('엄마상어\n')
ws.write('아빠상어\n')
ws.end()

/*
북산.txt -> 남산.txt 저장하세요
stream 으로 처리할 것


*/



const arr = []
const rs = fs.createReadStream('buksan.txt',{highWaterMark:1024})

rs.on('data',(chunck)=>{
    arr.push(chunck)
})

rs.on('end',()=>{
    console.log('북산 읽기 종료')
    
    let ttt = Buffer.concat(arr).toString()
    console.log(ttt) 

    const ws2 = fs.createWriteStream('namsan.txt')

    ws2.write(ttt)
    ws2.end()
})
