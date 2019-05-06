import {connect} from 'react-redux';
import GenreIndex from './genres_index';
import {receiveGenres} from '../../actions/genre_actions';

const mapStateToProps = (entities) => {
    let genres = Object.values(entities.genres)
    return ({
        genres: genres
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchGenres: () => dispatch(fetchGenres())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex);