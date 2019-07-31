import { SET_DESTINATIONS } from '../constants/ActionTypes';

const initialState = {
    destinations: {
        items: [],
        loading: true
    }
};

const destinationsReducer = (state = initialState.destinations, action) => {
    console.log("x333: ", action)
    
    switch(action.type){
        case SET_DESTINATIONS:
            return action.then(res => {
                return {
                    ...state,
                    ...res.payload
                }
            });
        default:
            return state;
    }
};

export default destinationsReducer;