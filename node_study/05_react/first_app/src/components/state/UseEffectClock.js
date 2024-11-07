import {useState, useEffect} from 'react';
import styles from './clock.module.css'

function UseEffectClock(props) {

    const [sec, setSec] = useState(new Date().getSeconds())

    useEffect(()=>{
        
        const timer = setInterval(()=>{
            setSec(new Date().getSeconds())
        },1000)

        return ()=>{ clearInterval(timer)}
    },[])


    // 360 -> 60 
    console.log(sec)
    let secDeg = 6 * sec

    return (
        <div className={styles.wrapper}>
            <div className={styles.second} style={{transform:`rotate(${secDeg}deg)`}}></div>
            
        </div>
    );
}

export default UseEffectClock;