//--------------------------------------------;
//                  REDUCER;
//--------------------------------------------;

const Reducers = (
state = {    
    is_logged_in:           false,
    is_loading:             true,
    is_login_failed:        false,
    is_signup_success:      false,
    signup_status:          1,
    is_email_registered:    false,
    is_code_match:          false,
    request_status:         0,
    error_message:          ''
}, 
action) => {
    switch (action.type) {
        case "INIT":
            return {
                is_loading: false, 
                is_logged_in: action.is_logged_in
            }
        case "REQUEST":
            return {
                is_logged_in: action.is_logged_in, 
                request_status: action.request_status, 
                error_message: action.error_message
            }
        default:
            return state
    }
}

export default Reducers