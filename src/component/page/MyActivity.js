import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import ReactDOM from 'react-dom'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser, LoadingAnim, UploadFile, InformationDetail} from '../index.js'

class MyActivity extends Component {
    constructor() {
        super()
        this.state = {
            file: [],
            showUpload: false,
            description: '',
            current_id:'',
            current_submitted_file: [],
            isUploading: false,
            asg: [],
            data: [],
            submitted: [],
            not_submitted: [],
            overdue:[],
            graded:[],
            is_loaded: false,
            detail_information:{},
            modal_detail: false,
        }
    }
    componentDidMount() {
        let not_submitted = document.getElementById('tab_not_submitted')
        let dom = ReactDOM.findDOMNode
        dom(not_submitted).className = "_active"
        axios.get(`/api/v1/assignment`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            let submitted = [],
                not_submitted = [],
                overdue = [],
                graded = []

            res
                .data
                .data
                .forEach(val => {
                    if (val.status === "unsubmitted") {
                        not_submitted.push(val)
                    } else if(val.status === "submitted") {
                        submitted.push(val)
                    } else if(val.status === "overdue") {
                        overdue.push(val)
                    } else {
                        graded.push(val)
                    }
                })

            this.setState({submitted: submitted, not_submitted: not_submitted, graded: graded, overdue:overdue, data: not_submitted, is_loaded: true})

        }).catch((err) => {
            console.log(err)
        })
    }
    handleActiveTab = (e) => {
        const tagID = e.currentTarget.id
        const id = ["tab_submitted", "tab_not_submitted","tab_overdue","tab_graded"]
        id.forEach(function (val) {
            let dom = document.getElementById(val)
            val === tagID
                ? ReactDOM
                    .findDOMNode(dom)
                    .className = "_active"
                : ReactDOM
                    .findDOMNode(dom)
                    .className = ""
        }, this)

        switch (tagID) {
            case "tab_submitted":
                this.setState({data: this.state.submitted, is_loaded: this.state.is_loaded})
                break
            case "tab_not_submitted":
                this.setState({data: this.state.not_submitted, is_loaded: this.state.is_loaded})
                break
            case "tab_overdue":
                this.setState({data: this.state.overdue, is_loaded: this.state.is_loaded})
                break;
            case "tab_graded":
                this.setState({data: this.state.graded, is_loaded: this.state.is_loaded})
                break;
            default:
                break;
        }
    }
    handleDetail = (id) => {
        axios.get(`api/v1/information/` + id, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({detail_information: res.data.data, modal_detail: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleClose = () => {
        this.setState({modal_detail: false})
    }
    handleCloseModal = ()=>{
        this.setState({
            showUpload: !this.state.showUpload
        })
    }
    handleToggleUpload = (e) => {
        let id = e.currentTarget.dataset.id
        let not_added = true

        if (this.state.asg.length !== 0){
            this.state.asg.forEach((data)=>{
                if (String(data.id) === id){
                   not_added = false 
                }
            }, Promise.resolve().then(()=>{
                if(not_added){
                    this.handleGetAssignmentDetail(id)
                }else{
                    this.state.asg.forEach((data)=>{
                        if(String(data.id)===id){
                            this.setState({
                                description: data.description,
                                current_submitted_file: data.submitted_file,
                                current_id: data.id
                            })
                        }
                    })
                }
            }))
        }else{
            this.handleGetAssignmentDetail(id)
        }
        this.setState({
            showUpload: !this.state.showUpload
        })
    }
    handleGetAssignmentDetail = (id) => {
        axios.get(`/api/v1/assignment/` + id, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                let list_asg = this
                    .state
                    .asg
                    .slice()
                list_asg.push({id: res.data.data.id, submitted_file: res.data.data.submitted_file, description:res.data.data.submitted_description})
                this.setState({asg: list_asg, is_assignment_loaded: true,
                    description: res.data.data.submitted_description,
                    current_submitted_file: res.data.data.submitted_file,
                    current_id: res.data.data.id})
            } else {
                this.setState({asg: [], is_assignment_loaded: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    onUploadFile = () => {
        const {dispatcherRequest} = this.props
        let formData = new FormData()
        formData.append('payload', "assignment");
        formData.append('id', this.state.current_id)
        formData.append('role', "student")
        formData.append('file', document.getElementById('upload').files[0])
        if (document.getElementById('upload').files[0] !== undefined) {
            this.setState({isUploading: true})
            axios.post(`/api/v1/file`, formData, {
                validateStatus: (status) => {
                    return status < 500
                }
            }).then((res) => {
                this.setState({
                    isUploading: false
                })
                if (res.status === 200) {
                    this.setState({
                        change_image: !this.state.change_image
                    })
                    let new_submitted_files = this
                        .state
                        .current_submitted_file
                        .slice()
                    new_submitted_files.push({name: res.data.data.name, id: res.data.data.id, url_thumbnail: res.data.data.url_thumbnail})
                    this.setState({current_submitted_file: new_submitted_files})
                    this.state.asg.forEach((data)=>{
                        if (data.id === this.state.current_id){
                            data.description = this.state.description
                            data.submitted_file = this.state.current_submitted_file
                        }
                        }
                    )
                } else {
                    dispatcherRequest(true, 401, res.data.error[0])
                }
            }).catch((err) => {
                dispatcherRequest(true, 401, 'Error connection')
                this.setState({
                    isUploading: false
                })
            })
        }
    }
    handleUploadAssignment = () => {
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)
        let formData = new FormData()
        formData.append('description', this.state.description)
        let id = []
        if(this.state.current_submitted_file.length!==0){
            this.state.current_submitted_file.forEach((data) =>{
                id.push(data.id)
            })
            formData.append('file_id', id.join("~"))
        }else{
            formData.append('file_id', "")
        }
        axios.put(`/api/v1/assignment/` + this.state.current_id, formData, {
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
    handleChange = (e) => {
        this.state.asg.forEach((data)=>{
            if (data.id=== this.state.current_id){
                data.description = e.target.value
            }
            }
        )
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDeleteFile = (id) => {
        let new_list = this
            .state
            .current_submitted_file
            .filter((data) => (data.id !== id))
        
        this.setState({current_submitted_file: new_list})
        this.state.asg.forEach((data)=>{
            if (data.id === this.state.current_id){
                data.description = this.state.description
                data.submitted_file = new_list
            }
            }
        )
    }

    render() {
        const {is_logged_in} = this.props
        const data = this.state.data
        const dataUpload = {
            file: this.state.current_submitted_file,
            showUpload: this.state.showUpload,
            description: this.state.description,
            isUploading: this.state.isUploading
        }
        const handle = {
            uploadAssignment: this.handleUploadAssignment,
            toggleUpload: this.handleToggleUpload,
            onUploadFile: this.onUploadFile,
            change: this.handleChange,
            deleteFile: this.handleDeleteFile,
            closeModal: this.handleCloseModal,
        }
        return (is_logged_in
            ? <LayoutUser>
                <InformationDetail
                        data={this.state.detail_information}
                        modal_detail={this.state.modal_detail}
                        handleClose={this.handleClose}/>
                    <UploadFile handle={handle} data={dataUpload} />
                    <Navbar match={this.props.match} active_navbar={"assignment"}/>
                    <div className="_cn">
                        <div className="_ro _ma3mn">
                            <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                                <div className="_he3b _pd3l3b">My Assignments</div>
                                <div className="_c5x312 _c5m312 _pd3n3lr _ta ">
                                    <ul className="_ta5l3b ">
                                        <li id="tab_not_submitted" onClick={this.handleActiveTab}>
                                            <i className="fa fa-window-close" aria-hidden="true"></i>
                                            <Link to="#">
                                                &nbsp;Not Submitted</Link>
                                        </li>
                                        <li id="tab_submitted" onClick={this.handleActiveTab}>
                                            <i className="fa fa-check-square" aria-hidden="true"></i>
                                            <Link to="#">
                                                &nbsp;Submitted</Link>
                                        </li>
                                        <li id="tab_overdue" onClick={this.handleActiveTab}>
                                        <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                            <Link to="#">
                                                &nbsp;Overdue</Link>
                                        </li>
                                        <li id="tab_graded" onClick={this.handleActiveTab}>
                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                            <Link to="#">
                                                &nbsp;Graded</Link>
                                        </li>
                                    </ul>
                                    <ListActivity data={data} is_loaded={this.state.is_loaded} toggleUpload={this.handleToggleUpload}/>
                                </div>
                            </div>
                            <Newsbar handleDetail={this.handleDetail}/>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>)
    }
}
const ListActivity = props => {
    const {is_loaded, data} = props

    return (!is_loaded
        ? (
            <table className="_se3msg3l">
                <tbody>
                    <tr>
                        <td>
                            <LoadingAnim color_left="#333" color_right="#333"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
        : data.length === 0
            ? (
                <table className="_se3msg3l">
                    <tbody>
                        <tr>
                            <td>
                                <i className="fa fa-book" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="_head">Horaay! You have no assignment</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="_main">Have a good day</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
            : (
                <table className="_se3a">
                    <tbody>
                        {props
                            .data
                            .map((data, i) => (
                                <tr key={i}>
                                    <td>
                                        <i
                                            className={data.status ==="submitted" || data.status==="done"
                                            ? 'fa fa-circle _ic3b'
                                            : data.status === "unsubmitted"
                                                ?'fa fa-circle _i3a'
                                                : 'fa fa-circle _ic3r'}
                                            aria-hidden="true"></i>
                                    </td>
                                    <td>{data.due_date}</td>
                                    <td>
                                        <Link to={'/assignment/' + data.id}>{data.name}</Link>
                                    </td>
                                    <td>
                                    {
                                            data.is_allow_upload?
                                            <i
                                            data-id={data.id}
                                            className="fa fa-pencil-square-o _ic __wr"
                                            aria-hidden="true"
                                            onClick={props.toggleUpload}></i>
                                            :null
                                        }
                                    </td>
                                    <td>
                                        <Link to={"/assignment/" + data.id}>
                                            <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            ))
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

export default connect(mapStatetoProps, mapDispatchtoProps)(MyActivity)