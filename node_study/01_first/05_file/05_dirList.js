const fs = require('fs')

let dirName = '../../zxcv'
//dirName = 'aaa.txt'  //디렉토리만 가능

// 디렉토리내 파일, 폴더 보기
fs.readdir(dirName,  // 경로
    (err, files)=>{
    //에러, 파일들

    if(err){
        console.log('디렉토리 에러')
        return
    }


    for (const i in files) {

        const st = fs.statSync(dirName+'/'+files[i])
        let size = '[dir]'
        if(st.isFile()){
            size = st.size
        }
        console.log(i, files[i],size , st.birthtime, st.mtime)
    }

})


//지정한 폴더의 파일을 각각 종류별로 지정 폴더에 저장하시오
// 'rtyu'
 ///  img, music, doc, etc

/// 하위 폴더까지 검색하세요


//이미지 : bmp, jpg, gif, png , jpeg

//음악 : mp3, wma, wav

//문서 :doc, hwp, ppt, xls, pptx, xlsx. docx

//기타 : 위의 분류 이외

//확장자의 대소문자 구분하지 않음