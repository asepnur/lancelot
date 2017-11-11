import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, InputContent} from '../index.js'

import {Pro as base_url} from '../../env/Environment'

class AdminCrtCourse extends Component {
    constructor() {
        super()

        this.state = {
            data: [
                {
                    course_id: '',
                    name: '',
                    semester: '',
                    ucu: '',
                    start_time: '',
                    end_time: '',
                    class: '',
                    day: '',
                    place: '',
                    year:''
                }
            ]
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (dispatcherRequest)=>{
        let formData = new FormData()
        formData.append('id', this.state.id )
        formData.append('name', this.state.name )
        formData.append('ucu', this.state.ucu )
        formData.append('semester', this.state.semester )
        formData.append('year', this.state.year )
        formData.append('start_time', this.state.start_time )
        formData.append('end_time', this.state.end_time )
        formData.append('class', this.state.class )
        formData.append('day', this.state.day )
        formData.append('place', this.state.place )
        formData.append('is_update', true )
        
        fetch(base_url + '/api/admin/v1/course', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            data.code === 200
                ? window.location = '/admin/course'
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
                                <h1 className="_he3b">Add New Course</h1>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5m312 _pd5m3n _ta">

                                <ul className="_ta5l">
                                    <li>
                                        <Link id="users" to={'/admin/course'}>List Course</Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={this.handleRolesMenu}
                                            className="_ta5l3a"
                                            id="create-user"
                                            to={'#'}>Add Course</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x312 _c5m312 _pd5m3n">
                                <div className="_se _se3a">
                                    <div className="_ro">
                                        <div className="_c5x310 _c5m311 ">
                                            <h1 className="_he3m3b">Add Course</h1>
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
                                                        placeholder="Course ID"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.id}/>
                                                    <InputContent
                                                        classWraper="_c5m312 _c5x312"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Course Name"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.name}/>
                                                    <InputContent
                                                        classWraper="_c5m312 _c5x312"
                                                        type="text"
                                                        name="year"
                                                        placeholder="Year"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.ucu}/>
                                                    <InputContent
                                                        classWraper="_c5m36 _c5x36"
                                                        type="text"
                                                        name="semester"
                                                        placeholder="Semester"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.semester}/>
                                                    <InputContent
                                                        classWraper="_c5m36 _c5x36"
                                                        type="text"
                                                        name="ucu"
                                                        placeholder="SKS"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.ucu}/>
                                                    <InputContent
                                                        classWraper="_c5m36 _c5x36"
                                                        type="text"
                                                        name="class"
                                                        placeholder="Class"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.class}/>
                                                    <InputContent
                                                        classWraper="_c5m36 _c5x36"
                                                        type="text"
                                                        name="day"
                                                        placeholder="Day"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.day}/>
                                                    <InputContent
                                                        classWraper="_c5m36 _c5x36"
                                                        type="text"
                                                        name="start_time"
                                                        placeholder="Start Time"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.start_time}/>
                                                    <InputContent
                                                        classWraper="_c5m36 _c5x36"
                                                        type="text"
                                                        name="end_time"
                                                        placeholder="End Time"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.end_time}/>
                                                    <InputContent
                                                        classWraper="_c5m312 _c5x312"
                                                        type="text"
                                                        name="place"
                                                        placeholder="Place"
                                                        onChangeState={this.handleChange}
                                                        value={this.state.place}/>
                                                </div>
                                                <div className="_ro">
                                                    <div className="_c5x3o8 _c5m33 _c5x34 _pd3l">
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCrtCourse)