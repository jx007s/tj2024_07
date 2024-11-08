import {useParams } from 'react-router-dom'

function ExamSub(props) {
    const data = useParams()
    return (
        <div>
            <h3>ExamSub 이지롱</h3>
            <div>eid : {data.eid}</div>
        </div>
    );
}

export default ExamSub;