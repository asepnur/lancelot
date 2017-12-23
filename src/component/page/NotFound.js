/*----------------------------------------------------------------
                            INFORMATION PAGE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser} from '../index.js'

class NotFound extends Component {
    /*----------------------------------------------------------------
                            LIFE CYCLE
    ------------------------------------------------------------------*/

    /*----------------------------------------------------------------
                            RENDER COMPONENT
    ------------------------------------------------------------------*/
    render() {
        const {is_logged_in} = this.props
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"information"}/>
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro">
                                <div className="_c5m311 _pd5m3n">
                                    <div className="_ro _pd3l3l">
                                        <table className="_se3msg">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="fa fa-flag-o" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="_head">404 Not Found.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="_main">Please contact me if you can not found what you seek</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>);
    }
}

/*----------------------------------------------------------------
                            DISPATCHER
------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(NotFound)