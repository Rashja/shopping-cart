const initialState={mode:undefined}

const modalReducer=(state=initialState,action)=>{

    switch(action.type){
        case 'MODAL_CLICK':
            const product=action.product;
            const newProduct=Object.assign(product, {mode: true});
            return newProduct;
            
        case 'CLOSE_MODAL':
            return !state;
            
        case 'ADD_ITEM_FROM_MODAL':
            return {mode:!state}

        default:
            return state;
    }
}
export default modalReducer;