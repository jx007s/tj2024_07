import {useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import HeadNav from '../HeadNav';
function Temp(props) {
    useEffect(()=>{
        document.title = "시험";
    })
    return (
        <div>
            <HeadNav/>
            <h1>시험</h1>
            <Outlet/>
        </div>
    );
}

export default Temp;