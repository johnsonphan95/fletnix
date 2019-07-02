import { connect } from 'react-redux';
import SearchBar from './search_bar';
import {receiveSearchPhrase} from '../../../actions/search_actions';

const mapStateToProps = ({ entities }, ownProps) => {
    return ({
        search: entities.search
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        receiveSearchPhrase: (phrase) => dispatch(receiveSearchPhrase(phrase))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);