import {connect} from 'react-redux';
import GenreIndex from './genres_index';
import {fetchGenres} from '../../actions/genre_actions';
import {fetchTags} from '../../actions/tag_actions';
import { fetchMovies } from '../../actions/movie_actions';


const mapStateToProps = ({entities}) => {
    let genres = Object.values(entities.genres);
    let tags = Object.values(entities.tags);

    return ({
        genres: genres, 
        tags: tags, 
        movies: entities.movies
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchGenres: () => dispatch(fetchGenres()),
        fetchTags: () => dispatch(fetchTags()), 
        fetchMovies: () => dispatch(fetchMovies())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex);