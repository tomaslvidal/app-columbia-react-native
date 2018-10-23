import { SET_LOGUED_ACCOUNT } from '../constants/ActionTypes';

const initialState = {
  account: {}
};

const accountReducer = (state = initialState.account, action) => {
  switch (action.type) {
    case SET_LOGUED_ACCOUNT:
      return {
        ...state, 
        ...action.payload
      };
    default:
      return state;
  }
};

export default accountReducer;