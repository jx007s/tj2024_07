import {useState, useMemo, useCallback, useRef} from 'react';

function UseMemoGo(props) {

    const [list, setList] = useState([11,22,33])
    const [number, setNumber] = useState('')

    //useCallback(함수원형, [])  --> 함수정의를 지정함
    // 마운트 될때 한번 정의되도록 함

    const fnNumChange = useCallback((e)=>{
        console.log("numChange 실행")
        setNumber(parseInt(e.target.value))
    },[]) 

    // const fnNumSend = ()=>{
    //     console.log("fnNumSend 함수정의 실행")
    //     return fnNumChange
    // }


    //useRef는 렌더링과 상관없이 값을 처리한다.
    //fnNumSendRef.current = false  처음 값 false
    const fnNumSendRef = useRef(false)

    const fnNumSend = useCallback(()=>{
        if(!fnNumSendRef.current){
            console.log("fnNumSend 함수정의 실행")

            //최초로 들어왔을 경우 다음에 진입을 차단하기위해 true로 변경
            fnNumSendRef.current = true  
        }
        
        return fnNumChange
    },[])

    const numChange = fnNumSend()

    //useCallBack
    const listAdd = useCallback(()=>{
        console.log("listAdd 실행")
        const newList = [...list, parseInt(number)]
        setList(newList)
    },[]) 

    function getTot(){
        console.log("getTot 실행")
        let ret = 0
        for (const i of list) {
            ret += i
        }
        return ret
    }           
                //useMemo(()=>a,[b])
                //     a를 ,b 가 변경될때만 실행

                // getTot()를 필요할때만 실행  
                // [list] ==> list가 변경될때만 실행
    const tot = useMemo(()=> getTot(),[list])   

    return (
        <div>
            <h2>UseMemoGo 이지롱</h2>
            <input value={number} onChange={numChange} />
            <button onClick={listAdd}>추가</button>
            <ul>
                {list.map((vv, idx)=>{
                    //console.log(idx, vv)
                    return <li key={idx}>{vv}</li>
                })}
            </ul>
            <div>합계 : {tot}</div>
        </div>
    );
}

export default UseMemoGo;