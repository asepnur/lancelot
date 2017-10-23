import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {LayoutGuest, InputContent} from '../index.js'
import Credentials from '../../Credentials'

class EmailActivation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            email: this.props.location.state.email,
            is_success: false
        }
    }
    render() {
        return (!Credentials.is_logged_in
            ? (!this.state.is_success
                ? this.renderMain()
                : <Redirect
                    to={{
                    pathname: `/success-signup`,
                    state: {
                        email: this.state.email
                    }
                }}/>)
            : <Redirect to="/"/>)
    }
    handleChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('code', this.state.code)
        formData.append('email', this.state.email)

        fetch('https://meikoapp.herokuapp.com/api/v1/user/verify', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                this.setState({is_success: true})
            }
        })
    }
    renderMain = () => {
        return (
            <LayoutGuest>
                <div className="_bl5c"></div>
                <form className="_cn" onSubmit={this.handleSubmit}>
                    <div className="_ro">
                        <div className="_c5m310 _c5m3o1 _c5x312">
                            <h2 className="_he3cm">Thank you for your registration!</h2>
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
                            onChangeState={this.handleChange}/>
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
    return {is_logged_in: state.is_logged_in, is_signup_success: state.is_signup_success}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherSignUp: () => dispatch()
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(EmailActivation)