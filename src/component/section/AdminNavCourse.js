/*----------------------------------------------------------------
                            NAVBAR SECTION
------------------------------------------------------------------*/
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'

class AdminNavCourse extends Component {
    componentDidMount() {
        this.handleActiveMenu(this.props.active_menu)
    }
    handleActiveMenu = (tagID) => {
        const {modules_access} = this.props
        const id = ["btn_attendance", "btn_tutorial", "btn_user", "btn_grade", "btn_about"]
        if (modules_access.assignments !== undefined) {
            id.push("btn_assign")
        }
        id
            .forEach(function (val) {
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
        const {dt_nav, modules_access} = this.props
        let id = dt_nav === undefined
            ? 149
            : dt_nav.schedule_id
        return (modules_access.courses === undefined
            ? <div></div>
            : <div className="_c5x312 _c5m32 _pd3l3t _pd3n3lr">
                <div className="_ta">
                    <ul className="_ta5ad">
                        {modules_access.assignments !== undefined
                            ? <li id="btn_assign">
                                    <Link to={`/admin/course/${id}`}>
                                        <i className="fa fa-tasks" aria-hidden="true"></i>
                                    </Link>
                                    <Link to={`/admin/course/${ 12}`}>&nbsp; Assignment</Link>
                                </li>
                            : null
}
                        <li id="btn_attendance">
                            <Link to={`/admin/course/${ 12}/attendance`}>
                                <i className="fa fa-book" aria-hidden="true"></i>
                            </Link>
                            <Link to={`/admin/course/${ 12}/attendance`}>&nbsp; Attendance</Link>
                        </li>
                        <li id="btn_tutorial">
                            <Link to={`/admin/course/${ 12}/tutorial`}>
                                <i className="fa fa-folder-open-o" aria-hidden="true"></i>
                            </Link>
                            <Link to={`/admin/course/${ 12}/tutorial`}>&nbsp; Tutorial File</Link>
                        </li>
                        <li id="btn_user">
                            <Link to={`/admin/course/${ 12}/user`}>
                                <i className="fa fa-users" aria-hidden="true"></i>
                            </Link>
                            <Link to={`/admin/course/${ 12}/user`}>&nbsp; Assistant & Student</Link>
                        </li>
                        <li id="btn_grade">
                            <Link to={`/admin/course/${ 12}/grade`}>
                                <i className="fa fa-bar-chart" aria-hidden="true"></i>
                            </Link>
                            <Link to={`/admin/course/${ 12}/grade`}>&nbsp; Grade</Link>
                        </li>
                        <li id="btn_about">
                            <Link to={`/admin/course/${ 12}/about`}>
                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                            </Link>
                            <Link to={`/admin/course/${ 12}/about`}>&nbsp; About</Link>
                        </li>
                    </ul>
                </div>
            </div>)
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminNavCourse)
