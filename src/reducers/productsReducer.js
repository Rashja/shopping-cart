const initialState={products: [], currentProduct: undefined };

const productsReducer=(state=initialState,action)=>{
        
    switch(action.type){
            
        case 'FETCH_LIST':
            return {...state, products: action.Json};

        case 'PRODUCT_PAGE':
            return {...state, currentProduct: action.item.id};

        case 'HANDLE_DELETE':
        let retriveProduct=state.products[action.id]
            return{
                    ...state,
                    products: {
                        ...state.products,
                        [action.id]:{
                            ...retriveProduct,
                            inventory:retriveProduct.inventory +1
                        }
                    }
                    
                }

        case 'ADD_TO_CART':
            let id=action.id;
            let product=state.products[id]
            return {
                ...state,
                products:{
                    ...state.products,
                    [id]:{
                        ...product,
                        inventory:product.inventory -1
                    }
    
                }
            };
            
        default:
            return state;
    }
}
export default productsReducer;