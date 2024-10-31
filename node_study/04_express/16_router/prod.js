const express = require('express')
const router = express.Router()


// router.get('/',(req,res)=>{
//     res.send('/prod get prod.js 에서 실행')
// })

let noticeArr = null


// 매개변수 zxcv를 받고 router를 리턴하는 함수로 처리
const createProdRoutes = (zxcv, aa) =>{
    router.get('/',(req,res)=>{

        noticeArr = zxcv
        console.log('zxcv : ', zxcv)
        console.log('noticeArr : ', noticeArr)
        console.log('aa : ', aa)

        //res.send(`/prod get prod.js 에서 실행 ${abcd}  @@@   ${zxcv}`)
        //res.send(`/prod get prod.js 에서 실행 ${arr}  @@@   ${zxcv}`)
        res.send(`/prod get prod.js 에서 실행  ${zxcv}  @@@ ${aa}`)
    })

    router.get('/update',(req,res)=>{

        zxcv[0] += 100 
        aa += 10000
        res.send(`/prod/update get prod.js 에서 실행 ${zxcv}  @@@ ${aa}`)
    })

    return router
}



//module.exports = router
module.exports = createProdRoutes