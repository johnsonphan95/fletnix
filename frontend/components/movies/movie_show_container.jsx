import {connect} from 'react-redux';
import MovieShow from './movie_show';
import {withRouter} from 'react-router-dom';
import {fetchMovie} from '../../actions/movie_actions';

const mapStateToProps = ({entities}, ownProps) => {
    return({
        movies: entities.movies, 
        movieId: ownProps.match.params.movieId
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchMovie: (id) => dispatch(fetchMovie(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);