import {useState, createContext} from 'react';
//제공자
// 상태변경, Context 생성

//Context 생성 --> 설정값을 제공하는 객체
export const MyThemeContext2 = createContext()

//context를 이용하여 데이터 제공하는 컨퍼넌트
export const MyProvider2 = ({children})=>{
    /*
    <MyProvider2>
        <MyThemeComp2/>   --> children
    </MyProvider2>
    
    */
   const [theme, setTheme] = useState('light')

   //이벤트 처리함수
   const toggleTheme = ()=>{
        console.log("toggleTheme 실행")
        setTheme((prevTh) => (prevTh === 'light' ? 'dark' :  'light'))
   }

        //  value={{theme, toggleTheme}} 제공하는 데이터
    return(
        <MyThemeContext2.Provider value={{theme, toggleTheme}}>
            {children}
        </MyThemeContext2.Provider>
    )
}
