import { RECEIVE_SEARCH_PHRASE } from '../actions/search_actions';
import merge from 'lodash';

const searchReducer = (state={phrase: ""}, action) => {
    Object.freeze(state); 
    let newState; 
    switch(action.type) {
        case RECEIVE_SEARCH_PHRASE: 
            newState = merge({}, state);
            newState.phrase = action.phrase; 
            return newState;
        default: 
            return state; 
    }
}

export default searchReducer;