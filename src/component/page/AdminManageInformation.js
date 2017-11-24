import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser} from '../index.js'

import {base_url} from '../../env/Environment'

class AdminManageInformation extends Component {
    constructor() {

        super()
        this.state = {
            recent: [
                {
                    title: '',
                    description: '',
                    date: '',
                    schedule_id: ''
                }
            ],
            last: [
                {
                    title: '',
                    description: '',
                    date: '',
                    schedule_id: ''
                }
            ]
        }
    }
    componentDidMount() {
        fetch(base_url + '/api/v1/information', {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                this.setState({recent: data.data.recent}),
                this.setState({last: data.data.last})
            }
        })

    }
    handleDelete = (dispatcherRequest, id) => {
        fetch(base_url + '/api/admin/v1/information/delete', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                dispatcherRequest(true, 200, '')
                let val = this
                    .state
                    .data
                    .filter((data, i) => data.schedule_id !== id
                        ? {
                            schedule_id: data.schedule_id,
                            title: data.title,
                            description: data.description,
                            date: data.data
                        }
                        : null)
                this.setState({data: val})
            } else {
                dispatcherRequest(true, 401, data.error)
            }
        })
    }
    render() {
        const {is_logged_in} = this.props
        const recent = this.state.recent
        const last = this.state.last
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match}/>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_pd5m3n _c5m312 _c5x312">
                                <h1 className="_he3b">Manage Information</h1>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5m312 _pd5m3n _ta">
                                <ul className="_ta5l">
                                    <li>
                                        <a className="" id="">Information</a>
                                    </li>
                                    <li>
                                        <a className="_ta5l3a" id="">Manage Information</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro _c5m312 _c5x312 _pd5m3n">
                            <div className="_c5x312 _c5m312 _pd3n3lr">
                                <div className="_se _se3a">
                                    <div className="_ro">
                                        <div className="_c5x310 _c5m311 ">
                                            <h1 className="_he3m3b">List Information</h1>
                                        </div>
                                        <div className="_c5x32 _c5m31 ">
                                            <button className="_bt5m3b">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="_ro _pd3n3b _ma3l3lr">
                                        <table className="_tb3g34">
                                            <tr>
                                                <th>Subject</th>
                                                <th>Description</th>
                                                <th>Created At</th>
                                                <th>Action</th>
                                            </tr>
                                        </table>
                                        <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                                            <table className="_tb3g34">
                                                <ListInformation data={last} handleDelete={this.handleDelete}/>
                                                <ListInformation data={recent} handleDelete={this.handleDelete}/>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutUser>

            : <Redirect to={`/login`}/>);
    }
}

const ListInformation = (props) => {
    return (
        <tbody>
            {props
                .data
                .map((data, i) => (
                    <tr key={i}>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>{data.date}</td>
                        <td>
                            <div align="left">
                                <a className="" href="">
                                    <i className="fa fa-pencil-square _ic3mb _ma3lr" aria-hidden="true"></i>
                                </a>
                                <Link
                                    to={'#'}
                                    onClick={e => {
                                    e.preventDefault();
                                    props.handleDelete(props.dispatcherRequest, data.schedule_id)
                                }}>
                                    <i className="fa fa-window-close _ic3mr _ma3lr" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
        </tbody>
    )
}

const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminManageInformation)