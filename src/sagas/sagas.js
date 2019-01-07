import { takeEvery } from 'redux-saga';
import { all,put } from 'redux-saga/effects';
import axios from "axios";
import { fetchListItem,showUserData } from "./../actions";

function* fetchList(){
  const json=yield axios.get('http://5c18eb2ccfe31000133b17a2.mockapi.io/product-items')
      .then(res=>res)
      .catch(error=>{
      console.log(error)
    })
  const Json=json.data
  yield put(fetchListItem(Json));
}
function* fetchUserInfo(){
  const json=yield axios.get('http://localhost:3000/posts')
      .then(res=>res)
      .catch(err=>{
      console.log(err);
    })
  const Json=json.data;    
  yield put(showUserData(Json))  
}
function* actionWatcher(){
  yield takeEvery('GET_DATA',fetchList);
  yield takeEvery('CHECK_OUT',fetchList);
  yield takeEvery('GET_USER_DATA',fetchUserInfo);
}

export default function* rootSaga(){
  yield all([actionWatcher()])
}




