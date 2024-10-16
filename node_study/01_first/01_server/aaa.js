// 서버 생성하기 위한 import
// require : ES2015 문법
// http : node.js 제공하는 라이브러리
const http = require('http')

//서버 생성
http.createServer(

    // 람다함수를 매개변수로 넣음 : 콜백함수
    // 클라이언트가 서버에 접근하면 이함수를 실행한다.
    (req, res)=>{
        // Status Code: 200
        // content-type: text/html; charset=UTF-8
        res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'})

        res.end("안녕 난 강사서버야")
        //클라이언트에게 돌려준다
    }  
)
.listen(80, () => {
    // 서버가 실행되면(최초) 호출한다.
    // 서버 콘솔에 출력
    console.log("강사서버 실행 및 대기")
})
// 생성한 서버를 실행하여 연결 대기
//  8080, () => {}
//  포트번호,  연결시 작업할 내용