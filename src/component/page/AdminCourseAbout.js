import React, {Component} from 'react'
import { Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse} from '../index'

class AdminCourseAbout extends Component {
    constructor() {
        super()
        this.state = {
            active_menu: 'btn_about'
        }
    }
    render() {
        const {is_logged_in} = this.props
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"admin"}/>
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro _c5m312 _c5x312 _pd5m3n">
                                <div className="_c5x312 _c5m312 _he3b _pd3l3b">Mobile Computing</div>
                                <div className="_c5x312 _c5m312 _pd3n3lr  _pd3l3b">
                                    <div className="_pd3n3lr _ta">
                                        <ul className="_ta5p">
                                            <li>
                                                <a href="">Home</a>
                                            </li>
                                            <li className="_active">
                                                <a href="">Mobile Computing</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavCourse active_menu={this.state.active_menu}/>
                                <div className="_c5x312 _c5m310  _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">About</div>
                                        </div>
                                        <div className="_se">
                                            <div className="_c5x312 _c5m312">
                                                <label htmlFor="name">Course Name</label>
                                                <input name="name" type="text"/>
                                            </div>
                                            <div className="_c5x36 _c5m36">
                                                <label htmlFor="course_name">Semester</label>
                                                <input name="due" type="text"/>
                                            </div>
                                            <div className="_c5x36 _c5m36">
                                                <label htmlFor="course_name">Status</label>
                                                <select>
                                                    <option value="lorem1">Active</option>
                                                    <option value="lorem2">InActive</option>
                                                </select>
                                            </div>
                                            <div className="_c5x312 _c5m312">
                                                <label htmlFor="description">Description*</label>
                                                <textarea placeholder="input description"></textarea>
                                            </div>
                                            <div className="_c5m3o10 _c5x3o9 _c5x33 _c5m32 _pd3l">
                                                <button type="button" className="_bt5m3b">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to="/login"/>)
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourseAbout)