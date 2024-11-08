import {useReducer} from 'react';


function recReducer(state, action){
    console.log("recReducer 실행")
    console.log(action)
    if(action.type == "ww_change"){
        let no = parseInt(action.newValue)
        const res = {...state, ww:no}
        console.log(res)
        return res
    }
    if(action.type == "hh_change"){
        let no = parseInt(action.newValue)
        const res = {...state, hh:no}
        console.log(res)
        return res
    }

    if(action.type == "calc"){

        let area = state.ww * state.hh
        let border = (state.ww + state.hh) * 2
        const res = {...state, area:area, border:border}
        console.log(res)
        return res
    }

}


function UseReducerRectangle(props) {

    const [state, dispatch] = useReducer(recReducer, {ww:0, hh:0, area:0, border:0})


    function wwChange(e){
        console.log("wwChange 실행")
        dispatch({type:"ww_change", newValue:e.target.value})
    }

    function hhChange(e){
        console.log("hhChange 실행")
        dispatch({type:"hh_change", newValue:e.target.value})
    }


    return (
        <div>
            <h2>UseReducerRectangle</h2>
            <div>가로 : <input value={state.ww} onChange={wwChange}/></div>
            <div>세로 : <input value={state.hh} onChange={hhChange}/></div>
            <div><button onClick={()=> dispatch({type:"calc"})}>계산</button></div>
            <div>넓이 : {state.area}</div>
            <div>둘레 : {state.border}</div>
        </div>
    );
}

export default UseReducerRectangle;