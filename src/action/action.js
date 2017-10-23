export const initAction = (is_logged_in) => {
    return {type: 'INIT', is_logged_in}
}
export const actorSignIn = (is_logged_in, is_login_failed) => {
    return {type: 'SIGNIN', is_logged_in, is_login_failed}
}
export const actorSignOut = (is_logged_in) => {
    return {type: 'SIGNOUT', is_logged_in}
}
export const actorSignUp = is_signup_success => {
    return {type: 'SIGNUP', is_signup_success}
}