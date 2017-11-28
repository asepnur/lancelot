import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'

class MyActivity extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    id: '',
                    name: '',
                    status: '',
                    description: '',
                    due_date: ''
                }
            ]
        }
    }
    componentDidMount() {
        let notSubmitted = document.getElementById('notSubmitted')
        let dom = ReactDOM.findDOMNode
        dom(notSubmitted).className = "_active"

        fetch('/api/v1/course/assignment/149?pg=1&ttl=10', {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            return data.code === 200
                ? this.setState({data: data.data})
                : null
        })
    }
    handleAll = () => {
        let all = document.getElementById('all')
        let submitted = document.getElementById('submitted')
        let notSubmitted = document.getElementById('notSubmitted')

        let dom = ReactDOM.findDOMNode
        dom(submitted).className = ""
        dom(notSubmitted).className = ""
        dom(all).className = "_active"

        fetch('/api/v1/course/assignment/149?pg=1&ttl=10', {
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
    handleSubmitted = () => {
        let all = document.getElementById('all')
        let submitted = document.getElementById('submitted')
        let notSubmitted = document.getElementById('notSubmitted')

        let dom = ReactDOM.findDOMNode
        dom(submitted).className = "_active"
        dom(notSubmitted).className = ""
        dom(all).className = ""

        /*
        fetch('/api/v1/course/assignment/149?pg=1&ttl=10', {
          method: 'GET',
          credentials: 'include',
          crossDomain: true
        }).then((res) => {
          return res.json()
        }).then((data) => {
          if(data.code === 200){
              this.setState({data: data.data})
          }
        })*/
    }
    handleNotSubmitted = () => {
        let all = document.getElementById('all')
        let submitted = document.getElementById('submitted')
        let notSubmitted = document.getElementById('notSubmitted')

        let dom = ReactDOM.findDOMNode
        dom(submitted).className = ""
        dom(notSubmitted).className = "_active"
        dom(all).className = ""

        const data = this.state.data

        function checkNotSubmitted(status) {
            return status === 1;
        }
        if (data.code === 200) {
            this.setState({
                data: data.filter(checkNotSubmitted)
            })
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
                                        <li id="submitted" onClick= {e => {e.preventDefault(); this.handleSubmitted()}}>
                                            <i className="fa fa-check-square" aria-hidden="true"></i>
                                            <a href=" ">
                                                &nbsp;Submitted</a>
                                        </li>
                                        <li
                                            id="notSubmitted"
                                            onClick=
                                            {e => {e.preventDefault(); this.handleNotSubmitted()}}
                                            className="_active">
                                            <i className="fa fa-window-close" aria-hidden="true"></i>
                                            <a href="#">
                                                &nbsp;Not Submitted</a>
                                        </li>
                                        <li id="all" onClick= {e => {e.preventDefault(); this.handleAll()}}>
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