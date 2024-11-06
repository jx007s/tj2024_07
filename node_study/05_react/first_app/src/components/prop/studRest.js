
/* {} props 를 분해하여 처리
data <= props.data
color <= props.color
...rr : 명시되지 않은 나머지 속성들을 키배열로 가져옴
*/
function StudRest({pname,color,...rr}){

    console.log(JSON.stringify(rr))


    return <div>
                <div>이름 : {pname}</div>
                <div>나이 : {rr.age}</div>
                <div>색상 : {color}</div>
                <div>별명 : {rr.nick}</div>
                <br/>
    </div>
}


export default StudRest