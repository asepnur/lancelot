/* ------------------------------------------------------------------------------
                                          Admin Users
---------------------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavUser, LoadingAnim, DeleteModal} from '../index.js'

class AdminUser extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            page: 0,
            total_page: 0,
            is_loaded: false,
            modal_active: false,
            current_id:0
        }
    }
    componentDidMount() {
        this.handleGetUser(1)
    }
    handleGetUser = (pg) => {
        axios.get(`/api/admin/v1/user?pg=${pg}&ttl=10`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({users: res.data.data.users, page: res.data.data.page, total_page: res.data.data.total_page})
            }
            this.setState({is_loaded: true})
        }).catch((err) => {
            this.setState({is_loaded: true})
        })
    }
    handleDeleteUser = () => {
        axios.delete(`/api/admin/v1/user/${this.state.current_id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.handleGetUser(this.state.page)
                this
                    .props
                    .dispatcherRequest(true, 200, `user ${this.state.current_id} deleled succesfully`)
            }else{
                this
                    .props
                    .dispatcherRequest(true, 400, 'Failed to delete user')
            }
            this.setState({modal_active: false})
        }).catch((err) => {
            this
                .props
                .dispatcherRequest(true, 401, 'Connection error')
        })
    }
    handleChangeStatus = (id, status) => {
        const value = status === 'active'
            ? 'inactive'
            : 'active'
        const index = this
            .state
            .users
            .findIndex((val) => val.id === id)
        const dt = this.state.users
        dt[index].status = value
        this.setState({data: dt})
        dt[index].status = value

        let formData = new FormData()
        formData.append('status', value)
        axios.patch(`/api/admin/v1/user/${id}/${value}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.status === 200) {
                this.setState({
                    users: dt
                }, () => {
                    this
                        .props
                        .dispatcherRequest(true, 200, `user ${id} updated succesfully`)
                })

            } else {
                this
                    .props
                    .dispatcherRequest(true, 401, 'Connection error')
            }
        }).catch((err) => {
            this
                .props
                .dispatcherRequest(true, 401, 'Connection error')
        })
    }
    modalDeleteOn = (id) => {
        console.log(id)
        this.setState({modal_active: true, current_id: id})
    }
    modalDeleteOff = () => {
        this.setState({modal_active: false})
    }
    /* -----------------------------------------------------------------------------
                                      Render Element
     -----------------------------------------------------------------------------*/
    render() {
        const {is_logged_in} = this.props
        const data = {
            users: this.state.users,
            is_loaded: this.state.is_loaded,
            page: this.state.page,
            total_page: this.state.total_page
        }
        const handle = {
            getUsers: this.handleGetUser,
            changeStatus: this.handleChangeStatus,
            On: this.modalDeleteOn,
            Off: this.modalDeleteOff,
            Action: this.handleDeleteUser,
        }
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
                                                <Link to="/">
                                                    <i className="fa fa-home"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/admin">Admin</Link>
                                            </li>
                                            <li className="_active">
                                                <Link to={`/admin/user`}>User list</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavUser active_menu={`btn_user`}/>
                                <div className="_c5x312 _c5m310  _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">Users</div>
                                        </div>
                                        <ListUser data={data} handle={handle}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DeleteModal handle={handle} is_active={this.state.modal_active}/>
                </LayoutUser>
            : <Redirect to={'/login'}/>)
    }
}

const ListUser = (props) => {
    const {data, handle} = props
    return (data.is_loaded
        ? data.users.length !== 0
            ? <table
                    className="_se _se3ada"
                    style={{
                    minHeight: "663px"
                }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>NPM</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data
                            .users
                            .map((user, i) => (
                                <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.id}
                                    </td>
                                    <td>{user.email}</td>
                                    <td>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={user.status === 'active'
                                                ? true
                                                : false}
                                                onChange={e => handle.changeStatus(user.id, user.status)}/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <Link to={`/admin/user/update/${user.id}`}>
                                            <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                        </Link>
                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true" onClick={()=>{
                                            handle.On(user.id)
                                        }}></i>
                                    </td>
                                </tr>
                            ))
}
                    </tbody>
                    <tfoot>
                        <tr className="_pg">
                            <td>
                                <button
                                    disabled={data.page <= 1
                                    ? true
                                    : false}
                                    onClick={() => {
                                    handle.getUsers(data.page - 1)
                                }}>&laquo; Prev</button>
                            </td>
                            <td>
                                <a className="_active" href="">{data.page}
                                    of {data.total_page}</a>
                            </td>
                            <td>
                                <button
                                    href=""
                                    disabled={data.users.page === data.total_page
                                    ? true
                                    : false}
                                    onClick={() => {
                                    handle.getUsers(data.page + 1)
                                }}>Next &raquo;</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            : <table
                    className="_se3msg3l"
                    style={{
                    border: "1px dashed silver"
                }}>
                    <tbody>
                        <tr>
                            <td>
                                <i className="fa fa-user-secret" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="_head">No List users yet in database</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="_main">Happy good day</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
        : <div align="center"><LoadingAnim color_left="#333" color_right="#333"/>
            <p className="_me3c"></p>
        </div>)
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminUser)