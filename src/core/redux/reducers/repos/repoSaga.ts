import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchReposStart, fetchReposSuccess, fetchReposFailure } from './repoSlice';
import { fetchReposApi } from './repoApi';
import type { SagaIterator } from 'redux-saga';

function* fetchReposSaga(action: ReturnType<typeof fetchReposStart>): SagaIterator {
  try {
    const param = action.payload;
    const data = yield call(fetchReposApi, param.urlRepo);
    yield put(fetchReposSuccess(data));
  } catch (error: any) {
    yield put(fetchReposFailure(error.message));
  }
}

export default function* Reposaga() {
  yield takeLatest(fetchReposStart.type, fetchReposSaga);
}
