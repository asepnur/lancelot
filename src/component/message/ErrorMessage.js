import React, {Component} from 'react'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'

class ErrorMessage extends Component {
    render() {
        const {is_logged_in, request_status, error_message, dispatcherRequest} = this.props
        return (
            <div
                className="_erm _c5m3o3 _c5m36 _c5x312"
                style={{
                display: request_status === 401
                    ? 'block'
                    : 'none'
            }}>
                <div className="_erm5cn">
                    <p>
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                         {error_message}
                        <i className="fa fa-times _erm5c" aria-hidden="true" onClick={e =>{
                            e.preventDefault();
                            is_logged_in
                                ?dispatcherRequest(true, 0, '')
                                :dispatcherRequest(false, 0, '')
                        }}></i>
                    </p>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(ErrorMessage)