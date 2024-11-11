import { useDispatch } from 'react-redux';

function BoardAdd(props) {

    const dispatch = useDispatch()

    function addGo(){
        let vv = document.querySelector("#box").value
        console.log("addGo 실행", vv)
        dispatch({type : 'ADD', asdf : vv})
        document.querySelector("#box").value = ''
    }

    return (
        <div>
            <h3>내용 추가</h3>
            <input type='text' id="box"/>
            <button onClick={addGo}>추가</button>
        </div>
    );
}

export default BoardAdd;