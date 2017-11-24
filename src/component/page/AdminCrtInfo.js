import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, InputContent, TextareaContent} from '../index'
import {base_url} from '../../env/Environment'

class AdminCrtInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            data: [
                {
                    title: '',
                    description: '',
                    schedule_id: ''
                }
            ]
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (dispatcherRequest) => {
        let formData = new FormData()
        formData.append('title', this.state.title)
        formData.append('description', this.state.description)
        formData.append('date', this.state.schedule_id)

        fetch(base_url + '/api/admin/v1/information/create', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            data.code === 200
                ? window.location = '/admin/information'
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
                                <h1 className="_he3b">Create Information</h1>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5m312 _pd5m3n _ta">
                                <ul className="_ta5l">
                                    <li>
                                        <Link to={'/'}>
                                            <i className="" id="btn_attend">Information</i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>
                                            <i className="_ta5l3a" id="btn_attend">Create Information</i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="_ro">

                            <div className="_c5x312 _c5m312 _pd5m3n">
                                <div className="_se _se3a">
                                    <div className="_ro _pd3n3b">
                                        <div className="_c5m312 _c5x312">
                                            <form className="_cn" action="/" method="POST">
                                                <div className="_ro _pd3l3t">
                                                    <InputContent
                                                        classWraper="_c5m312 _c5x312"
                                                        type="text"
                                                        name="title"
                                                        placeholder="Subject"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.title}/>
                                                    <TextareaContent
                                                        classWraper="_c5m312 _c5x312"
                                                        type="text"
                                                        name="description"
                                                        placeholder="description"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.description}/>
                                                    <InputContent
                                                        classWraper="_c5m312 _c5x312"
                                                        type="text"
                                                        name="date"
                                                        placeholder="schedule_id"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.schedule_id}/>
                                                </div>
                                                <div className="_ro">
                                                    <div className="_c5m33 _c5x34 _pl5r">
                                                        <button
                                                            onClick={e => {
                                                            e.preventDefault();
                                                            this.handleSubmit(this.props.dispatcherRequest)
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCrtInfo)