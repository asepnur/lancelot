//--------------------------------------------;
//                  ACTION;
//--------------------------------------------;

export const initAction = (is_logged_in) => {
    return {type: 'INIT', is_logged_in}
}
export const actorSignIn = (is_logged_in, is_login_failed) => {
    return {type: 'SIGNIN', is_logged_in, is_login_failed}
}
export const actorSignOut = (is_logged_in) => {
    return {type: 'SIGNOUT', is_logged_in}
}
export const actorSignUp = (is_signup_success, signup_status) => {
    return {type: 'SIGNUP', is_signup_success, signup_status}
}
export const actorForgot = is_email_registered => {
    return {type: 'FORGOT', is_email_registered}
}
export const actorVerify = signup_status => {
    return {type: 'VERIFY', signup_status}
}
export const actorVerifyForgot = is_code_match => {
    return {type: 'VERIFY_FORGOT', is_code_match}
}
export const actorRequest = request_status => {
    return {type: 'REQUEST', request_status}
}
