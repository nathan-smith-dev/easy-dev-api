import { FETCH_USER } from '../actions/types';

const initialState = {
    user: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                user: action.payload || false
            };
        default:
            return state;
    }
};

export default reducer;
