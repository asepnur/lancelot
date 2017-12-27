/*----------------------------------------------------------------
                            NAVBAR SECTION
------------------------------------------------------------------*/
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'

class AdminNavInfo extends Component {
    componentDidMount() {
        this.handleActiveMenu(this.props.active_menu)
    }
    componentDidUpdate() {
        this.handleActiveMenu(this.props.active_menu)
    }
    handleActiveMenu = (tagID) => {
        const id = ["btn_list", "btn_add"]
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
        const {handle} = this.props
        return (
            <div className="_c5x312 _c5m32 _pd3l3t _pd3n3lr">
                <div className="_ta">
                    <ul className="_ta5ad">
                        <li id="btn_list" onClick={handle.changeMenu}>
                            <a onClick={handle.changeMenu}>
                                <i className="fa fa-list" aria-hidden="true" onClick={handle.changeMenu}></i>
                            </a>
                            <a>
                                &nbsp;Information List</a>
                        </li>
                        <li id="btn_add" onClick={handle.changeMenu}>
                            <a onClick={handle.changeMenu}>
                                <i className="fa fa-plus-circle" aria-hidden="true" onClick={handle.changeMenu}></i>
                            </a>
                            <a>
                                &nbsp;Create</a>
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminNavInfo)
