import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import root from './sagas';

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default createStore(reducer, initialState, enhancer);

sagaMiddleware.run(root, initialState);
