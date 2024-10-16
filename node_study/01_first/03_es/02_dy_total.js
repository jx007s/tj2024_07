if (false){
    var {aa,bb} = require('./02_mmm')
}else{
    var {aa,bb} = require('./02_ppp')
}
console.log("02_다이나믹_total 입니다.")
console.log(aa,bb)
let rName = './02_qqq'
if(aa === '폴리'){
    rName = './02_rrr'
}
var {cc,dd} = require(rName)
console.log(cc,dd)

/*
메뉴 : 주식 , 사이드, 후식

module_아침 --> 아침 식사 메뉴
module_점심 --> 점심 식사 메뉴
module_저녁 --> 저녁 식사 메뉴

현재 시간을 이용하여 메뉴 출력
아침 : 00~10
점심 : 10~16
저녁 : 나머지

*/