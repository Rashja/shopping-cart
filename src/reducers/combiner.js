import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import modalReducer from './modalReducer';
import cartReducer from "./cartReducer";
import searchReducer from './searchReducer';

const reducers=combineReducers({
    productsReducer,
    modalReducer,
    searchReducer,
    cartReducer
});

export default reducers;