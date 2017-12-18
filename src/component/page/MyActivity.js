import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import ReactDOM from 'react-dom'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser, LoadingAnim} from '../index.js'

class MyActivity extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            submitted: [],
            not_submitted: [],
            overdue:[],
            graded:[],
            is_loaded: false
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

    render() {
        const {is_logged_in} = this.props
        const data = this.state.data

        return (is_logged_in
            ? <LayoutUser>
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
                                    <ListActivity data={data} is_loaded={this.state.is_loaded}/>
                                </div>
                            </div>
                            <Newsbar/>
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
                                    {data.is_allow_upload && (data.status ==="submitted" || data.status === "unsubmitted")
                                            ? <i className="fa fa-pencil-square-o _ic __wr" aria-hidden="true"></i>
                                            :null}
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
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(MyActivity)