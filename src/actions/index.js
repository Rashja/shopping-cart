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
export const handleChange=({pageNumber,info})=>({
    type:'HANDLE_CHANGE',
    pageNumber,
    info
});
export const getValue=(inputValue)=>({
    type:'GET_VALUE',
    inputValue
})
export const getUserData=()=>({
    type:'GET_USER_DATA',
})
export const showUserData=(userData)=>({
    type:'SHOW_USER_DATA',
    userData
})
export const getMode=()=>({
    type:'GET_MODE',
})
export const logOut=()=>({
    type:'LOG_OUT',
})


