const express = require('express')
const router = express.Router()


const createOrder = (myDDD)=>{

    router.get('/',(req,res)=>{
        res.send('/order get order.js 실행')
        console.log('createOrder -------')
        console.log(myDDD)
    })



    return router
}


module.exports = createOrder