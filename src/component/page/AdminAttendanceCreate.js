/*----------------------------------------------------------------
                        ADMIN COURSE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import moment from 'moment'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse} from '../index'
import history from '../../history'

class AdminAttendanceCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_menu: 'btn_attendance',
            atd_loaded: false,
            student_loaded: false,
            meeting_id: this.props.match.params.meeting_id,
            number: '',
            subject: '',
            description: '',
            schedule_id: this.props.match.params.id,
            date: moment(),
            users: []
        }
    }

    componentDidMount() {
        this.handleGetMeeting()
        this.handleGetAttendant()
    }

    handleGetMeeting = () => {
        // create assignment
        if (!this.state.meeting_id) {
            this.setState({atd_loaded: true})
            return
        }
        // update assignment
        axios.get(`/api/admin/v1/attendance/${this.state.meeting_id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const {data} = res.data
            this.setState({
                number: data.meeting_number,
                subject: data.subject,
                description: data.description,
                // date: new Date(data.date * 1000),
                atd_loaded: true,
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    
    handleGetAttendant = () => {
        if (!this.state.meeting_id) {
            this.getAttendantCreate()
        } else {
            this.getAttendantUpdate()
        }
    }

    getAttendantCreate = () => {
        axios.get(`/api/admin/v1/list/course/enrolled?schedule_id=${this.state.schedule_id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const {data} = res.data
            const attendants = data.map(value => ({
                id: value.id,
                name: value.name,
                present: false
            }))
            this.setState({
                users: attendants,
                student_loaded: true
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    getAttendantUpdate = () => {
        axios.get(`/api/admin/v1/list/attendant?meeting_id=${this.state.meeting_id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const {data} = res.data
            const attendants = data.map(value => ({
                id: value.id,
                name: value.name,
                present: value.status === 'present' ? true : false
            }))
            this.setState({
                users: attendants,
                student_loaded: true
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeStatus = (id) => {
        const {users} = this.state
        const index = users.findIndex(value => value.id === id)
        users[index].present = !users[index].present
        this.setState({users: users})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatcherRequest, dispatcherLoading} = this.props
        const {
            meeting_id,
            number,
            subject,
            description,
            date,
            schedule_id,
            users
        } = this.state

        const students = JSON.stringify(users.map(value => ({
            identity_code: value.id,
            name: value.name,
            status: value.present ? 'present' : 'absent'
        })))

        const formData = new FormData()
        formData.append('meeting_number', number)
        formData.append('subject', subject)
        formData.append('description', description)
        formData.append('date', date.unix())
        formData.append('schedule_id', schedule_id)
        formData.append('student', students)
        
        let url = `/api/admin/v1/attendance`,
            method = `post`,
            message = `Attendance sucessfully created`
        if (meeting_id) {
            url = `/api/admin/v1/attendance/${meeting_id}`
            method = `patch`
            message = `Attendance sucessfully updated`
            formData.append('is_force', true)
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
                dispatcherLoading(100, false)
                this.setState({
                    change_image: !this.state.change_image
                })
                dispatcherRequest(true, 200, message)
                history.push(`/admin/course/${schedule_id}/attendance/`)
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }

    render() {
        const {is_logged_in} = this.props
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
                                                <Link to="/"><i className="fa fa-home"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="/admin">Admin</Link>
                                            </li>
                                            <li>
                                                <Link to={`/admin/course/${this.state.schedule_id}`}>Mobile Computing</Link>
                                            </li>
                                            <li>
                                                <Link to={`/admin/course/${this.state.schedule_id}/attendance`}>Attendance</Link>
                                            </li>
                                            {
                                                this.state.meeting_id ? (
                                                        <li className="_active">
                                                            <Link to="#">Update</Link>
                                                        </li>
                                                ) : (
                                                    <li className="_active">
                                                        <Link to="#">Create</Link>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavCourse active_menu={this.state.active_menu}/>
                                <div className="_c5x312 _c5m310  _pd3l3lr __ass">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">Create Attendance</div>
                                        </div>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="_ca" style={{paddingLeft: 0, marginTop: 0}}>
                                                <div className="_c5m34 _c5x312" style={{paddingLeft: 0}}>
                                                    <div className="_se">
                                                        <div className="_c5x312 _c5m312 _pd3m3b">
                                                            <label htmlFor="number">Meeting Number*</label>
                                                            <input name="number" placeholder="Insert meeting number" type="text" value={this.state.number} onChange={this.handleChange}/>
                                                        </div>
                                                        <div className="_c5x312 _c5m312 _pd3m3b">
                                                            <label htmlFor="name">Subject*</label>
                                                            <input name="subject" placeholder="Insert subject" type="text" value={this.state.subject} onChange={this.handleChange}/>
                                                        </div>
                                                        <div className="_c5x312 _c5m312">
                                                            <label htmlFor="description">Description</label>
                                                            <textarea name="description" placeholder="Insert description" value={this.state.description} onChange={this.handleChange}></textarea>
                                                        </div>
                                                        <div className="_c5x312 _c5m312">
                                                            <label htmlFor="date">Date*</label>
                                                            <input name="date" type="text" value={this.state.date.format('llll')} onChange={this.handleChange}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="_c5m38 _c5x312">
                                                    <div className="_c5x312 _c5m312">
                                                        <label htmlFor="number" style={{fontSize: '1.2em'}}>User Attendance</label>
                                                    </div>
                                                    <table className="_se _se3ada _pd3m3b _ma3m3tb" style={{marginLeft: 0, marginRight: 0}}>
                                                        <thead>
                                                            <tr>
                                                                <th>NPM</th>
                                                                <th>Name</th>
                                                                <th>Present</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody style={{maxHeight: '320px', overflowY: 'scroll'}}>
                                                            {
                                                                this.state.users.map((v, k) => (
                                                                    <tr key={k}>
                                                                        <td>{v.id}</td>
                                                                        <td>{v.name}</td>
                                                                        <td>
                                                                            <label className="switch">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    checked={v.present}
                                                                                    onChange={this.handleChangeStatus.bind(null, v.id)}/>
                                                                                <span className="slider round"></span>
                                                                            </label>
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="_c5m3o10 _c5x3o9 _c5x33 _c5m32 _pd3l">
                                                <button type="submit" className="_bt5m3b">{this.state.meeting_id ? 'Update' : 'Create'}</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to="/login"/>
        )
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminAttendanceCreate)