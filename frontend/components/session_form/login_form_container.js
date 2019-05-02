import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = ({errors}, ownProps) => {
   
    return({
        errors: errors.session,
        formType: "Sign In"
    })
}

const mapDispatchToProps = dispatch => {
    return({
        processForm: (user) => dispatch(login(user))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);