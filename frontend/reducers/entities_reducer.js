import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';

export default combineReducers({
    users: usersReducer, 
    movies: moviesReducer
})