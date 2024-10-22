const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{

    let head = {'content-type' :'text/html; charset=UTF-8'}
    let ttt = '홈페이지 입니다'

    if(req.url == '/car'){
        ttt = fs.readFileSync('D:/public/tj/2024_07/node_study/fff/car.jpg')
        head = {'content-type' :'image/jpeg'}
        

    }else if(req.url == '/prod'){
        ttt = fs.readFileSync('product.html')


     /// qwer.css   
    }else if(req.url == '/qwer'){
        ttt = fs.readFileSync('qwer.css')
        head = {'content-type' :'text/css'}


        //    /fff/son_2.jpg --> fff/son_2.jpg
    }else if(req.url.startsWith('/fff/') || req.url.startsWith('/qqq/')){
        ttt = fs.readFileSync(req.url.substring(1))
        head = {'content-type' :'image/jpeg'}
       
    }
        
    res.writeHead(200, head )
    res.end(ttt)
    
    
})
.listen(8082,()=>{
    console.log('이미지서버 실행')
})