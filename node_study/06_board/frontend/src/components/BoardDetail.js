import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

function BoardDetail(props) {
    const {id} = useParams();

    const [st, setSt] = useState(null)
   

    async function fetchData(){ 

        if(!id){
            console.log("id 없음")
            return
        }

        try {
            const res = await axios.get(`http://localhost:5000/detail/${id}`)
            console.log(res.data)
            setSt(res.data)
        } catch (error) {
            console.error("에러발생 : ", error)
       
        }
    }

    //useEffect(fetchData)  에러 발생 --> 비동기 함수를 매개변수로 직접넣어서 발생
    useEffect(()=>{ //매개변수로 넣은 함수 안에서 비동기 함수 호출
        fetchData()  
    },[id])


    if(!st){
        return <div> id 없음</div>;
    }


    function fileGo(){
        if(st.upSystem){
            return <img src={`http://localhost:5000/fff/${st.upSystem}`}/>
        }
        return null
        
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
        </div>
    );
}

export default BoardDetail;