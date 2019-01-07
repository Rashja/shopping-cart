import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import modalReducer from './modalReducer';
import cartReducer from "./cartReducer";
import searchReducer from './searchReducer';
import userReducer from './userReducer';

const reducers=combineReducers({
    productsReducer,
    modalReducer,
    searchReducer,
    cartReducer,
    userReducer
});

export default reducers;