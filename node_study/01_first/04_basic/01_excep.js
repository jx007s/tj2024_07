const aa = 10
const bb = null

// console.log(aa/10)
// console.log(bb.asdf())
// console.log("아기상어")

try{
    console.log(aa/10)
    console.log(bb.asdf()) // 에러발생시 catch 구간으로 이동
    console.log('정상실행')
}catch(e){
    console.log('에러발생')
    //console.log(e)
    console.log(e.name+ " : "+ e.message)
}

console.log("아기상어")

console.log('-----------------------------------')

try{
    console.log("정상실행 1")

    throw new TypeError("내가 만든 Type 에러")

    console.log("정상실행 2")
    
    let aa = new Error("내가 만든 에러")
    throw aa   //에러상황 던지기

    console.log("정상실행 3")

}catch(qq){
    console.log('에러발생 => ', qq.name+ " : "+ qq.message)
}
console.log("try~catch 종료")



console.log('-----------------------------------')

try{
    console.log("정상실행 1")

    //throw new TypeError("내가 만든 Type 에러")

    console.log("정상실행 2")

}catch(qq){
    console.log('에러발생 => ', qq.name+ " : "+ qq.message)
}finally{
    console.log('finally 실행')
}
console.log("try~catch~finally 종료")


console.log('-----------------------------------')

function fn_1(nn){

    try{
        console.log("fn_1 실행 1")
    
        if(nn >10){
            throw new Error("내가 만든 에러")
        }
    
        console.log("fn_1 실행 2")
    
    }catch(qq){
        console.log('fn_1 에러발생 => ', qq.name+ " : "+ qq.message)
        return;
    
    }
    console.log("fn_1 종료")
}


function fn_2(nn){

    try{
        console.log("fn_2 실행 1")
    
        if(nn >10){
            throw new Error("내가 만든 에러")
        }
    
        console.log("fn_2 실행 2")
    
    }catch(qq){
        console.log('fn_2 에러발생 => ', qq.name+ " : "+ qq.message)
        return;
    
    }finally{
        console.log("fn_2 종료")
    }
    
}


fn_1(15)
console.log('-----------------------------------')
fn_2(15)


/*
369 를 try~catch를 이용하여 해결하세요
짝은 catch 에서만 출력
1->20

*/

for (let i = 1; i <=20; i++) {
    let one = i % 10
    try {

        if(one%3 == 0 && one){
            throw new Error()
        }

        console.log(i)
    } catch (error) {
        console.log('짝')
    } 
}


