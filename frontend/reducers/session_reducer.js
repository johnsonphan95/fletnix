import { RECEIVE_CURRENT_USER,
         LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash'

const sessionReducer = (state = { id: null }, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            newState = merge({}, state);
            newState.id = action.currentUser.id
            return newState;
        case LOGOUT_CURRENT_USER: 
            newState = merge({}, state);
            newState.id = null;
            return newState;
        default: 
            return state;
    }
}

export default sessionReducer;