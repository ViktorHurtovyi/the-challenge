import { put, takeEvery, call } from 'redux-saga/effects';
import { itemsFetchDataSuccess } from '../actions/items';

function fetchData() {
  return fetch('http://5af1eee530f9490014ead8c4.mockapi.io/items')
    .then((response) => response.json());
}

function* workerLoadData() {
  const data = yield call(fetchData);

  yield put(itemsFetchDataSuccess(data));
}

export default function* watchLoadData() {
  yield takeEvery('LOAD_DATA', workerLoadData);
}
