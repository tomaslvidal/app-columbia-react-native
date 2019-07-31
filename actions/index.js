import * as types from '../constants/ActionTypes';

const setLoguedAccount = item => ({
    type: types.SET_LOGUED_ACCOUNT,
    payload: item
});

const setDestinations = item => {
    return({
        type: types.SET_DESTINATIONS,
        payload: item
    });
};

export { setLoguedAccount, setDestinations };