import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import nominationReducer from './nominationReducer';

export default combineReducers({
    omdb: movieReducer,
    userList: nominationReducer
});