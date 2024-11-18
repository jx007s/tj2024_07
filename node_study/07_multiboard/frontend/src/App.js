import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BoardList from './components/exam/BoardList';
import BoardDetail from './components/exam/BoardDetail';
import BoardJoin from './components/exam/BoardJoin';
import BoardModify from './components/exam/BoardModify';
import BoardTemp from './components/exam/Temp';

import NList from './components/notice/BoardList';
import NDetail from './components/notice/BoardDetail';
import NJoin from './components/notice/BoardJoin';
import NModify from './components/notice/BoardModify';
import NTemp from './components/notice/Temp';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<BoardTemp/>} >
            <Route path=""  element={<BoardList/>} />
            <Route path="detail/:id"  element={<BoardDetail/>} />
            <Route path="join"  element={<BoardJoin/>} />
            <Route path="modify/:id"  element={<BoardModify/>} />
          </Route>
       
          <Route path="/notice"  element={<NTemp/>} >
            <Route path=""  element={<NList/>} />
            <Route path="detail/:id"  element={<NDetail/>} />
            <Route path="join"  element={<NJoin/>} />
            <Route path="modify/:id"  element={<NModify/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
