const Reducers = (state = {

    is_logged_in: false,
    is_loading: true,
    is_login_failed: false,
    is_signup_success: false

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
        case "VERIFY":
            return {}
        default:
            return state
    }
}

export default Reducers