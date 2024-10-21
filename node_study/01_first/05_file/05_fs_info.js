const fs = require('fs')
let fName = 'qwer/ccc.txt'
fs.access(fName, fs.constants.W_OK, (err)=>{

    if(err){
        console.log('쓰기 불가')
    }else{
        console.log('쓰기가능')
    }
})

fs.access(fName, fs.constants.F_OK, (err)=>{

    if(err){
        console.log('파일 없음')
    }else{
        console.log('파일 존재')
    }
})

fs.access(fName, fs.constants.R_OK, (err)=>{

    if(err){
        console.log('읽기 불가')
    }else{
        console.log('읽기 가능')
    }
})

fs.access(fName, fs.constants.X_OK, (err)=>{

    if(err){
        console.log('실행 불가')
    }else{
        console.log('실행 가능')
    }
    console.log('-----------------------')
})

///////////////////////////////////


fName = 'qwer/ccc.txt'
fs.access(fName, 
    fs.constants.F_OK | fs.constants.W_OK | fs.constants.R_OK | fs.constants.X_OK , 
    (err)=>{

    if(err){
        //console.log(err.code)
        if(err.code=='ENOENT'){
            console.log('파일 없음')
        }
        if(err.code=='EPERM'){
            console.log('쓰기 불가')
        }
        if(err.code=='EACESS'){
            console.log('읽기 불가')
        }
    }else{
        console.log('다 됀다')
    }
})