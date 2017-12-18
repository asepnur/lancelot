/*----------------------------------------------------------------
                            HOME PAGE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {actorRequest, loadingRequest} from '../../action/action'

import {
    Navbar,
    Newsbar,
    LayoutUser,
    InputContent,
    InformationDetail,
    LoadingAnim,
    UploadFile
} from '../index.js'

class Home extends Component {
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
            today: [],
            assignment: [],
            is_assignment_loaded: false,
            is_schedule_loaded: false,
            is_information_loaded: false,
            modal_detail: false
        }
    }
    /*----------------------------------------------------------------
                            LIFE CYCLE
    ------------------------------------------------------------------*/
    componentDidMount() {
        this.handleGetAssignment()
        this.handleGetScheduleToday()
    }
    /*----------------------------------------------------------------
                            HANDLER FUNCTION
    ------------------------------------------------------------------*/
    handleDetail = (id) => {
        axios.get(`api/v1/information/` + 6, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({detail: res.data.data, modal_detail: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleClose = () => {
        this.setState({modal_detail: false})
    }
    handleGetScheduleToday = () => {
        // please fix the backend
        axios.get(`/api/v1/course/today`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            res.data.code === 200
                ? this.setState({today: res.data.data, is_schedule_loaded: true})
                : this.setState({today: [], is_schedule_loaded: true})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetAssignment = () => {
        axios.get(`/api/v1/assignment?filter=unsubmitted`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            res.data.code === 200
                ? this.setState({assignment: res.data.data, is_assignment_loaded: true})
                : this.setState({assignment: [], is_assignment_loaded: true})
        }).catch((err) => {
            console.log(err)
        })
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
    
    renderMain = (today, assignment, modal_detail, dataUpload) => {}
    /*------------------------------------------------------------
                            RENDER COMPONENT
    --------------------------------------------------------------*/
    render() {
        const {is_logged_in} = this.props
        const assignment = this.state.assignment
        const is_assignment_loaded = this.state.is_assignment_loaded
        const is_information_loaded = this.state.is_information_loaded
        const is_schedule_loaded = this.state.is_schedule_loaded
        const today = this.state.today
        const modal_detail = this.state.modal_detail
        const handler = {
            handleClickUpload: this.handleClickUpload,
            handleGetAssignment: this.handleGetAssignment,
            handleGetScheduleToday: this.handleGetScheduleToday,
            handleClose: this.handleClose,
            handleDetail: this.handleDetail
        }
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
            ? <RenderMain
                    data={dataUpload}
                    handler={handler}
                    handle={handle}
                    assignment={assignment}
                    is_assignment_loaded={is_assignment_loaded}
                    is_information_loaded={is_information_loaded}
                    is_schedule_loaded={is_schedule_loaded}
                    today={today}
                    modal_detail={modal_detail}/>
            : <Redirect to={`/login`}/>)
    }
}
/*----------------------------------------------------------------
                            ELEMENT FUNCTION
------------------------------------------------------------------*/
const RenderMain = (props) => {
    return (
        <LayoutUser>
            <UploadFile handle={props.handle} data={props.data} />
            <Navbar match={props.match} active_navbar={"home"}/>
            <div className="_ro _ma3mn">
                <div className="_cn3w">
                    <div className="_ro">
                        <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                            <div className="_he3b">Schedule Today</div>
                            <Today data={props.today} is_loaded={props.is_schedule_loaded}/>
                            <div className="_he3b">Assignment</div>
                            <Assignment
                                data={props.assignment}
                                handleToggleUpload={props.handle.toggleUpload}
                                is_loaded={props.is_assignment_loaded}/> {/* dicomment dulu belum ada paginationnya
                                <div className="_pg">
                                <div>
                                    <p>1 of 2 Page</p>
                                </div>
                                <div>
                                    <a href="">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                                        &nbsp;previous</a>
                                    <a href="">next&nbsp;
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                        <Newsbar handleDetail={props.handler.handleDetail}/>
                    </div>
                </div>
            </div>
            <div className="_md" id="_md">
                <div className="__x"></div>
                <div className="_ro">
                    <div className="_c5x312 _c5m36 _c5m3o3">
                        <div className="_cn _md5cu">
                            <div className="_ro">
                                <div className="_c5x312">
                                    <h1 className="_he3nb">Lorem Ipsum</h1>
                                    <p className="_me3c">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>
                                </div>
                            </div>
                            <div className="_ro">
                                <div className="_c5x312">
                                    <div className="_md5i">
                                        <input type="file" name="file"/>
                                        <img className="_i3ce" src="/img/icon/blue/upload.png" alt="upload logo"/>
                                        <p className="_me3c">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="_ro">
                                <div className="_c5x312">
                                    <label className="_me3b _bd" htmlFor="Subjet">Subject</label>
                                    <InputContent
                                        type="text"
                                        name="subject"
                                        placeholder="Lorem Ipsum"
                                        onChangeState={props.handler.onChangeState}/>
                                    <InputContent
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        onChangeState={props.handler.onChangeState}/>
                                </div>
                            </div>
                            <div className="_ro">
                                <div className="_c5x312">
                                    <input className="_bt5m3b" type="button" name="submit" value="SUBMIT"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InformationDetail
                modal_detail={props.modal_detail}
                handleClose={props.handler.handleClose}/>
        </LayoutUser>
    )
}
export const Assignment = (props) => {
    const {data, is_loaded, handleToggleUpload} = props

    return (!is_loaded
        ? (
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
        : data.length === 0
            ? (
                <table className="_se3msg">
                    <tbody>
                        <tr>
                            <td>
                                <i className="fa fa-smile-o" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="_head">Nothing To Report!</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="_main">Have a nice day Rifki Muhammad</p>
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
                                        {data.status === "submitted" || data.status === "done"
                                            ? <i className="fa fa-circle _ic3b" aria-hidden="true"></i>
                                            : data.status === "unsubmitted" || data.status === "notrequired"
                                                ? <i className="fa fa-circle _i3a" aria-hidden="true"></i>
                                                : <i className="fa fa-circle _ic3r" aria-hidden="true"></i>}

                                    </td>
                                    <td>
                                        <Link to={"/assignment/" + data.id}>{data.due_date}</Link>
                                    </td>
                                    <td>
                                        <Link to={"/assignment/" + data.id}>{data.name}</Link>
                                    </td>
                                    <td>
                                        {
                                            data.is_allow_upload?
                                            <i
                                            data-id={data.id}
                                            className="fa fa-pencil-square-o _ic __wr"
                                            aria-hidden="true"
                                            onClick={handleToggleUpload}></i>
                                            :null
                                        }
                                    </td>
                                    <td>
                                        <Link to={"/assignment/" + data.id}>
                                            <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))
}
                    </tbody>
                </table>
            ))
}
const Today = (props) => {
    const {data, is_loaded} = props

    return (!is_loaded
        ? (
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
        : data.length === 0
            ? (
                <table className="_se3msg">
                    <tbody>
                        <tr>
                            <td>
                                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="_head">You Have No Upcoming Events.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="_main">let's do the best, although there is no events today</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
            : (
                <table className="_se3s">
                    <tbody>
                        {props
                            .data
                            .map((val, i) => (
                                <tr key={i}>
                                    <td>
                                        <p>{val.time}</p>
                                        <p>
                                        <Link to={`/course/${val.id}`}> <i className="fa fa-bookmark _ma3r" aria-hidden="true"></i>
                                            {val.name}</Link>
                                        </p>
                                        <p>
                                        <Link to={`/course/${val.id}`}>
                                            <i className="fa fa-map-marker _ma3r" aria-hidden="true"></i>
                                            {val.place}</Link></p>
                                    </td>
                                    <td>
                                        <Link to={`/course/${val.id}`}><i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i></Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            ))
}
/*----------------------------------------------------------------
                            DISPATCHER
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
export default connect(mapStatetoProps, mapDispatchtoProps)(Home)
