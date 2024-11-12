const initState = {
    count : 0,
    arr : ['난 원래있는 놈이야','나도있었지']
}

function MyReducer(state = initState, action) {
    switch(action.type){

        case 'INCREMENT':
            return {count : state.count + 1}
        
        case 'ADD':
            
            return {
                ...state,
                arr : [...state.arr, action.asdf]}
        
        case 'DEL':
            
            
            const newArr = [...state.arr]
            //console.log('삭제 번호 : ', action.asdf, newArr)
            newArr.splice(action.asdf,1)
            //console.log('삭제완료 : ', newArr)
            return {
                ...state,
                arr : newArr}
    
        default:
            return state;
    }
}

export default MyReducer;