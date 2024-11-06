import React from 'react';
/*
    explode 방식으로 전달하세요
    필수 :
    반, 이름, 성별,

    기타 :  (존재하면 출력)
    취미, 특기, 통학방식, 사진
    
    
    */
function Person({ban, pname, gender,...arr}) {
    
    let title = ['hobby','spec','tran','img']

    let ret = []
    for(let tt of title){
        if(arr[tt]){
            if(tt=='img'){
                ret.push(<li>{tt} : <img src={arr[tt]} /></li>)             
            }else{
                ret.push(<li>{tt} : {arr[tt]}</li>)             
            }
            
        }
    }
    
    return (
        <ul>
            <li>반 : {ban}</li>
            <li>이름 : {pname}</li>
            <li>성별 : {gender}</li>
            {ret}
        </ul>
    );
}

export default Person;