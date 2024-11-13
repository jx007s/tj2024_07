import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<BoardList/>} />
          <Route path="/detail/:id"  element={<BoardDetail/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
