import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'

class MyActivity extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            submitted: [],
            not_submitted: [],
            all: []
        }
    }
    componentDidMount() {
        let not_submitted = document.getElementById('tab_not_submitted')
        let dom = ReactDOM.findDOMNode
        dom(not_submitted).className = "_active"
        axios.get(`/api/v1/assignment/149?pg=1&ttl=10`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            res.data.code === 200
                ? this.setState({not_submitted: res.data.data})
                : this.setState({not_submitted: []})
            this.setState({data: this.state.not_submitted})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleActiveTab = (e) => {
        const tagID = e.currentTarget.id
        const id = ["tab_submitted", "tab_not_submitted", "tab_all"]
        id.forEach(function(val) {
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
                if (this.state.submitted.length === 0){
                    axios.get(`/api/v1/assignment/149?pg=1&ttl=10`, {
                        validateStatus: (status) => {
                            return status === 200
                        }
                    }).then((res) => {
                        res.data.code === 200
                            ? this.setState({submitted: res.data.data})
                            : this.setState({submitted: []})
                        this.setState({data: this.state.submitted})
                    }).catch((err) => {
                        console.log(err)
                    })
                }
                this.setState({data: this.state.submitted})
                break
            case "tab_not_submitted":
                if(this.state.not_submitted.length === 0){
                     axios.get(`/api/v1/assignment/149?pg=1&ttl=10`, {
                        validateStatus: (status) => {
                            return status === 200
                        }
                    }).then((res) => {
                        res.data.code === 200
                            ? this.setState({not_submitted: res.data.data})
                            : this.setState({not_submitted: []})
                    }).catch((err) => {
                        console.log(err)
                    })
                }
                this.setState({data: this.state.not_submitted})
                break
            case "tab_all":
                if(this.state.all.length === 0){
                    axios.get(`/api/v1/assignment/149?pg=1&ttl=10`, {
                        validateStatus: (status) => {
                            return status === 200
                        }
                    }).then((res) => {
                        res.data.code === 200
                            ? this.setState({all: res.data.data})
                            : this.setState({all: []})
                    }).catch((err) => {
                        console.log(err)
                    })
                }
                this.setState({data: this.state.all})
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
                    <Navbar match={this.props.match}/>
                    <div className="_cn">
                        <div className="_ro _ma3mn">
                            <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                                <div className="_he3b _pd3l3b">My Assignments</div>
                                <div className="_c5x312 _c5m312 _pd3n3lr _ta ">
                                    <ul className="_ta5l3b ">
                                        <li id="tab_submitted" onClick={this.handleActiveTab}>
                                            <i className="fa fa-check-square" aria-hidden="true"></i>
                                            <a href=" ">
                                                &nbsp;Submitted</a>
                                        </li>
                                        <li id="tab_not_submitted" onClick={this.handleActiveTab}>
                                            <i className="fa fa-window-close" aria-hidden="true"></i>
                                            <a href="">
                                                &nbsp;Not Submitted</a>
                                        </li>
                                        <li id="tab_all" onClick={this.handleActiveTab}>
                                            <i className="fa fa-list" aria-hidden="true"></i>
                                            <a href=" ">
                                                &nbsp;All</a>
                                        </li>
                                    </ul>
                                    <ListActivity data={data}/>
                                </div>
                            </div>
                            <Newsbar/>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>)
    }
}
const ListActivity = (props) => {

    return (props.data.length === 0
        ? <table className="_se3msg3l">
                <tbody>
                    <tr>
                        <td>

                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="_head">Ooops... No Assignments yet in this Category</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="_main">Find in another Category</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        : <table className="_se3a">
            <tbody>
                {props
                    .data
                    .map((data, i) => (
                        <tr key={i}>
                            <td>
                                <i className="fa fa-circle _i3a" aria-hidden="true"></i>
                            </td>
                            <td>{data.due_date}</td>
                            <td>{data.name}
                            </td>
                            <td>
                                <i className="fa fa-pencil-square-o _ic __wr" aria-hidden="true"></i>
                            </td>
                            <td>
                                <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>)
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