import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {LayoutGuest, InputContent} from '../index.js'
import {actorRequest} from '../../action/action'

class Forgot extends Component {
		constructor() {
				super()
				this.state = {
						email: ''
				}
		}

		handleChange = (e) => {
				this.setState({
						[e.target.name]: e.target.value
				})
		}

		handleSubmit = (dispatcherRequest) => {
				let formData = new FormData()
				formData.append('email', this.state.email)
				formData.append('resend', 'true')
				fetch('/api/v1/user/forgot', {
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

		render() {
				const {is_logged_in, request_status} = this.props
				let url = '/forgot/' + this.state.email
				return (is_logged_in
						? <Redirect to={`/`}/>
						: request_status === 200
								? <Redirect to={url}/>
								: this.renderMain())

		}

		renderMain() {
				return (
						<LayoutGuest>
								<div className="_bl5b">
									<img src="/img/icon/white/logo.png" alt="logo"/>
								</div>
								<form
										className="_cn"
										onSubmit={e => {
										e.preventDefault();
										this.handleSubmit(this.props.dispatcherRequest)
								}}>
										<div className="_ro">
												<div className="_c5m36 _c5m3o5 _c5x3o1 _c5x310">
														<h2 className="_he3m">Forgot Password</h2>
												</div>
										</div>
										<div className="_ro">
												<div className="_c5m36 _c5m3o5 _c5x3o1 _c5x310">
														<p className="_me3l">We will send you a link to reset your password</p>
												</div>
										</div>
										<div className="_ro">
												<InputContent
														classWraper="_c5m36 _c5m3o5 _c5x3o1 _c5x310"
														type="text"
														name="email"
														placeholder="Email"
														onChangeState={this.handleChange}
														value={this.state.email}/>
										</div>
										<div className="_ro">
												<div className="_c5m3o5 _c5m33 _c5x3o1  _c5x35">
														<button className="_bt5m3m _pl5r" type="submit">Send</button>
												</div>
										</div>
										<div className="_ro">
												<div className="_c5m3o5 _c5m36 _c5x3o2 _c5x38">
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Forgot)