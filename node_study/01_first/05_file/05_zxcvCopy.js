const fs = require('fs')

//  img, music, doc, etc
/// 하위 폴더까지 검색하세요


//이미지 : bmp, jpg, gif, png , jpeg

//음악 : mp3, wma, wav

//문서 :doc, hwp, ppt, xls, pptx, xlsx. docx

//기타 : 위의 분류 이외


let exts = {
    'bmp':'img','jpg':'img','gif':'img','png':'img','jpeg':'img',
    'doc':'doc','hwp':'doc','ppt':'doc','xls':'doc','pptx':'doc','xlsx':'doc','docx':'doc',
    'mp3':'music','wma':'music','wav':'music'
}

function dirMake(dPath){
    try {
        
        fs.accessSync(dPath)
        console.log("폴더있음")    
    } catch (error) {
        console.log("폴더없음")    
        fs.mkdirSync(dPath)
    }
}

let dirName = '../../te5y'


function copyGo(nowDir){
    
    dirMake(dirName)

    // 디렉토리내 파일, 폴더 보기
    let files = fs.readdirSync(nowDir)
    //console.log(files)

    for (const ff of files) {

        const st = fs.statSync(nowDir+'/'+ff)
        
        if(st.isDirectory()){  //디렉토리 인경우
            copyGo(nowDir+"/"+ff)
        }else{ //파일인 경우

            let ext = ff.substring(ff.lastIndexOf(".")+1).toLowerCase()
            

            let extDir = 'etc'
            if(ext in exts){
                extDir = exts[ext]
            }

            dirMake(dirName+'/'+extDir)
            console.log(ff,  ext, extDir)

            //파일명 중복 처리

            fs.copyFileSync(nowDir+'/'+ff, dirName+'/'+extDir+'/'+ff)


        }
        
    }
}

copyGo('../../zxcv')



