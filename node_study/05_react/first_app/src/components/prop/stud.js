//props의 타입지정 객체
import PropTypes from 'prop-types'

// props: 컴퍼넌트를 호출하는 상위컴퍼넌트에서 전달하는 data
//        키배열
function Stud(props){

    let gender = '여'
    if(props.gender=='m'){
        gender='남'
    }
    let marriage = '미혼'
    if(props.marriage){  
        //marriage 속성이 있으면 true, 없으면 false

        marriage = '기혼'
    }

    return <div>
                <div>이름 : {props.pname}</div>
                <div>나이 : {props.age}</div>
                <div>성별 : {gender}</div>
                <div>결혼 : {marriage}</div>
                <br/>
    </div>
}

// 프로퍼티 타입지정
// isRequired : 필수요소
Stud.propTypes = {
    pname : PropTypes.string,
    age : PropTypes.number.isRequired

}

// 프로퍼티 기본값 지정
Stud.defaultProps={
    pname : '아기상어'
}

export default Stud