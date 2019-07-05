import {connect} from 'react-redux';
import GenreIndex from './genres_index';
import {fetchGenres, fetchGenre} from '../../actions/genre_actions';
import { fetchMovies } from '../../actions/movie_actions';
import { mainMovie } from '../helpers/genres_selector';


const mapStateToProps = ({entities}, ownProps) => {
    // let genres = Object.values(entities.genres);
    return ({
        genres: entities.genres, 
        movies: entities.movies, 
        genreId: ownProps.match.params.genreId, 
        mainMovie: mainMovie(entities.movies), 
        phrase: entities.search.phrase
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchGenres: () => dispatch(fetchGenres()),
        fetchMovies: () => dispatch(fetchMovies())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex);