import {useNavigate} from 'react-router-dom';
import axios from 'axios'

function LoginForm(props) {

    const navigate = useNavigate()

    function loginGo(){
        //alert("loginGo 진입")
        const myData = Object.fromEntries(new FormData(document.myFrm))
        console.log(myData)

        axios.post('http://192.168.0.50:5000/bk/memberOne',myData)
        .then(res=>{
            //console.log("서버응답 수신",res.data)
            if(res.data){
                const mem = res.data
                
                // 세션정보 저장
                sessionStorage.setItem("pid",mem.pid)
                sessionStorage.setItem("pname",mem.pname)

                alert(`${mem.pname}님 로그인 성공`)

                navigate("/")
            }else{
                alert("로그인 실패")
            }
        })
        .catch(err=>{
            console.error("서버에러 발생",err);
            
        })

    }

    return (
        <div>
            <h1>로그인 폼이야</h1>
            <form name="myFrm">
                <label>
                    id <input name="pid"/>
                </label>
                <label>
                    암호 <input name="pw"/>
                </label>
                <input type="button" onClick={loginGo} value="로그인"/>
            </form>
        </div>
    );
}

export default LoginForm;