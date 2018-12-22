const initialState=[];

const productsReducer=(state=initialState,action)=>{
        
    switch(action.type){
        case 'GET_DATA':
            return {...state}
            
        case 'FETCH_LIST':
            return action.Json;

        case 'PRODUCT_PAGE':
            return action.item;

        case 'ADD_TO_CART':
            let id=action.id -1;
            let product=state[id]
            return {
                ...state,
                [id]:{
                    ...product,
                    inventory:product.inventory -1
                }
            };
            
        default:
            return state;
    }
}
export default productsReducer;