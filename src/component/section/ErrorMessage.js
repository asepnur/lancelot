import React, {Component} from 'react'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'

class ErrorMessage extends Component {
    constructor() {
        super()
        this.state = {
            is_play: false
        }
    }
    render() {
        const {is_logged_in, request_status, error_message, dispatcherRequest} = this.props
        return (
            <div
                id="errmsg"
                className={'_erm5cn'}
                style={{
                top: request_status === 401 || request_status === 200
                    ? 0
                    : '-75px'
            }}>
                <span>
                    <p>
                        <i className="fa fa-exclamation-triangle _ma3m3lr" aria-hidden="true"></i>
                        {error_message}
                        <i
                            className="fa fa-times _ma3m3lr"
                            aria-hidden="true"
                            onClick={e => {
                            e.preventDefault();
                            dispatcherRequest(is_logged_in, 0, error_message)
                        }}></i>
                    </p>
                </span>
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