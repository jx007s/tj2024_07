function timePm(aa){
    // Promise 객체 생성 및 리턴
    return new Promise(
        (resolve, reject) =>{
           
            /// 실행시 지연시키기 위해 setTimeout  사용
            setTimeout(

                //실제 실행할 내용의 함수
                ()=>{
                    resolve('안녕 :'+aa)
                },
                1000
            )
            
        })
}

timePm('아기상어').then(msg=>{
    console.log(msg)
})

timePm('엄마상어').then(msg=>{
    console.log(msg)
})

timePm('아빠상어').then(msg=>{
    console.log(msg)
})


/*
369 를 try~catch를 이용하여 해결하세요
짝은 catch 에서만 출력
1->20

*/

function pm369(no){

    let one = no % 10
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(one%3==0 && one){
                reject("짝")
            }else{
                resolve(no)
            }
        },1000)
        

    })
}

for (let i = 1; i <=20; i++) {
    pm369(i).then(msg=>{
        console.log(msg)
    }).catch(msg=>{
        console.log(msg)
    })
}