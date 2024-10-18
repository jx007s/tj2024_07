const fs = require('fs')

let res = {}
const title = ['등번호','이름','포지션']
// const pl = '4,채치수,c'
// const arr = pl.split(',')

// const player = {}
// for (const i in title) {
//     player[title[i]] = arr[i]
// }

// // player[title[1]] = arr[1]
// // player[title[2]] = arr[2]

// console.log(player)

// if(!(player['포지션'] in res)){
//     res[player['포지션']] = []
// }
// res[player['포지션']].push(player)

// console.log(res)


function teamAdd(fName){
    fs.readFile('./'+fName+'.txt',(error, data)=>{
        if(error){
            console.log('에러')
            return ;
        }
        const arr = data.toString().replaceAll('\r','').split('\n')

        for (const pl of arr ) {
            const arr = pl.split(',')
            const player = {}
            for (const i in title) {
                player[title[i]] = arr[i]
            }
            player['팀'] = fName


            if(!(player['포지션'] in res)){
                res[player['포지션']] = []
            }
            res[player['포지션']].push(player)
            //res[player[2]].push(player[1]+'('+fName+')')
        }
        console.log(res)
    })
}
// for (const team of 'buksan,neungnam,haenam'.split(',')) {
//     teamAdd(team)
// }


fs.readFile('./teams.txt',(error, data)=>{
    if(error){
        console.log('에러')
        return ;
    }
    const arr = data.toString().replaceAll('\r','').split('\n')
    for (const team of arr ) {
        teamAdd(team)
    }

})





