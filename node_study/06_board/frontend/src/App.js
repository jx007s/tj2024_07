import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import BoardJoin from './components/BoardJoin';
import BoardModify from './components/BoardModify';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<BoardList/>} />
          <Route path="/detail/:id"  element={<BoardDetail/>} />
          <Route path="/join"  element={<BoardJoin/>} />
          <Route path="/modify/:id"  element={<BoardModify/>} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
