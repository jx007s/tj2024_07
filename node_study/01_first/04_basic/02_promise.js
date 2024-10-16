
// Promise 를 생성하여 객체 변수로 받음
const myPm = new Promise(
    (resol, rejjj ) => {
  // resolve,  reject

        const aaa = true

        if(aaa){
            resol("작업성공")  //정상실행일때의 값 지정
        }else{
            rejjj('작업실패')  // 예외처리일때의 값 지정
        }
    }
)


/// 선언된 프라미스를 이용하여 결과 실행

myPm
.then(res => {   // then : 정상실행일때 
    console.log(res)
})
.catch(err =>{  //catch : 예외처리 상황 일때
    console.log(err)
})
.finally(() =>{  //catch : 예외처리 상황 일때
    console.log("마지막에 실행")
})
