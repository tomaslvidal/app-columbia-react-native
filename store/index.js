import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import thunk from 'redux-thunk';

import reducer from '../reducers';

// const store = createStore(
// 	reducer,
// 	{},
// 	applyMiddleware(logger, thunk)
// );

const store = createStore(
  reducer,	
  {},	
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(	
    applyMiddleware(logger, thunk)	
  )	
);

export default store;