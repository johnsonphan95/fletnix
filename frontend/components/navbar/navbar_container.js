import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom'
import NavBar from './navbar';
import { trendingId, recentId } from '../helpers/navbar_selector';

const mapStateToProps = ({entities, session}, ownProps) => {
    
    return({
        currentUser: entities.users[session.id], 
        genres: entities.genres, 
        trendingId: trendingId(entities.genres), 
        recentId: recentId(entities.genres)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        logout: () => dispatch(logout())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));