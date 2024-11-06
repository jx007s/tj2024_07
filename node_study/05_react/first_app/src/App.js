import MyComp1 from './comp1'
import IF_App from './components/control'
import Arr from './components/array'
import Arr2 from './components/array2'
import MyCla from './components/MyClass'
import Stud from './components/prop/stud'
import StudArr from './components/prop/studArr'
import StudProp from './components/prop/studProp'
import PersonList from './components/prop/personList'
import LifeCycle from './components/state/LifeCycle'

function App() {
  return (
      <div>
        <h1>안녕하세요</h1>
        <p>아기상어 뚜루루뚜루</p>
        {/* <MyComp1/> 주석처리 */}
        {/* <IF_App/> */}
        {/* <Arr/> */}
        {/* <Arr2 /> */}
        {/* <MyCla/> */}
        {/* 숫자 전달 {} */}
        {/* <Stud pname={1234} age={54} gender="m"/> */}
        {/* <Stud pname="장동건" age={54} gender="m" marriage/>
        <Stud age={27} gender="f"/>
        <Stud pname="장서건" gender="m" marriage/>
        <hr/>
        <StudArr/> */}
        {/* <StudProp/> */}
        {/* <PersonList/> */}
        {/* <LifeCycle/> */}
      </div>
  );
}

export default App;
