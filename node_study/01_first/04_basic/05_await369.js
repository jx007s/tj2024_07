function pm369(no){
    let one = no % 10
    return new Promise((resolve, reject)=>{
        if(one%3 || !one){
            resolve(no)
        }else{
            reject("짝")
        }
    
    })
}

async function exec(){

    for (let i = 1; i <=20; i++) {
        try {
            let res = await pm369(i)
            console.log(res)    
        } catch (error) {
            console.log(error)
        }
        
    }
    
}

exec()

