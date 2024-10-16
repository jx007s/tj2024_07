function fn_1(){
    console.log("fn_1 시작 --------")
    //console.log(this)
    console.log(this === module.exports)
    console.log(this === exports)
    //console.log(global)
    console.log(global === this)
    /*
    === 값, 자료형 , 주소 모두일치
    == 값 일치
    */
    console.log("fn_1 끝 --------")
}


console.log(this)
console.log(this === module.exports)
console.log(this === exports)

fn_1()