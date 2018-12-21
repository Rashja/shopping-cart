export const getData=()=>({
    type : 'GET_DATA'
});
export const addToCart=(id)=>({
    type:'ADD_TO_CART',
    id
});
export const modalClick=()=>({
    type:'MODAL_CLICK'
});
export const closeModal=()=>({
    type :'CLOSE_MODAL'
});
