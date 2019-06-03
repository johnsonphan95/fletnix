import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import genresReducer from './genres_reducer';
import tagsReducer from './tags_reducer';

export default combineReducers({
    users: usersReducer, 
    movies: moviesReducer, 
    genres: genresReducer
})