import { createStore, applyMiddleware } from 'redux';

import rootReducer from './root_reducer';

const store = createStore(rootReducer, applyMiddleware());

export default store;
