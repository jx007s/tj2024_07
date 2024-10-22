let ppp = require('./02_ppp')

ppp.a = '폴리' //require('./04_middle') 로 호출시 실행
ppp.b = '로이'

//ppp.fn_1()  //require('./04_middle') 로 호출시 실행
ppp['fn_1']()