/*----------------------------------------------------------------
                        DASHBOARD ADMIN HOME
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, LoadingAnim} from '../index.js'

class AdminHome extends Component {
    constructor() {

        super()
        this.state = {
            information_loaded: false,
            abilities: [],
            information: []
        }
    }
    /*----------------------------------------------------------------
                            LIFE CYCLE
    ------------------------------------------------------------------*/
    componentDidMount() {
        this.handleGetInformation()
    }
    /*----------------------------------------------------------------
                            FUNCTION HANDLER
    ------------------------------------------------------------------*/
    handleGetInformation = () => {
        axios.get(`/api/admin/v1/information?ttl=10&pg=1`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({information: res.data.data, information_loaded: true})
            } else {
                this.setState({information: [], information_loaded: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    /*----------------------------------------------------------------
                            RENDER COMPONENT
    ------------------------------------------------------------------*/
    render() {
        const {is_logged_in, modules_access} = this.props
        return (!is_logged_in
            ? <Redirect to={`/login`}/>
            : Object.keys(modules_access).length !== 0
                ? <LayoutUser>
                        <Navbar match={this.props.match} active_navbar={"admin"}/>
                        <div className="_ro _ma3mn">
                            <div className="_cn">
                                <div className="_ro">
                                    <div className="_c5m34 _pd5n _pd3cl _pd5m3n">
                                        <ManageUser modules_access={modules_access}/>
                                        <ManageCourse modules_access={modules_access}/>
                                    </div>
                                    <ManageInformation
                                        modules_access={modules_access}
                                        information={this.state.information}
                                        is_loaded={this.state.information_loaded}/>
                                </div>
                            </div>
                        </div>
                    </LayoutUser>
                : <Redirect to={`/`}/>)
    }
}
/*----------------------------------------------------------------
                            FUNCTION ELEMENT
------------------------------------------------------------------*/

const ManageUser = (props) => {
    if (props.modules_access.users !== undefined) {
        if (props.modules_access.users.length !== 0) {
            return (
                <div>
                    <div className="_he3b">Manage User</div>
                    <div className="_c5x36 _c5m36 _pd3n3l">
                        <div className="_se3lca">
                            <Link to={`/admin/user`}>
                                <div>
                                    <i className="fa fa-users" aria-hidden="true"></i>
                                    <p>User</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="_c5x36 _c5m36 _pd3n3r">
                        <div className="_se3lca">
                            <Link to={`/admin/role`}>
                                <div>
                                    <i className="fa fa-cog" aria-hidden="true"></i>
                                    <p>Role</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        return null
    }
}
const ManageCourse = (props) => {
    if (props.modules_access.courses !== undefined) {
        if (props.modules_access.courses.length !== 0) {
            return (
                <div>
                    <div className="_he3b">My Course</div>
                    <div className="_c5x36 _c5m36 _pd3n3l">
                        <div className="_se3lcb">
                            <Link to={`/admin/course/12`}>
                                <div>
                                    <p>ALGORITMA PEMROGRAMAN - B</p>
                                    <p>Monday, 13.00 - 14.30</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="_c5x36 _c5m36 _pd3n3r">
                        <div className="_se3lcb">
                            <Link to={`/admin/course/12`}>
                                <div>
                                    <p>ALGORITMA PEMROGRAMAN - B</p>
                                    <p>Monday, 13.00 - 14.30</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="_c5x36 _c5m36 _pd3n3l">
                        <div className="_se3lcb">
                            <Link to={`/admin/course/12`}>
                                <div>
                                    <p>ALGORITMA PEMROGRAMAN - B</p>
                                    <p>Monday, 13.00 - 14.30</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="_c5x36 _c5m36 _pd3n3r">
                        <div className="_se3lcb">
                            <Link to={`/admin/course/12`}>
                                <div>
                                    <p>ALGORITMA PEMROGRAMAN - B</p>
                                    <p>Monday, 13.00 - 14.30</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        return null
    }
}
const ManageInformation = (props) => {
    const {information, is_loaded} = props
    if (props.modules_access.informations !== undefined) {
        return (
            <div className="_c5m38 _c5x312 _pd3cr">
                <div className="_he3b">My Post</div>
                {!is_loaded
                    ? <table className="_se3msg">
                            <tbody>
                                <tr>
                                    <td>
                                        <LoadingAnim color_left="#333" color_right="#333"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    : <div>
                        <table className="_se3ainf">
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td>Created At</td>
                                    <td>For Course</td>
                                    <td>Action</td>
                                </tr>
                                {information.length !== 0
                                    ? information.map((data, i) => (
                                        <tr key={i}>
                                            <td>{data.title}</td>
                                            <td>{data.updated_at}</td>
                                            <td>{data.course_name}</td>
                                            <td>
                                                <a className="" href="">
                                                    <i className="fa fa-pencil-square-o _ic3xb __wr" aria-hidden="true"></i>
                                                </a>
                                                <a className="" href="">
                                                    <i className="fa fa-times _ic3xr __wr" aria-hidden="true"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                    : null
                                }
                            </tbody>
                        </table>
                        <table>
                            <tfoot>
                                <tr className="_pg">
                                    <td>
                                        <a href="">&laquo;</a>
                                    </td>
                                    <td>
                                        <a href="">1</a>
                                    </td>
                                    <td>
                                        <a className="_active" href="">2</a>
                                    </td>
                                    <td>
                                        <a href="">3</a>
                                    </td>
                                    <td>
                                        <a href="">&raquo;</a>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
}

            </div>
        )
    } else {
        return null
    }
}
/*----------------------------------------------------------------
                            DISPATCHER
------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message, modules_access: state.modules_access}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminHome)