const now = require('./02_now')

//console.log(now.ttt)

const meal = require(now.ttt)

for (const k in meal) {
    console.log(k," : ", meal[k])    
}

/*
메뉴 : 주식 , 사이드, 후식

module_아침 --> 아침 식사 메뉴
module_점심 --> 점심 식사 메뉴
module_저녁 --> 저녁 식사 메뉴

현재 시간을 이용하여 메뉴 출력
아침 : 00~10
점심 : 10~16
저녁 : 나머지

현재시간을 알려주는 모듈


전체 모듈

*/