import { combineReducers } from 'redux';

import accountReducer from './account';

import destinationsReducer from './destinations';

export default combineReducers({
    account: accountReducer,
    destinations: destinationsReducer
});