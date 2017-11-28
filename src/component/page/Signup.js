import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {InputContent, LayoutGuest} from '../index.js'
import {actorRequest} from '../../action/action'


class Signup extends Component {
    constructor() {
        super()
        this.state = {
            fName: '',
            lName: '',
            id: '',
            email: '',
            password: ''
        }
    }
    render() {
        const {is_logged_in, request_status} = this.props
        return (!is_logged_in
            ? (request_status === 200
                ? <Redirect 
                        email={this.state.email}
                        to={{
                        pathname: `/email-activation/${this.state.email}`,
                    }}/>
                : this.renderMain())
            : <Redirect to={`/`}/>)
    }
    handleChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }
    handleSubmit = (dispatcherRequest) => {
        let formData = new FormData()
        formData.append('id', this.state.id)
        formData.append('name', this.state.fName + " " + this.state.lName)
        formData.append('email', this.state.email)
        formData.append('password', this.state.password)

        fetch('/api/v1/user/register', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            data.code === 200
                ? dispatcherRequest(false, 200, '')
                : dispatcherRequest(false, 401, data.error)
        })
    }
    renderMain() {
        return (
            <LayoutGuest>
                <div className="_bl5b">
                    <img src="/img/icon/white/logo.png" alt="logo"/>
                </div>
                <form
                    className="_cn"
                    onSubmit={(e) => {
                    e.preventDefault();
                    this.handleSubmit(this.props.dispatcherRequest)
                }}>
                    <div className="_ro">
                        <div className="_c5m37 _c5m3o5 _c5x312">
                            <h2 className="_he3m">Sign Up</h2>
                        </div>
                    </div>
                    <div className="_ro">
                        <InputContent
                            classWraper="_c5m33 _c5m3o5 _c5x35"
                            type="text"
                            name="fName"
                            placeholder="First Name"
                            onChangeState={this.handleChange}/>
                        <InputContent
                            classWraper="_c5m33 _c5x37"
                            type="text"
                            name="lName"
                            placeholder="Last Name"
                            onChangeState={this.handleChange}/>
                    </div>
                    <div className="_ro">
                        <InputContent
                            classWraper="_c5m36 _c5m3o5 _c5x312"
                            type="text"
                            name="id"
                            placeholder="NPM"
                            onChangeState={this.handleChange}/>
                    </div>
                    <div className="_ro">
                        <InputContent
                            classWraper="_c5m36 _c5m3o5 _c5x312"
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChangeState={this.handleChange}/>
                    </div>
                    <div className="_ro">
                        <div className="_c5m36 _c5m3o5 _c5x312">
                            <div className="_cn5g">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}/>
                                <i className="fa fa-eye"></i>
                            </div>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5m33 _c5m3o5 _c5x36">
                            <p className="_me5t">By Signing up, you agree to our
                                <b className="itl">
                                    terms of use
                                </b>
                                and
                                <b className="itl">policy</b>
                            </p>
                        </div>
                        <div className="_c5m33  _c5x36">
                            <button className="_bt5m3m _pl5r" type="submit">Sign Up</button>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5m3o5 _c5m36 _c5x3o3 _c5x36">
                            <p className="_me5f">
                                Have an account?
                                <b>
                                    <Link to={`/login`}>Login</Link>
                                </b>
                            </p>
                        </div>
                    </div>
                </form>
            </LayoutGuest>
        )
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
export default connect(mapStatetoProps, mapDispatchtoProps)(Signup)