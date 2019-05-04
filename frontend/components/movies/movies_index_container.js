import {connect} from 'react-redux';
import MoviesIndex from './movies_index';
import { requestMovies } from '../../actions/movie_actions'

const mapStateToProps = ({entities}) => {
    let movies = Object.values(entities.movies);
    return({
        movies: movies
    })
}

const mapDispatchToProps = dispatch => {
    return({
        requestMovies: () => dispatch(requestMovies())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);