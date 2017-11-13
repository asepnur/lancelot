import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'

import {actorRequest} from '../../action/action'
import {LayoutGuest, InputContent} from '../index.js'

import {base_url} from '../../env/Environment'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      is_show_password: false
    }
  }
  render() {
    const {is_logged_in} = this.props
    return (!is_logged_in
      ? this.renderMain()
      : <Redirect to={`/`}/>)
  }
  renderMain = () => {
    return (
      <LayoutGuest>
        <div className="_bl5b"></div>
        <form
          className="_cn"
          onSubmit={(e) => {
          e.preventDefault();
          this.handlerSignIn(this.props.dispatcherRequest)
        }}>
          <div className="_ro">
            <div className="_c5m38 _c5m3o5 _c5x312">
              <h2 className="_he3m">Sign In
              </h2>
            </div>
          </div>
          <div className="_ro">
            <InputContent
              classWraper="_c5m36 _c5m3o5 _c5x312"
              type="text"
              name="email"
              placeholder="Email"
              onChangeState={this.onChangeState}/>
          </div>
          <div className="_ro">
            <div className="_c5m36 _c5m3o5 _c5x312">
              <div className="_cn5g">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChangeState}/>
                <i onClick={this.onChangeDisplayPassword} className="fa fa-eye"></i>
              </div>
            </div>
          </div>
          <div className="_ro">
            <div className="_c5m33 _c5m3o5 _c5x36">
              <p className="_me5t">Forgot password?
                <b>
                  <Link to={'/forgot'}>here</Link>
                </b>
              </p>
            </div>
            <div className="_c5m33  _c5x36">
              <button className="_bt5m3m _pl5r" type="submit">Login</button>
            </div>
          </div>
          <div className="_ro">
            <div className="_c5m3o5 _c5m36 _c5x3o2 _c5x38">
              <p className="_me5f">
                Don't Have an account?
                <b>
                  <Link to={`/signup`}>Signup</Link>
                </b>
              </p>
            </div>
          </div>
        </form>
      </LayoutGuest>
    )
  }
  handlerSignIn = (dispatcherRequest) => {
    let formData = new FormData()
    formData.append('email', this.state.email)
    formData.append('password', this.state.password)
    fetch(base_url + '/api/v1/user/signin', {
      method: 'POST',
      credentials: 'include',
      crossDomain: true,
      body: formData
    }).then((res) => {
      return res.json()
    }).then((data) => {
      return (data.code === 200
        ? dispatcherRequest(true, 200, '')
        : dispatcherRequest(false, 401, data.error))
    })
  }
  onChangeState = (e) => {
    const target = e.target

    this.setState({
      [target.name]: target.value
    })
  }
  onChangeDisplayPassword = () => {
    let password = document.getElementById('password')
    
    this.state.is_show_password 
      ?ReactDOM.findDOMNode(password).setAttribute('type', 'password')
      :ReactDOM.findDOMNode(password).setAttribute('type', 'text')

    this.setState({
      is_show_password: !this.state.is_show_password
    })
  }
}
Login.PropTypes = {
  is_logged_in: PropTypes.bool.isRequired,
  is_login_failed: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmitAction: PropTypes.func.isRequired
}

const mapStatetoProps = (state) => {
  return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
  return {
    dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Login)