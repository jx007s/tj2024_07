import {BrowserRouter, Route, Routes } from 'react-router-dom'
import {useEffect} from 'react';
import About from './components/About';
import Prod from './components/rrr/Prod';
import HeaderNav from './components/HeaderNav';
import Stud from './components/Stud';
import Exam from './components/Exam';
import ExamSub from './components/ExamSub';
import ExamDetail from './components/ExamDetail';
import Additional from './components/Additional';

function Home(){
  return (
    <div>
        <h2>나는 홈이야</h2>
        <p>홈은 럭키비키자나</p>
    </div>
  )  
}

function ProdHome(){
  return (
      <div>
          <h2>나는 Prod aaa이야</h2>
          <p>Prod aaa 제품 보자나</p>
      </div>
    )  
}

function PageFour(){
  return (
      <div>
          <h2>404 페이지</h2>
      </div>
    )  
}

function App() {

  useEffect(()=>{
    console.log("useEffect 실행"); //link 에 의해서 호출되지 않음 --> 화면 갱신되었다고 요청하지 않음
  },[])

  return (

      <BrowserRouter future={{v7_relativeSplatPath:true, v7_startTransition:true}}>
         <HeaderNav/>
         <Additional/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/prod' element={<Prod/>}/>
            <Route path='/prod/aaa' element={<ProdHome/>}/> 
            <Route path='/stud/:sid' element={<Stud/>}/> 
            <Route path='/exam' element={<Exam/>}> 
              
              <Route path=':eid' element={<ExamSub/>}/>
              <Route path='detail' element={<ExamDetail/>}/> 
            </Route>

            <Route path='*' element={<PageFour/>}/>
        </Routes> 


      </BrowserRouter>
  
  );
}

export default App;
