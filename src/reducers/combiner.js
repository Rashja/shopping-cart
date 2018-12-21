import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import modalReducer from './modalReducer';

const reducers=combineReducers({
    productsReducer,
    modalReducer
});

export default reducers;