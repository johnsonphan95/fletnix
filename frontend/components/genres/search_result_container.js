import { connect } from 'react-redux';
import SearchResult from '././search_result';
import { fetchMovies, findMovies } from '../../actions/movie_actions';
import { findGenres } from '../../actions/genre_actions';


const mapStateToProps = ({ entities }) => {
    return ({
        movies: entities.movies, 
        genres: entities.genres, 
        query: entities.search.phrase
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchMovies: () => dispatch(fetchMovies()),
        findMovies: (query) => dispatch(findMovies(query)), 
        findGenres: (query) => dispatch(findGenres(query)), 
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);