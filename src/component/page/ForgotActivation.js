import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {LayoutGuest, InputContent} from '../index.js'
import history from '../../../src/history'

class ForgotActivation extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            code: ''
        }
    }

    componentWillMount() {
        this.setState({email: this.props.match.params.email})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlerSubmit = (dispatcherRequest) => {
        let formData = new FormData()
        formData.append('email', this.state.email)
        formData.append('code', this.state.code)
        fetch('/api/v1/user/forgot', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200){
                history.push(`/forgot/${this.state.email}/${this.state.code}`)
            }else{
                dispatcherRequest(false, 401, data.error)
            }

        })
    }

    render() {
        let url = '/reset/' + this.state.email + '/' + this.state.code
        const {is_logged_in, request_status} = this.props
        return (is_logged_in
            ? <Redirect to={'/'}/>
            : request_status === 201
                ? <Redirect to={url}/>
                : this.renderMain()
            )
    }

    renderMain() {
        return (
            <LayoutGuest>
                <div className="_bl5c"></div>
                <form
                    className="_cn"
                    onSubmit={ e => {
                        e.preventDefault();
                        this.handlerSubmit(this.props.dispatcherRequest)
                }}>
                    <div className="_ro">
                        <div className="_c5m310 _c5m3o1 _c5x312">
                            <h2 className="_he3cm">Activation Your New Password</h2>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5m38 _c5m3o2 _c5x3o1 _c5x310">
                            <p className="_me3v">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className="_ro">
                        <InputContent
                            classWraper="_c5m36 _c5m3o3 _c5x3o1 _c5x310"
                            type="text"
                            name="code"
                            placeholder="Activation Code"
                            onChangeState={this.handleChange}
                            value={this.state.code}/>
                    </div>
                    <div className="_ro">
                        <div className="_c5m3o3 _c5m33 _c5x3o3  _c5x36">
                            <button className="_bt5m3m" type="submit">Activation</button>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5m3o3 _c5m36 _c5x3o3 _c5x36">
                            <p className="_me5f">
                                Have an account?
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
export default connect(mapStatetoProps,mapDispatchtoProps)(ForgotActivation)