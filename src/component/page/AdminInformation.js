/* ------------------------------------------------------------------------------
                                          Admin Information
---------------------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavInfo, LoadingAnim, DeleteModal} from '../index.js'

class AdminUser extends Component {
    constructor() {
        super()
        this.state = {
            information: [],
            available_course: [],
            info_loaded: false,
            update_loaded: false,
            active_navbar: "btn_list",
            is_create: false,
            is_list: true,
            is_update: false,
            title: '',
            description: '',
            schedule_id: '',
            title_update: '',
            description_update: '',
            schedule_id_update: '',
            information_id: '',
            modal_active: false,
        }
    }
    componentDidMount = () => {
        this.handleGetInformation(1)
        this.handleGetListAvailableCourse()
    }
    /* -----------------------------------------------------------------------------
                                      Render Element
     -----------------------------------------------------------------------------*/
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleGetInformation = (page) => {
        axios.get(`/api/admin/v1/information?ttl=10&pg=` + page, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({information: res.data.data, info_loaded: true})
            } else {
                this.setState({information: [], info_loaded: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleAddInformatmion = (e) => {
        e.preventDefault()
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)

        let formData = new FormData()
        formData.append('title', this.state.title)
        formData.append('description', this.state.description)
        formData.append('schedule_id', this.state.schedule_id)

        axios.post(`/api/admin/v1/information`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, 'Information added succesfully!')
                this.handleGetInformation(1)
                this.setState({
                    is_create: false,
                    is_list: true,
                    active_navbar: "btn_list",
                    title: '',
                    description: '',
                    schedule_id: ''
                })
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleGetListAvailableCourse = () => {
        axios.get(`/api/admin/v1/available-course`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({available_course: res.data.data})
            } else {
                this.setState({available_course: []})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleActiveUpdate = (id) => {
        this.setState({is_create: false, is_list: false, is_update: true, active_navbar: "btn_list"});
        this.handleGetDetail(id)
    }
    handleGetDetail = (id) => {
        this.setState({update_loaded: false})
        axios.get(`/api/admin/v1/information/${id}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({update_loaded: true, title_update: res.data.data.title, description_update: res.data.data.description, schedule_id_update: res.data.data.schedule_id, information_id: res.data.data.id})
            } else {
                this.setState({available_course: [], update_loaded: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleChangeMenu = (e) => {
        switch (e.currentTarget.id) {
            case "btn_list":
                this.setState({is_update: false, is_create: false, is_list: true, active_navbar: "btn_list"});
                break;
            case "btn_add":
                this.setState({is_update: false, is_create: true, is_list: false, active_navbar: "btn_add"});
                break;
            default:
                break;
        }
    }
    handleUpdateInformation = (e) => {
        e.preventDefault()
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)

        let formData = new FormData()
        formData.append('title', this.state.title_update)
        formData.append('description', this.state.description_update)
        formData.append('schedule_id', this.state.schedule_id_update)

        axios.patch(`/api/admin/v1/information/${this.state.information_id}`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, 'Information Updated succesfully!')
                this.handleGetInformation(1)
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    modalDeleteOn = (id) => {
        this.setState({modal_active: true, information_id: id})
    }
    modalDeleteOff = () => {
        this.setState({modal_active: false})
    }
    handelDeleteInformation = () =>{
        const {dispatcherLoading, dispatcherRequest} = this.props
        dispatcherLoading(10, false)
        axios.delete(`/api/admin/v1/information/${this.state.information_id}`, {
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
    render() {
        const {is_logged_in} = this.props
        const handle = {
            getInformation: this.handleGetInformation,
            changeMenu: this.handleChangeMenu,
            changeInput: this.handleChange,
            addInformation: this.handleAddInformatmion,
            activeUpdate: this.handleActiveUpdate,
            updateInformation: this.handleUpdateInformation,
            On: this.modalDeleteOn,
            Off: this.modalDeleteOff,
            Action: this.handelDeleteInformation,
        }
        const data = {
            title: this.state.title,
            description: this.state.description,
            schedule_id: this.state.schedule_id,
            title_update: this.state.title_update,
            description_update: this.state.description_update,
            schedule_id_update: this.state.schedule_id,
            available_course: this.state.available_course,
            update_loaded: this.state.update_loaded,
            modal_active: this.state.modal_active
        }
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"admin"}/>
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro _c5m312 _c5x312 _pd5m3n">
                                <div className="_c5x312 _c5m312 _he3b _pd3l3b _pd3n3lr">Information</div>
                                <div className="_c5x312 _c5m312 _pd3n3lr  _pd3l3b">
                                    <div className="_pd3n3lr _ta">
                                        <ul className="_ta5p">
                                            <li>
                                                <Link to={`/admin`}>Home Admin</Link>
                                            </li>
                                            <li className="_active">
                                                <a href="">Information</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavInfo active_menu={this.state.active_navbar} handle={handle}/>
                                <ContentList
                                    information={this.state.information}
                                    is_loaded={this.state.info_loaded}
                                    is_active={this.state.is_list}
                                    handle={handle}/>
                                <CreateInformation
                                    is_active={this.state.is_create}
                                    handle={handle}
                                    data={data}/>
                                <UpdateInformation
                                    is_active={this.state.is_update}
                                    handle={handle}
                                    data={data}/>
                            </div>
                        </div>
                    </div>
                    <DeleteModal handle={handle} is_active={this.state.modal_active}/>
                </LayoutUser>
            : <Redirect to={'/login'}/>)
    }
}
const CreateInformation = (props) => {
    const {is_active, handle, data} = props
    return (
        <div
            className="_c5x312 _c5m310  _pd3l3lr"
            style={{
            display: is_active
                ? "block"
                : "none"
        }}>
            <div className="_ca">
                <div className="_ca3h">
                    <div className="_c5m310 _c5x310">Create Information</div>
                </div>
                <div className="_se">
                    <form onSubmit={handle.addInformation}>
                        <div className="_ro">
                            <div className="_c5m312 _c5x312">

                                <label htmlFor="name">Title</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    name="title"
                                    onChange={handle.changeInput}/>
                            </div>
                            <div className="_c5m312 _c5x312">

                                <label htmlFor="name">Description</label>
                                <textarea
                                    className="description"
                                    name="description"
                                    value={data.description}
                                    onChange={handle.changeInput}></textarea>
                            </div>
                            <div className="_c5m36 _c5x312">
                                <label htmlFor="name">For Course</label>
                                <select name="schedule_id" onChange={handle.changeInput}>
                                    <option value="">General Information</option>
                                    {data
                                        .available_course
                                        .map((data, i) => (
                                            <option key={i} value={data.schedule_id}>{data.course_name}</option>
                                        ))
}
                                </select>
                            </div>
                        </div>
                        <div className="_c5m3o10 _c5x3o9 _c5x33 _c5m32">
                            <button className="_bt5m3b">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
const UpdateInformation = (props) => {
    const {is_active, handle, data} = props
    return (
        <div
            className="_c5x312 _c5m310  _pd3l3lr"
            style={{
            display: is_active
                ? "block"
                : "none"
        }}>
            <div className="_ca">
                <div className="_ca3h">
                    <div className="_c5m310 _c5x310">Update Information</div>
                </div>
                {data.update_loaded
                    ? <div className="_se">
                            <form onSubmit={handle.updateInformation}>
                                <div className="_ro">
                                    <div className="_c5m312 _c5x312">

                                        <label htmlFor="name">Title</label>
                                        <input
                                            type="text"
                                            value={data.title_update}
                                            name="title_update"
                                            onChange={handle.changeInput}/>
                                    </div>
                                    <div className="_c5m312 _c5x312">

                                        <label htmlFor="name">Description</label>
                                        <textarea
                                            className="description"
                                            name="description_update"
                                            value={data.description_update}
                                            onChange={handle.changeInput}></textarea>
                                    </div>
                                    <div className="_c5m36 _c5x312">
                                        <label htmlFor="name">For Course</label>
                                        <select
                                            name="schedule_id"
                                            value={data.schedule_id_update}
                                            onChange={handle.changeInput}>
                                            {data
                                                .available_course
                                                .map((data) => (
                                                    <option key={data.schedule_id} value={data.schedule_id}>{data.course_name}</option>
                                                ))
}
                                            <option >General Information</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="_c5m3o10 _c5x3o9 _c5x33 _c5m32">
                                    <button className="_bt5m3b">Update</button>
                                </div>
                            </form>
                        </div>
                    : <table className="_se3msg">
                        <tbody>
                            <tr>
                                <td>
                                    <LoadingAnim color_left="#333" color_right="#333"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
}
            </div>
        </div>
    )
}
const ContentList = (props) => {
    const {information, is_loaded, handle, is_active} = props
    return (
        <div
            className="_c5x312 _c5m310  _pd3l3lr"
            style={{
            display: is_active
                ? "block"
                : "none"
        }}>
            <div className="_ca">
                <div className="_ca3h">
                    <div className="_c5m310 _c5x310">List Information</div>
                </div>
                {is_loaded
                    ? <table className="_se _se3ada">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Created At</th>
                                    <th>For Course</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody
                                style={{
                                minHeight: "440px"
                            }}>
                                {information
                                    .data
                                    .map((data, i) => (
                                        <tr key={i}>
                                            <td>{data.title}</td>
                                            <td>{data.updated_at}</td>
                                            <td>{data.course_name}</td>
                                            <td>
                                                <i
                                                    onClick={() => {
                                                    handle.activeUpdate(data.id)
                                                }}
                                                    className="fa fa-pencil-square-o _ic3b __wr"
                                                    aria-hidden="true"></i>
                                                <i onClick={()=>{
                                                    handle.On(data.id)
                                                }} className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                            </td>
                                        </tr>
                                    ))
}
                            </tbody>
                            <tfoot>
                                <tr className="_pg">
                                    <td>
                                        <button
                                            disabled={(information.links.prev) === 0
                                            ? true
                                            : false}
                                            onClick={() => {
                                            handle.getInformation(information.links.prev)
                                        }}>&laquo; Prev</button>
                                    </td>
                                    <td>
                                        <a className="_active" href="">{`${information.links.self} of ${information.meta.total_page}`}</a>
                                    </td>
                                    <td>
                                        <button
                                            disabled={(information.links.next - 1) === information.meta.total_page
                                            ? true
                                            : false}
                                            onClick={() => {
                                            handle.getInformation(information.links.next)
                                        }}>Next &raquo;</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    : <table className="_se3msg">
                        <tbody>
                            <tr>
                                <td>
                                    <LoadingAnim color_left="#333" color_right="#333"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
}
            </div>
        </div>
    )
}

/* -----------------------------------------------------------------------------
                            state and dispatch to props
------------------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
        dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminUser)