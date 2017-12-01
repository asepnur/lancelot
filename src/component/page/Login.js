/*----------------------------------------------------------------
                            LOGIN PAGE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import {LayoutGuest, InputContent} from '../index.js'

class Login extends Component {
   constructor() {
      super()
      this.state = {
         email: '',
         password: '',
         is_show_password: false
      }
   }
/*----------------------------------------------------------------
                            HANDLER FUNCTION
------------------------------------------------------------------*/
   renderMain = () => {
      return (
         <LayoutGuest>
            <div className="_bl5b">
               <img src="/img/icon/white/logo.png" alt="logo"/>
            </div>
            <form className="_cn" onSubmit={this.handlerSignIn}>
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
                           type={!this.state.is_show_password
                           ? 'password'
                           : 'text'}
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
   handlerSignIn = (e) => {
      e.preventDefault()
      const {dispatcherRequest, dispatcherLoading} = this.props
      const {email, password} = this.state
      dispatcherLoading(10, false)

      if (email.length < 10 || password.length < 6) {
         dispatcherLoading(0, true)
         dispatcherRequest(false, 401, 'Invalid email or password')
         return
      }

      let formData = new FormData()
      formData.append('email', this.state.email)
      formData.append('password', this.state.password)

      axios.post(`/api/v1/user/signin`, formData, {
         validateStatus: (status) => {
            return status < 500
         }
      }).then((res) => {
         if (res.status === 200) {
            dispatcherLoading(100, false)
            dispatcherRequest(true, 0, '')
         } else {
            dispatcherLoading(10, true)
            dispatcherRequest(false, 401, res.data.error[0])
         }
      }).catch((err) => {
         dispatcherLoading(10, true)
         dispatcherRequest(false, 401, 'Error connection')
      })
   }
   onChangeState = (e) => {
      const target = e.target

      this.setState({
         [target.name]: target.value
      })
   }
   onChangeDisplayPassword = () => {
      this.setState({
         is_show_password: !this.state.is_show_password
      })
   }
   /*----------------------------------------------------------------
                            RENDER COMPONENT
------------------------------------------------------------------*/
   render() {
      const {is_logged_in} = this.props
      return (!is_logged_in
         ? this.renderMain()
         : <Redirect to={`/`}/>)
   }
}
/*----------------------------------------------------------------
                            VALIDATION
------------------------------------------------------------------*/
Login.PropTypes = {
   is_logged_in: PropTypes.bool.isRequired,
   is_login_failed: PropTypes.bool.isRequired,
   email: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
   onSubmitAction: PropTypes.func.isRequired
}

/*----------------------------------------------------------------
                            RENDER COMPONENT
------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
   return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
   return {
      dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
      dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
   }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Login)