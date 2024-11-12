import styled from "styled-components";
import {keyframes} from "styled-components";

const cc2 = "#0f0"
function App() {

  const MyBtn = styled.button`
    color : ${(props)=>props.ccc} ;
    font-size:2rem ;
  `;

  const MyBtn2 = styled.button`
    color : ${cc2} ;
    font-size:2rem ;
  `;

  const RRBtn = styled(MyBtn)`
    border-radius : 50%;
  `

  const MyInput = styled.input`
    background-color:#ff0;
  `

  // 속성 부여 : attrs({size:10, maxLength:9})
  const MyInput2 = styled.input.attrs({size:10, maxLength:9})`
   background-color:#ff0;
  `

  //키프레임생성
  const AniKeyFF = keyframes`
    0%{
      background-color:#f00;
    }
    20%{
      background-color:#ff0;
    }
    40%{
      background-color:#0f0;
    }
    60%{
      background-color:#00f;
    }
    80%{
      background-color:#f0f;
    }  
    100%{
      background-color:#f00;
    }
  `


  //키프레임 애니메이션 컨퍼넌트에 적용
  const MyAni = styled.div`
    width:200px;
    height : 100px;
    border : 1px solid #555;
    animation : ${AniKeyFF} 5s linear infinite;
  `


  const MyBig = styled.div`
      width:200px;
      height : 300px;
      border : 1px solid #555;

      h3{
        color:#f00;
      }

      .small{
        width : 100px;
        height : 50px;
        background-color:#0f0;
      }
      .small:hover{
        background-color:#0ff;
      }

      .small2{
        margin: 5px;
        width : 120px;
        height : 50px;
        background-color:#fa0;

        &:hover{
          background-color:#f0f;
        }
      }
  `

  return (
    <div>
      <h1>styled_app 이지롱</h1>
      <MyBtn ccc={"#00f"}>내버튼1</MyBtn>
      <MyBtn ccc={"#f00"}>내버튼2</MyBtn>
      <MyBtn2>내버튼3</MyBtn2>
      <RRBtn ccc={"#f0f"}>내버튼4</RRBtn>
      {/*  as="div" 요소를 div로 변경 */}
      <MyBtn as="div" ccc={"#fa0"}>내버튼5</MyBtn>
      <MyInput/>
      <MyInput2/>
      <MyAni>애니박스</MyAni>
      <MyBig>
          <h3>big 입니다.</h3>
          <div className="small">small 입니다.</div>
          <div className="small2">small 2 입니다.</div>
      </MyBig>
    </div>
  );
}

export default App;
