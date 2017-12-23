/* ------------------------------------------------------------------------------
                                          Admin Users
---------------------------------------------------------------------------------*/
import React, {Component} from 'react'
import { Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavRole} from '../index.js'

class AdminRole extends Component {
    /* -----------------------------------------------------------------------------
                                      Render Element
     -----------------------------------------------------------------------------*/
    render() {
        const {is_logged_in} = this.props
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"admin"} />
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro _c5m312 _c5x312 _pd5m3n">
                                <div className="_c5x312 _c5m312 _he3b _pd3l3b _pd3n3lr">Mobile Computing</div>
                                <div className="_c5x312 _c5m312 _pd3n3lr  _pd3l3b">
                                    <div className="_pd3n3lr _ta">
                                        <ul className="_ta5p">
                                            <li>
                                                <a href="">Home</a>
                                            </li>
                                            <li className="_active">
                                                <a href="">Users List</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavRole active_menu={`btn_role`} />
                                <div className="_c5x312 _c5m310  _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">Users</div>
                                        </div>
                                        <table className="_se _se3ada">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>NPM</th>
                                                    <th>Role</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016</td>
                                                    <td>Assistant</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked={`true`}/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016
                                                    </td>
                                                    <td>Assistant</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked={`true`}/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016
                                                    </td>
                                                    <td>Assistant</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked={`true`}/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016
                                                    </td>
                                                    <td>Assistant</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked={`true`}/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Risal Falah</td>
                                                    <td>140810140016
                                                    </td>
                                                    <td>Assistant</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked={`true`}/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr className="_pg">
                                                    <td>
                                                        <a href="">&laquo;</a>
                                                    </td>
                                                    <td>
                                                        <a href="">1</a>
                                                    </td>
                                                    <td>
                                                        <a className="_active" href="">2</a>
                                                    </td>
                                                    <td>
                                                        <a href="">3</a>
                                                    </td>
                                                    <td>
                                                        <a href="">&raquo;</a>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={'/login'}/>)
    }
}
/* ---------------------------------------------------------------------------
                                    Users Menu;
-----------------------------------------------------------------------------*/

/* -----------------------------------------------------------------------------
                            state and dispatch to props
------------------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminRole)