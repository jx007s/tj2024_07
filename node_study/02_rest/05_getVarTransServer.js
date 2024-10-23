const http = require('http')
const url = require('url')
const fs = require('fs').promises


let news = {
    "sports":["서장훈 트리플 악셀 성공","김연아 그랜드 슬램 달성","추신수 버저비터 4점슛 도전"],
    "enter":["동방신기 신기하게도 서방에서 유명해","2PM 오전에 일어난다고 밝혀"],
    "finance":["돈 많이 벌고 싶다고 밝혀",'돈을 모르겠다','경제','경제를 살려줘']
}

http.createServer(async (req,res)=>{
    const myUrl = url.parse(req.url, true)

    let ttt = '안녕 난 서버야'
    let msg = '서버가 보내는 내용'
    try {

        if(myUrl.query.kind in news){
            console.log(`kind : ${myUrl.query.kind}`)
           // msg = news[myUrl.query.kind]

        //    let arr = ['하나면 하나지 둘이겠느냐',
        //     '아주공갈 염소똥 십원에 열두개',
        //     '타잔이 10원짜리 팬티를 입고 20원짜리 칼을 차고 노래를 한다',
        //     '동동동대문을 열어라 남남남대문을 열어라']

            // msg = '['
            // for (let i in arr) {
            //     let no = eval(i)
            //     msg += "'"+arr[i]+"'"
            //     if (no+1 < arr.length) {
            //         msg+=','
            //     }
            // }
            // msg += ']'

            let arr = news[myUrl.query.kind]  // 쿼리에 맞는 데이터 가져오기

            msg = JSON.stringify(arr)  //배열을 문자열 형태로 변환
            console.log(msg)
        }

        ttt = await fs.readFile('05_var.html')
        ttt = ttt.toString()  
        
        

        ttt = ttt.replaceAll("'{{msg}}'",msg)

    } catch (error) {
        
    }
    
    res.writeHead(200, {'content-Type' : 'text/html ; charset=UTF-8'})
    res.end(ttt)
})
.listen(8082, ()=>{
    console.log('변수전달 서버 실행')
})