//--------------------------------------------;
//                  ACTION;
//--------------------------------------------;

export const initAction = (is_logged_in) => {
    return {
        type: 'INIT', 
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
