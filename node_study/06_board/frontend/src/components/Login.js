import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';

import axios from 'axios';

//const bkURL = process.env.REACT_APP_BACK_URL;
const bkURL = 'http://localhost:5000/bk'

function Login(props) {

    

    function makeGo(){
        console.log("makeGo() 진입")

        axios.get(`${bkURL}/loginMake`,{
            withCredentials: true  // 쿠키를 서버로 전송
          })
        .then(res=>{
            console.log("makeGo ", res.data)
            alert(res.data)
            
        })
        .catch(err=>{
            console.error("makeGo 오류 ", err)
        }) 
    }

    function readGo(){
        console.log("readGo() 진입")

        axios.get(`${bkURL}/loginRead`,{
            withCredentials: true  // 쿠키를 서버로 전송
          })
        .then(res=>{
            console.log("readGo ", res.data)
            alert(res.data)
            
        })
        .catch(err=>{
            console.error("readGo 오류 ", err)
        }) 
    }

    function deleteGo(){
        console.log("deleteGo() 진입")

        axios.get(`${bkURL}/logOut`,{
            withCredentials: true  // 쿠키를 서버로 전송
          })
        .then(res=>{
            console.log("logOut ", res.data)
            alert(res.data)
            
        })
        .catch(err=>{
            console.error("readGo 오류 ", err)
        }) 
    }
    
    return (
        <div>
           <button onClick={makeGo}>로그인생성</button>
           <button onClick={readGo}>로그인보기</button>
           <button onClick={deleteGo}>로그아웃</button>
        </div>
    );
}

export default Login;