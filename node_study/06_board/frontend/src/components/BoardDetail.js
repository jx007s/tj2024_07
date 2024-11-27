import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';

const bkURL = process.env.REACT_APP_BACK_URL;

function BoardDetail(props) {

    const navigate = useNavigate()
    const {id} = useParams();

    const [st, setSt] = useState(null)
   

    async function fetchData(){ 

        if(!id){
            console.log("id 없음")
            return
        }

        try {
            const res = await axios.get(`${bkURL}/detail/${id}`)
            console.log(res.data)
            setSt(res.data)
        } catch (error) {
            console.error("에러발생 : ", error)
       
        }
    }

    //useEffect(fetchData)  에러 발생 --> 비동기 함수를 매개변수로 직접넣어서 발생
    useEffect(()=>{ //매개변수로 넣은 함수 안에서 비동기 함수 호출

        document.title = "상세";
        fetchData()  
    },[id])


    if(!st){
        return <div> 데이터 없음</div>;
    }


    function fileGo(){
        if(st.upSystem){
            return <img src={`${bkURL}/fff/${st.upSystem}`}/>
        }
        return null
        
    }


    function delGo(){
        console.log("delGo() 진입")

        axios.delete(`${bkURL}/delete/${id}`,
                        {data:{delUPfile: st.upSystem }})
        .then(res=>{
            console.log("삭제완료 ", res.data)
            alert("삭제되었습니다.")
            navigate("/")
        })
        .catch(err=>{
            console.error("삭제 오류 ", err)
        })

        
    }
    
    return (
        <div>
            <h1>상세 {id}</h1>
            <div>학기 : {st.hakgi}</div>
            <div>종류 : {st.name}</div>
            <div>학생 : {st.pid}</div>
            <div>일자 : {st.reg_date}</div>
            <div>국어 : {st.kor}</div>
            <div>영어 : {st.eng}</div>
            <div>수학 : {st.mat}</div>
            <div>파일 : {fileGo()}
                {st.upSystem}</div>
            <div>
                <Link to="/">목록으로</Link>
                <Link to={`/modify/${st.id}`}>수정</Link>
                <button onClick={delGo}>삭제</button>
            </div>
        </div>
    );
}

export default BoardDetail;