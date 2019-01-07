const initialState={mode:false};

const userReducer=(state=initialState,action)=>{
    switch(action.type){

        case 'SHOW_USER_DATA':
            return {
                userData:action.userData,
                mode:false
            }
        case 'GET_MODE':
            return {...state,mode:true}
        
        case 'LOG_OUT':
            return {...state,mode:false}

        default:
            return state;
    }
}
export default userReducer;