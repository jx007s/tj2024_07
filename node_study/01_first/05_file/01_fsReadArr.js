const fs = require('fs')

var ttt = '초기내용'
fs.readFile('./aaa.txt',
    (e,d)=>{

    if(e){ 
        console.log("파일 에러")

    }else{ 
        //console.log(d.toString())
        let arr = d.toString().split('\n')
        //console.log(arr)
        for (const i in arr) {
            console.log(i," : ", arr[i])
        }
    }
})

//console.log("ttt : ", ttt)

/*

농구 팀 파일을 3개 구성하고
각 선수들을 포지션에 맞게 출력하세요

북산
등번호,이름,포지션
4,채치수,c
10,강백호,pf
11,서태웅,sf
14,정대만,sg
7,송태섭,pg
5,권준호,sg

해남
4,이정환,pg
10,전호장,sf

능남
4,변덕규,c
7,윤대협,sf

*/
