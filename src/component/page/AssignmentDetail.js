/*----------------------------------------------------------------
                        ASSIGNMENT DETAIL PAGE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser, UploadFile} from '../index.js'

class AssignmentDetail extends Component {
    constructor() {
        super()
        this.state = {
            showUpload: false,
            file_id: '',
            file: '',
            description: '',
            isUploading: false,
            uploaded: false,
            assignment: {
                id: "",
                name: "",
                description: "",
                button_type: "",
                due_date: "",
                file_name: "",
                score: "",
                status: "",
                uploaded_status: "",
                uploaded_file: []
            }
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
            if (res.data.code === 200) {
                this.setState({assignment: res.data.data})
            }
        }).catch((err) => {
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
        this.setState({isUploading: true})
        axios.post(`/api/v1/file`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                this.setState({
                    change_image: !this.state.change_image
                })
                this.setState({file_id: res.data.data, isUploading: false, uploaded: true})
            } else {
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleUploadAssignment = () => {
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)
        let formData = new FormData()
        formData.append('assignment_id', this.state.assignment.id);
        formData.append('description', this.state.assignment.description);
        formData.append('file_id', this.state.file_id);
        axios.post(`/api/v1/assignment`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatcherLoading(100, false)
                this.setState({
                    change_image: !this.state.change_image
                })
                dispatcherRequest(true, 200, 'file uploaded')
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleDeleteFile = () =>{
        this.setState({
            uploaded: false
        })
    }
    /*------------------------------------------------------------
                        RENDER PAGE
    --------------------------------------------------------------*/
    render() {
        const handle = {
            uploadAssignment: this.handleUploadAssignment,
            toggleUpload: this.handleToggleUpload,
            onUploadFile: this.onUploadFile,
            change: this.handleChange,
            deleteFile: this.handleDeleteFile,
        }
        const dataUpload = {
            file: this.state.file,
            showUpload: this.state.showUpload,
            description: this.state.description,
            isUploading: this.state.isUploading,
            uploaded: this.state.uploaded
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
                                                    <Link to="#">{this.state.assignment.name}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="_c5x312 _c5m312 _pd3n3lr _ta ">
                                    <div className="_se3da">
                                        <div className="_ro">
                                            <div className="_c5x312 _c5m38">
                                                <h2 className="_he3m _pd3l3tb">{this.state.assignment.name}</h2>
                                                <p className="_ct3nor _pd3l3t">{this.state.assignment.description}</p>
                                            </div>
                                            <div className="_c5x312 _c5m34">
                                                <table className="_tb3asi">
                                                    <thead>
                                                        <tr>
                                                            <th>Info Assignment</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{this.state.assignment.score}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                            </td>
                                                            <td>
                                                                {this.state.assignment.due_date}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                                            </td>
                                                            <td>
                                                                -
                                                            </td>
                                                        </tr>

                                                        {this
                                                            .state
                                                            .assignment
                                                            .uploaded_file
                                                            .map((val, i) => (
                                                                <tr key={i}>
                                                                    <td>
                                                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                                                    </td>
                                                                    <td>
                                                                        <a href={val.url} target="_blank">{val.name}</a>
                                                                    </td>
                                                                </tr>
                                                            ))
}
                                                        {this.state.assignment.status === "must_upload"
                                                            ? <tr>
                                                                    <td>
                                                                        <button className="_bt3m" onClick={this.handleToggleUpload}>
                                                                            {this.state.assignment.button_type}</button>
                                                                    </td>
                                                                </tr>
                                                            : null}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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