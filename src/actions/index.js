export const getData=()=>({
    type : 'GET_DATA'
});
export const addToCart=(id)=>({
    type:'ADD_TO_CART',
    id
});
export const modalClick=(product)=>({
    type:'MODAL_CLICK',
    product
});
export const closeModal=()=>({
    type :'CLOSE_MODAL'
});
export const fetchListItem=(Json)=>({
    type:'FETCH_LIST',
    Json
});
export const productPage=(item)=>({
    type : 'PRODUCT_PAGE',
    item
})
export const checkOut=()=>({
    type:'CHECK_OUT'
})
export const handleDelete=(id)=>({
    type:'HANDLE_DELETE',
    id
})
export const addItemFromModal=item=>({
    type:'ADD_ITEM_FROM_MODAL',
    item
})
