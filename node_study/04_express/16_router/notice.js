const express = require('express')
const router = express.Router()

//    app.use('/notice', noticeRR)
//    /notice  ==> /
router.get('/',(req,res)=>{
    res.send('/notice get notice.js 에서 실행')
})

router.get('/detail',(req,res)=>{
    res.send('/notice/detail get notice.js 에서 실행')
})

router.get('/insert',(req,res)=>{
    res.send('/notice/insert get notice.js 에서 실행')
})

module.exports = router