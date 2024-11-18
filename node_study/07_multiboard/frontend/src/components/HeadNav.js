import { Link } from 'react-router-dom';

function HeadNav(props) {
    return (
        <div>
            <Link to="/">홈</Link>
            <Link to="/notice">공지사항</Link>
        </div>
    );
}

export default HeadNav;