
// promise 를 생성하여 리턴하는 함수 정의
function twoPm(){

    // Promise 객체 생성
    let rr = new Promise(

        (resolve, reject) =>{
            if (no % 2 === 0){
                resolve("짝수입니다. : "+no)
            }else{
                reject("짝수가 아닙니다.")
            }
            
        })

    return rr;    //리턴
}


var no = 5

//함수를 호출하여 promise 객체를 리턴으로 받음
let tp1 = twoPm()

tp1.then(msg=>{
    console.log(msg)
})
.catch(msg=>{
    console.log(msg)
})

no = 4

//함수를 호출하여 promise 객체를 리턴으로 받음
let tp2 = twoPm()

tp2.then(msg=>{
    console.log(msg)
})
.catch(msg=>{
    console.log(msg)
})

console.log('------------------------------------------------')

/// 변수 최적화 

function threePm(num){

    // Promise 객체 생성 및 리턴
    return new Promise(

        (resolve, reject) =>{
            if (num % 3 === 0){
                resolve("3의 배수입니다. : "+num)
            }else{
                reject("3의 배수가 아닙니다.")
            }
            
        })
}


threePm(5)
.then(msg=>{
    console.log(msg)
})
.catch(msg=>{
    console.log(msg)
})

threePm(6)
.then(msg=>{
    console.log(msg)
})
.catch(msg=>{
    console.log(msg)
})