import axios from 'axios';
import { ADD_NOMINATION, REMOVE_NOMINATION, CLOSE_BANNER } from './types';

export const addNomination = imdbID => dispatch => {
    let apiKey = '7a01915b';
    let url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}&type=movie`;
    axios
        .get(url)
        .then(response => 
            dispatch({
                type: ADD_NOMINATION,
                payload: response.data
            }))
        .catch(error => console.log(error));
};

export const removeNomination = imdbID => dispatch => {
    dispatch({
        type: REMOVE_NOMINATION,
        payload: imdbID
    });
};

export const closeBanner = () => dispatch => {
    dispatch({
        type: CLOSE_BANNER
    });
};