/*----------------------------------------------------------------
                            HOME PAGE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import axios from 'axios'

import {Navbar, Newsbar, LayoutUser, InputContent, InformationDetail, LoadingAnim} from '../index.js'

class Home extends Component {
    constructor() {
        super()
        this.state = {
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
        // please fix the url
        axios.get(`/api/v1/assignment`, {
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
    handleClickUpload = () => {
        let modal = document.getElementById('_md')

        let dom = ReactDOM.findDOMNode
        // dom(advance).className = "" dom(basic).className = "_ta5l3a"
        dom(modal).style.display = 'block'
        // dom(advance_content).style.display = 'none'
    }
    renderMain = (today, assignment, modal_detail) => {}
    /*----------------------------------------------------------------
                            RENDER COMPONENT
------------------------------------------------------------------*/
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
        return (is_logged_in
            ? <RenderMain
                    handler={handler}
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
            <Navbar match={props.match} active_navbar={"home"}/>
            <div className="_ro _ma3mn">
                <div className="_cn3w">
                    <div className="_ro">
                        <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                            <div className="_he3b">Assignment</div>
                            <Assignment
                                data={props.assignment}
                                handleClickUpload={props.handler.handleClickUpload}
                                is_loaded={props.is_assignment_loaded}/>
                            {/* dicomment dulu belum ada paginationnya
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
                            <div className="_he3b">Schedule Today</div>
                            <Today
                                data={props.today}
                                is_loaded={props.is_schedule_loaded}/>
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
            <div className="_md5s _dn">
                <div className="__x"></div>
                <div className="_ro">
                    <div className="_c5x312 _c5m36 _c5m3o3">
                        <div className="_cn _md5cu">
                            <div className="_ro">
                                <div className="_c5x312">
                                    <h1 className="_he3nb">Congratulation</h1>
                                    <p className="_me3c">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>
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
    const  {
        data,
        is_loaded,
        handleClickUpload
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
                                    <i className="fa fa-circle _i3a" aria-hidden="true"></i>
                                </td>
                                <td>{data.due_date}</td>
                                <td>{data.name}</td>
                                <td>
                                    <i
                                        className="fa fa-pencil-square-o _ic __wr"
                                        aria-hidden="true"
                                        onClick={handleClickUpload}></i>
                                </td>
                                <td>
                                    <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    )
}
const Today = (props) => {
    const  {
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
        ) : data.length === 0 ? (
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
        ) : (
            <table className="_se3s">
                <tbody>
                    {props
                        .data
                        .map((val, i) => (
                            <tr key={i}>
                                <td>
                                    <p>{val.time}</p>
                                    <p>
                                        <i className="fa fa-bookmark _ma3r" aria-hidden="true"></i>
                                        {val.name}</p>
                                    <p>
                                        <i className="fa fa-map-marker _ma3r" aria-hidden="true"></i>
                                        {val.place}</p>
                                </td>
                                <td>
                                    <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        )
    )
}
/*----------------------------------------------------------------
                            DISPATCHER
------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcher: () => dispatch()
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Home)
