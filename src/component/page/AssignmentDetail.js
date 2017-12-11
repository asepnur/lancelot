/*----------------------------------------------------------------
                        ASSIGNMENT DETAIL PAGE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'

class AssignmentDetail extends Component {
    constructor() {
        super()
        this.state = {
            assignment: {
                id: "",
                name: "",
                description: "",
                button_type: "",
                due_date: "",
                file_name: "",
                score: "",
                status: "",
                uploaded_status: ""
            }
        }
    }
/*----------------------------------------------------------------
                        LIFE CYCLE
------------------------------------------------------------------*/
    componentDidMount() {
        const id = this.props.match.params.id
        if(id!==undefined){
            this.handlerGetAssignmentDetail(id)
        }
    }
/*----------------------------------------------------------------
                        HANDLER FUNCTION
------------------------------------------------------------------*/
handlerGetAssignmentDetail = (id)=>{
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
/*----------------------------------------------------------------
                        RENDER PAGE
------------------------------------------------------------------*/
    render() {
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
                                                                - </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                                            </td>
                                                            <td>
                                                                {this.state.assignment.file_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <button className="_bt3m">
                                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                                    Add Submission</button>
                                                            </td>
                                                        </tr>
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
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AssignmentDetail)