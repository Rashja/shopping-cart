const initialState={
    activePage:1,
    info:[]
};

const pagesReducer=(state=initialState,action)=>{
    switch(action.type){

        case 'HANDLE_CHANGE':
            return {
                activePage:action.pageNumber,
                info:action.info
            };

        default:
            return state;
    }
}
export default pagesReducer;