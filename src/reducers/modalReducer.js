const initialState={mode:undefined}

const modalReducer=(state=initialState,action)=>{

    switch(action.type){
        case 'MODAL_CLICK':
            return {mode:!!state};
        case 'CLOSE_MODAL':
            return !state;    
        default:
            return state;
    }
}
export default modalReducer;