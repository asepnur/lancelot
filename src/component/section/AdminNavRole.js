/*----------------------------------------------------------------
                            NAVBAR SECTION
------------------------------------------------------------------*/
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'

class AdminNavRole extends Component {
    componentDidMount() {
        this.handleActiveMenu(this.props.active_menu)
    }
    handleActiveMenu = (tagID) => {
        const id = ["btn_role", "btn_add"]
        id.forEach(function (val) {
            let dom = document.getElementById(val)
            val === tagID
                ? ReactDOM
                    .findDOMNode(dom)
                    .className = "_active"
                : ReactDOM
                    .findDOMNode(dom)
                    .className = ""
        }, this)
    }
    /*----------------------------------------------------------------
                            RENDER COMPONENT
    ------------------------------------------------------------------*/
    render() {
        return (
            <div className="_c5x312 _c5m32 _pd3l3t _pd3n3lr">
                <div className="_ta">
                    <ul className="_ta5ad">
                        <li id="btn_role">
                            <Link to={`/admin/role`}>
                                <i className="fa fa-users" aria-hidden="true"></i>
                            </Link>
                            <Link to={`/admin/role`}>
                                &nbsp;Role</Link>
                        </li>
                        <li id="btn_add">
                            <Link to={`/admin/role/add`}>
                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                            </Link>
                            <Link to={`/admin/role/add`}>
                                &nbsp;Create</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
/*----------------------------------------------------------------
                            DISPATCHER
------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, modules_access: state.modules_access, time_now: state.time_now}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminNavRole)
