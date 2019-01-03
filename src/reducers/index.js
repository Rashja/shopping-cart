import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './../sagas/sagas';
import reducers from './combiner';

const sagaMiddleware=createSagaMiddleware();

const persistConfig={
    key:'app',
    storage
}
const persistedReducer=persistReducer(persistConfig,reducers)

const store=createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const persistor=persistStore(store)


export {store,persistor};