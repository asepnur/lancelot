/*----------------------------------------------------------------
                            DETAIL COURSE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {GoogleCharts} from 'google-charts';

import {Assignment} from './Home'
import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser, InformationDetail, LoadingAnim, UploadFile} from '../index.js'

class CourseDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: [],
            showUpload: false,
            description: '',
            current_id:'',
            current_submitted_file: [],
            isUploading: false,
            asg: [],
            modal_detail: false,
            id: this.props.match.params.id,
            assignment: [],
            attendance: {},
            download: {
                page: 0,
                total_page: 0,
                tutorials: []
            },
            assistant: [],
            grade: [],
            about: {},
            content_active: {
                assignment: true,
                attendance: false,
                download: false,
                assistant: false,
                grade: false,
                about: false
            },
            is_loaded: {
                assignment: false,
                attendance: false,
                download: false,
                assistant: false,
                grade: false,
                about: false
            },
            detail_information:{},
        }
    }
    /*----------------------------------------------------------------
                            LIFE CYCLE
    ------------------------------------------------------------------*/
    componentDidMount() {
        let dom = document.getElementById("tab_assignment")
        ReactDOM
            .findDOMNode(dom)
            .className = "_active"

        if (this.props.match.params.id !== undefined) {
            this.handleGetAssignment()
            this.handleGetAbout()
        }
    }
    /*----------------------------------------------------------------
                            HANDLER FUNCTION
    ------------------------------------------------------------------*/
    handleDetail = (id) => {
        this.setState({modal_detail: true})
        axios.get(`/api/v1/information/` + id, {
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
    handleClose = () =>{
        this.setState({modal_detail: false})
    }
    handleActive = (e) => {
        const tagID = e.currentTarget.id
        const id = [
            "tab_assignment",
            "tab_attendance",
            "tab_assistant",
            "tab_download",
            "tab_grade",
            "tab_about"
        ]
        id.forEach((val) => {
            let dom = document.getElementById(val)
            val === tagID
                ? ReactDOM
                    .findDOMNode(dom)
                    .className = "_active"
                : ReactDOM
                    .findDOMNode(dom)
                    .className = ""
        }, this);

        let content_active = {
            assignment: false,
            attendance: false,
            download: false,
            assistant: false,
            grade: false,
            about: false
        }
        switch (tagID) {
            case "tab_assignment":
                content_active.assignment = true
                this.setState({content_active: content_active})
                if (!this.state.is_loaded.assignment) {
                    this.handleGetAssignment()
                }
                break
            case "tab_attendance":
                content_active.attendance = true
                this.setState({content_active: content_active})
                if (!this.state.is_loaded.attendance){
                    this.handleGetAttendance(this.handleChart)
                }
                break
            case "tab_assistant":
                content_active.assistant = true
                this.setState({content_active: content_active})
                if (!this.state.is_loaded.assistant) {
                    this.handleGetAssistant()
                }
                break
            case "tab_download":
                content_active.download = true
                this.setState({content_active: content_active})
                if (!this.state.is_loaded.download) {
                    this.handleGetDownload()
                }
                break
            case "tab_grade":
                content_active.grade = true
                this.setState({content_active: content_active})
                if (!this.state.is_loaded.grade) {
                    this.handleGetGrade()
                }
                break
            case "tab_about":
                content_active.about = true
                this.setState({content_active: content_active})
                if (!this.state.is_loaded.about) {
                    this.handleGetAbout()
                }
                break
            default:
                break
        }
    }

    handleChart(present, absent) {
        if (present !== 0 && absent !== 0){
            GoogleCharts.load(drawChart)
        }
        function drawChart() {
            const data = GoogleCharts
                .api
                .visualization
                .arrayToDataTable([
                    [
                        'Task', ''
                    ],
                    [
                        'PRESENT', present
                    ],
                    ['ABSENT', absent]
                ])
            const options = {
                'title': '',
                'width': '100%',
                'height': '100%',
                'legend': {
                    'position': 'bottom'
                }

            }
            const pie_1_chart = new GoogleCharts
                .api
                .visualization
                .PieChart(document.getElementById('attendance'));
            pie_1_chart.draw(data, options);
        }
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
    /*----------------------------------------------------------------
                            HANDLE REQUEST
    ------------------------------------------------------------------*/
    handleGetAssignment = () => {
        axios.get(`/api/v1/assignment/?schedule_id=${this.props.match.params.id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const is_loaded = this.state.is_loaded
            is_loaded.assignment = true
            this.setState({assignment: res.data.data, is_loaded: is_loaded})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetAssistant = () => {
        axios.get(`/api/v1/course/` + this.state.id + `/assistant?payload=student`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const is_loaded = this.state.is_loaded
            is_loaded.assistant = true
            this.setState({assistant: res.data.data, is_loaded: is_loaded})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetAttendance = (callback) => {
        axios.get(`/api/v1/attendance/summary?schedule_id=` + this.state.id, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const present = res.data.data.present
            const absent = res.data.data.absent
            const is_loaded = this.state.is_loaded
            is_loaded.attendance = true

            this.setState({attendance: res.data.data, is_loaded: is_loaded}, callback(present, absent))
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetAbout = () => {
        axios.get(`/api/v1/course/${this.state.id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const is_loaded = this.state.is_loaded
            is_loaded.about = true
            this.setState({about: res.data.data, is_loaded: is_loaded})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetDownload = () => {
        axios.get(`/api/v1/tutorial?pg=1&ttl=10&schedule_id=${this.state.id}&payload=student`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const is_loaded = this.state.is_loaded
            is_loaded.download = true
            this.setState({download: res.data.data, is_loaded: is_loaded})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetGrade = () => {
        axios.get(`/api/v1/grade?schedule_id=${this.state.id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            const is_loaded = this.state.is_loaded
            is_loaded.grade = true

            this.setState({grade: res.data.data, is_loaded: is_loaded})
        }).catch((err) => {
            console.log(err)
        })
    }
    /*----------------------------------------------------------------
                            RENDER ELEMENT
    ------------------------------------------------------------------*/
    render() {
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
        return (
            <LayoutUser>
                <UploadFile handle={handle} data={dataUpload} />
                <Navbar match={this.props.match} active_navbar={"course"}/>
                <div className="_ro _ma3mn">
                    <div className="_cn">
                        <div className="_ro _c5m38 _c5x312 _pd5m3n">
                            <div className="_he3b _pd3l3b">My Course</div>
                            <div className="_c5x312 _c5m312 _pd3n3lr  _pd3l3b">
                                <div>
                                    <div className="_c5x312 _c5m312 _pd3n3lr _ta">
                                        <ul className="_ta5p">
                                            <li>
                                                <Link to="/course">My Course</Link>
                                            </li>
                                            <li className="_active">
                                                <a href="">{this.state.about.name}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="_c5x312 _c5m312 _pd3l3t _pd3n3lr">
                                <div className="_c5x312 _c5m312 _pd3n3lr">
                                    <div className="_c5x312 _c5m312 _pd3n3lr _ta">
                                        <ul className="_ta5l3b">
                                            <li id="tab_assignment" onClick={this.handleActive}>
                                                <i className="fa fa-tasks" aria-hidden="true"></i>
                                                <a>&nbsp;Assignment</a>
                                            </li>
                                            <li id="tab_attendance" onClick={this.handleActive}>
                                                <i className="fa fa-book" aria-hidden="true"></i>
                                                &nbsp;
                                                <a className="">
                                                    Attendance</a>
                                            </li>
                                            <li id="tab_download" onClick={this.handleActive}>
                                                <i className="fa fa-download" aria-hidden="true"></i>
                                                &nbsp;
                                                <a className="">
                                                    Download</a>
                                            </li>
                                            <li id="tab_assistant" onClick={this.handleActive}>
                                                <i className="fa fa-users" aria-hidden="true"></i>
                                                &nbsp;
                                                <a className="">
                                                    Assistant</a>
                                            </li>
                                            <li id="tab_grade" onClick={this.handleActive}>
                                                <i className="fa fa-bar-chart" aria-hidden="true"></i>
                                                &nbsp;
                                                <a className="">
                                                    Grade</a>
                                            </li>
                                            <li id="tab_about" onClick={this.handleActive}>
                                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                                &nbsp;
                                                <a className="">
                                                    About</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __abt"
                                style={{
                                display: this.state.content_active.about
                                    ? 'block'
                                    : 'none'
                            }}>
                                <About data={this.state.about} is_loaded={this.state.is_loaded.about}/>
                            </div>
                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __ass"
                                id="content_assignment"
                                style={{
                                display: this.state.content_active.assignment
                                    ? 'block'
                                    : 'none'
                            }}>
                                {/* <Assignment data={this.state.assignment} is_loaded={this.state.is_loaded.assignment}  toggleUpload={this.handleToggleUpload}/> */}
                                <Assignment
                                data={this.state.assignment}
                                handleToggleUpload={this.handleToggleUpload}
                                is_loaded={this.state.is_loaded.assignment}/>
                            </div>
                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __att"
                                id="content_attendance"
                                style={{
                                display: this.state.content_active.attendance
                                    ? 'block'
                                    : 'none'
                            }}>
                                <Attendance data={this.state.attendance} is_loaded={this.state.is_loaded.attendance}/>
                            </div>
                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __dow"
                                style={{
                                display: this.state.content_active.download
                                    ? 'block'
                                    : 'none'
                            }}>
                                <Download data={this.state.download} is_loaded={this.state.is_loaded.download}/>
                            </div>
                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __ast"
                                id="content_assistant"
                                style={{
                                display: this.state.content_active.assistant
                                    ? 'block'
                                    : 'none'
                            }}>
                                <Assistant data={this.state.assistant} is_loaded={this.state.is_loaded.assistant}/>
                            </div>
                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __grd"
                                id="content_grade"
                                style={{
                                display: this.state.content_active.grade
                                    ? 'block'
                                    : 'none'
                            }}>
                                <Grade data={this.state.grade} is_loaded={this.state.is_loaded.grade}/>
                            </div>
                        </div>
                        <Newsbar handleDetail={this.handleDetail}/>
                    </div>
                </div>
                <InformationDetail
                data={this.state.detail_information}
                modal_detail={this.state.modal_detail}
                handleClose={this.handleClose}/>
            </LayoutUser>
        )
    }
}
/*----------------------------------------------------------------
                            FUNCTION ELEMENT
------------------------------------------------------------------*/
const Assistant = props => {
    
    const {
        data,
        is_loaded,
    } = props

    return (
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
        ) : data.length === 0 ? (
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
                            <p className="_main">Have a nice day</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        ) : (
            data
            .map((data, i) => (
                <div className="_c5x312 _c5m34 _pd3n3lr3x" key={i}>
                    <div className="_se3lc ">
                        <div>
                            <img style={{"object-fit":"cover"}} src="/img/image.png" alt=""/>
                            <p>{data.name}</p>
                            <p>{data.role}</p>
                            <p>
                                <i className="fa fa-phone _ic" aria-hidden="true"></i>
                                &nbsp;{data.phone_number}</p>
                            <p>
                                <i className="fa fa-envelope-o _ic" aria-hidden="true"></i>
                                &nbsp; {data.email}</p>
                        </div>
                    </div>
                </div>
            ))
        )
    )
}

const Grade = props => {
    const {
        data,
        is_loaded
    } = props

    return (
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
        ) : data.length === 0
            ?<table className="_se3msg">
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
                        <p className="_main">Have a nice day</p>
                    </td>
                </tr>
            </tbody>
        </table>
            :(
                <table className="_se3o">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {data.map((data, i)=>(
                            <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.type}</td>
                            <td>{data.grade}</td>
                        </tr>
                        )
                        )}
                    </tbody>
                </table>
            )
    )
}
const Attendance = props => {
    const {
        data,
        is_loaded
    } = props

    return (
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
        ) : (data.present === 0 && data.absent === 0) || (data.present === undefined && data.absent === undefined) ? (
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
        ) : (
            <div className="_se">
                <div id="attendance"></div>
            </div>
        )
    )
}
const Download = props => {
    let {
        data: {
            tutorials
        },
        is_loaded
    } = props
    
    tutorials = tutorials === undefined ? []: tutorials

    return (
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
        ) : tutorials.length === 0 ? (
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
                            <p className="_main">Have a nice day</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        ) : (
            tutorials.map(val => (
                <div key={val.id} className="_c5x312 _c5m34 _pd3n3lr3x">
                    <div className="_se3lc ">
                        <div>
                            <img src={val.image_url} alt=""/>
                            <p>{val.name}</p>
                            <p>{val.description}</p>
                            <a href={val.file_url}>
                                <button className="_bt5xs3b">Download</button>
                            </a>
                        </div>
                    </div>
                </div>
            ))
        )
    )
}
const About =(props) =>{
    const {
        data: {
            description,
            name
        },
        is_loaded
    } = props
    
    return (
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
            <div className="_se _se3a">
                <div className="_ro">
                    <div className="_c5x312 _c5m312">
                        <div className="_c5x312 _c5m312 _he5co ">
                            <h4 className="_ma3l3b">{name}</h4>
                        </div>
                        <div className="_c5x312 _c5m312">
                            <p className="_d5ab _ma3n3lr">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
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
export default connect(mapStatetoProps, mapDispatchtoProps)(CourseDetail)