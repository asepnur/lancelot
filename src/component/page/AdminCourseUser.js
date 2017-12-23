import React, {Component} from 'react'
import { Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse} from '../index'

class AdminCourseUser extends Component {
    constructor() {
        super()
        this.state = {
            active_menu: 'btn_user'
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
                                        <div className="_ca3h3b">
                                            <div className="_c5m34 _c5x34 _tittle">Assistant</div>
                                            <div className="_c5m36 _c5x36 _ma3n">
                                                <input name="add1" type="text" placeholder="add new assistant"/>
                                            </div>
                                            <div className="_c5m32 _c5x32 _icon">
                                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <table className="_se _se3ada">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>NPM</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="_ov3y5m">
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourseUser)