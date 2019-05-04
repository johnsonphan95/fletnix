import * as MoviesApiUtil from '../util/movie_api_util';

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

export const receiveMovies = (movies) => ({
    type: RECEIVE_MOVIES, 
    movies
})

export const requestMovies = () => dispatch => (
    MoviesApiUtil.requestMovies().then(movies => dispatch(receiveMovies(movies)))
)