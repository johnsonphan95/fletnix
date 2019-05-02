import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom'
import Greeting from './greeting';

const mapStateToProps = ({entities, session}) => {
    return({
        currentUser: entities.users[session.id]
    })
}

const mapDispatchToProps = dispatch => {
    return({
        logout: () => dispatch(logout())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));