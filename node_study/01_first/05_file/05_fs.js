const fs = require('fs')

//디렉토리 생성  --> 존재하면 에러발생
// fs.mkdir('qwer',(err)=>{
//     if(err){
//         throw err;
//     }
// })


// 빈 파일 생성
/*
w : 쓰기
a : 추가로 쓰기
r : 읽기


*/
fs.open('iii.txt','w',(err,fd)=>{
    if(err){
        throw err;
    }

    //파일에 내용 쓰기
    fs.write(fd, '나는 무너 꿈을 꾸는 무너',(err)=>{
        if(err){
            throw err;
        }
        
        console.log("파일에 내용 작성")

    })

    // fd : 파일 접근자 ('iii.txt') 로 파일 닫기
    fs.close(fd, (err)=>{
        if(err){
            throw err;
        }
        console.log("파일 닫기")

    })
})

     //    원본          ,   변경
// fs.rename('neungnam.txt' , 'new_neungnam.txt',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("파일명 변경")
// })


// 파일이동
// fs.rename('fff.txt' , 'qwer/wsx.txt',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("파일이동")
// })

// //파일 삭제
// fs.unlink('bbb.txt',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("파일삭제")
// })



//디렉토리 삭제  -- 비어있는 디렉토리가 아닌 경우 에러
// fs.rmdir('qwer',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("디렉토리 삭제")
// })

//디렉토리 삭제
fs.rmdir('asdf',(err)=>{
    if(err){
        throw err;
    }
    console.log("디렉토리 삭제")
})
