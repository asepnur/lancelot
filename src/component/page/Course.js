import React, {Component} from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'

class Course extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            all: [],
            current: [],
            last: []
        }
    }
    componentDidMount() {
        let current = document.getElementById('tab_current')
        let dom = ReactDOM.findDOMNode
        dom(current).className = "_active"

        axios.get(`/api/v1/course?payload=current`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            res.data.code === 200
                ? this.setState({current: res.data.data})
                : this.setState({current: []})
            this.setState({data: this.state.current})
        }).catch((err) => {
            console.log(err)
        })

    }
    handleActiveTab = (e) => {
        const tagID = e.currentTarget.id
        const id = ["tab_all", "tab_last", "tab_current"]
        id.map((val) => {
            let dom = document.getElementById(val)
            val === tagID
                ? ReactDOM
                    .findDOMNode(dom)
                    .className = "_active"
                : ReactDOM
                    .findDOMNode(dom)
                    .className = ""
        })
        switch (tagID) {
            case "tab_all":
                this.state.all.length === 0
                    ? axios.get(`/api/v1/course?payload=all`, {
                        validateStatus: (status) => {
                            return status === 200
                        }
                    }).then((res) => {
                        res.data.code === 200
                            ? this.setState({all: res.data.data})
                            : null
                    }).catch((err) => {
                        console.log(err)
                    })
                    : null
                this.setState({data: this.state.all})
                break
            case "tab_last":
                this.state.last.length === 0
                    ? axios.get(`/api/v1/course?payload=last`, {
                        validateStatus: (status) => {
                            return status === 200
                        }
                    }).then((res) => {
                        res.data.code === 200
                            ? this.setState({last: res.data.data})
                            : null
                    }).catch((err) => {
                        console.log(err)
                    })
                    : null
                this.setState({data: this.state.last})
                break
            case "tab_current":
                this.state.current.length === 0
                    ? axios.get(`/api/v1/course?payload=current`, {
                        validateStatus: (status) => {
                            return status === 200
                        }
                    }).then((res) => {
                        res.data.code === 200
                            ? this.setState({current: res.data.data})
                            : null
                    }).catch((err) => {
                        console.log(err)
                    })
                    : null
                this.setState({data: this.state.current})
                break
            default:
                break
        }

    }
    handleRedirect = () => {
        window.location = '/admin/course'
    }
    render() {
        const {is_logged_in} = this.props
        const data = this.state.data
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match}/>
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro">
                                <div className="_c5m38 _c5x312 _pd5n _pd3cl _pd5m3n ">
                                    <div className="_he3b _pd3l3b">My Course</div>
                                    <div className="_c5x312 _c5m312 _pd3n3lr _ta ">
                                        <ul className="_ta5l3b">
                                            <li id="tab_last" onClick={this.handleActiveTab}>
                                                <i className="fa fa-history" aria-hidden="true"></i>
                                                <Link to="#">
                                                    &nbsp;Last</Link>
                                            </li>
                                            <li id="tab_current" onClick={this.handleActiveTab}>
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                <Link to="#">
                                                    &nbsp;Current</Link>
                                            </li>
                                            <li id="tab_all" onClick={this.handleActiveTab}>
                                                <i className="fa fa-list" aria-hidden="true"></i>
                                                <Link to="#">
                                                    &nbsp;All</Link>
                                            </li>
                                            <li
                                                onClick={e => {
                                                e.preventDefault();
                                                this.handleRedirect()
                                            }}
                                                id="tab_manage">
                                                <i className="fa fa-cog" aria-hidden="true"></i>
                                                <Link to="#">
                                                    &nbsp;Manage</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <ListCourse data={data}/>
                                </div>
                                <Newsbar/>
                            </div>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>);
    }
}

const ListCourse = (props) => {
    return props.data.length === 0
        ? <table className="_se3msg3l">
                <tbody>
                    <tr>
                        <td>

                            <i className="fa fa-book" aria-hidden="true"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="_head">Ooops... No course yet in this Category</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="_main">Find in another Category</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        : props
            .data
            .map((data) => (
                <div className="_c5x312 _c5m34 _pd3n3lr3x" key={data.id}>
                    <div className="_se3lc">
                        <div>
                            <p>{data.name}</p>
                            <p>{data.description}
                            </p>
                            <Link to={"/course/" + data.id}>
                                <button className="_bt5xs3b">View Detail</button>
                            </Link>
                        </div>
                    </div>
                </div>
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
export default connect(mapStatetoProps, mapDispatchtoProps)(Course)