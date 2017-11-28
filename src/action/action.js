//--------------------------------------------;
//                  ACTION;
//--------------------------------------------;

export const initAction = (is_logged_in, modules_access) => {
    return {
        type: 'INIT', 
        is_logged_in,
        modules_access
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

export const loadingRequest = (loading_progress, is_loading_error) => {
    return {
        type: 'LOADING',
        loading_progress,
        is_loading_error
    }
}
