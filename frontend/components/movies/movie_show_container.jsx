import {connect} from 'react-redux';
import MovieShow from './movie_show';
import {withRouter} from 'react-router-dom';
import {fetchMovies} from '../../actions/movie_actions';

const mapStateToProps = ({entities}, ownProps) => {

    return({
        movieId: ownProps.match.params.movieId, 
        movies: entities.movies
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchMovies: (id) => dispatch(fetchMovies(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);