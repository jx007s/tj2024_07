import LoginForm from "./LoginForm";
import LoginMain from "./LoginMain";
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <h1>로그인 프론트앤드</h1>
      <Routes>
        <Route index element={<LoginMain/>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
