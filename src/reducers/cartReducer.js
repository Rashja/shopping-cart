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
        [id] : (state[id] || 0 ) +1 
    }
}
const deleteProduct=(state=initialState,action)=>{
    const id=action.id;
    const quantityProduct= state.quantityById;
    if(state.quantityById[id] > 1){
        return {
            ...state,
             quantityById : {
                    ...quantityProduct,
                 [id]:quantityProduct[id] -1
             }
        } 
    }
    return {
            addedIds:
                    state.addedIds.filter(({ID})=>{
                    return ID ==!action.id
                }),
            quantityById:Object.keys(state.quantityById).filter((ID)=>{
                return ID ==! action.id
            }).reduce((obj,id)=>{
            obj[id]=state.quantityById[id]
            return obj
        },{})
    }
}
const cartReducer=(state=initialState,action)=>{
    
    switch(action.type){

        case 'ADD_TO_CART' :
            return {
                addedIds : addedIds(state.addedIds,action),
                quantityById:quantityById(state.quantityById,action)
            }

        case 'CHECK_OUT':
            return initialState;

        case 'HANDLE_DELETE':
           
            return deleteProduct(state,action)
        
        default :
            return state;
    }
}

export default cartReducer;