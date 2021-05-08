import { ADD_NOMINATION, REMOVE_NOMINATION, CLOSE_BANNER } from '../actions/types';

const defaultState = {
    nominations: JSON.parse(localStorage.getItem('nominations')||'[]'),
    imdbID: JSON.parse(localStorage.getItem('imdbID')||'[]'),
    show: false
};

const nominationReducer = (state=defaultState, action) => {
    switch (action.type){
        case ADD_NOMINATION:
            localStorage.setItem('nominations', JSON.stringify([...state.nominations, action.payload]));
            localStorage.setItem('imdbID', JSON.stringify([...state.imdbID, action.payload.imdbID]));
            let newShow = state.nominations.length === 4 ? true : false;
            return {
                show: newShow,
                nominations: [...state.nominations, action.payload],
                imdbID: [...state.imdbID, action.payload.imdbID]
            };
        case REMOVE_NOMINATION:
            localStorage.setItem('nominations', 
                JSON.stringify(state.nominations.filter(nomination => nomination.imdbID !== action.payload)));
            localStorage.setItem('imdbID', 
                JSON.stringify(state.imdbID.filter(id => id !== action.payload)));
            return {
                ...state,
                nominations: state.nominations.filter(nomination => nomination.imdbID !== action.payload),
                imdbID: state.imdbID.filter(id => id !== action.payload)
            };

        case CLOSE_BANNER:
            return {
                ...state,
                show: false
            }
        default:
            return state;
    }
};

export default nominationReducer;