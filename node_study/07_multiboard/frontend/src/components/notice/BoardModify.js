import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import RadioButton from '../RadioButton';


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

        axios.get(`${bkURL}/notice/detail/${id}`)
        .then(res=>{
            console.log("정보받기 성공 ",res.data)
            setSt(res.data)
        })
        .catch(err=>{
            console.error("정보받기 실패 ",err)
        })
    },[id])


    if(!st){
        return <div> id 없음</div>;
    }

    function chkInputModule(pname, arr){
        const ret = []
        
        for(let ee of arr){
            //console.log(ee)
            
            // ret.push(chkInput(
            //                     pname,
            //                     ee.value,
            //                     ee.title, 
            //                     st[pname] === ee.value 
            //         ))

            const rb = <RadioButton
                            pname={pname} 
                            vv= {ee.value} 
                            tt= {ee.title} 
                            chGo = {stChange}
                            chk={st[pname] == ee.value} 
                        />
            ret.push(rb)
        }
        //[chkInput("hakgi",1,"1학기"),
        // chkInput("hakgi",2,"2학기", true)]
        return <div>
                    {ret}
                </div>
    }


    function chkInput(pname, vv, tt, chk=false){
        return  <label>
                    <input type="radio" name={pname} 
                    value={vv} checked={chk}/>{tt}
                </label>
    }

    function stChange(kk,me){

        setSt({...st,
            [kk] : me.value
        })
    }

    function submitGo(e){
        e.preventDefault()
        const frmData = new FormData(document.myFrm)
        const myData = Object.fromEntries(frmData)
        console.log(myData)


        axios.put(`${bkURL}/notice/modify`,myData)
        .then(res=>{
            console.log("정보수정 성공 ",res.data)
            //alert("수정되었습니다")
            //toast.success("수정되었습니다")

            toast.success("수정되었습니다",{
                autoClose:2000,
                onClose:()=>navigate(`/notice/detail/${id}`)
            })
            //navigate(`/notice/detail/${id}`)
        })
        .catch(err=>{
            console.error("정보수정 실패 ",err)
        })
     


    }


    return (
        <div>
            
            <h1>수정</h1>
            <form name="myFrm">
            <input type="hidden" name="id" value={st.id}/>
            <table border="">
                <tr>
                
                    <td>학기</td>
                    <td>{chkInputModule(
                        "hakgi", 
                        [{value:1, title:"1학기"},{value:2, title:"2학기"}]
                        )}</td>
                </tr>
                <tr>
                <td>종류</td>
                <td>
                {chkInputModule(
                    "name", 
                    [{value:"semi", title:"중간"},{value:"final", title:"기말"}]
                )}
                </td>
            </tr>
            
            <tr>
                <td>학생</td>
                <td><input type="text" name="pid" value={st.pid} 
                     onChange={(e)=>stChange("pid",e.target)}
                     /></td>
            </tr>
            <tr>
                <td>국어</td>
                <td><input type="text" name="kor" value={st.kor}
                onChange={(e)=>stChange("kor",e.target)}
                /></td>
            </tr>
            <tr>
                <td>영어</td>
                <td><input type="text" name="eng"  value={st.eng}
                onChange={(e)=>stChange("eng",e.target)}
                /></td>
            </tr>
            <tr>
                <td>수학</td>
                <td><input type="text" name="mat"  value={st.mat}
                onChange={(e)=>stChange("mat",e.target)}
                /></td>
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
                    <Link to={`/notice/detail/${st.id}`}>뒤로</Link>
                    <button onClick={submitGo}>수정</button>
                </td>
            </tr>
        </table>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default BoardModify;