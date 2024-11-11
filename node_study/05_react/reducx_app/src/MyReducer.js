const initState = {
    count : 0
}

function MyReducer(state = initState, action) {
    switch(action.type){

        case 'INCREMENT':
            return {count : state.count + 1}
    
        default:
            return state;
    }
}

export default MyReducer;