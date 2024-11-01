const express = require('express')
const router = express.Router()


const nowSt = {me : null}

const studs = {    
    'aaa':{id:'aaa',pname:'장동건', age:56},
    'bbb':{id:'bbb',pname:'장서건', age:34},
    'ccc':{id:'ccc',pname:'장남건', age:27},
    'ddd':{id:'ddd',pname:'장북건', age:19},
    'eee':{id:'eee',pname:'장중건', age:12}
}


router.get('/',(req,res)=>{
    //res.json(studs)
   res.render('stud',{arr:studs})
})

router.get('/detail/:id',(req,res)=>{
    
    nowSt.me = req.params.id
    res.send(nowSt.me)
})


module.exports = {router, nowSt}
