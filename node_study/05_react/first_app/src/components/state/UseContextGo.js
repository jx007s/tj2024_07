import {useState, createContext, useContext} from 'react';

//Context 생성 --> 설정값을 제공하는 객체
const MyThemeContext = createContext()

//context를 이용하여 데이터 제공하는 컨퍼넌트
const MyProvider = ({children})=>{
    /*
    <MyProvider>
        <MyThemeComp/>   --> children
    </MyProvider>
    
    */
   const [theme, setTheme] = useState('light')

   //이벤트 처리함수
   const toggleTheme = ()=>{
        console.log("toggleTheme 실행")
        setTheme((prevTh) => (prevTh === 'light' ? 'dark' :  'light'))
   }

        //  value={{theme, toggleTheme}} 제공하는 데이터
    return(
        <MyThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </MyThemeContext.Provider>
    )
}



function MyThemeComp(){

    // context로부터 제공받는 변수 or 데이터
    // value={{theme, toggleTheme}} 로 제공하는 정보를 가져옴
    const {theme, toggleTheme} = useContext(MyThemeContext)

    return (
        <div>
            <h2>나의 테마 컴퍼넌트</h2>
            <div>테마 : {theme}</div>
            <button onClick={toggleTheme}>테마변경</button>
        </div>)
}

function UseContextGo(props) {
    return (
        <div>
            UseContextGo 이지롱
            <MyProvider>
                <MyThemeComp/>
            </MyProvider>
        </div>
    );
}

export default UseContextGo;