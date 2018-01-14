import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse} from '../index'

class AdminCourseUser extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            active_menu: 'btn_user',
            schedule_id: this.props.match.params.id,
            role_menu: 'student',
            user_select: null,
            users: [],
            is_loaded: false
        }
    }

    componentDidMount() {
        this.handleGetList()
    }

    handleChangeMenu = (e) => {
        this.handleChange(e)
        this.handleGetList(e.target.value)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleGetList = (role = 'student') => {
        this.setState({is_loaded: false})

        let url = `/api/admin/v1/list/course/enrolled?schedule_id=${this.state.schedule_id}`
        if (role === 'assistant') {
            url = `/api/v1/course/${this.state.schedule_id}/assistant?payload=assistant`
        }

        axios.get(url, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const {data} = res.data
            const users = data.map(value => ({
                id: value.id,
                name: value.name,
            }))
            this.setState({
                users: users,
                is_loaded: false
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    handleSearchUser = (value) => {
        if (value.length < 3) {
			return Promise.resolve({ options: [] })
        }
        return axios.get(`/api/admin/v1/user?q=${value}`, {
            validateStatus: (status) => {
               return status === 200
            }
        }).then((res) => {
            let options = res.data.data.map( user => ({ value: user.id, label: user.name }))
            return { options }
        }).catch((err) => {
            console.log(err)
        })
    }

    handleAdd = () => {
        if (this.state.user_select) {
            const {value, label} = this.state.user_select
            axios.patch(`/api/admin/v1/course/${this.state.schedule_id}/involved?user_id=${value}&role=${this.state.role_menu}&status=add`, {
                validateStatus: (status) => {
                   return status === 200
                }
            }).then((res) => {
                const {users} = this.state
                users.push({id: value, name: label})
                this.setState({
                    users: users,
                    user_select: null
                })
            }).catch((err) => {
                console.log(err)
            })
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
                                            <div className="_c5m34 _c5x34 _tittle">Assistant &amp; Student</div>
                                            <div className="_c5m36 _c5x36 _ma3n _pl5r">
                                            <select name="role_menu" onChange={this.handleChangeMenu} value={this.state.role_menu}>
                                                <option value="assistant">Assistant</option>
                                                <option value="student">Student</option>
                                            </select>
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
                                                {
                                                    this.state.users.map((value, k) => (
                                                        <tr key={k}>
                                                            <td>{value.name}</td>
                                                            <td>{value.id}</td>
                                                            <td>
                                                                <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                        <div>
                                            <div className="_c5m311 _c5x11">
                                                <Select.AsyncCreatable
                                                    name="user_select"
                                                    multi={false}
                                                    value={this.state.user_select}
                                                    onChange={e => this.setState({user_select: e})}
                                                    clearable={true}
                                                    loadOptions={this.handleSearchUser}
                                                    placeholder="Add User"
                                                    />
                                            </div>
                                            <div className="_c5m31 _c5x31" style={{fontSize: '1.8em'}}>
                                                <Link to="#" onClick={this.handleAdd}>
                                                    <i className="fa fa-plus-circle _pl5r" aria-hidden="true"></i>
                                                </Link>
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourseUser)