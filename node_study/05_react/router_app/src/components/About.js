import {useLocation } from 'react-router-dom'

function About(props) {
    const location = useLocation()

    /*
            search : 쿼리
            pathname : 현재 주소 경로
            hash : 주소 # 문자열 뒤의 값
            state : 상태값
            key : 객체(페이지) 고유값
    
    */


    return (
        <div>
            <h2>나는 About이야</h2>
            <p>AboutAboutAboutAboutAboutAbout</p>
            <p>쿼리 : {location.search}</p>
            <p>pathname : {location.pathname}</p>
            <p>hash : {location.hash}</p>
            <p>state : {location.state}</p>
            <p>key : {location.key}</p>
        </div>
    );
}

export default About;