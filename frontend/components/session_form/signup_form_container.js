import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = ({errors}, ownProps) => {
    
    return ({
        errors: errors.session,
        formType: "Sign Up"
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(signup(user)), 
        processDemo: (user) => dispatch(login(user))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);