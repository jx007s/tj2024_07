import {useSelector,useDispatch} from 'react-redux';

function BoardList(props) {

    const dispatch = useDispatch()

    const arr = useSelector( state=>state.arr)
    //console.log(arr)

    function delGo(delNo){
       console.log("delGo 실행")
       dispatch({type : 'DEL', asdf : delNo})
    }

    return (
        <div>
            <h3>목록이지롱</h3>
            <ul>
                {
                    arr.map((ee, i)=>(
                        <li key={i}>{ee}
                            <button onClick={()=>delGo(i)}>삭제</button>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    );
}

export default BoardList;