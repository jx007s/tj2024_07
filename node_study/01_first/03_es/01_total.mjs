console.log("01_total.mjs 입니다.")
//var mmm = require('./01_mmm')  에러

import {a,b,ff_1} from './01_ppp.mjs'
import asdf from './01_qqq.mjs'

console.log(a)
console.log(b)
ff_1()
asdf()

import {aa,bb} from './01_mmm.js'
console.log(aa)
console.log(bb)

console.log("rrr------------------------")
//import {a,bb,ff_1} from './01_rrr.mjs' 에러발생
// a 가 중복


