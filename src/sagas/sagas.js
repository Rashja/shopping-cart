import {takeEvery} from 'redux-saga';
import {all,put} from 'redux-saga/effects';

function* fetchList(){
  const json=yield fetch('http://5c18eb2ccfe31000133b17a2.mockapi.io/product-items')
        .then(res=>res.json());
        yield put({type:'FETCH_LIST',json})
}


function* actionWatcher(){
  yield takeEvery('GET_DATA',fetchList)
}

export default function* rootSaga(){
  yield all([actionWatcher()])
}




