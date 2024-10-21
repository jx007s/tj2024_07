const fs = require('fs')

let dirName = '../../zxcv'
//dirName = 'aaa.txt'  //디렉토리만 가능

// 디렉토리내 파일, 폴더 보기
let files = fs.readdirSync(dirName)
//console.log(files)

for (const i in files) {

    const st = fs.statSync(dirName+'/'+files[i])
    let size = '[dir]'
    if(st.isFile()){
        size = st.size
    }
    console.log(i, files[i],size , st.birthtime, st.mtime)
}