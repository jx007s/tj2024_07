const express = require('express')
const router = express.Router()
const conn = require('../ddbb')
const fs =  require('fs')




module.exports = (upload)=>{

    router.get('/',async (req,res)=>{

        console.log("notice 목록 접근")

        try {
            const [ret] = await conn.execute('select * from notice')
            res.json(ret)
        } catch (err) {  
            console.error('sql 실패 : ', err.message)
            res.status(500).send('db 오류')   
        }    
    })


    //detail 
    router.get('/detail/:id',async (req,res)=>{

        console.log("notice detail 접근")

        try {
            const [ret] = await conn.execute(
                'select * from notice where id = ?',
                [req.params.id])

            res.json(ret[0])

        } catch (err) {  
            console.error('sql 실패 : ', err.message)
            res.status(500).send('db 오류')   
        }    
    })


    // 쓰기
    router.post('/join',upload.single('upfile'),async (req,res)=>{
    
        console.log(req.file)
    
        let sql = 'insert into notice (name,hakgi,pid,kor,eng,mat,upSystem, upOri, reg_date)'
            sql +=' values (?,?,?,?,?,?,?,?,sysdate())'
        
        //한글인코딩
        let newFName = Buffer.from(req.file.originalname,'latin1').toString('utf8')
            
        let data = [
            req.body.name,
            req.body.hakgi,
            req.body.pid,
            req.body.kor,
            req.body.eng,
            req.body.mat,
            req.file.filename,
            newFName
        ]   
        
        console.log(data)

        try {
            const [ret] = await conn.execute(sql,data)

            const newId = ret.insertId
            console.log("쓰기 완료",newId)
            res.json({ newId })

        } catch (err) {  
            console.error('sql 실패 : ', err.message)
            res.status(500).send('db 오류')   
        }    
    })

    router.delete('/delete/:id', async (req,res)=>{
        console.log('삭제 진입:'+req.params.id)
        console.log(req.body)

        //파일삭제
        //파일에 작성한 내용이 있다면
        if(req.body.delUPfile){
        //파일이 존재한다면
            fs.access('fff/'+req.body.delUPfile, fs.constants.F_OK,(err)=>{
                if(!err){
                    fs.unlink('fff/'+req.body.delUPfile,(err)=>{
                        if(!err){
                            console.log(req.body.delUPfile+" 삭제")
                        }
                    })
                }
            })
        }
        

        try {
            const [ret] = await conn.execute(
                'delete from notice where id = ?',
                [req.params.id])

            console.log("삭제 완료",ret)
            res.send('삭제 성공:'+req.params.id)

        } catch (err) {  
            console.error('sql 실패 : ', err.message)
            res.status(500).send('db 오류')   
        } 

    })



    router.put('/modify',async (req,res)=>{

        //console.log(req.body)
        let data = [
            req.body.name,
            req.body.hakgi,
            req.body.pid,
            req.body.kor,
            req.body.eng,
            req.body.mat,
            parseInt(req.body.id) 
        ]
        console.log(data)


        try {
            const [ret] = await conn.execute(
                'update notice set name=?, hakgi = ?, pid=?, kor=?, eng=?,mat=? where id = ?',
                data
            )

            console.log("수정 완료",ret)
            res.send('수정성공')

        } catch (err) {  
            console.error('sql 실패 : ', err.message)
            res.status(500).send('db 오류')   
        }
    })


    return router
}
