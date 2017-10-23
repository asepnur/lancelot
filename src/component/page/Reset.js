import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {actorRequest} from '../../action/action'
import {LayoutGuest, InputContent} from '../index.js'

class Reset extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            code: '',
            password: '',
            password_confirmation: ''
        }
    }

    componentWillMount() {
        this.setState({email: this.props.match.params.email, code: this.props.match.params.code})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (dispatcherRequest) => {
        if (this.state.password !== this.state.password_confirmation) {
            dispatcherRequest(false, 401, 'Password not matched!')
            return
        }

        let formData = new FormData()
        formData.append('email', this.state.email)
        formData.append('code', this.state.code)
        formData.append('password', this.state.password)
        fetch('https://meikoapp.herokuapp.com/api/v1/user/forgot', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            data.code === 200
                ? dispatcherRequest(false, 202, '')
                : dispatcherRequest(false, 401, data.error)
        })
    }

    render() {
        const {is_logged_in, request_status} = this.props
        return (is_logged_in
            ? <Redirect to='/'/>
            : request_status === 202
                ? <Redirect to={`/login`}/>
                : this.renderMain()
                    )
    }

    renderMain() {
        return (
            <LayoutGuest>
                <div className="_bl5c"></div>
                <form className="_cn" onSubmit={ e => {
                    e.preventDefault();
                    this.handleSubmit(this.props.dispatcherRequest)
                }}>
                    <div className="_ro">
                        <div className="_c5m310 _c5m3o3 _c5x3o1 _c5x310">
                            <h2 className="_he3m">Reset Password</h2>
                        </div>
                        <InputContent
                            classWraper="_c5m36 _c5m3o3 _c5x3o1 _c5x310"
                            type="password"
                            name="password"
                            placeholder="Enter new password"
                            onChangeState={this.handleChange}
                            value={this.state.password}/>
                        <InputContent
                            classWraper="_c5m36 _c5m3o3 _c5x3o1 _c5x310"
                            type="password"
                            name="password_confirmation"
                            placeholder="Reenter new password"
                            onChangeState={this.handleChange}
                            value={this.state.password_confirmation}/>
                        <div className="_c5m3o3 _c5m33 _c5x3o1  _c5x35">
                            <button className="_bt5m3m _pl5r" type="submit">Send</button>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5m3o3 _c5m36 _c5x3o2 _c5x38">
                            <p className="_me5f">Remember your password?
                                <b>
                                    <Link to={'/login'}>Login</Link>
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
export default connect(mapStatetoProps,mapDispatchtoProps)(Reset)