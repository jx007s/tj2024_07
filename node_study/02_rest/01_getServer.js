const http = require('http')

http.createServer(async(req,res)=>{

    /*
     /  => home,  맞지 않는 주소
     info 
     prod 
     center

     ---
     향수1
     오시는길
     1:1
     --------
     사무용책상
     ....
     ---------
     백제
     고구려
     가야
     --------------

     port : 8083
    
    */

     let ttt = '홈페이지 입니다'

    //console.log(req.url)
    if(req.url == '/info'){
        ttt = '회사소개입니다.'
    }else if(req.url == '/prod'){
        ttt = '제품입니다.'
    }else if(req.url == '/center'){
        ttt = '고객센터입니다.'
    }

    res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'})
    res.end(ttt)
})
.listen(8082,()=>{
    console.log('getServer 실행')
})