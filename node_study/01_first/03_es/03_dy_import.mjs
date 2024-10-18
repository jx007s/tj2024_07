//import {a,b,ff_1} from './01_ppp.mjs'


//동적 import 시 await import( ) 형태로 처리
const tt1 = './01_ppp.mjs'
//const ppp = await import('./01_ppp.mjs')
const ppp = await import(tt1) //await 필수
//const ppp = import(tt1)


import asdf from './01_qqq.mjs'
// 동적처리 불가
//const tt2 = './01_qqq.mjs'
//import asdf from tt2
//await import asdf from tt2
//import asdf await from tt2
//import asdf from await tt2

//console.log(a)
//console.log(b)
//ff_1()
console.log(ppp)
console.log(ppp.a)
console.log(ppp.b)
ppp.ff_1()
asdf()



/*

mjs 동적 import 하세요

현재 종목 모듈 ::> 축구

축구모듈
도구 : ?
인원수 : ?


농구모듈
도구 : ?
인원수 : ?

제기차기모듈
도구 : ?
인원수 : ?


전체 모듈 --> 플레이(게임)

*/