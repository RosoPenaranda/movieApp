import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_TOP_FIVE,
  ACTION_SUCCESS,
  ACTION_FAILURE,
} from '../Actions/types';

import API from '../../Api/index';

function* getTopFive(action) {
  try {
    const payload = yield call(API.movies.getTopFive, action.payload);
    yield put({ type: ACTION_SUCCESS, payload });
  } catch (error) {
    yield put({
      type: ACTION_FAILURE,
      payload: 'We had problems with the query, please try again later.',
    });
  }
}

export function* fetchTopFive() {
  yield takeLatest(FETCH_TOP_FIVE, getTopFive);
}
