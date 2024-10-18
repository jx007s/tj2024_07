const fs = require('fs')

fs.readFile('./aaa.txt',
    (e,d)=>{
    // error,  data
    // error : 정상일때 : null
    //         에러일때 : 에러 객체

    if(e){  //에러가 있으면 에러 내용 출력
        //console.log("e:",e)
        console.log("파일 에러")

    }else{   //에러가 없으면 파일내용 출력
        //console.log(d)
        console.log(d.toString())
    }


})