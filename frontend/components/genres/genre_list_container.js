import { connect } from 'react-redux';
import GenreList from './genre_list';
import { fetchMovies } from '../../actions/movie_actions';


const mapStateToProps = ({ entities }) => {
    return ({
        movies: entities.movies
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchMovies: () => dispatch(fetchMovies())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);