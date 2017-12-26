/*----------------------------------------------------------------
                        DASHBOARD ADMIN HOME
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, LayoutUser, LoadingAnim} from '../index.js'

class AdminHome extends Component {
    constructor() {

        super()
        this.state = {
            information_loaded: false,
            abilities: [],
            information: [],
            modal_active: false,
            current_id: '',
        }
    }
    /*----------------------------------------------------------------
                            LIFE CYCLE
    ------------------------------------------------------------------*/
    componentDidMount() {
        this.handleGetInformation(1)
    }
    /*----------------------------------------------------------------
                            FUNCTION HANDLER
    ------------------------------------------------------------------*/
    modalDeleteOn = (id) => {
        this.setState({modal_active: true, current_id: id})
    }
    modalDeleteOff = () => {
        this.setState({modal_active: false})
    }
    handelDeleteInformation = () =>{
        const {dispatcherLoading, dispatcherRequest} = this.props
        dispatcherLoading(10, false)
        axios.delete(`/api/admin/v1/information/${this.state.current_id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, 'Information deleted!')
                this.setState({modal_active: false})
                this.handleGetInformation(1)
            } else {
                this.setState({modal_active: false})
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleGetInformation = (page) => {
        axios.get(`/api/admin/v1/information?ttl=10&pg=` + page, {
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
        const deleteHandle = {
            On: this.modalDeleteOn,
            Off: this.modalDeleteOff,
            Action: this.handelDeleteInformation
        }
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
                                        handle={deleteHandle}
                                        modules_access={modules_access}
                                        information={this.state.information}
                                        is_loaded={this.state.information_loaded}
                                        handleGetInformation={this.handleGetInformation}/>
                                </div>
                            </div>
                        </div>
                        <DeleteModal handle={deleteHandle} is_active={this.state.modal_active}/>
                    </LayoutUser>
                : <Redirect to={`/`}/>)
    }
}
/*----------------------------------------------------------------
                            FUNCTION ELEMENT
------------------------------------------------------------------*/
const DeleteModal = (props) => {
    const { is_active, handle} = props
    return (
        <div
            className="_md5d"
            style={{
            display: is_active
                ? "block"
                : "none"
        }}>
            <div className="_ro">
                <div className="_c5x312 _c5m36 _c5m3o3">
                    <div className="_cn _md5cu">
                        <div className="_ro">
                            <div className="_c5x312">
                                <h1 className="_he3c">Delete Confirmation</h1>
                                <p className="_me3c">Are you sure to use this action?</p>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x312"></div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x36">
                                <input className="_bt5m3b" type="button" name="submit" value="Cancel" onClick={handle.Off}/>
                            </div>
                            <div className="_c5x36">
                                <input className="_bt5m3r" onClick={handle.Action} type="button" name="submit" value="Delete"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
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
    const {information, is_loaded, handleGetInformation, handle} = props
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
                                {information.data.length !== 0
                                    ? information
                                        .data
                                        .map((data, i) => (
                                            <tr key={i}>
                                                <td>{data.title}</td>
                                                <td>{data.updated_at}</td>
                                                <td>{data.course_name}</td>
                                                <td>
                                                    <a className="" href="">
                                                        <i className="fa fa-pencil-square-o _ic3xb __wr" aria-hidden="true"></i>
                                                    </a>
                                                    <a onClick={
                                                        ()=>{
                                                            handle.On(data.id)
                                                        }
                                                    }>
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
                                        <button
                                            disabled={information.links.prev === 0
                                            ? true
                                            : false}
                                            onClick={() => {
                                            handleGetInformation(information.links.prev)
                                        }}>&laquo; Prev</button>
                                    </td>
                                    <td>
                                        <a
                                            className="_active"
                                            onClick={() => {
                                            handleGetInformation(information.links.self)
                                        }}>{information.links.self}
                                            of {information.meta.total_page}</a>
                                    </td>
                                    <td>
                                        <button
                                            disabled={(information.links.next - 1) === information.meta.total_page
                                            ? true
                                            : false}
                                            onClick={(e) => {
                                            handleGetInformation(information.links.next)
                                        }}>Next &raquo;</button>
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
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
        dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminHome)