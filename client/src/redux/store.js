import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';
import rootReducer from './root_reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root_saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  //Set Development only middlewares
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
