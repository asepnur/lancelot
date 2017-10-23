//--------------------------------------------;
//                  ACTION;
//--------------------------------------------;

export const initAction = (is_logged_in) => {
    return {
        type: 'INIT', 
        is_logged_in
    }
}
export const actorSignOut = (is_logged_in) => {
    return {
        type: 'SIGNOUT', 
        is_logged_in
    }
}
export const actorRequest = (is_logged_in, request_status, error_message)  => {
    return {
        type: 'REQUEST', 
        is_logged_in, 
        request_status, 
        error_message
    }
}
