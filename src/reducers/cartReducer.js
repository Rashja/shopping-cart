const initialState={
    addedIds : [],
    quantityById:{}
}
const addedIds=(state=initialState,action)=>{
    if(state.indexOf(action.id) !== -1 ){
        return state
    } 
    return [...state,action.id]
}
const quantityById=(state=initialState,action)=>{
    const { id } = action;
    return{
        ...state,
        [id] : (state[id] || 0 ) + 1
    }
}
const cartReducer=(state=initialState,action)=>{
    console.log(state);
    
    switch(action.type){

        case 'ADD_TO_CART' :
            return {
                addedIds : addedIds(state.addedIds,action),
                quantityById:quantityById(state.quantityById,action)
            }
        case 'CHECK_OUT':
            return initialState;

        default :
            return state;
    }
}

export default cartReducer;