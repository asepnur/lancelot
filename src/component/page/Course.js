import React, {Component} from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'

class Course extends Component {
    constructor(){
        super()
        this.state = {
            id: '',
            name: '',
            description: '',
            class: '',
            semester: ''
        }
    }
    handleLast = () => {
        let last = document.getElementById('last')
        let current = document.getElementById('current')
        let all = document.getElementById('all')

        let dom = ReactDOM.findDOMNode
        dom(last).className = "_ta5l3a"
        dom(current).className = ""
        dom(all).className = ""
    }
    handleCurrent = () => {
        let last = document.getElementById('last')
        let current = document.getElementById('current')
        let all = document.getElementById('all')

        let dom = ReactDOM.findDOMNode
        dom(last).className = ""
        dom(current).className = "_ta5l3a"
        dom(all).className = ""
    }
    handleAll = () => {
        let last = document.getElementById('last')
        let current = document.getElementById('current')
        let all = document.getElementById('all')

        let dom = ReactDOM.findDOMNode
        dom(last).className = ""
        dom(current).className = ""
        dom(all).className = "_ta5l3a"
    }
    render() {
        const {is_logged_in} = this.props

        return (is_logged_in
            ? <LayoutUser>
                    <Navbar/>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_pd5m3n _c5m312 _c5x312">
                                <h1 className="_he3b">My Courses</h1>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5x312 _c5m312 _pd5m3n">
                                <div className="_se se3a">
                                    <div className="_c5x312 _c5m312 _pd3n3lr _ta">
                                        <ul className="_ta5l">
                                            <li>
                                                <Link 
                                                    id="last" 
                                                    onClick= 
                                                    { e => {e.preventDefault(); this.handleLast()}} 
                                                    to="#">Last</Link>
                                            </li>
                                            <li>
                                                <Link
                                                    id="current"
                                                    onClick=
                                                    { e => {e.preventDefault(); this.handleCurrent()}}
                                                    className="_ta5l3a"
                                                    to="#">Current</Link>
                                            </li>
                                            <li>
                                                <Link 
                                                    id="all" 
                                                    onClick= 
                                                    { e => {e.preventDefault(); this.handleAll()}} 
                                                    to="#">All</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_ro _c5m38 _c5x312 _pd5m3n">
                            <div className="_c5x312 _c5m34 _pd3n3lr">
                                <div className="_se _se3a">
                                    <div className="_ro">
                                        <div className="_c5x312 _c5m312">
                                            <div className="_c5x312 _c5m312">
                                                <p className="_he3x3bk">ALGORITMA PEMROGRAMAN</p>
                                            </div>
                                            <div className="_c5x312 _c5m312">
                                                <p className="_ct3s">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                            <div className="_c5x312 _c5m312 _ma3m3t">
                                                <a className="_ct3mb" href="">[Read More]</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Newsbar/>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>);
    }
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