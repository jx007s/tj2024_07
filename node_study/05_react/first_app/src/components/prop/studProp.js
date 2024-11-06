import React from 'react';
import StudExplode from './studExplode';
import StudRest from './studRest';
import StudChildren from './studChildren';
import MyCla from '../MyClass';
import Stud from './stud'
import StudSpec from './studSpec';

function StudProp() {
    let person= {pname:'두가인', age:27, gender:'f' , marriage:true}

    /*
    explode 방식으로 전달하세요
    필수 :
    반, 이름, 성별,

    기타 :  (존재하면 출력)
    취미, 특기, 통학방식, 사진
    
    
    */


    return (
        <div>
            studProp 이지롱
            <StudExplode data={person} color='red' nick='장동건'/>
            <StudRest pname={person.pname} 
                age = {person.age} 
                color='red' 
                nick='장동건'/>
            <StudChildren>
                안냐세요
                <br/>
                <MyCla/>
            </StudChildren>
            <Stud pname="현빈" age={42} gender="m" marriage/>
            <StudSpec/>
        </div>
    );
}

export default StudProp;