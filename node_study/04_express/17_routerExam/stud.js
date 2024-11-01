const express = require('express')
const router = express.Router()


const nowSt = {me : null}

const studs = {    
    'aaa':{id:'aaa',pname:'장건', age:56},
    'bbb':{id:'bbb',pname:'장건', age:34},
    'ccc':{id:'ccc',pname:'장건', age:27},
    'ddd':{id:'ddd',pname:'장건', age:19},
    'eee':{id:'eee',pname:'장건', age:12}
}


router.get('/',(req,res)=>{
    res.json(studs)
})

router.get('/detail/:id',(req,res)=>{
    
    nowSt.me = req.params.id
    res.send(nowSt.me)
})


module.exports = {router, nowSt}
