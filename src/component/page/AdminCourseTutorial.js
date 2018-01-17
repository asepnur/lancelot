import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse, LoadingAnim} from '../index'

class AdminCourseTutorial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_menu: 'btn_tutorial',
            schedule_id: this.props.match.params.id,
            is_loaded: false,
            page: 0,
            total_page: 0,
            data: []
        }
    }
    componentDidMount() {
        this.handleGetTutorial(1)
    }
    handleGetTutorial = (pg) => {
        axios.get(`/api/v1/tutorial?pg=${pg}&ttl=10&schedule_id=${this.state.schedule_id}&payload=assistant`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({is_loaded: true, page: res.data.data.page, total_page: res.data.data.total_page, data: res.data.data.tutorials})
            }
            this.setState({is_loaded: true})
        }).catch((err) => {
            this.setState({is_loaded: true})
            console.log(err)
        })
    }
    render() {
        const {is_logged_in} = this.props
        const data = {
            files: this.state.data,
            is_loaded: this.state.is_loaded,
            page: this.state.page,
            total_page: this.state.total_page
        }
        const handle = {
            getTutorial:  this.handleGetTutorial
        }
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"admin"}/>
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro _c5m312 _c5x312 _pd5m3n">
                                <div className="_c5x312 _c5m312 _he3b _pd3l3b">Mobile Computing</div>
                                <div className="_c5x312 _c5m312 _pd3n3lr  _pd3l3b">
                                    <div className="_pd3n3lr _ta">
                                        <ul className="_ta5p">
                                            <li>
                                                <a href="">Home</a>
                                            </li>
                                            <li className="_active">
                                                <a href="">Mobile Computing</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavCourse active_menu={this.state.active_menu}/>
                                <div className="_c5x312 _c5m310 _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">Fie Tutorial</div>
                                            <div className="_c5m32 _c5x32">
                                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <ListTutorial data={data} handle={handle}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to="/login"/>)
    }
}
const ListTutorial = (props) => {
    const {data, handle} = props
    return (data.is_loaded
        ? <table className="_se _se3ada">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Description</th>
                        <th>Create At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .files
                        .map((t, i) => (
                            <tr key={i}>
                                <td>{t.name}</td>
                                <td>{t.description}</td>
                                <td>{t.time}
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                    <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                </td>
                            </tr>
                        ))
}
                </tbody>
                <tfoot>
                    <tr className="_pg">
                        <td>
                            <button
                                disabled={data.page <= 1
                                ? true
                                : false}
                                onClick={() => {
                                handle.getTutorial(data.page - 1)
                            }}>&laquo; Prev</button>
                        </td>
                        <td>
                            <a className="_active" href="">{data.page}
                                of {data.total_page}</a>
                        </td>
                        <td>
                            <button
                                href=""
                                disabled={data.page === data.total_page
                                ? true
                                : false}
                                onClick={() => {
                                handle.getTutorial(data.page + 1)
                            }}>Next &raquo;</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        : <div align="center"><LoadingAnim color_left="#333" color_right="#333"/>
            <p className="_me3c"></p>
        </div>)
}
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourseTutorial)