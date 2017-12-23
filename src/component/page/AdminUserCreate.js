/* ------------------------------------------------------------------------------
                                          Admin Users
---------------------------------------------------------------------------------*/
import React, {Component} from 'react'
import { Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavUser} from '../index.js'

class AdminUserCreate extends Component {
    /* -----------------------------------------------------------------------------
                                      Render Element
     -----------------------------------------------------------------------------*/
    render() {
        const {is_logged_in} = this.props
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"admin"}/>
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
                                <AdminNavUser active_menu={`btn_add`}/>
                                <div className="_c5x312 _c5m310  _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">Create Users</div>
                                        </div>
                                        <div className="_se">
                                            <form action="/" method="POST">
                                                <div className="_ro">
                                                    <div className="_c5m312 _c5x312">

                                                        <label htmlFor="name">User Name*</label>
                                                        <input type="text" name="uName"/>
                                                    </div>
                                                    <div className="_c5m312 _c5x312">

                                                        <label htmlFor="name">NPM*</label>
                                                        <input type="text" name="id"/>
                                                    </div>
                                                    <div className="_c5m36 _c5x312">

                                                        <label htmlFor="name">Password*</label>
                                                        <input type="password" name="pass" autoComplete='disabled'/>
                                                    </div>
                                                    <div className="_c5m36 _c5x312">

                                                        <label htmlFor="name">Passwork Confirm*</label>
                                                        <input type="password" name="passConf" autoComplete='disabled'/>
                                                    </div>
                                                    <div className="_c5m36 _c5x312">

                                                        <label htmlFor="name">Status</label>
                                                        <select>
                                                            <option value="active">Active</option>
                                                            <option value="deactive">Deactive</option>
                                                        </select>
                                                    </div>
                                                    <div className="_c5m36 _c5x312">

                                                        <label htmlFor="name">Role</label>
                                                        <select>
                                                            <option value="lorem1">Lorem1</option>
                                                            <option value="lorem2">lorem2</option>
                                                            <option value="lorem3">Lorem3</option>
                                                            <option value="lorem4">lorem4</option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="_se">

                                        <div className="_c5m3o8 _c5x3o6 _c5x33 _c5m32 _pd3r">
                                            <button type="button" className="_bt5m">Back</button>
                                        </div>
                                        <div className="_c5x33 _c5m32 _pd3l">
                                            <button type="button" className="_bt5m3b">Save</button>
                                        </div>
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminUserCreate)