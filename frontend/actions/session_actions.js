import * as SessionApiUtil from `../util/session_api_util`

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER, 
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS, 
    errors
})

export const signup = user => (
    SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), 
          err => dispatch(receiveErrors(err.responseJSON)))
)

export const login = user => dispatch (
    SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(user => dispatch(logoutCurrentUser()))
)