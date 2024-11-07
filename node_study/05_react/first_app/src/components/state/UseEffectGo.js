import {useState, useEffect} from 'react';

function UseEffectGo(props) {

    //state 설정
    const [count, setCount] = useState(0)
    const [name, setName] = useState("장국영")
    const [age, setAge] = useState(34)

    //componentDidMount 와 componentDidUpdate
    useEffect(()=>{
        console.log("useEffect 실행1")
    })

    //componentDidMount
    useEffect(()=>{
        console.log("useEffect 실행2")
    },[])

    //특정 state update 시  ==> name,count 의 변경일 때만 실행
    useEffect(()=>{
        console.log("useEffect 실행3 : name, count")
    },[name,count])

    //특정 state update 시  ==> age 의 변경일 때만 실행
    useEffect(()=>{
        console.log("useEffect 실행4 : age")
    },[age])
    



    //이벤트
    function onName(e){
        //console.log("onName 실행",e.target.value)
        setName(e.target.value)
    }
    function onAge(e){
        //console.log("onAge 실행")
        setAge(e.target.value)
    }

    return (
        <div>
            <h1>UseEffectGo</h1>
            <p>count : {count}</p>
            <p>name : <input value={name} onChange={onName}/></p>
            <p>age : <input value={age} onChange={onAge} /></p>
            <button onClick={()=>setCount(count+1)}>카운트증가</button>
            
        </div>
    );
}

export default UseEffectGo;