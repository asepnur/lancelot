/*----------------------------------------------------------------
                        ASSIGNMENT DETAIL PAGE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser, UploadFile, LoadingAnim} from '../index.js'

class AssignmentDetail extends Component {
    constructor() {
        super()
        this.state = {
            showUpload: false,
            file: '',
            description: '',
            isUploading: false,
            uploaded: false,
            asg: {},
            submitted_file: [],
            is_loaded: false
        }
    }
    /*------------------------------------------------------------
                            LIFE CYCLE
    --------------------------------------------------------------*/
    componentDidMount() {
        const id = this.props.match.params.id
        if (id !== undefined) {
            this.handlerGetAssignmentDetail(id)
        }
    }
    /*------------------------------------------------------------
                        HANDLER FUNCTION
    --------------------------------------------------------------*/
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handlerGetAssignmentDetail = (id) => {
        axios.get(`/api/v1/assignment/` + id, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            this.setState({is_loaded: true})
            if (res.data.code === 200) {
                this.setState({assignment: res.data.data, asg: res.data.data, submitted_file: res.data.data.submitted_file, description: res.data.data.submitted_description})
            }
        }).catch((err) => {
            this.setState({is_loaded: true})
            console.log(err)
        })
    }
    handleToggleUpload = () => {
        this.setState({
            showUpload: !this.state.showUpload
        })
    }
    onUploadFile = () => {
        const {dispatcherRequest} = this.props
        let formData = new FormData()
        formData.append('payload', "assignment");
        formData.append('id', this.state.assignment.id);
        formData.append('role', "student");
        formData.append('file', document.getElementById('upload').files[0]);
        if (document.getElementById('upload').files[0] !== undefined) {
            this.setState({isUploading: true})
            axios.post(`/api/v1/file`, formData, {
                validateStatus: (status) => {
                    return status < 500
                }
            }).then((res) => {
                this.setState({isUploading: false})
                if (res.status === 200) {
                    this.setState({
                        change_image: !this.state.change_image
                    })
                    let new_submitted_files = this
                        .state
                        .submitted_file
                        .slice()
                    new_submitted_files.push({name: res.data.data.name, id: res.data.data.id, url_thumbnail: res.data.data.url_thumbnail})
                    this.setState({submitted_file: new_submitted_files})
                } else {
                    dispatcherRequest(true, 401, res.data.error[0])
                }
            }).catch((err) => {
                dispatcherRequest(true, 401, 'Error connection')
                this.setState({isUploading: false})
            })
        }
    }
    handleUploadAssignment = () => {
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)
        let formData = new FormData()
        formData.append('description', this.state.description)
        let id = []
        this
            .state
            .submitted_file
            .forEach((data) => {
                id.push(data.id)
            })
        formData.append('file_id', id.join("~"))
        axios.put(`/api/v1/assignment/` + this.state.assignment.id, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatcherLoading(100, false)
                this.setState({
                    change_image: !this.state.change_image,
                    showUpload: false
                })
                dispatcherRequest(true, 200, 'Data Added Successfully')
                this.handlerGetAssignmentDetail(this.state.assignment.id)
            } else {
                this.setState({showUpload: false})
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleDeleteFile = (id) => {
        let new_list = this
            .state
            .submitted_file
            .filter((data) => (data.id !== id))

        this.setState({submitted_file: new_list})
    }
    /*------------------------------------------------------------
                        RENDER PAGE
    --------------------------------------------------------------*/
    render() {
        const handle = {
            uploadAssignment: this.handleUploadAssignment,
            toggleUpload: this.handleToggleUpload,
            closeModal: this.handleToggleUpload,
            onUploadFile: this.onUploadFile,
            change: this.handleChange,
            deleteFile: this.handleDeleteFile
        }
        const dataUpload = {
            file: this.state.submitted_file,
            showUpload: this.state.showUpload,
            description: this.state.description,
            isUploading: this.state.isUploading
        }
        const {is_logged_in} = this.props
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"assignment"}/>
                    <div className="_cn _ma3mn">
                        <div className="_ro">
                            <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                                <div className="_he3b _pd3l3b">My Assignments</div>
                                <div className="_c5x312 _c5m312 _pd3n3lr  _pd3l3b">
                                    <div>
                                        <div className="_c5x312 _c5m312 _pd3n3lr _ta">
                                            <ul className="_ta5p">
                                                <li>
                                                    <Link to={"/assignment"}>My Assignment</Link>
                                                </li>
                                                <li className="_active">
                                                    <Link to="#">{this.state.asg.name}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {this.state.is_loaded
                                    ? <div className="_c5x312 _c5m312 _pd3n3lr _ta ">
                                            <div className="_se3da">
                                                <div className="_ro">
                                                    <div className="_c5x312 _c5m38">
                                                        <h2 className="_he3b _pd3l3tb">{this.state.asg.name}</h2>
                                                        <p className="_ct3nor _pd3l3t">{this.state.asg.description}</p>
                                                    </div>
                                                    <div className="_c5x312 _c5m34">
                                                        <table className="_tb3asi">
                                                            <thead>
                                                                <tr>
                                                                    <th>Assignment Source Info</th>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        <i className="fa fa-calendar-plus-o" aria-hidden="true"></i>
                                                                    </th>
                                                                    <th>
                                                                        {this.state.asg.updated_at}</th>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                                    </th>
                                                                    <th>{this.state.asg.due_date}</th>
                                                                </tr>
                                                                {this.state.asg.assignment_file !== undefined && this.state.asg.assignment_file.length !== 0
                                                                    ? this
                                                                        .state
                                                                        .asg
                                                                        .assignment_file
                                                                        .map((data, i) => (
                                                                            <tr key={i}>
                                                                                <th>
                                                                                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                                                                </th>
                                                                                <th>
                                                                                    {data.name}</th>
                                                                            </tr>
                                                                        ))
                                                                    : <tr>
                                                                        <th>
                                                                            <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                                                        </th>
                                                                        <th>
                                                                            No file Source</th>
                                                                    </tr>
}
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Assignment User Info</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                                    </td>
                                                                    <td>
                                                                        {this.state.asg.score}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                                                    </td>
                                                                    <td>
                                                                        {this.state.asg.submitted_date}
                                                                    </td>
                                                                </tr>
                                                                {this.state.asg.submitted_file !== undefined && this.state.asg.submitted_file !== []
                                                                    ? this
                                                                        .state
                                                                        .assignment
                                                                        .submitted_file
                                                                        .map((val, i) => (
                                                                            <tr key={i}>
                                                                                <td>
                                                                                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                                                                </td>
                                                                                <td>
                                                                                    <a href={"http://47.74.149.190" + val.url} target="_blank">{val.name}</a>
                                                                                </td>
                                                                            </tr>
                                                                        ))
                                                                    : null}
                                                                <tr>
                                                                    <td>
                                                                        {this.state.asg.is_allow_upload
                                                                            ?this.state.asg.status === "submitted"
                                                                            ? <button className="_bt3b" onClick={this.handleToggleUpload}>
                                                                                    Update</button>
                                                                            : this.state.asg.status === "unsubmitted"
                                                                                ? <button className="_bt3b" onClick={this.handleToggleUpload}>
                                                                                        Add</button>
                                                                                : this.state.asg.status === "overdue"
                                                                                    ? <button className="_bt3r">
                                                                                            Overdue</button>
                                                                                    : null
                                                                            :null}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    : <table className="_se3msg">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <LoadingAnim color_left="#333" color_right="#333"/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    }
                            </div>
                            <Newsbar/>
                        </div>
                    </div>
                    <UploadFile handle={handle} data={dataUpload}/>
                </LayoutUser>
            : <Redirect to={`/login`}/>)
    }
}
/*----------------------------------------------------------------
                        DISPATHCER
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

export default connect(mapStatetoProps, mapDispatchtoProps)(AssignmentDetail)