import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

function BoardModify(props) {

    const navigate = useNavigate()
    const {id} = useParams();

    const [st, setSt] = useState(null)

    useEffect(()=>{

        if(!id){
            console.log("id 없음")
            return
        }

        axios.get(`${bkURL}/detail/${id}`)
        .then(res=>{
            console.log("정보받기 성공 ",res.data)
            setSt(res.data)
        })
        .catch(err=>{
            console.error("정보받기 실패 ",err)
        })
    },[])


    if(!st){
        return <div> id 없음</div>;
    }


    function chkInput(pname, vv, tt, chk=false){

        const arr = {1:"1학기", 2:"2학기"}

        return  <label>
                    <input type="radio" name={pname} 
                    value={vv} checked={chk}/>{tt}
                </label>

    }


    return (
        <div>
            <h1>수정</h1>
            <form id="frm" name="myFrm" action="">
            <input type="hidden" name="id" value={st.id}/>
            <table border="">
                <tr>
                
                    <td>학기</td>
                    <td>
                        {chkInput("hakgi",1,"1학기")}
                        {chkInput("hakgi",2,"2학기", true)}
                       
                    </td>
                </tr>
                <tr>
                <td>종류</td>
                <td>
                  
                    <input type="radio" name="name" value="semi" checked/>중간
                    <input type="radio" name="name" value="final"/>기말
               
                    <input type="radio" name="name" value="semi"/>중간
                    <input type="radio" name="name" value="final" checked/>기말
                
                </td>
            </tr>
            
            <tr>
                <td>학생</td>
                <td><input type="text" name="pid" value={st.pid}/></td>
            </tr>
            <tr>
                <td>국어</td>
                <td><input type="text" name="kor" value={st.kor}/></td>
            </tr>
            <tr>
                <td>영어</td>
                <td><input type="text" name="eng"  value={st.eng}/></td>
            </tr>
            <tr>
                <td>수학</td>
                <td><input type="text" name="mat"  value={st.mat}/></td>
            </tr>
            <tr>
                <td>파일</td>
                <td>{st.upSystem}<br/>
                    {st.upOri}</td>
            </tr>
            <tr>
                <td>시험일</td>
                <td>{st.reg_date}</td>
            </tr>
            <tr>
                <td colspan="2">
                    <a href="/detail/{{st.id}}">뒤로</a>
                    <input type="submit" value="수정"/>
                </td>
            </tr>
        </table>
            </form>
        </div>
    );
}

export default BoardModify;