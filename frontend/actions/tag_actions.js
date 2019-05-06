import * as TagApiUtil from '../util/tag_api_utl';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";

export const receiveTags = (tags) => ({
    type: RECEIVE_TAGS, 
    tags
})

export const receiveTag = (tag) => ({
    type: RECEIVE_TAG, 
    tag
})

export const fetchTags = () => dispatch => (
    TagApiUtil.fetchTags().then(tags => dispatch(receiveTags(tags)))
)

export const fetchTag = (id) => dispatch => (
    TagApiUtil.fetchTag(id).then(tag => dispatch(receiveTag(tag)))
)