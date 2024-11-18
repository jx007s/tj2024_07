import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

function BoardJoin(props) {

    const navigate = useNavigate()

    function submitGo(me){
        me.preventDefault()

        const frmData = new FormData(document.myFrm)
        //const data = Object.fromEntries(frmData)
        console.log("submitGo() 진입")
        //console.log(frmData)
        //console.log(data)

        axios.post(`${bkURL}/join`, frmData,{
            headers:{
                'Content-Type':"multipart/form-data"
            }    
        }).then(res=>{
            console.log('등록완료 : ', res.data)
            alert('등록되었습니다.')
            navigate('/')
        }).catch(err=>{
            console.error('등록 오류 : ', err)
        })

    }




    return (
        <div>
            <h1>등록</h1>
            <form name="myFrm" onSubmit={submitGo} >
                <table border="">
                    <tr>
                    <td>종류</td>
                    <td><input type="radio" name="name" value="semi"/>중간
                        <input type="radio" name="name" value="final"/>기말</td>
                </tr>
                <tr>
                    <td>학기</td>
                    <td><input type="radio" name="hakgi" value="1"/>1학기
                        <input type="radio" name="hakgi" value="2"/>2학기</td>
                </tr>
                <tr>
                    <td>학생</td>
                    <td><input type="text" name="pid"/></td>
                </tr>
                <tr>
                    <td>국어</td>
                    <td><input type="text" name="kor"/></td>
                </tr>
                <tr>
                    <td>영어</td>
                    <td><input type="text" name="eng"/></td>
                </tr>
                <tr>
                    <td>수학</td>
                    <td><input type="text" name="mat"/></td>
                </tr>
                <tr>
                    <td>파일</td>
                    <td><input type="file" name="upfile"/></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <Link to="/">목록으로</Link>
                        <input type="submit" value="등록"/>
                    </td>
                </tr>
            </table>
        </form>



        </div>
    );
}

export default BoardJoin;