import React, { Component } from 'react';

class LifeCycle extends Component {

    // 생성시 자동 호출
    constructor(props){//자신 생성자
        super(props) //super : 부모클래스 접근자
                // super() : 부모클래스 생성자 호출

        // this.state :: 동적 데이터 객체        
        //this.state.count = 0        
        this.state = {count:0}
        console.log('내가 생성자다')
        console.log(this.state )
    }

    componentDidMount(){
        //렌더 후 실행
        console.log('componentDidMount 실행')
    }

    //컴퍼넌트 화면업데이트 후 실행
    componentDidUpdate(prevProps,  prevState){ //이전 값
        console.log('componentDidUpdate  실행--')
        console.log(`prevProps : ${prevProps.count}`);
        console.log(`prevState : ${prevState.count}`);
        
    }

    componentWillUnmount(){
        console.log('componentWillUnmount  실행')
    }

    countAdd = ()=>{
        
        //this.state.count++
        this.setState( {count:this.state.count+1})
        console.log("countAdd 실행 : ", this.state.count)
    }

    render() {
        console.log('나는 렌더다')
        return (
            <div>
                <h1>라이프사이클이지롱</h1>
                <h2>count : {this.state.count}</h2>
                <button onClick={this.countAdd}>추가</button>
            </div>
        );
    }
}

export default LifeCycle;