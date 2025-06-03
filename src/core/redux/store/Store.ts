import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from '../reducers/users/userSlice';
import repoReducer from '../reducers/repos/repoSlice';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer,
    repos: repoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});



sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
