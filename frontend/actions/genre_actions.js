import * as GenreApiUtil from '../util/genre_api_util'

export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

export const receiveGenres = (genres) => ({
    type: RECEIVE_GENRES,
    genres
})

export const receiveGenre = (genre) => ({
    type: RECEIVE_GENRE, 
    genre
})

export const fetchGenres = () => dispatch => (
    GenreApiUtil.fetchGenres().then(genres => dispatch(receiveGenres(genres)))
)

export const fetchGenre = (id) => dispatch => (
    GenreApiUtil.fetchGenre(id).then(genre => dispatch(receiveGenre(genre)))
)

export const findGenres = (query) => dispatch => (
    GenreApiUtil.findGenres(query).then(Genres => dispatch(receiveGenres(movies)))
)