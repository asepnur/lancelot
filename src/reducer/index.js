const Reducers = (state = {

    is_logged_in: false,
    is_loading: true,
    is_login_failed: false,
    is_signup_success: false,
    signup_status: 1,
    is_email_registered: false,
    is_code_match: false,
    request_status: 0
}, action) => {
    switch (action.type) {
        case "INIT":
            return {is_loading: false, is_logged_in: action.is_logged_in}
        case "SIGNIN":
            return {is_logged_in: action.is_logged_in, is_login_failed: action.is_login_failed}
        case "SIGNOUT":
            return {is_logged_in: action.is_logged_in}
        case "SIGNUP":
            return {is_signup_success: action.is_signup_success}
        case "FORGOT":
            return {is_email_registered: action.is_email_registered}
        case "VERIFY":
            return {signup_status: action.signup_status}
        case "VERIFY_FORGOT":
            return {is_code_match: action.is_code_match}
        case "REQUEST":
            return {request_status: action.request_status}
        default:
            return state
    }
}

export default Reducers