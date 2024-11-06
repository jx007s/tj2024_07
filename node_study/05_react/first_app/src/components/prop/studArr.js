import Stud from './stud'
import Stud2 from './stud2'

function StudArr(){
    
    let person= {pname:'두가인', age:27, gender:'f' , marriage:true}
    let arr = [
        {pname:'현빈', age:47, gender:'m' , marriage:true},
        {pname:'원빈', age:37, gender:'m' , marriage:false},
        {pname:'투빈', age:27, gender:'f' , marriage:true},
        {pname:'장희빈', age:17, gender:'f' , marriage:false}
    ]

    return <div>
        <Stud pname={person.pname} 
        age={person.age} 
        gender={person.gender} 
        marriage={person.marriage}/>
        {
            // arr.map((ee, i)=>{
            //     console.log('무야호')
            //     return <Stud pname={ee.pname} 
            //             age={ee.age} 
            //             gender={ee.gender} 
            //             marriage={ee.marriage}/>}
            // )
            arr.map((ee, i)=>(<Stud pname={ee.pname} 
                            age={ee.age} 
                            gender={ee.gender} 
                            marriage={ee.marriage}/>)
                )

        }
        <hr/>
        <Stud2 data={person}/>
        {arr.map((ee, i)=>(<Stud2 data={ee}/>))}
    </div>

}

export default StudArr