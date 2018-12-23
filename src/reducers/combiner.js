import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import modalReducer from './modalReducer';
import cartReducer from "./cartReducer";

const reducers=combineReducers({
    productsReducer,
    modalReducer,
    cartReducer
});

export default reducers;