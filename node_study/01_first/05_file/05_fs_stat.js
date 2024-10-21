const fs = require('fs')

const fName = 'aaa.txt'

// 파일 정보 보기 - callback 비동기
// fs.stat(fName, (err, st)=>{

//     console.log("파일크기 : ",st.size,'byte')
//     console.log("생성시간 : ",st.birthtime)
//     console.log("수정시간 : ",st.mtime)
//     console.log("접근시간 : ",st.atime)
//     console.log("파일여부 : ",st.isFile())
//     console.log("디렉토리여부 : ",st.isDirectory())
// })

//동기
const st = fs.statSync(fName)
console.log("파일크기 : ",st.size,'byte')
console.log("생성시간 : ",st.birthtime)
console.log("수정시간 : ",st.mtime)
console.log("접근시간 : ",st.atime)
console.log("파일여부 : ",st.isFile())
console.log("디렉토리여부 : ",st.isDirectory())



