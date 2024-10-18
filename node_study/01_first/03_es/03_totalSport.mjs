import curr from './03_currSport.mjs'

//console.log(curr)

const sports = await import(curr)

//console.log(sports)
// for (const k in sports) {
//     //console.log(k)
//     console.log(k, " : ", sports[k])
// }

//const title = ['title','tool','cnt']
const title = {'title':'제목','tool':'도구','cnt':'인원'}
for (const k in title) {
    //console.log(k)
    console.log(title[k], " : ", sports[k])
}