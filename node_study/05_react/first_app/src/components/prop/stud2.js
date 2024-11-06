
function Stud2(props){

    let dd = props.data


    let gender = '여'
    if(dd.gender=='m'){
        gender='남'
    }
    let marriage = '미혼'
    if(dd.marriage){  
        //marriage 속성이 있으면 true, 없으면 false

        marriage = '기혼'
    }

    return <div>
                <div>이름 : {dd.pname}</div>
                <div>나이 : {dd.age}</div>
                <div>성별 : {gender}</div>
                <div>결혼 : {marriage}</div>
                <br/>
    </div>
}


export default Stud2