import {connect} from 'react-redux';
import MoviesIndex from './movies_index';
import { fetchMovies } from '../../actions/movie_actions';
import { fetchGenres } from '../../actions/genre_actions';
import { fetchTags } from '../../actions/tag_actions';

const mapStateToProps = ({entities}) => {
    let movies = Object.values(entities.movies);
    let genres = Object.values(entities.genres);
    return({
        movies: movies,
        genres: genres
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()), 
        fetchGenres: () => dispatch(fetchGenres()), 
        fetchTags: () => dispatch(fetchTags())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);