
const IF_App = ()=>{
    let jum = 88

    /*
    if(jum >= 80){
        return <div>IF_App 우수 이지롱</div>
    }if(jum >= 60){
        return <div>IF_App 정상 이지롱</div>
    }else{
        return <div>IF_App 미흡 이지롱</div>
    }*/
    
        /* JSX 안에서 if문 사용 불가
    return <div>IF_App if(jum >= 80){ 123 } 이지롱</div>
    */
    /* JSX 안에서 3항 연산자 사용
    return <div>{jum >= 80 ? <p>합격</p> : <p>불합격</p>}</div>
     */

    /*
    switch('약밥'){
        case '김밥':
            return <div>분식입니다.</div>
        case '덮밥':
            return <div>한식입니다.</div>
        case '약밥':
            return <div>간식입니다.</div>
        case '톱밥':
            return <div>목식입니다.</div>
            
    }
      */ 
     
    /*for
        JSX 안에 변수를 호출하고자 할 경우 {} 안에 기재
    
    var arr = []

    for (let i = 0; i < 5; i++) {
        arr.push(<div>박스야 {i} {'{}'}</div>)
        
    }

    return arr
    */

    var arr = []

    for (let i = 0; i < 5; i++) {
        let line = ''
        for (let s = 0; s <= i; s++) {
            
            line += '*'
        }
        arr.push(<div>{line}</div>)
    }

    return arr

}


export default IF_App