var no = 5

const twoPm = new Promise(

    (resolve, reject) =>{
        if (no % 2 === 0){
            resolve("짝수입니다. : "+no)
        }else{
            reject("짝수가 아닙니다.")
        }
        
    }
)


twoPm
.then(msg=>{
    console.log(msg)
})
.catch(msg=>{
    console.log(msg)
})


/*
 로그인 을 구현하세요

 로그인 성공 조건
 id   pw    이름
aaa , 111, 정우성
bbb , 222, 정좌성
ccc , 333, 정남성
ddd , 444, 정중성

로그인 성공시 이름으로 출력
로그인 실패시 catch 구간으로 진입

*/

