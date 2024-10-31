const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('/ get home.js 에서 실행')
})
router.get('/notice/insert',(req,res)=>{
    res.send('/notice/insert get home.js 에서 실행')
})

module.exports = router