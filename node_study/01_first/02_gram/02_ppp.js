const a = '엄마상어'
let b = 987.654

function fn_1(){
    console.log("fn_1() 실행")
}


//현재 파일의 내용을 module 로 사용가능하도록 export 함
//값만 넘김  : const a --> '엄마상어' 만 대입됨
// 키 배열로 내보냄 -- { a: '엄마상어', b: 987.654 }
module.exports = {
    a,  
    b,
    fn_1
}