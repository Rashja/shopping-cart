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