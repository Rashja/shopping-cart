const initialState=[];

const searchReducer=(satte=initialState,action)=>{
    switch(action.type){

        case 'GET_VALUE':
            return action.inputValue;

        default:
            return satte;
    }
};
export default searchReducer;