import {takeEvery} from 'redux-saga';
import {all,put} from 'redux-saga/effects';
import axios from "axios";

function* fetchList(){
  const json=yield axios.get('http://5c18eb2ccfe31000133b17a2.mockapi.io/product-items')
        .then(res=>res);
        yield put({type:'FETCH_LIST',json:json.data})
}

function* actionWatcher(){
  yield takeEvery('GET_DATA',fetchList)
}

export default function* rootSaga(){
  yield all([actionWatcher()])
}




