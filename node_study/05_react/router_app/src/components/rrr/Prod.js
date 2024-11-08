import {Link } from 'react-router-dom'


function Prod(props) {
    return (        
            <div>
                <h2>나는 Prod이야</h2>
                <p>제품제품제품제품</p>
                <Link to="/prod/aaa">aaa</Link>
            </div>
   
    );
}

export default Prod;