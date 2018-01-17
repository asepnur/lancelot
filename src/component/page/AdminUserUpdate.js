/* ------------------------------------------------------------------------------
                                          Admin Users
---------------------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import history from '../../history'
import {Navbar, LayoutUser, AdminNavUser, InputContent} from '../index.js'

class AdminUserUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            gender: '',
            phone: '',
            id: this.props.match.params.id,
            line_id: '',
            about_me: '',
            status: ''
        }
    }
    componentDidMount() {
        this.handleGetUser()
    }
    handleGetUser = () => {
        axios.get(`/api/admin/v1/user/${this.state.id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({
                    name: res.data.data.name,
                    email: res.data.data.email,
                    gender: res.data.data.gender,
                    phone: res.data.data.phone,
                    id: res.data.data.id,
                    line_id: res.data.data.line_id,
                    about_me: res.data.data.about_me,
                    status: res.data.data.status,
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleUpdate = (e) => {
        e.preventDefault()
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)

        let formData = new FormData()
        formData.append('id', this.state.id)
        formData.append('email', this.state.email)
        formData.append('name', this.state.name)
        formData.append('gender', this.state.gender)
        formData.append('phone', this.state.phone)
        formData.append('line_id', this.state.line_id)
        formData.append('about_me', this.state.about_me)
        formData.append('status', this.state.status)

        axios.patch(`/api/admin/v1/user/${this.state.id}`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, 'Profil Updated')
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCreate = (e) => {
        e.preventDefault()
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)
        if (this.state.fname === "") {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'First name can not be empty')
            return
        }
        if (this.state.lname === "") {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'First name can not be empty')
            return
        }
        if (this.state.email === "") {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Email can not be empty')
            return
        }
        if (this.state.id === "") {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'ID can not be empty')
            return
        }
        let formData = new FormData()
        let name = `${this.state.fname}  ${this.state.lname}`
        formData.append('email', this.state.email)
        formData.append('id', this.state.id)

        axios.post(`/api/admin/v1/user?id=${this.state.id}&name=${name}&email=${this.state.email}`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, `User ${name} created successfully`)
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
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
                                                <Link to="/">
                                                    <i className="fa fa-home"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/admin">Admin</Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/user">User list</Link>
                                            </li>
                                            <li className="_active">
                                                <Link to={`/admin/user/update/${this.state.id}`}>Update</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavUser active_menu={`btn_user`}/>
                                <div className="_c5x312 _c5m310  _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">Update Users</div>
                                        </div>
                                        <div className="_se">
                                            <form onSubmit={this.handleUpdate}>
                                                <div className="_ro">
                                                    <InputContent
                                                        classWraper="_c5x312 _c5m36"
                                                        type="text"
                                                        name="id"
                                                        placeholder="NPM"
                                                        value={this.state.id}
                                                        disabled="true"/>
                                                    <InputContent
                                                        classWraper="_c5x312 _c5m36"
                                                        type="text"
                                                        name="email"
                                                        placeholder="E-Mail"
                                                        value={this.state.email}
                                                        disabled="true"/>
                                                    <InputContent
                                                        classWraper="_c5x312 _c5m312"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Name"
                                                        onChangeState={this.state.handleChange}
                                                        value={this.state.name}/>

                                                    <div className="_c5x312 _c5m312">
                                                        <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div className="_c5x312 _c5m312">
                                                        <select name="status" value={this.state.status} onChange={this.handleChange}>
                                                            <option value="inactive">Inactive</option>
                                                            <option value="active">Active</option>
                                                        </select>
                                                    </div>

                                                    <InputContent
                                                        classWraper="_c5x312 _c5m312"
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Phone Number"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.phone}/>
                                                    <InputContent
                                                        classWraper="_c5x312 _c5m312"
                                                        type="text"
                                                        name="line_id"
                                                        placeholder="Line ID"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.line_id}/>
                                                </div>
                                                <div className="_ro">
                                                    <div className="_c5x312 _c5m312 ">
                                                        <textarea
                                                            name="about_me"
                                                            onChange={this.handleChange}
                                                            value={this.state.about_me}
                                                            placeholder="About me"></textarea>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="_se">

                                        <div className="_c5m3o8 _c5x3o6 _c5x33 _c5m32 _pd3r">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                history.push(`/admin/user`)
                                            }}
                                                className="_bt5m">Back</button>
                                        </div>
                                        <div className="_c5x33 _c5m32 _pd3l">
                                            <button type="button" className="_bt5m3b" onClick={this.handleUpdate}>Save</button>
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
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
        dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminUserUpdate)