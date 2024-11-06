import React from 'react'

//클래스기반의 컴퍼넌트 정의

//클래스 정의 
// extends --> 상속
//React.Component 클래스를 상속받은 클래스
class MyCla extends React.Component{

    // 멤버 메소드 - React.Component 에 정의되어있는 render() 메소드를 재정의
    render(){
        return <h2>내가 정의한 클래스 컴퍼넌트야</h2>
    }
}

export default MyCla

