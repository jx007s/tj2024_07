//import './arr.css'
import styles from './arr.module.css'
const arr1 = [11,22,33,44]
const arr2 = [
    {class:'box2',
     content:'아기상어',
     img: 'aaa.jpg'   
    },
    {class:'box2',
        content:'엄마상어',
        img: 'bbb.jpg'
    },
    {class:'box3',
     content:'아빠상어',
     img: 'ccc.jpg'
    }
]
function Arr(){

    //return <div>arr입니다.{arr1}</div>

    const newArr1 = arr1.map((no, idx)=>{
        console.log("map 에 들어옴:",no, idx)
        return no*10
    })

    console.log(newArr1)




    // let ret = []
    // for (const i of arr1) {
    //     //ret.push(<div className='box1'>{i}</div>)
    //     ret.push(<div className={styles.box2}>{i}</div>)
    // }
    let ret = arr1.map((no)=>(<div className={styles.box2}>{no}</div>))

    return <div>{ret}</div>
}


export default Arr
