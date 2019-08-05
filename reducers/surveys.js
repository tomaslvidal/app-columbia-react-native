import { SET_SURVEYS } from '../constants/ActionTypes';

const initialState = {
    surveys: {
        items: [],
        loading: true,
        is_refreshing: false,
        hiddens: {}
    }
};

const surveysReducer = (state = initialState.surveys, action) => {
    switch(action.type){
        case SET_SURVEYS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default surveysReducer;