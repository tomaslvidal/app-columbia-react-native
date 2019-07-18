import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import thunk from 'redux-thunk';

import reducer from '../reducers';

const store = createStore(
    reducer,
    {},
    applyMiddleware(logger, thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(logger, thunk))
);

export default store;