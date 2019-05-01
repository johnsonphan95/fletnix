import {combineReducers} from 'redux';
import usersReducers from './users_reducer';

export default combineReducers({
    users: usersReducers
})