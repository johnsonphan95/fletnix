export const RECEIVE_SEARCH_ITEMS = "RECEIVE_SEARCH_ITEMS";

export const receiveSearchItems = (phrase) => ({
    type: RECEIVE_SEARCH_ITEMS, 
    phrase
})