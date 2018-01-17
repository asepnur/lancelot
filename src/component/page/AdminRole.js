/* ------------------------------------------------------------------------------
                                          Admin Users
---------------------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import history from '../../history'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavRole, DeleteModal, LoadingAnim} from '../index.js'

class AdminRole extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 0,
            total_page: 0,
            is_loaded: false,
            modal_active: false,
            role_id: 0
        }
    }
    componentDidMount() {
        this.handleGetRole(1)
    }
    /* -----------------------------------------------------------------------------
                                      Render Element
     -----------------------------------------------------------------------------*/
    handleGetRole = (page) => {
        axios.get(`/api/admin/v1/role?pg=${page}&ttl=10`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({data: res.data.data.roles, page: res.data.data.page, total_page: res.data.data.total_page})
            }
            this.setState({is_loaded: true})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleDeleteRole = () => {
        const {dispatcherLoading, dispatcherRequest} = this.props
        dispatcherLoading(10, false)
        axios.delete(`/api/admin/v1/role/${this.state.role_id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, 'Role deleted successfully')
                this.setState({modal_active: false})
                this.handleGetRole(this.state.page)
            } else {
                this.setState({modal_active: false})
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleActiveModal = (value) => {
        this.setState({role_id: value, modal_active: true})
    }
    handleOffModal = () => {
        this.setState({modal_active: false})
    }
    render() {
        const {is_logged_in} = this.props
        const handle = {
            Off: this.handleOffModal,
            Action: this.handleDeleteRole
        }
        return (is_logged_in
            ? <LayoutUser>
                    <DeleteModal handle={handle} is_active={this.state.modal_active}/>
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
                                        <Link to={`/admin/role`}>Roles</Link>
                                    </li>
                                </ul>
                                    </div>
                                </div>
                                <AdminNavRole active_menu={`btn_role`}/>
                                <div className="_c5x312 _c5m310  _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">Roles</div>
                                        </div>
                                        {!this.state.is_loaded
                                            ? <div align="center"><LoadingAnim color_left="#333" color_right="#333"/>
                                                </div>
                                            : this.state.data.length !== 0
                                                ? <table className="_se _se3ada">
                                                        <thead>
                                                            <tr>
                                                                <th>Role Name</th>
                                                                <th>Created at</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this
                                                                .state
                                                                .data
                                                                .map((role, i) => (
                                                                    <tr key={i}>
                                                                        <td>{role.name}</td>
                                                                        <td>{role.created_at}</td>
                                                                        <td>
                                                                                <i className="fa fa-pencil-square _ic3b __wr" onClick={
                                                                                    ()=>{
                                                                                        history.push(`/admin/role/update/${role.id}`)
                                                                                    }
                                                                                } aria-hidden="true"></i>
                                                                            {role.is_delete_allow
                                                                                ? <i
                                                                                        className="fa fa-trash _ic3 __wr"
                                                                                        aria-hidden="true"
                                                                                        onClick={() => {
                                                                                        this.handleActiveModal(role.id)
                                                                                    }}></i>
                                                                                : null}
                                                                        </td>
                                                                    </tr>
                                                                ))
}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr className="_pg">
                                                                <td>
                                                                    <button
                                                                        disabled={this.state.page <= 1
                                                                        ? true
                                                                        : false}
                                                                        onClick={() => {
                                                                        this.handleGetRole(this.state.page - 1)
                                                                    }}>&laquo; Prev</button>
                                                                </td>
                                                                <td>
                                                                    <a className="_active" href="">{this.state.page}
                                                                        of {this.state.total_page}</a>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        disabled={this.state.page >= this.state.total_page
                                                                        ? true
                                                                        : false}
                                                                        onClick={() => {
                                                                        this.handleGetRole(this.state.page + 1)
                                                                    }}>Next &raquo;</button>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                : null
}
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
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
        dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminRole)