function myPm(tt){

    return new Promise(
        (resolve, reject)=>{

                if(tt){
                    resolve("성공")
                }else{
                    reject("실패")
                }
        }
    )
}
/*
myPm(false)
.then(rr=>{
    console.log(rr)
})
.catch(rr=>{
    console.log(rr)
})
*/

//await myPm(true)


function exec_1(){
    myPm(true)
    .then(rr=>{
        console.log(rr)
    })
    .catch(rr=>{
        console.log(rr)
    })
}

//exec_1()


async function exec_2(){
    let aaa = await myPm(true)  //await : async function 내부에서 사용
    console.log("exec_2 :"+aaa)
}

exec_2()

//async : 동기 처리
async function exec_3(){
    try {
        let aaa = await myPm(false)  //await : async function 내부에서 사용
        console.log("exec_3 :"+aaa)
    } catch (error) {
        console.log("exec_3 에러:"+error.message)
    }
    
}

exec_3()


async function exec_4(){

    const pms = [myPm(true),myPm(true),myPm(true)]

    for await (const pm of pms) {
            console.log("exec_4 :"+pm)  
    } 
}
//exec_4()



function noPm(tt){

    return new Promise(
        (resolve)=>{
            resolve(tt + " 입니다")
        }
    )
}

async function exec_5(){

    for (let i = 1; i < 5; i++) {
        const res = noPm(i)
        console.log(res)
    }
}

exec_5()


async function exec_6(){

    for (let i = 1; i < 5; i++) {
        const res = await noPm(i)
        console.log("exec_6:"+res)
    }
}

exec_6()