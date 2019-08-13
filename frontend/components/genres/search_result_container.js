import { connect } from 'react-redux';
import SearchResult from '././search_result';
import { fetchMovies, findMovies } from '../../actions/movie_actions';
import { fetchGenres, findGenres } from '../../actions/genre_actions';


const mapStateToProps = ({ entities }) => {
    return ({
        movies: entities.movies, 
        genres: entities.genres, 
        query: entities.search.phrase
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        // fetchMovies: () => dispatch(fetchMovies()), 
        // fetchGenres: () => dispatch(fetchGenres()), 
        findMovies: () => dispatch(findMovies()), 
        findGenres: () => dispatch(findGenres()), 
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);