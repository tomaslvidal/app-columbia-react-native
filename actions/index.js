import * as types from 'ColumbiaViajes3/constants/ActionTypes';

const setLoguedAccount = item => async dispatch => {
    dispatch({
        type: types.SET_LOGUED_ACCOUNT,
        payload: item
    });
};

const setDestinations = item => async dispatch => {
    dispatch({
        type: types.SET_DESTINATIONS,
        payload: item
    });
};

const setVouchers = item => async dispatch => {
    dispatch({
        type: types.SET_VOUCHERS,
        payload: item
    });
};

const setSurveys = item => async dispatch => {
    dispatch({
        type: types.SET_SURVEYS,
        payload: item
    });
};

const updateDestination = item => async dispatch => {
    dispatch({
        type: types.UPDATE_DESTINATION,
        payload: {
            key: item.key,
            data: item.data
        }
    });
};

export { setLoguedAccount, setDestinations, updateDestination, setVouchers, setSurveys };