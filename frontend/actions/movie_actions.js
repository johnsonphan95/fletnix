import * as MoviesApiUtil from '../util/movie_api_util';

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

export const receiveMovies = (movies) => ({
    type: RECEIVE_MOVIES, 
    movies
})


export const fetchMovies = () => dispatch => (
    MoviesApiUtil.fetchMovies().then(movies => dispatch(receiveMovies(movies)))
)

export const findMovies = (query) => dispatch => (
    MoviesApiUtil.findMovies(query).then(movies => dispatch(receiveMovies(movies)))
)

