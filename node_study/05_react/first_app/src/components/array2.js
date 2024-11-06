import styles from './arr2.module.css'

const arr2 = [
    {class:'box2',
     content:'아기상어',
     img: 'aaa.jpg'   
    },
    {class:'box2',
        content:'엄마상어',
        img: 'bbb.png'
    },
    {class:'box3',
     content:'아빠상어',
     img: 'ccc.jpg'
    }
]

const Arr2 = ()=>{

    return(
        <div>{
            arr2.map((item, idx)=>( 
                <div className={styles[item.class]}>
                    <h2>{item.content}</h2>
                    <img src={item.img} />
                </div>
            ))
            
        }</div>
    )
}

export default Arr2