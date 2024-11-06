
/* {} props 를 분해하여 처리
data <= props.data
color <= props.color
...rr : 명시되지 않은 나머지 속성들을 키배열로 가져옴
*/
//function StudChildren(props){
function StudChildren({children}){

    //console.log(props.children)
    console.log(children[0])  // 안냐세요
    console.log(children[1])  // <br/>
    console.log(children[2])  // <MyCla/>

    return  <div>
                StudChildren 이지롱
                {children[1]}
                {children[2]}
            </div>
}


export default StudChildren