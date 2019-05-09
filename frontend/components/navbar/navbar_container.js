import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom'
import NavBar from './navbar';

const mapStateToProps = ({entities, session}, ownProps) => {
    return({
        currentUser: entities.users[session.id], 
        genres: entities.genres
    })
}

const mapDispatchToProps = dispatch => {
    return({
        logout: () => dispatch(logout())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));