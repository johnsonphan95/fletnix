import { connect } from 'react-redux';
import SessionForm from './session_form';
import {login, clearErrors} from '../../actions/session_actions';

const mapStateToProps = ({errors}, ownProps) => {
   
    return({
        errors: errors.session,
        formType: "Sign In"
    })
}

const mapDispatchToProps = dispatch => {

    return({
    
        processForm: (user) => dispatch(login(user)), 
        processDemo: (user) => dispatch(login(user)), 
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);