import {useNavigate, NavLink } from 'react-router-dom'

function Additional(props) {

    const navi = useNavigate()

    const goStud1 = ()=>{
        navi('/stud/1')
    }

    const curr = {
        color : '#f00',
        fontSize : '2rem'
    }

    const curr2 = {
        color : '#0f0',
        fontSize : '2rem'
    }


    return (
        <div>
            <h2>Additional 이지롱</h2>
            <button onClick={goStud1}>stud1</button>
            <ul>
                <li>
                    <NavLink style={curr}  to="/exam">exam</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>(isActive ?curr2:undefined )} to="/exam/aaa">exam/aaa</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>(isActive ?curr2:undefined )} to="/exam/bbb">exam/bbb</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>(isActive ?curr2:undefined )} to="/exam/detail">exam/detail</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Additional;