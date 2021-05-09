import { CHANGE_SEARCH, RETRIEVE_MOVIES } from '../actions/types';

const defaultState = {
    input: '',
    movieList: []
};

const movieReducer = (state = defaultState, action) => {
    switch(action.type){
        case CHANGE_SEARCH:
            return {
                ...state,
                input: action.payload
            }
        case RETRIEVE_MOVIES:
            console.log(action.payload);
            if (action.payload.Response === 'False'){
                return {
                    ...state,
                    movieList: []
                }
            }
            return {
                ...state,
                movieList: action.payload
            }
        default:
            return state;
    };
};

export default movieReducer;