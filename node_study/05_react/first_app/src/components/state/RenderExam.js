import {useState} from 'react';

/*
이름 , 국어, 영어, 수학 을 입력받고 계산 버튼을 클릭하면
총점과 평균이 계산되어 출력하세요

*/
let pname = ''
let jum = [0,0,0]
let tot = 0
let avg = 0
let no = 0
function RenderExam(props) {

    const [sno, setSno] = useState(no)

    function calcGo(){
        pname = document.querySelector("#pname").value
        jum = []
        for(let tt of "kor,eng,mat".split(",")){
            jum.push(parseInt(document.querySelector("#"+tt).value))  
        }
        tot = 0
        for (const i of jum) {
            tot += i
        }
        avg = tot / jum.length
        console.log('calcGo 실행',pname, jum, tot, avg)
        
        no++
        setSno(no)
    }


    return (
        <div>
            <h2>RenderExam</h2>
            <ul>
                <li>이름 : {pname}</li>
                <li>국어 : {jum[0]}</li>
                <li>영어 : {jum[1]}</li>
                <li>수학 : {jum[2]}</li>
                <li>총점 : {tot}</li>
                <li>평균 : {avg}</li>
            </ul>
            <div>
                <h3>입력</h3>
                <ul>
                    <li>이름 : <input id="pname"/></li>
                    <li>국어 : <input id="kor"/></li>
                    <li>영어 : <input id="eng"/></li>
                    <li>수학 : <input id="mat"/></li>
                </ul>
                <button onClick={calcGo}>계산</button>
            </div>
        </div>
    );
}

export default RenderExam;