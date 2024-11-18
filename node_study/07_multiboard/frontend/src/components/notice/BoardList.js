import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const bkURL = process.env.REACT_APP_BACK_URL;

function BoardList(props) {

    const [arr, setArr] = useState([])

    useEffect(()=>{
       

        //console.log(bkURL)

        axios.get(`${bkURL}/notice`)
        .then(
            res =>{
                //console.log("갔다옴 : ", res.data)
                setArr(res.data)
                //console.log(arr)
            }
        ).catch(
            err =>{
                console.error("에러발생 : ", err)
            }
        )

    },[])

    return (
        <div>
            <h1>목록</h1>
            <table border="1">
            <tr>
                <td>학기</td>
                <td>종류</td>
                <td>학생</td>
                <td>일자</td>
            </tr>

            {/* <li>{ee.pid}</li> */}

            {arr.map((st, i) =>{

                return <tr key={i}>
                            <td>{st.hakgi}</td>
                            <td>{st.name}</td>
                            <td>
                                <a href={`/notice/detail/${st.id}`}>{st.pid}</a>
                            </td>
                            <td>{st.reg_date}</td>
                        </tr>
                
                

            })}
            <tr>
                <td colspan="4">
                    <Link to="/notice/join">공지사항등록</Link>
                </td>
            </tr>
        </table>
        </div>
    );
}

export default BoardList;