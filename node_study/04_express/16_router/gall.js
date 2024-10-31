const express = require('express')
const router = express.Router()

function gallFunc(qwer){

    router.get('/',(req, res)=>{
        //res.send(`/gall get   gall.js 에서 실행 ${qwer}`)
        res.sendFile(__dirname+'/gall.html')
    })

    let rr = router.route('/board')

    rr.get((req, res)=>{
        res.send(`/gall/board get   gall.js-> rr 에서 실행 ${qwer}`)
    })

    rr.post((req, res)=>{
        console.log('rr.post 진입')
        res.send(`/gall/board post   gall.js-> rr 에서 실행 ${qwer}`)
    })

    rr.put((req, res)=>{
        console.log('rr.put 진입')
        res.send(`/gall/board put   gall.js-> rr 에서 실행 ${qwer}`)
    })

    rr.delete((req, res)=>{
        console.log('rr.delete 진입')
        res.send(`/gall/board delete   gall.js-> rr 에서 실행 ${qwer}`)
    })

    ////////////////////////////////////////////////////

    router.route('/fnq')
    .get((req, res)=>{
        res.send(`/gall/fnq get   gall.js-> rr 에서 실행 ${qwer}`)
    })
    .post((req, res)=>{
        console.log('fnq.post 진입')
        res.send(`/gall/fnq post   gall.js-> rr 에서 실행 ${qwer}`)
    })
    .put((req, res)=>{
        console.log('fnq.put 진입')
        res.send(`/gall/fnq put   gall.js-> rr 에서 실행 ${qwer}`)
    })
    .delete((req, res)=>{
        console.log('fnq.delete 진입')
        res.send(`/gall/fnq delete   gall.js-> rr 에서 실행 ${qwer}`)
    })


    return router

}


module.exports = gallFunc

