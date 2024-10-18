const fs = require('fs').promises

fs.writeFile('./ddd.txt','티라노 사우루스 렉스')
.then(()=>{
    
})
.catch((err)=>{
    console.log(err.message)
})

/////////////////////////////////////////////////

fs.writeFile('./eee.txt','프테라노돈')
.then(()=>{
    return fs.readFile('./aaa.txt')
})
.then((data)=>{
    console.log(data.toString())
})
.catch((err)=>{
    console.log(err.message)
})

/*
 fff.txt 파일에 누적하여 
 '케로케로케로 케로로 중사' 를 작성하고
 작성후
 ggg.txt 파일에 
 '티니티니 티니핑' 을 덮어쓰기로 작성하고
 작성 후
 ccc.txt 파일 내용을 출력하세요
*/