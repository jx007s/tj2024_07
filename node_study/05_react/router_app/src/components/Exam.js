import {Outlet} from 'react-router-dom'

function Exam(props) {
    return (
        <div>
            <h2>Exam 이지롱</h2>
            <Outlet/>
        </div>
    );
}

export default Exam;