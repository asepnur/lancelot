import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, InputContent} from '../index.js'

import {Pro as base_url} from '../../env/Environment'

class AdminCrtUser extends Component {
    constructor() {
        super()

        this.state = {
            id: '',
            name: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCreate = (dispatcherRequest) => {
        let formData = new FormData()
        formData.append('id', this.state.id)
        formData.append('email', this.state.email)
        formData.append('name', this.state.name)
      fetch(base_url + '/api/admin/v1/user', {
          method: 'POST',
          credentials: 'include',
          crossDomain: true,
          body: formData
      }).then((res) => {
          return res.json()
      }).then((data) => {
          data.code === 200
              ? window.location = '/admin/users'
              : dispatcherRequest(true, 401, data.error)
      })
   }

    render() {
        const {is_logged_in} = this.props
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match}/>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_pd5m3n _c5m312 _c5x312">
                                <h1 className="_he3b">User Management</h1>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5m312 _pd5m3n _ta">

                                <ul className="_ta5l">
                                    <li>
                                        <Link id="users" to={'/admin/users'}>List Users</Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={this.handleRolesMenu}
                                            className="_ta5l3a"
                                            id="create-user"
                                            to={'#'}>Add Users</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x312 _c5m312 _pd5m3n">
                                <div className="_se _se3a">
                                    <div className="_ro">
                                        <div className="_c5x310 _c5m311 ">
                                            <h1 className="_he3m3b">Add User</h1>
                                        </div>
                                    </div>
                                    <div className="_ro _pd3n3b">
                                        <div className="_c5m312 _c5x312">
                                            <form className="_cn" action="/" method="POST">
                                                <div className="_ro _pd3l3t _pd3n3t">
                                                    <InputContent
                                                        classWraper="_c5m312 _c5x312 _pd3l3t"
                                                        type="text"
                                                        name="id"
                                                        placeholder="*Input ID"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.id}/>
                                                    <InputContent
                                                        classWraper="_c5m312 _c5x312"
                                                        type="text"
                                                        name="email"
                                                        placeholder="*Input Email"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.email}/>
                                                    <InputContent
                                                        classWraper="_c5m36 _c5x312"
                                                        type="text"
                                                        name="name"
                                                        placeholder="*Input Name"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.name}/>
                                                </div>
                                                <div className="_ro">
                                                    <div className="_c5x3o8 _c5m33 _c5x34 _pd3l">
                                                        <button
                                                            onClick={e => {
                                                            e.preventDefault();
                                                            this.handleCreate(this.props.dispatcherRequest)
                                                        }}
                                                            className="_bt5m3b">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>)
    }
}
// -----------------------------------------------------------------------------
// -------------------;                                   state and dispatch to
//                                 state and dispatcher to props
// -----------------------------------------------------------------------------
// - ------------------;
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCrtUser)