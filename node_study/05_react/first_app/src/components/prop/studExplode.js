
/* {} props 를 분해하여 처리
data <= props.data
color <= props.color
nick 은 명시하지 않았으므로 지정된 변수가 없음
*/
function StudExplode({data, color}){

    console.log('color:',color)


    let gender = '여'
    if(data.gender=='m'){
        gender='남'
    }
    let marriage = '미혼'
    if(data.marriage){  
        //marriage 속성이 있으면 true, 없으면 false

        marriage = '기혼'
    }

    return <div>
                <div>이름 : {data.pname}</div>
                <div>나이 : {data.age}</div>
                <div>성별 : {gender}</div>
                <div>결혼 : {marriage}</div>
                <br/>
    </div>
}


export default StudExplode