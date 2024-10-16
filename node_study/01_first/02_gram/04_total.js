console.log("total.js 입니다.1")
//console.log(ppp)  에러 발생

let ppp = require('./02_ppp')
console.log("total.js 입니다.2")
console.log(ppp)

let middle = require('./04_middle')
console.log("total.js 입니다.3")
console.log(ppp)

console.log(middle)
ppp.fn_1()

/*
    module - 1
    회원 목록 - 5명
    aaa, 정우성
    bbb, 정좌성
    ccc, 정남성
    ddd, 정중성
    eee, 정북성

    module - 2
    현재 회원 지정 : 'ccc'

    index 
    현재 회원의 정보 출력
    

*/
