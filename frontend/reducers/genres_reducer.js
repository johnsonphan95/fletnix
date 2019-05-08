import { RECEIVE_GENRES, RECEIVE_GENRE } from '../actions/genre_actions';
import merge from 'lodash';

const genresReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_GENRES:
            return action.genres;
        case RECEIVE_GENRE: 
            newState = merge({}, state);
            return newState
        default:
            return state;
    }
}

export default genresReducer;