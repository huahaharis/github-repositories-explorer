import { all, fork } from 'redux-saga/effects';
import userSaga from '../reducers/users/userSaga';
import repoSaga from '../reducers/repos/repoSaga';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(repoSaga),
  ]);
}
