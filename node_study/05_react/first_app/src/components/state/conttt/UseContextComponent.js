import {useContext} from 'react';

//context 가져오기
import {MyThemeContext2} from './UseContextContext'

function MyThemeComp2(){

    // context로부터 제공받는 변수 or 데이터
    // value={{theme, toggleTheme}} 로 제공하는 정보를 가져옴
    const {theme, toggleTheme} = useContext(MyThemeContext2)

    return (
        <div style={{background : theme === 'light' ? '#fff':'#0f0'}}>
            <h2>나의 테마 컴퍼넌트</h2>
            <div>테마 : {theme}</div>
            <button onClick={toggleTheme}>테마변경</button>
        </div>)
}

export default MyThemeComp2