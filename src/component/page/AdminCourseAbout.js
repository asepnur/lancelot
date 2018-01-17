import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse, LoadingAnim} from '../index'
import history from '../../history'

class AdminCourseAbout extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            active_menu: 'btn_about',
            course_loaded: false,
            parameter_loaded: false,
            schedule_id: this.props.match.params.id,
            id: '',
            name: null,
            select_name: null,
            description: '',
            ucu: '',
            is_update: 'false',
            semester: '',
            year: '',
            start_time: '',
            end_time: '',
            room: '',
            status: '',
            day: { value: 'monday', label: 'Monday'},
            place: null,
            grade_parameters: [],
        }
    }
    componentDidMount() {
        this.handleGetAbout()
        this.handleGetParameter()
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatcherRequest, dispatcherLoading} = this.props
        const id = this.state.select_name ? this.state.select_name.value : ''
        const name = this.state.select_name ? this.state.select_name.label : ''
        const description = this.state.description
        const ucu = this.state.ucu
        const room = this.state.room
        const place = this.state.place ? this.state.place.value : ''
        const semester = this.state.semester
        const year = this.state.year
        const day = this.state.day ? this.state.day.value : ''
        const start_time = this.state.start_time
        const end_time = this.state.end_time
        const is_update = this.state.is_update
        const status = this.state.status
        let schedule_id = this.state.schedule_id

        const parameters = JSON.stringify(this.state.grade_parameters.map(value => ({
            type: value.name,
            percentage: parseFloat(value.percentage)
        })))
        
        const formData = new FormData()
        formData.append('id', id)
        formData.append('name', name)
        formData.append('description', description)
        formData.append('ucu', ucu)
        formData.append('class', room)
        formData.append('place', place)
        formData.append('semester', semester)
        formData.append('year', year)
        formData.append('day', day)
        formData.append('start_time', start_time)
        formData.append('end_time', end_time)
        formData.append('is_update', is_update)
        formData.append('grade_parameter', parameters)
        
        let url = `/api/admin/v1/course`,
        method = `post`,
        message = `Course sucessfully created`
        if (schedule_id) {
            url = `/api/admin/v1/course/${schedule_id}`
            method = `patch`
            message = `Course sucessfully updated`
            formData.append('status', status)
        }
        axios({
            method: method,
            url: url,
            data: formData,
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                if (!schedule_id) {
                    schedule_id = res.data.data
                    console.log(schedule_id)
                }
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, message)
                history.push(`/admin/course/${schedule_id}/about/`)
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleGetAbout = () => {
        if (!this.state.schedule_id) {
            this.setState({course_loaded: true})
            return
        }

        axios.get(`/api/admin/v1/course/${this.state.schedule_id}`, {
            validateStatus: (status) => {
               return status === 200
            }
        }).then((res) => {
            const {data} = res.data
            this.setState({
                id: data.id,
                name: data.name,
                select_name: {value: data.id, label: data.name},
                description: data.description,
                ucu: data.ucu,
                semester: data.semester,
                year: data.year,
                start_time: data.start_time,
                end_time: data.end_time,
                room: data.class,
                status: data.status,
                day: {value: data.day, label: data.day},
                place: {value: data.place_id, label: data.place_id},
                course_loaded: true
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetParameter = () => {
        if (!this.state.schedule_id) {
            this.setState({parameter_loaded: true})
            return
        }

        axios.get(`/api/admin/v1/course/${this.state.schedule_id}/parameter`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const {data} = res.data
            const parameters = data.map(parameter => ({
                name: parameter.type,
                percentage: parameter.percentage
            }))
            this.setState({
                grade_parameters: parameters,
                parameter_loaded: true
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    handleSearchCourse = (value) => {
        if (value.length < 3) {
			return Promise.resolve({ options: [] })
        }
        return axios.get(`/api/admin/v1/list/course/search?q=${value}`, {
            validateStatus: (status) => {
               return status === 200
            }
        }).then((res) => {
            let options = res.data.data.map( course => ({
                value: course.id,
                label: course.name,
                description: course.description,
                ucu: course.ucu }))
            return { options }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleSearchPlace = (value) => {
        if (value.length < 3) {
			return Promise.resolve({ options: [] })
        }
        return axios.get(`/api/v1/place/search?qry=${value}`, {
            validateStatus: (status) => {
               return status === 200
            }
        }).then((res) => {
            let options = res.data.data.places.map( place => ({ value: place, label: place }))
            return { options }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleChangeParameter = (k, e) => {
        const parameters = this.state.grade_parameters
        parameters[k].name = e.target.value
        this.setState({
            grade_parameters: parameters
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleAddParameter = (e) => {
        this.setState({
            grade_parameters: [...this.state.grade_parameters, {name: 'ASSIGNMENT', percentage: 0}]
        })
    }
    handleDeleteParameter = (key) => {
        const parameters = this.state.grade_parameters
        parameters.splice(key, 1)
        this.setState({
            grade_parameters: parameters
        })
    }
    render() {
        const {is_logged_in} = this.props
        const {course_loaded, parameter_loaded} = this.state
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"admin"}/>
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro _c5m312 _c5x312 _pd5m3n">
                                <div className="_c5x312 _c5m312 _he3b _pd3l3b">Mobile Computing</div>
                                <div className="_c5x312 _c5m312 _pd3n3lr  _pd3l3b">
                                    <div className="_pd3n3lr _ta">
                                        <ul className="_ta5p">
                                        <li>
                                        <Link to="/">
                                            <i className="fa fa-home"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin">Admin</Link>
                                    </li>
                                            {
                                                course_loaded ? (
                                                    <li className="_active">
                                                        <Link to={`/admin/course/${this.state.schedule_id}/about`}>{this.state.name}</Link>
                                                    </li>
                                                ) : ''
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavCourse active_menu={this.state.active_menu}/>
                                <div className="_c5x312 _c5m310  _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">{this.state.schedule_id ? 'About' : 'Create Course'}</div>
                                        </div>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="_ca" style={{padding: 0, margin: 0}}>
                                                <div className="_c5m38 _c5x312" style={{padding: 0, marginBottom: "20px"}}>
                                                    {
                                                        course_loaded ? (
                                                            <div className="_se">
                                                                <div className="_c5x312 _c5m312 _pd3m3b">
                                                                    <label htmlFor="name">Course Name*</label>
                                                                    <Select.AsyncCreatable
                                                                        name="name"
                                                                        multi={false}
                                                                        value={this.state.select_name}
                                                                        onChange={e => this.setState({
                                                                            select_name: e,
                                                                            description: e.description,
                                                                            ucu: e.ucu
                                                                        })}
                                                                        loadOptions={this.handleSearchCourse}
                                                                        placeholder="Insert course"
                                                                        style={{margin: '10px 0', height: '40px'}}
                                                                        />
                                                                </div>
                                                                <div className="_c5x312 _c5m312">
                                                                    <label htmlFor="description">Description</label>
                                                                    <textarea
                                                                        name="description"
                                                                        placeholder="Insert description"
                                                                        onChange={this.handleChange}
                                                                        value={this.state.description}></textarea>
                                                                </div>
                                                                <div className="_c5x36 _c5m34">
                                                                    <label htmlFor="ucu">UCU*</label>
                                                                    <input
                                                                        name="ucu"
                                                                        type="text"
                                                                        onChange={this.handleChange}
                                                                        value={this.state.ucu}/>
                                                                </div>
                                                                <div className="_c5x36 _c5m34">
                                                                    <label htmlFor="class">Class*</label>
                                                                    <input
                                                                        name="room"
                                                                        type="text"
                                                                        onChange={this.handleChange}
                                                                        value={this.state.room}/>
                                                                </div>
                                                                <div className="_c5x36 _c5m34">
                                                                    <label htmlFor="place">Place*</label>
                                                                    <Select.AsyncCreatable
                                                                        name="place"
                                                                        multi={false}
                                                                        value={this.state.place}
                                                                        onChange={e => this.setState({place: e})}
                                                                        loadOptions={this.handleSearchPlace}
                                                                        placeholder="Insert Place"
                                                                        style={{margin: '10px 0', height: '40px'}}
                                                                        />
                                                                </div>
                                                                <div className="_c5x36 _c5m34">
                                                                    <label htmlFor="semester">Semester*</label>
                                                                    <input
                                                                        name="semester"
                                                                        type="text"
                                                                        onChange={this.handleChange}
                                                                        value={this.state.semester}/>
                                                                </div>
                                                                <div className="_c5x36 _c5m34">
                                                                    <label htmlFor="year">Year*</label>
                                                                    <input
                                                                        name="year"
                                                                        type="text"
                                                                        onChange={this.handleChange}
                                                                        value={this.state.year}/>
                                                                </div>
                                                                <div className="_c5x36 _c5m34">
                                                                    <label htmlFor="day">Day*</label>
                                                                    <Select
                                                                        value={this.state.day}
                                                                        onChange={e => this.setState({day: e})}
                                                                        clearable={false}
                                                                        options={[
                                                                            { value: 'Monday', label: 'Monday' },
                                                                            { value: 'Tuesday', label: 'Tuesday' },
                                                                            { value: 'Wednesday', label: 'Wednesday' },
                                                                            { value: 'Thursday', label: 'Thursday' },
                                                                            { value: 'Friday', label: 'Friday' },
                                                                            { value: 'Saturday', label: 'Saturday' },
                                                                            { value: 'Sunday', label: 'Sunday' },
                                                                        ]}
                                                                        style={{margin: '10px 0', height: '40px'}}
                                                                    />
                                                                </div>
                                                                {
                                                                    this.state.schedule_id ? (
                                                                        <React.Fragment>
                                                                            <div className="_c5x36 _c5m36">
                                                                                <label htmlFor="start_time">Start Time*</label>
                                                                                <input
                                                                                    name="start_time"
                                                                                    type="text"
                                                                                    onChange={this.handleChange}
                                                                                    value={this.state.start_time}/>
                                                                            </div>
                                                                            <div className="_c5x36 _c5m36">
                                                                                <label htmlFor="end_time">End Time*</label>
                                                                                <input
                                                                                    name="end_time"
                                                                                    type="text"
                                                                                    onChange={this.handleChange}
                                                                                    value={this.state.end_time}/>
                                                                            </div>
                                                                            <div className="_c5x36 _c5m36">
                                                                                <label htmlFor="status">Status</label>
                                                                                <select name="status" value={this.state.status} onChange={this.handleChange}>
                                                                                    <option value="active">Active</option>
                                                                                    <option value="inactive">Inactive</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="_c5x36 _c5m36">
                                                                                <label htmlFor="desc_update">Update Description</label>
                                                                                <select name="is_update" value={this.state.is_update} onChange={this.handleChange}>
                                                                                    <option value="true">Yes</option>
                                                                                    <option value="false">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </React.Fragment>
                                                                    ) : (
                                                                        <React.Fragment>
                                                                        <div className="_c5x36 _c5m34">
                                                                            <label htmlFor="start_time">Start Time*</label>
                                                                            <input
                                                                                name="start_time"
                                                                                type="text"
                                                                                onChange={this.handleChange}
                                                                                value={this.state.start_time}/>
                                                                        </div>
                                                                        <div className="_c5x36 _c5m34">
                                                                            <label htmlFor="end_time">End Time*</label>
                                                                            <input
                                                                                name="end_time"
                                                                                type="text"
                                                                                onChange={this.handleChange}
                                                                                value={this.state.end_time}/>
                                                                        </div>
                                                                        <div className="_c5x312 _c5m34">
                                                                            <label htmlFor="desc_update">Update Description</label>
                                                                            <select name="is_update" value={this.state.is_update} onChange={this.handleChange}>
                                                                                <option value="true">Yes</option>
                                                                                <option value="false">No</option>
                                                                            </select>
                                                                        </div>
                                                                        </React.Fragment>
                                                                    )
                                                                }
                                                                
                                                            </div>
                                                        ) : (
                                                            <table className="_se3msg">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>
                                                                        <LoadingAnim color_left="#333" color_right="#333"/>
                                                                    </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        )
                                                    }
                                                </div>
                                                <div className="_c5m34 _c5x312" style={{padding: 0}}>
                                                    <div className="_c5x312 _c5m312">
                                                        <label htmlFor="grade_parameter" style={{fontSize: '1.2em'}}>Grade Parameter</label>
                                                    </div>
                                                    {
                                                        parameter_loaded ? (
                                                            <table className="_se _se3ada _pd3m3b _ma3m3tb" style={{marginLeft: 0, marginRight: 0}}>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Name</th>
                                                                        <th>Percentage</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody style={{maxHeight: '320px', overflowY: 'scroll'}}>
                                                                    {
                                                                        this.state.grade_parameters.map((parameter, k) => (
                                                                            <tr key={k}>
                                                                                <td>
                                                                                    <select value={parameter.name} onChange={(e) => {
                                                                                        const {grade_parameters} = this.state
                                                                                        grade_parameters[k].name = e.target.value
                                                                                        this.setState({
                                                                                            grade_parameters: grade_parameters
                                                                                        })
                                                                                    }}>
                                                                                        <option value="ATTENDANCE">Attendance</option>
                                                                                        <option value="QUIZ">Quiz</option>
                                                                                        <option value="ASSIGNMENT">Assignment</option>
                                                                                        <option value="MID">Mid Test</option>
                                                                                        <option value="FINAL">Final Test</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td>
                                                                                    <input
                                                                                        type="number"
                                                                                        style={{margin: 0}}
                                                                                        value={parameter.percentage}
                                                                                        onChange={(e) => {
                                                                                            const {grade_parameters} = this.state
                                                                                            grade_parameters[k].percentage = e.target.value
                                                                                            this.setState({
                                                                                                grade_parameters: grade_parameters
                                                                                            })
                                                                                        }}/>
                                                                                </td>
                                                                                <td>
                                                                                    <Link to="#" onClick={this.handleDeleteParameter.bind(null, k)}>
                                                                                        <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                                                    </Link>
                                                                                </td>
                                                                            </tr>
                                                                        ))
                                                                    }
                                                                    <tr>
                                                                        <td colSpan="3">
                                                                            <input type="button" className="_bt5m3b" value="Add" onClick={this.handleAddParameter} style={{margin: 0}}/>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        ) : (
                                                            <table className="_se3msg">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>
                                                                        <LoadingAnim color_left="#333" color_right="#333"/>
                                                                    </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            {
                                                course_loaded && parameter_loaded ? (
                                                    <div className="_c5m3o10 _c5x3o9 _c5x33 _c5m32 _pd3l">
                                                        <button type="submit" className="_bt5m3b">{this.state.schedule_id ? 'Update' : 'Create'}</button>
                                                    </div>
                                                ) : null
                                            }
                                        </form>
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
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
        dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourseAbout)