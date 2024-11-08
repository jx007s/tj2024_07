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
import Renders from './components/state/renders'
import RenderExam from './components/state/RenderExam'
import UseEffectGo from './components/state/UseEffectGo'
import UseEffectCleanup from './components/state/UseEffectCleanup'
import UseEffectClock from './components/state/UseEffectClock'
import UseContextGo from './components/state/UseContextGo'
import UseContextApp from './components/state/conttt/UseContextApp'
import UseReducerGo from './components/state/UseReducerGo'
import UseReducerRectangle from './components/state/UseReducerRectangle'
import UseMemoGo from './components/state/UseMemoGo'
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
        {/* <Renders/> */}
        {/* <RenderExam/> */}
        {/* <UseEffectGo/> */}
        {/* <UseEffectCleanup/> */}
        {/* <UseEffectClock/> */}
        {/* <UseContextGo/> */}
        {/* <UseContextApp/> */}
        {/* <UseReducerGo/> */}
        {/* <UseReducerRectangle/> */}
        <UseMemoGo/>
      </div>
  );
}

export default App;
