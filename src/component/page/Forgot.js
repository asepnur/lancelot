import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'

import {LayoutGuest, InputContent} from '../index.js'

class Forgot extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            success: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('email', this.state.email)
        formData.append('resend', 'true')
        fetch('https://meikoapp.herokuapp.com/api/v1/user/forgot', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                this.setState({
                    success: true
                })
            }
        })
    }

    render() {
        let url = '/forgot/' + this.state.email
        return (this.state.success ? <Redirect to={url}/> : this.renderMain())
    }

    renderMain() {
        return (
            <LayoutGuest>
                <div className="_bl5c"></div>
                <form className="_cn" onSubmit={this.handleSubmit}>
                    <div className="_ro">
                        <div className="_c5m310 _c5m3o3 _c5x3o1 _c5x310">
                            <h2 className="_he3m">Forgot Password</h2>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5m38 _c5m3o3 _c5x3o1 _c5x310">
                            <p className="_me3l">We will send you a link to reset your password</p>
                        </div>
                    </div>
                    <div className="_ro">
                        <InputContent
                            classWraper="_c5m36 _c5m3o3 _c5x3o1 _c5x310"
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChangeState={this.handleChange}
                            value={this.state.email}/>
                    </div>
                    <div className="_ro">
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
export default Forgot