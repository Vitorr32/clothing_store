import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';
import rootReducer from './root_reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  //Set Development only middlewares
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
