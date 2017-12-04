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
import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser, InformationDetail} from '../index.js'

class CourseDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal_detail: false,
            id: this.props.match.params.id,
            assignment: [],
            attendance: {},
            download: [],
            assitant: [],
            grade: [],
            about: {},
            content_active: {
                assignment: true,
                attendance: false,
                download: false,
                assitant: false,
                grade: false,
                about: false
            }
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
        }
    }
    /*----------------------------------------------------------------
                            HANDLER FUNCTION
    ------------------------------------------------------------------*/
    handleDetail = (id) => {
        this.setState({modal_detail: true})
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
            assitant: false,
            grade: false,
            about: false
        }
        switch (tagID) {
            case "tab_assignment":
                content_active.assignment = true
                this.setState({content_active: content_active})
                break
            case "tab_attendance":
                content_active.attendance = true
                this.setState({content_active: content_active})
                console.log(this.state.attendance.present)
                if (this.state.attendance.present === undefined ){
                    this.handleGetAttendance(this.handleChart)
                }
                break
            case "tab_assistant":
                content_active.assitant = true
                this.setState({content_active: content_active})
                if (this.state.assitant.length === 0) {
                    this.handleGetAssistant()
                }
                break
            case "tab_download":
                content_active.download = true
                this.setState({content_active: content_active})
                break
            case "tab_grade":
                content_active.grade = true
                this.setState({content_active: content_active})
                break
            case "tab_about":
                content_active.about = true
                this.setState({content_active: content_active})
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
    /*----------------------------------------------------------------
                            HANDLE REQUEST
    ------------------------------------------------------------------*/
    handleGetAssignment = () => {
        axios.get(`/api/v1/assignment?schedule_id=`+this.props.match.params.id+`&pg=1&ttl=10`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            this.setState({assignment: res.data.data})
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
            this.setState({assitant: res.data.data})
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
            if (res.data.code === 200){
                const present = res.data.data.present
                const absent = res.data.data.absent
                this.setState({attendance: res.data.data}, callback(present, absent))
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetAbout = () => {
        axios.get(`/api/v1/course/` + this.state.id + `/assistant?payload=student`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            this.setState({assitant: res.data.data})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetDownload = () => {
        axios.get(`/api/v1/course/` + this.state.id + `/assistant?payload=student`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            this.setState({download: res.data.data})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetGrade = () => {
        axios.get(`/api/v1/course/` + this.state.id + `/assistant?payload=student`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            this.setState({grade: res.data.data})
        }).catch((err) => {
            console.log(err)
        })
    }
    /*----------------------------------------------------------------
                            RENDER ELEMENT
    ------------------------------------------------------------------*/
    render() {
        return (
            <LayoutUser>
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
                                                <a href="">Algortma Pemrograman</a>
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
                                <About />
                            </div>
                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __ass"
                                id="content_assignment"
                                style={{
                                display: this.state.content_active.assignment
                                    ? 'block'
                                    : 'none'
                            }}>
                                <Assignment data={this.state.assignment}/>
                            </div>
                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __att"
                                id="content_attendance"
                                style={{
                                display: this.state.content_active.attendance
                                    ? 'block'
                                    : 'none'
                            }}>
                                <Attendance data={this.state.attendance} />
                            </div>
                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __dow"
                                style={{
                                display: this.state.content_active.download
                                    ? 'block'
                                    : 'none'
                            }}>
                                <Download />
                            </div>
                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __ast"
                                id="content_assistant"
                                style={{
                                display: this.state.content_active.assitant
                                    ? 'block'
                                    : 'none'
                            }}>
                                <Assistant data={this.state.assitant}/>
                            </div>
                            <div
                                className="_c5x312 _c5m312 _pd3n3lr __grd"
                                id="content_grade"
                                style={{
                                display: this.state.content_active.grade
                                    ? 'block'
                                    : 'none'
                            }}>
                                <Grade/>
                            </div>
                        </div>
                        <Newsbar handleDetail={this.handleDetail}/>
                    </div>
                </div>
                <InformationDetail
                        modal_detail={this.state.modal_detail}
                        handleClose={this.handleClose}/>
            </LayoutUser>
        )
    }
}
/*----------------------------------------------------------------
                            FUNCTION ELEMENT
------------------------------------------------------------------*/
const Assistant = (props) => {
    return props.data.length === 0
        ? <div>kosong</div>
        : props
            .data
            .map((data, i) => (
                <div className="_c5x312 _c5m34 _pd3n3lr3x" key={i}>
                    <div className="_se3lc ">
                        <div>
                            <img src="/img/image.png" alt=""/>
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
}

const Grade = (props) => {
    return (
        <table className="_se3o">
            <thead>
                <tr>
                    <th>Tugas</th>
                    <th>QUIS</th>
                    <th>UTS</th>
                    <th>UAS</th>
                    <th>Final Score</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>90</td>
                    <td>75</td>
                    <td>85</td>
                    <td>70</td>
                    <td>80</td>
                </tr>
            </tbody>
        </table>
    )
}
const Attendance = (props) => {
    if ((props.data.present === 0 && props.data.absent === 0) || (props.data.present === undefined && props.data.absent === undefined) ){
        return <table className="_se3msg">
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
    }else{
        return (
            <div className="_se">
                <div id="attendance"></div>
            </div>
        )
    }
}
const Download = (props) => {
    return (
        <div className="_c5x312 _c5m34 _pd3n3lr3x">
        <div className="_se3lc ">
            <div>
                <img src="/img/image.png" alt=""/>
                <p>Asep Nur Muhammad</p>
                <p>Asistan Pemrograman Web</p>
                <button className="_bt5xs3b">Download</button>
            </div>
        </div>
    </div>
    )
}
const About =(props) =>{
    return (
        <div className="_se _se3a">
        <div className="_ro">
            <div className="_c5x312 _c5m312">
                <div className="_c5x312 _c5m312 _he5co ">
                    <h4 className="_ma3l3b">ALGORITMA PEMROGRAMAN</h4>
                </div>
                <div className="_c5x312 _c5m312">
                    <p className="_d5ab _ma3n3lr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    </div>
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
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(CourseDetail)