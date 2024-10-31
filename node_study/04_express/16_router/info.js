const express = require('express')
const router = express.Router()

const ddd = [
    {id:'aaa', pname:'장동건'},
    {id:'bbb', pname:'장서건'},
    {id:'ccc', pname:'장남건'},
    {id:'ddd', pname:'장중건'}
]

router.get('/',(req,res)=>{
    res.send('/info get info.js 에서 실행')
})
router.get('/detail',(req,res)=>{
    res.send('/info/detail get info.js 에서 실행')
    console.log(ddd)
})

module.exports = {router, ddd}