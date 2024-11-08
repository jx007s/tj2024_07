import {useReducer} from 'react';


/// 리듀서 함수
// stateeee 리듀서객체
// stateeee 안에 {vvv:0}를 가지게 됨
// stateeee[vvv] = 0 형태로 가져옴

//  act <----  {ttt:'aaa'}를 받는 객체
function rrr(stateeee, act){
    console.log("rrr 실행 :")
    console.log(act)

    if(act.ttt==='aaa'){
        //return {vvv : 123}
        return {vvv : stateeee.vvv+1}
    }
        
    if(act.ttt==='bbb'){
        //return {vvv : 456}
        return {vvv : stateeee.vvv-1}
    }
        
    return {vvv : 1000}
    //return stateeee  //리듀서객체를 리턴
}



function UseReducerGo(props) {

    //리듀서적용                        //rrr:리듀서함수, 
                                        //{vvv:0} : 리듀서(state)의 기본값
    const [qwer, fn_1] = useReducer(rrr, {vvv:0})
    // qwer : 리듀서  <---- rrr() 의 리턴을 받음
    // fn_1 : 액션을 발생시키는 함수
    // fn_1 실행시 리듀싱된 rrr 호출
    
   

    return (
        <div>
            <h2>UseReducerGo 이지롱</h2>
            <div>카운트 : {qwer.vvv}</div>
            <button onClick={()=> fn_1({ttt:'aaa'})}>증가</button>
            {/* {type:'aaa'}  ===> 
                act.ttt = 'aaa'
                fn_1(qwer ,act) */}
            <button onClick={()=> fn_1({ttt:'bbb'})} >감소</button>

           
        </div>
    );
}

export default UseReducerGo;

/*
직사각형 가로, 세로를 입력받고 넓이와 둘레를 계산하여 출력하세요



*/