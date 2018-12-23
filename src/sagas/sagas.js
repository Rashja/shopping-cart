import {takeEvery} from 'redux-saga';
import {all,put} from 'redux-saga/effects';
import axios from "axios";
import { fetchListItem } from "./../actions";

function* fetchList(){
  const json=yield axios.get('http://5c18eb2ccfe31000133b17a2.mockapi.io/product-items')
        .then(res=>res);
        const Json=json.data
        yield put(fetchListItem(Json))
}

function* actionWatcher(){
  yield takeEvery('GET_DATA',fetchList);
  yield takeEvery('CHECK_OUT',fetchList);

}

export default function* rootSaga(){
  yield all([actionWatcher()])
}




