/*----------------------------------------------------------------
                        ADMIN COURSE GRADE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import history from '../../history'
import {Navbar, LayoutUser, AdminNavCourse, LoadingAnim} from '../index'

class AdminGradeDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_menu: 'btn_grade',
            schedule_id: this.props.match.params.id,
            assignment_id: this.props.match.params.assignment_id,
            assignments: {},
            users: [],
            assignment_name: ''
        }
    }
    componentDidMount() {
        this.handleGetGrade()
    }
    onChangeHandler = (e) => {
        let grade = this.state.users
        grade.forEach((data) => {
            if (data.npm === parseInt(e.target.id, 10)) {
                data.grade = e.target.value
            }
        }, this.setState({users: grade}));
    }
    handleUpdateGrade = () => {
        const {dispatcherRequest} = this.props
        let formData = new FormData()
        let ids = []
        let scores = []
        this
            .state
            .users
            .forEach(data => {
                ids.push(data.id)
                scores.push(data.grade)
            }, this);
        formData.append('users_id', ids.join("~"))
        formData.append('scores', scores.join("~"))
        axios.post(`/api/admin/v1/grade?assignment_id=${this.state.assignment_id}`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            this.setState({isUploading: false})
            if (res.status === 200) {
                dispatcherRequest(true, 200, "Score succesfully updated")
            } else {
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherRequest(true, 401, 'Error connection')
            this.setState({isUploading: false})
        })

    }
    handleGetGrade = () => {
        axios.get(`/api/admin/v1/grade?assignment_id=${this.state.assignment_id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({users: res.data.data.users, assignment_loaded: true, assignment_name: res.data.data.name})
            } else {
                this.setState({users: [], assignment_loaded: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const {is_logged_in} = this.props
        const hdlr_user = {
            onChange: this.onChangeHandler
        }
        const dt_user = {
            users: this.state.users
        }
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
                                            <li>
                                                <Link to={`/admin/course/${this.state.schedule_id}`}>Mobile Computing</Link>
                                            </li>
                                            <li>
                                                <Link to={`/admin/course/${this.state.schedule_id}/grade`}>Grade</Link>
                                            </li>
                                            <li className="_active">
                                                <Link
                                                    to={`/admin/course/${this.state.schedule_id}/grade/${this.state.assignment_id}`}>Update</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavCourse active_menu={this.state.active_menu}/>
                                <div className="_c5x312 _c5m310 _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">Grade</div>
                                        </div>
                                        <ListAssignment
                                            dt_user={dt_user}
                                            is_loaded={this.state.assignment_loaded}
                                            hdlr_user={hdlr_user}/>
                                        <div className="_c5m3o8 _c5x3o6 _c5x33 _c5m32 _pd3r">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                history.push(`/admin/course/${this.state.schedule_id}/grade`)
                                            }}
                                                className="_bt5m">Back</button>
                                        </div>
                                        <div className="_c5x33 _c5m32 _pd3l">
                                            <button type="button" className="_bt5m3b" onClick={this.handleUpdateGrade}>Update</button>
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
const ListAssignment = (props) => {
    const {is_loaded, dt_user, hdlr_user} = props
    return (is_loaded
        ? <table className="_se _se3ada">
                <thead>
                    <tr>
                        <th>NPM</th>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody className="_ov3y5m">
                    {dt_user
                        .users
                        .map((data, i) => (
                            <tr key={i}>
                                <td>{data.npm}</td>
                                <td>{data.name}</td>
                                <td>{data.submitted_at}</td>
                                <td>
                                    <input
                                        name="grade"
                                        id={data.npm}
                                        placeholder={data.grade}
                                        value={data.grade}
                                        onChange={hdlr_user.onChange}
                                        type="text"/>
                                </td>
                            </tr>
                        ))
}
                </tbody>
            </table>

        : <table className="_se3msg">
            <tbody>
                <tr>
                    <td>
                        <LoadingAnim color_left="#333" color_right="#333"/>
                    </td>
                </tr>
            </tbody>
        </table>)
}
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message, modules_access: state.modules_access}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
        dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminGradeDetail)