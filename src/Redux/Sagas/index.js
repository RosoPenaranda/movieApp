import { all } from 'redux-saga/effects';

import { fetchTopFive } from './moviesSagas';

export default function* rootSaga() {
  yield all([fetchTopFive()]);
}
