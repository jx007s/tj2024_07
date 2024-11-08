import {Link } from 'react-router-dom'

function HeaderNav(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link> , 
                    <Link to="/about?age=27&gender=m#aaa">about</Link> , 
                    <Link to="/prod">제품</Link>
                </li>
                <li>
                    <Link to="/stud">stud</Link> ,  
                    <Link to="/stud/1">stud/1</Link> , 
                    <Link to="/stud/2">stud/2</Link>
                </li>
                <li>
                    <Link to="/exam">exam</Link> ,  
                    <Link to="/exam/aaa">exam/aaa</Link> , 
                    <Link to="/exam/bbb">exam/bbb</Link> , 
                    <Link to="/exam/detail">exam/detail</Link>
                </li>
            </ul>
        </div>
    );
}

export default HeaderNav;