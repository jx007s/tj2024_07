const express = require('express')
const app = express()

//미들웨어  

// 매개변수 1개 짜리 -> 모든 요청에 대응
//콜백함수를 매개변수로 사용
//req, res,
// next : 다음 미들웨어 혹은 핸들러 호출시 사용
app.use((req, res,next)=>{
    console.log("미들웨어 1 ")
    next()  //다음 미들웨어나 실행내용으로 전달
})


app.use((req, res,next)=>{
    console.log("미들웨어 2 ")
    next()  //다음 미들웨어나 실행내용으로 전달
})


// 매개변수 2개
// 1 : 맵핑 주소
// 2 : callback 함수
//  /user 로 시작하는 요청에 실행
app.use('/user',(req, res,next)=>{
    console.log("미들웨어 /us 3 ")
    next()  //다음 미들웨어나 실행내용으로 전달
})

//callback 함수의 매개변수 중 next 없음 --> 다음 미들웨어 혹은 핸들러로 전달 불가
app.use('/info',(req, res)=>{
    console.log("미들웨어 /info 4 ")
    res.send('미들웨어 4가 내보낸다')
})

app.get('/',(req, res)=>{
    console.log('/ get 실행')
    res.send('/ get 페이지이지롱')
})

app.get('/user',(req, res)=>{
    console.log('/user get 실행')
    res.send('/user get 페이지이지롱')
})

app.get('/user/aaa',(req, res)=>{
    console.log('/user/aaa get 실행')
    res.send('/user/aaa get 페이지이지롱')
})

app.get('/info',(req, res)=>{
    console.log('/info get 실행')
    res.send('/info get 페이지이지롱')
})

app.get('/mem',(req, res, next)=>{
    console.log('/mem get 실행1')
    next()
})

app.get('/qwer',(req, res)=>{
    console.log('/qwer get 실행')
    res.send('/qwer get')
})

app.get('/mem',(req, res)=>{
    console.log('/mem get 실행2')
    res.send('/mem get 2')
})

app.get('/eee',(req, res, next)=>{
    console.log('/eee get 실행')
    //res.send('/eee get')
    const err = new Error('서버에서 에러발생')
    next(err)   //에러를 다음 미들웨어에게 던짐
})


//에러 미들웨어
//콜백 함수의 매개변수가 4개
app.use((err, req, res,next)=>{
    console.log("에러 미들웨어 ")
    //next()  //다음 미들웨어나 실행내용으로 전달

    res.status(500).send('에러발생 했어요')

})


app.use('/notice',(req,res,next)=>{
    var arr = [10,20,30,40]
    console.log("notice 미들웨어1 ",arr)
    
    next(arr)
})

app.use('/notice',(zxcv,req,res,next)=>{
    console.log("notice 미들웨어2 ", zxcv)
    zxcv[1] = 2222
    //next(zxcv)  get -> data를 전달X
    next()
})

app.get('/notice',(req,res)=>{
    console.log("notice 미들웨어 ")
    res.send("notice get ")
})

app.listen(3000,()=>{
    console.log('middle 서버 실행')
})

/*

/
    info
    prod

/myPage
    order
    addr

/admin
    mem
    sale


    info - 회사소개   
    prod - 제품
    order - 주문내역
    addr - 주소
    mem - 회원관리
    sale - 판매내역
    
    /myPage --> 시작하는 경우 : 회원님 안녕하세요
    /admin --> 시작하는 경우 : 관리자님 근무시간입니다.

*/