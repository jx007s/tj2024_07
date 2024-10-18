const fs = require('fs')

let res = {
    'c':[],
    'pf':[],
    'sf':[],
    'sg':[],
    'pg':[]
}

fs.readFile('./buksan.txt',(error, data)=>{
    if(error){
        console.log('에러')
        return ;
    }
    const arr = data.toString().replaceAll('\r','').split('\n')

    for (const pl of arr ) {
        const player = pl.split(',')
        res[player[2]].push(player[1])
    }
    //console.log(res)
})

fs.readFile('./neungnam.txt',(error, data)=>{
    if(error){
        console.log('에러')
        return ;
    }
    const arr = data.toString().replaceAll('\r','').split('\n')

    for (const pl of arr ) {
        const player = pl.split(',')
        res[player[2]].push(player[1])
    }
    //console.log(res)
})

fs.readFile('./haenam.txt',(error, data)=>{
    if(error){
        console.log('에러')
        return ;
    }
    const arr = data.toString().replaceAll('\r','').split('\n')

    for (const pl of arr ) {
        const player = pl.split(',')
        res[player[2]].push(player[1])
    }
    console.log(res)
})


