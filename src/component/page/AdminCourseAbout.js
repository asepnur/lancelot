import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse, LoadingAnim} from '../index'

class AdminCourseAbout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_menu: 'btn_about',
            is_loaded: false,
            schedule_id: this.props.match.params.id,
            id: '',
            name: '',
            description: '',
            ucu: '',
            status: 'active',
            semester: '',
            year: '',
            start_time: '',
            end_time: '',
            class: '',
            day: '',
            place_id: ''
        }
    }
    componentDidMount() {
        this.handleGetAbout()
    }
    handleUpdate = (e) => {
        e.preventDefault()
        console.log('ok')
    }
    handleGetAbout = () => {
        axios.get(`/api/admin/v1/course/${this.state.schedule_id}`, {
            validateStatus: (status) => {
               return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState(res.data.data)
            }
            this.setState({is_loaded: true})
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
            let options = res.data.data.map( course => ({ value: course.id, label: course.name }))
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
    render() {
        const {is_logged_in} = this.props
        const {is_loaded} = this.state
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
                                                <Link to={`/`}>Home</Link>
                                            </li>
                                            <li>
                                                <Link to={`/admin`}>Admin</Link>
                                            </li>
                                            {
                                                is_loaded ? (
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
                                            <div className="_c5m310 _c5x310">About</div>
                                        </div>
                                        {
                                            !is_loaded ? (
                                                <table className="_se3msg">
                                                    <tbody>
                                                        <tr>
                                                        <td>
                                                            <LoadingAnim color_left="#333" color_right="#333"/>
                                                        </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            ) : (
                                                <form onSubmit={this.handleUpdate}>
                                                    <div className="_se">
                                                        <div className="_c5x312 _c5m312 _pd3m3b">
                                                            <label htmlFor="name">Course Name</label>
                                                            <Select.AsyncCreatable
                                                                name="name"
                                                                multi={false}
                                                                value={{ value: this.state.id, label: this.state.name }}
                                                                // onChange={e => this.setState({course: e})}
                                                                loadOptions={this.handleSearchCourse}
                                                                placeholder="Insert course"
                                                                />
                                                        </div>
                                                        <div className="_c5x312 _c5m312">
                                                            <label htmlFor="description">Description*</label>
                                                            <textarea placeholder="Insert description" value={this.state.description}></textarea>
                                                        </div>
                                                        <div className="_c5x36 _c5m36">
                                                            <label htmlFor="course_name">UCU</label>
                                                            <input name="due" type="text" value={this.state.ucu}/>
                                                        </div>
                                                        <div className="_c5x36 _c5m36">
                                                            <label htmlFor="course_name">Class</label>
                                                            <input name="due" type="text" value={this.state.class}/>
                                                        </div>
                                                        <div className="_c5x36 _c5m36">
                                                            <label htmlFor="place">Place</label>
                                                            <Select.AsyncCreatable
                                                                name="place"
                                                                multi={false}
                                                                value={{ value: this.state.place_id, label: this.state.place_id }}
                                                                // onChange={e => this.setState({course: e})}
                                                                loadOptions={this.handleSearchPlace}
                                                                placeholder="Insert course"
                                                                />
                                                        </div>
                                                        <div className="_c5x36 _c5m36">
                                                            <label htmlFor="course_name">Semester</label>
                                                            <input name="due" type="text" value={this.state.semester}/>
                                                        </div>
                                                        <div className="_c5x36 _c5m36">
                                                            <label htmlFor="course_name">Year</label>
                                                            <input name="due" type="text" value={this.state.year}/>
                                                        </div>
                                                        <div className="_c5x34 _c5m34">
                                                            <label htmlFor="course_name">Day</label>
                                                            <input name="due" type="text" value={this.state.day}/>
                                                        </div>
                                                        <div className="_c5x34 _c5m34">
                                                            <label htmlFor="course_name">Start Time</label>
                                                            <input name="due" type="text" value={this.state.start_time}/>
                                                        </div>
                                                        <div className="_c5x34 _c5m34">
                                                            <label htmlFor="course_name">End Time</label>
                                                            <input name="due" type="text" value={this.state.end_time}/>
                                                        </div>
                                                        <div className="_c5x312 _c5m312">
                                                            <label htmlFor="course_name">Status</label>
                                                            <Select
                                                                value={this.state.status}
                                                                onChange={this.handleChange}
                                                                clearable={false}
                                                                options={[
                                                                    { value: 'active', label: 'Active' },
                                                                    { value: 'inactive', label: 'Inactive' },
                                                                ]}
                                                            />
                                                        </div>
                                                        <div className="_c5m3o10 _c5x3o9 _c5x33 _c5m32 _pd3l">
                                                            <button type="submit" className="_bt5m3b">Update</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            )
                                        }
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourseAbout)