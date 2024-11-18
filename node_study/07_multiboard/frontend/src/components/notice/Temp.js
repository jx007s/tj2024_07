import {useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import HeadNav from '../HeadNav';
function Temp(props) {
    useEffect(()=>{
        document.title = "공지사항";
    })
    return (
        <div>
            <HeadNav/>
            <h1>공지사항</h1>
            <Outlet/>
        </div>
    );
}

export default Temp;