import {useState,useEffect} from 'react';
let no = 0
function UseEffectCleanup(props) {

    const [tttime, setTttime] = useState(no)

    useEffect(()=>{
        console.log("마운트할때만 실행")

        const timer = setInterval(()=>{
            no++
            console.log(no)
            setTttime(no)
        },1000)

        //cleanup : unmount 하면서 해야할 작업 지시
        return ()=>{
            console.log("cleanup 실행")
            clearInterval(timer)
        }


    },[])

    return (
        <div>
            <h2>UseEffectCleanup</h2>
            <p>tttime : {tttime}</p>
        </div>
    );
}

export default UseEffectCleanup;