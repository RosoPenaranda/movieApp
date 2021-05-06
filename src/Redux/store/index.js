import { createStore, applyMiddleware } from 'redux';
import reduxSaga from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../Reducers/';
import rootSaga from '../Sagas/';
import initialState from '../Reducers/initialState';

const sagaMiddleware = reduxSaga();
export default () => {
  return {
    ...createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};
