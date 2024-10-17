const mem = require('./03_members')


id = 'bbb'
pw = '222'

const logPm = new Promise(

    (resolve, reject) =>{
        if (id in mem.mem && mem.mem[id].pw == pw){
            resolve(mem.mem[id].pname+ " 로그인입니다.")
        }else{
            reject("로그인 실패입니다.")
        }
        
    }
)


logPm
.then(msg=>{
    console.log(msg)
})
.catch(msg=>{
    console.log(msg)
})


/*
 로그인 을 구현하세요

 로그인 성공 조건
 id   pw    이름
aaa , 111, 정우성
bbb , 222, 정좌성
ccc , 333, 정남성
ddd , 444, 정중성

로그인 성공시 이름으로 출력
로그인 실패시 catch 구간으로 진입

*/

