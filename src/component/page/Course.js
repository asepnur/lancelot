import React, {Component} from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'

class Course extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let current = document.getElementById('current')
        let dom = ReactDOM.findDOMNode
        dom(current).className = "_active"
        fetch('/api/v1/course?payload=current', {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                this.setState({data: data.data})
            }
        })
    }

    handleLast = () => {
        let last = document.getElementById('last')
        let current = document.getElementById('current')
        let all = document.getElementById('all')

        let dom = ReactDOM.findDOMNode
        dom(last).className = "_active"
        dom(current).className = ""
        dom(all).className = ""

        fetch('/api/v1/course?payload=last', {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                this.setState({data: data.data})
            }
        })
    }
    handleCurrent = () => {
        let last = document.getElementById('last')
        let current = document.getElementById('current')
        let all = document.getElementById('all')

        let dom = ReactDOM.findDOMNode
        dom(last).className = ""
        dom(current).className = "_active"
        dom(all).className = ""

        fetch('/api/v1/course?payload=current', {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                this.setState({data: data.data})
            }
        })
    }
    handleAll = () => {
        let last = document.getElementById('last')
        let current = document.getElementById('current')
        let all = document.getElementById('all')

        let dom = ReactDOM.findDOMNode
        dom(last).className = ""
        dom(current).className = ""
        dom(all).className = "_active"

        fetch('/api/v1/course?payload=all', {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                this.setState({data: data.data})
            }
        })
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
                                            <li id="last">
                                                <i
                                                    onClick=
                                                    { e => {e.preventDefault(); this.handleLast()}}
                                                    className="fa fa-history"
                                                    aria-hidden="true"></i>
                                                <Link onClick= { e => {e.preventDefault(); this.handleLast()}} to="#">
                                                    &nbsp;Last</Link>
                                            </li>
                                            <li
                                                onClick=
                                                { e => {e.preventDefault(); this.handleCurrent()}}
                                                id="current"
                                                className="_active">
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                <Link to="#">
                                                    &nbsp;Current</Link>
                                            </li>
                                            <li onClick= { e => {e.preventDefault(); this.handleAll()}} id="all">
                                                <i className="fa fa-list" aria-hidden="true"></i>
                                                <Link to="#">
                                                    &nbsp;All</Link>
                                            </li>
                                            <li
                                                onClick={e => {
                                                e.preventDefault();
                                                this.handleRedirect()
                                            }}
                                                id="manage">
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