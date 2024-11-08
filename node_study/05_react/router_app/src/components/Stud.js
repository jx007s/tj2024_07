import {useParams } from 'react-router-dom'

function Stud(props) {
    const data = useParams()
    return (
        <div>
            <h2>Stud 이지롱</h2>
            <div>sid : {data.sid}</div>
        </div>
    );
}

export default Stud;