//require : 파일을 모듈로 가져와 사용
// export 내용이 없음
let mmm = require('./02_mmm')

// 키배열로 받음
let ppp = require('./02_ppp')
let qqq = require('./02_qqq')


// import 된 키배열의 형태에 맞춰 각 변수로 대입
let {a,b} = require('./02_rrr')  

console.log("total.js 입니다.")
console.log(mmm) // {}
console.log(ppp) // { a: '엄마상어', b: 987.654 }
console.log(ppp.a) //엄마상어
console.log(ppp.b) //987.654
console.log(qqq) //{ a: '아빠상어', b: 135.797 }
console.log(a)
console.log(b)

ppp.a = '둘리'
ppp.b = 1111

console.log(ppp)