import {useSelector} from 'react-redux';

function BoardList(props) {

    const arr = useSelector( state=>state.arr)
    //console.log(arr)

    return (
        <div>
            <h3>목록이지롱</h3>
            <ul>
                {
                    arr.map((ee, i)=>(
                        <li key={i}>{ee}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default BoardList;