import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from './userSlice';
import { fetchUsersApi } from './userApi';
import type { SagaIterator } from 'redux-saga';

function* fetchUsersSaga(action: ReturnType<typeof fetchUsersStart>): SagaIterator {
  try {
    const param = action.payload;
    const data = yield call(fetchUsersApi, param.username, param.total);
    yield put(fetchUsersSuccess(data));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUsersStart.type, fetchUsersSaga);
}
