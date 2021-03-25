import axios from 'axios';
import { CHANGE_SEARCH, RETRIEVE_MOVIES } from './types';

export const changeSearch = input => dispatch => {
    dispatch({
        type: CHANGE_SEARCH,
        payload: input
    })
};

export const retrieveMovies = input => dispatch => {
    let apiKey = '7a01915b';
    let url = `https://www.omdbapi.com/?s=${input}&apikey=${apiKey}&type=movie`;
    axios
        .get(url)
        .then(response => 
            dispatch({
                type: RETRIEVE_MOVIES,
                payload: response.data
            }))
        .catch(error => console.log(error));
};