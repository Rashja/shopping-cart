import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import modalReducer from './modalReducer';
import cartReducer from "./cartReducer";
import pagesReducer from './pagesReducer';
import searchReducer from './searchReducer'

const reducers=combineReducers({
    productsReducer,
    searchReducer,
    modalReducer,
    pagesReducer,
    cartReducer
});

export default reducers;