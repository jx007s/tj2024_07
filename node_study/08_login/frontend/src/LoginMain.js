import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function LoginMain(props) {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    useEffect(()=>{
        const pid = sessionStorage.getItem("pid")
        
        if(!pid){  //로그인 정보가 없다면 로그인 위치로 이동
            navigate("/login")
        }
        const pname = sessionStorage.getItem("pname")

        setUser({"pid":pid, "pname":pname})
    },[])

    function logout(){
        sessionStorage.clear()
        alert(`${user.pname} 로그아웃되었습니다.`)
        
        //console.log("pid",sessionStorage.getItem("pid"))
        navigate("/login")
    }


    if(!user){
        return <div>로그인 정보 없음</div>
    }

    return (
        <div>
            <h1>로그인메인이야</h1>
            <div>{user.pname}님 안녕하세요</div>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
}

export default LoginMain;