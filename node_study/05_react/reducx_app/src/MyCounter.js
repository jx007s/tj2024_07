import { useDispatch, useSelector } from 'react-redux';

function MyCounter() {
     // useSelector
    // MyStore  -> MyReducer . state  == state 
    const cnt = useSelector(state => state.count)
    const dispatch = useDispatch()


    return (
        <div>
            <h2> MyCounter 이지롱</h2>
            <div>cnt : {cnt}</div>
            <button onClick={()=>dispatch({type : 'INCREMENT'})}>증가</button>
        </div>
    );
}

export default MyCounter;