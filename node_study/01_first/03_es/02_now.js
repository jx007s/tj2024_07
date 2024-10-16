let now = new Date()


/*
아침 : 00~10
점심 : 10~16
저녁 : 나머지
*/

let ttt = 'dinner'
if(now.getHours()<=10){
    ttt = 'break'
}else if(now.getHours()<=16){
    ttt = 'lunch'
}

//console.log(now.getHours(), ttt)

module.exports.ttt = './02_'+ttt