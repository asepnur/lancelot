/* ------------------------------------------------------------------------------
                                          Admin Users
---------------------------------------------------------------------------------*/
import React, {Component} from 'react'
import { Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavRole} from '../index.js'

class AdminRoleCreate extends Component {
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
                                <AdminNavRole active_menu={`btn_add`} />
                                <div className="_c5x312 _c5m310  _pd3l3lr">
                                <div className="_ca">
                                    <div className="_ca3h">
                                        <div className="_c5m310 _c5x310">Create Roles</div>
                                    </div>
                                    <form action="/" method="POST">
                                        <div className="_c5m312 _c5x312">
                                            <input type="text" name="roleName" placeholder="Role Name*" />
                                        </div>
                                    </form>
                                    <div className="_c5m312 _c5x312 ">
                                        <div className="_ro _c5m35 _c5x33">
                                            <p className="_he3x3bk">Modul Name</p>
                                        </div>
                                        <div className="_ro _c5m34 _c5x35">
                                            <p className="_he3x3bk">Abilities</p>
                                        </div>
                                        <div className="_ro _c5m33 _c5x34">
                                            <button className="_bt5m3g" type="submit">+Create Module</button>
                                        </div>
                                    </div>
                                    <div className="_c5x312 _c5m312 _ov3y5m">
                                        <div>
                                            <div className="_c5m312 _c5x312 _pd3n3lr">
                                                <form action="/" method="POST">
                                                    <div className="_ro _c5m35 _c5x33 _pd3n3lr">
                                                        <select>
                                                            <option value="lorem1">Lorem1</option>
                                                            <option value="lorem2">lorem2</option>
                                                            <option value="lorem3">Lorem3</option>
                                                            <option value="lorem4">lorem4</option>
                                                        </select>
                                                    </div>
                                                    <div className="_ro _c5m35 _c5x37 _pd3l3t">
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                                        </div>
                                                    </div>
                                                    <div className="_ro _c5m31 _c5x32 _pd3n3b">
                                                        <button className="_bt5m3r" type="submit">-</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="_c5m312 _c5x312 _pd3n3lr">
                                                <form action="/" method="POST">
                                                    <div className="_ro _c5m35 _c5x33 _pd3n3lr">
                                                        <select>
                                                                <option value="lorem1">Lorem1</option>
                                                                <option value="lorem2">lorem2</option>
                                                                <option value="lorem3">Lorem3</option>
                                                                <option value="lorem4">lorem4</option>
                                                            </select>
                                                    </div>
                                                    <div className="_ro _c5m35 _c5x37 _pd3l3t">
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                                        </div>
                                                    </div>
                                                    <div className="_ro _c5m31 _c5x32 _pd3n3b">
                                                        <button className="_bt5m3r" type="submit">-</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="_c5m312 _c5x312 _pd3n3lr">
                                                <form action="/" method="POST">
                                                    <div className="_ro _c5m35 _c5x33 _pd3n3lr">
                                                        <select>
                                                                    <option value="lorem1">Lorem1</option>
                                                                    <option value="lorem2">lorem2</option>
                                                                    <option value="lorem3">Lorem3</option>
                                                                    <option value="lorem4">lorem4</option>
                                                                </select>
                                                    </div>
                                                    <div className="_ro _c5m35 _c5x37 _pd3l3t">
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                                        </div>
                                                    </div>
                                                    <div className="_ro _c5m31 _c5x32 _pd3n3b">
                                                        <button className="_bt5m3r" type="submit">-</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="_c5m312 _c5x312 _pd3n3lr">
                                                <form action="/" method="POST">
                                                    <div className="_ro _c5m35 _c5x33 _pd3n3lr">
                                                        <select>
                                                                        <option value="lorem1">Lorem1</option>
                                                                        <option value="lorem2">lorem2</option>
                                                                        <option value="lorem3">Lorem3</option>
                                                                        <option value="lorem4">lorem4</option>
                                                                    </select>
                                                    </div>
                                                    <div className="_ro _c5m35 _c5x37 _pd3l3t">
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                                        </div>
                                                    </div>
                                                    <div className="_ro _c5m31 _c5x32 _pd3n3b">
                                                        <button className="_bt5m3r" type="submit">-</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="_c5m312 _c5x312 _pd3n3lr">
                                                <form action="/" method="POST">
                                                    <div className="_ro _c5m35 _c5x33 _pd3n3lr">
                                                        <select>
                                                                            <option value="lorem1">Lorem1</option>
                                                                            <option value="lorem2">lorem2</option>
                                                                            <option value="lorem3">Lorem3</option>
                                                                            <option value="lorem4">lorem4</option>
                                                                        </select>
                                                    </div>
                                                    <div className="_ro _c5m35 _c5x37 _pd3l3t">
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                                        </div>
                                                        <div className="_c5m34 _c5x36 _pd3n3lr">
                                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                                        </div>
                                                    </div>
                                                    <div className="_ro _c5m31 _c5x32 _pd3n3b">
                                                        <button className="_bt5m3r" type="submit">-</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminRoleCreate)