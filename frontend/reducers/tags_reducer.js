import { RECEIVE_TAGS, RECEIVE_TAG } from '../actions/tag_actions';
import { merge } from 'lodash';

const tagsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_TAGS:
            return action.tags;
        default: 
            return state;
    }
}

export default tagsReducer;