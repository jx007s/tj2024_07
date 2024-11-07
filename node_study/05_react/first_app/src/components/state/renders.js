import {useState} from 'react';

let name = 'aaa'
let age = 34
let arr = [10,20]
let user = {pname:'장동건', gender:'m'}

function Renders(props) {

    //name3 = "ccc"                    초기값
    const [name3, setName3] = useState("ccc")
    //     호출변수명, 대입함수명 
    
    const [age3, ageModify] = useState(age)
    //     호출변수명, 대입함수명

    const [arr3, setArr3] = useState(arr)
    //     호출변수명, 대입함수명

    const [user3, setUser3] = useState(user)

    let name2 = 'bbb'


    const changeName = ()=> {
        name = '바뀐 aaa'
        logNames()
    }
    const changeName2 = ()=> {
        name2 = '바뀐 bbb'
        logNames()
    }

    const changeName3 = ()=> {
        //name3 = '바뀐 ccc'  setState 처럼 함수에 의해 변경
        setName3('바뀐 ccc')  // 렌더링 실행
        logNames()
    }

    const changeAge3 = ()=> {
        
        ageModify('바뀐 38')
    }
    const changeArr3 = ()=> {
        let newArr = [11,22]  //새로운 배열을 생성하고 
                            //arr3 = newArr 한 경우이므로
                            //arr3의 값 즉 주소가 변경되어 
                            //arr3 가 변경되었다고 인식 렌더링이 실행됨
        setArr3(newArr)     // 렌더링이 되는 시점은 대입된 값의 변경이 있어야함
    }
    const changeArr33 = ()=> {
        
        arr[1] = 1234
        console.log("changeArr33 진입:",arr, arr3)
        setArr3(arr) //arr3의 변경이 없음 --> arr3는 arr의 주소를 가지고 있음
        // arr[1] = 1234  --> arr의 주소가 변경되지 않음, 원소의 값만 변경됨
        // arr3의 값 즉 주소가 변경되지 않아 렌더링 되지 않음
    }

    const changeUser3 = ()=> {
        //let newUser = {pname:'장서건', gender:'f'} 
        //let newUser = {} 
        //  ...user  : user의 모든 속성을 가져와서 대입
        let newUser = {...user, gender:'f'} // user의 값을 가져와 새로운 키배열 생성
        user = newUser
        setUser3(newUser) 
    }

    function logNames(){
        console.log(`name : ${name}`)
        console.log(`name2 : ${name2}`)
    }

    logNames()

    return (
        <div>
            <h1>Renders 이지롱</h1>
            name : {name} / {name2} / {name3} <br/>
            age : {age} / {age3}<br/>
            arr : {arr} / {arr3} <br/>
            user : {user.pname} / {user.gender} <br/>
            user3 : {user3.pname} / {user3.gender} <br/>

            <button onClick={changeName}>name</button>
            <button onClick={changeName2}>name2</button>
            <button onClick={changeName3}>name3</button>
            <br/>
            <button onClick={changeAge3}>age3</button>
            <br/>
            <button onClick={changeArr3}>arr3</button>
            <button onClick={changeArr33}>arr33</button>
            <br/>
            <button onClick={changeUser3}>user3</button>
        </div>
    );
}

export default Renders;

/*
이름 , 국어, 영어, 수학 을 입력받고 계산 버튼을 클릭하면
총점과 평균이 계산되어 출력하세요

*/