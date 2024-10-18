const fs = require('fs')

let ttt = '장수풍뎅이와 사슴벌레'

fs.appendFile(
    './ccc.txt',   //파일명
    ttt,            //작성내용
    (err)=>{           //callback

        if(err){
            console.log(err)
        }
    }
)