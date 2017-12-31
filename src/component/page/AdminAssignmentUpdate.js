/*----------------------------------------------------------------
                        ADMIN COURSE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import history from '../../history'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse, LoadingAnim} from '../index'

var module_content = {
    asg_read: '',
    asg_xread: '',
    asg_update: '',
    asg_xupdate: ''
}

class AdminAssignmentUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_menu: 'btn_assign',
            schedule_id: this.props.match.params.id,
            assignment_id: this.props.match.params.asg_id,
            name: '',
            description: '',
            due_date: '',
            grade_parameter_id: '',
            status: 0,
            max_file: '',
            max_size: '',
            files_id: [],
            allowed_types: [],
            list_gp: [],
            list_typ: [],
            checked_typ: [],
            dropdown: false,
            detail_loaded: false,
            uploaded_files: [],
            isUploading: false,
            ...module_content
        }
    }
    componentDidMount() {
        const {modules_access} = this.props
        if (modules_access.assignments === undefined) {
            history.push(`/`)
        } else {
            modules_access
                .assignments
                .forEach(data => {
                    switch (data) {
                        case "UPDATE":
                            this.setState({asg_update: data});
                            break
                        case "READ":
                            this.setState({asg_read: data});
                            break
                        case "XUPDATE":
                            this.setState({asg_xupdate: data});
                            break
                        case "XREAD":
                            this.setState({asg_xread: data});
                            break
                        default:
                            break
                    }
                })
        }
        this.handleGetListGP()
        this.handleGetListType()
        this.handleGetDetailAssignment()
    }

    /*------------------------------------------------------------
                              HANDLE FUNCTION
     -------------------------------------------------------------*/
    handleDropdown = () => {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }
    handleAutoChecked = () => {
        for (var i = 0; i < this.state.checked_typ.length; i++) {
            document
                .getElementById(this.state.checked_typ[i])
                .checked = true
        }

    }
    handleToggleCheck = (e) => {
        const value = e.target.value
        if (this.state.checked_typ.length === 0) {
            let new_typ = this.state.checked_typ
            new_typ.push(value)
            this.setState({checked_typ: new_typ})
        } else {
            let candidate = this
                .state
                .checked_typ
                .filter(data => {
                    return data === value
                })
            if (candidate.length > 0) {
                let new_typ = this.state.checked_typ
                let i = new_typ.indexOf(value)
                new_typ.splice(i, 1)
                this.setState({checked_typ: new_typ})
            } else {
                let new_typ = this.state.checked_typ
                new_typ.push(value)
                this.setState({checked_typ: new_typ})
            }
        }
    }
    handleDeleteFile = (id) => {
        let new_list = this
            .state
            .uploaded_files
            .filter((data) => (data.id !== id))

        this.setState({uploaded_files: new_list})
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    /*------------------------------------------------------------
                              HANDLE REQUEST
     -------------------------------------------------------------*/
    handleGetDetailAssignment = () => {
        axios.get(`/api/admin/v1/assignment/${this.state.assignment_id}?pg=1&ttl=10&payload=update`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                let d = new Date(res.data.data.due_date)
                let lc = moment(d)
                    .local()
                    .format('YYYY-MM-DDTHH:mm:ss')
                this.setState({
                    detail_loaded: true,
                    name: res.data.data.name,
                    description: res.data.data.description,
                    due_date: lc,
                    grade_parameter_id: res.data.data.grade_parameter_id,
                    status: res.data.data.status,
                    max_file: res.data.data.max_file,
                    max_size: res.data.data.max_size,
                    checked_typ: res.data.data.types,
                    uploaded_files: res.data.data.files
                },)
            }
        }).then(() => {
            this.handleAutoChecked()

        }).catch((err) => {
            console.log(err)
        })
    }
    handleUpdateAssignment = () => {
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)
        let formData = new FormData()
        formData.append('name', this.state.name)
        formData.append('descriptions', this.state.description)
        let d = new Date(this.state.due_date)
        moment
            .utc(d)
            .format('YYYY-MM-DD HH:mm:ss')
        let lc = moment(d)
            .local()
            .format('YYYY-MM-DD HH:mm:ss')
        formData.append('due_date', lc)
        formData.append('grade_parameter_id', this.state.grade_parameter_id)
        formData.append('status', this.state.status)
        if (parseInt(this.state.status, 10) === 1) {
            let typ = []
            if (this.state.checked_typ.length !== 0) {
                this
                    .state
                    .checked_typ
                    .forEach((data) => {
                        typ.push(data)
                    })
                formData.append('allowed_types', typ.join("~"))
            } else {
                formData.append('allowed_types', "")
            }
            formData.append('max_file', this.state.max_file)
            formData.append('max_size', this.state.max_size)
        }
        let id = []
        if (this.state.uploaded_files.length !== 0) {
            this
                .state
                .uploaded_files
                .forEach((data) => {
                    id.push(data.id)
                })
            formData.append('files_id', id.join("~"))
        } else {
            formData.append('files_id', "")
        }
        axios.patch(`/api/admin/v1/assignment/${this.state.assignment_id}`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatcherLoading(100, false)
                this.setState({
                    change_image: !this.state.change_image
                })
                dispatcherRequest(true, 200, 'Assignmnt created succesfully')
                history.push(`/admin/course/${this.state.schedule_id}`)
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleGetListGP = () => {
        axios.get(`/api/admin/v1/assignment/${this.state.schedule_id}/available`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({list_gp: res.data.data})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    onUploadFile = () => {
        const {dispatcherRequest} = this.props
        let formData = new FormData()
        formData.append('payload', "assignment");
        formData.append('id', this.state.schedule_id);
        formData.append('role', "assistant");
        formData.append('file', document.getElementById('upload').files[0]);
        if (document.getElementById('upload').files[0] !== undefined) {
            this.setState({isUploading: true})
            axios.post(`/api/v1/file`, formData, {
                validateStatus: (status) => {
                    return status < 500
                }
            }).then((res) => {
                this.setState({isUploading: false})
                if (res.status === 200) {
                    this.setState({
                        change_image: !this.state.change_image
                    })
                    let new_uploaded_files = this
                        .state
                        .uploaded_files
                        .slice()
                    new_uploaded_files.push({name: res.data.data.name, id: res.data.data.id, url_thumbnail: res.data.data.url_thumbnail})
                    this.setState({uploaded_files: new_uploaded_files})
                } else {
                    dispatcherRequest(true, 401, res.data.error[0])
                }
            }).catch((err) => {
                dispatcherRequest(true, 401, 'Error connection')
                this.setState({isUploading: false})
            })
        }
    }
    handleGetListType = () => {
        axios.get(`/api/v1/admin/file/types/available`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({list_typ: res.data.data.types})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        const {is_logged_in} = this.props
        const hdlr_asg = {
            getList: this.handleDetailAssignment,
            dropdown: this.handleDropdown,
            toggleCheck: this.handleToggleCheck,
            upload: this.onUploadFile,
            deleteFile: this.handleDeleteFile,
            change: this.handleChange,
            updateAssignment: this.handleUpdateAssignment
        }
        const dt = {
            list_gp: this.state.list_gp,
            dropdown: this.state.dropdown,
            list_typ: this.state.list_typ,
            uploaded_files: this.state.uploaded_files,
            uploading: this.state.isUploading,
            schedule_id: this.state.schedule_id,
            name: this.state.name,
            description: this.state.description,
            due_date: this.state.due_date,
            grade_parameter_id: this.state.grade_parameter_id,
            status: this.state.status,
            max_file: this.state.max_file,
            max_size: this.state.max_size
        }
        const dt_nav = {
            schedule_id: this.state.schedule_id
        }
        return (is_logged_in
            ? this.state.asg_update === "UPDATE" || this.state.asg_xupdate === "XUPDATE"
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
                                                    <Link to={`/admin`}>Admin</Link>
                                                </li>
                                                <li >
                                                    <Link to={`/admin/course/${this.state.schedule_id}`}>Mobile Computing</Link>
                                                </li>
                                                <li className="_active">
                                                    <Link
                                                        to={`/admin/course/${this.state.schedule_id}/update-assignment/${this.state.assignment_id}`}>Update</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <AdminNavCourse
                                        dt_nav={dt_nav}
                                        active_menu={this.state.active_menu}
                                        handleActive={this.handleChangeActiveMenu}/>
                                    <div className="_c5x312 _c5m310  _pd3l3lr __ass">
                                        <div className="_ca">
                                            <div className="_ca3h">
                                                <div className="_c5m310 _c5x310">Update Assignment</div>
                                            </div>

                                            <ListAssignment
                                                dt={dt}
                                                is_loaded={this.state.detail_loaded}
                                                hdlr_asg={hdlr_asg}/>
                                            <div
                                                className="__x"
                                                style={{
                                                display: this.state.dropdown
                                                    ? "block"
                                                    : "none"
                                            }}
                                                onClick={this.handleDropdown}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </LayoutUser>
                : this.state.detail_loaded
                    ? <Redirect to="/login"/>
                    : null

            : <Redirect to="/login"/>)
    }
}
const ListAssignment = (props) => {
    const {is_loaded, dt, hdlr_asg} = props
    return (is_loaded
        ? <div>
                <div className="_se">
                    <div className="_c5x312 _c5m312">
                        <label htmlFor="name">Assignment Name</label>
                        <input
                            name="name"
                            type="text"
                            value={dt.name}
                            placeholder={`Input assignment name`}
                            onChange={hdlr_asg.change}/>
                    </div>
                    <div className="_c5x312 _c5m312">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            placeholder="Input description"
                            value={dt.description}
                            onChange={hdlr_asg.change}></textarea>
                    </div>
                    <div className="_c5x312 _c5m36">
                        <label htmlFor="course_name">Due Date</label>
                        <input
                            value={dt.due_date}
                            name="due_date"
                            type="datetime-local"
                            onChange={hdlr_asg.change}/>
                    </div>
                    <div className="_c5x312 _c5m36">
                        <label htmlFor="description">Assignment for</label>
                        <select
                            value={dt.grade_parameter_id}
                            name="grade_parameter_id"
                            onChange={hdlr_asg.change}>
                            <option value={''}>Select</option>
                            {dt.list_gp.length !== 0
                                ? dt
                                    .list_gp
                                    .map((data) => (
                                        <option key={data.id} value={data.id}>{data.name}</option>
                                    ))
                                : <option value={''}>Loading ...</option>
}
                        </select>
                    </div>
                    <div className="_c5x312 _c5m36">
                        <label htmlFor="status">Status</label>
                        <select name="status" value={dt.status} onChange={hdlr_asg.change}>
                            <option value={''}>Select status</option>
                            <option value={1}>Student must upload</option>
                            <option value={0}>Student must NOT upload</option>
                        </select>
                    </div>
                    <div
                        className="_c5x312 _c5m36"
                        style={{
                        display: parseInt(dt.status, 10) === 1
                            ? "block"
                            : "none"
                    }}>
                        <label htmlFor="name">Max size allowed</label>
                        <input
                            name="max_size"
                            value={dt.max_size}
                            type="text"
                            placeholder="Max size upload file (*MB)"
                            onChange={hdlr_asg.change}/>
                    </div>
                    <div
                        className="_c5x312 _c5m36"
                        style={{
                        display: parseInt(dt.status, 10) === 1
                            ? "block"
                            : "none"
                    }}>
                        <label htmlFor="status">Select allowed type for students</label>
                        <div className="_dr">
                            <ul className="_cbx" onClick={hdlr_asg.dropdown}>
                                <li>Types
                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </li>
                            </ul>
                            <ul
                                className="_cbx3c"
                                style={{
                                display: dt.dropdown
                                    ? "block"
                                    : "none"
                            }}>
                                {dt.list_typ.length !== 0
                                    ? dt
                                        .list_typ
                                        .map((data, i) => (
                                            <li key={i}>
                                                <input id={data} value={data} type="checkbox" onChange={hdlr_asg.toggleCheck}/> {data}
                                            </li>
                                        ))
                                    : null
}
                            </ul>
                        </div>
                    </div >
                    <div
                        className="_c5x312 _c5m36"
                        style={{
                        display: parseInt(dt.status, 10) === 1
                            ? "block"
                            : "none"
                    }}>
                        <label htmlFor="name">Max file allowed</label>
                        <input
                            name="max_file"
                            type="text"
                            value={dt.max_file}
                            placeholder="Maximal user to upload file"
                            onChange={hdlr_asg.change}/>
                    </div>
                    <div className="_c5x312 _c5m312">
                        <div className="_upl">
                            {dt.uploading
                                ? <div align="center"><LoadingAnim color_left="#333" color_right="#333"/>
                                        <p className="_me3c">Uploading your file ...
                                        </p>
                                    </div>
                                : <div className="_upl3up">
                                    <input type="file" name="file" id="upload" onChange={hdlr_asg.upload}/>
                                    <p>
                                        <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                                    </p>
                                    <p>Upload your file</p>
                                </div>}

                            {dt.uploaded_files.length !== 0
                                ? <div className="_sbmtd3c">
                                        {dt
                                            .uploaded_files
                                            .map((data, i) => (
                                                <ul key={i}>
                                                    <li>
                                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        {data.name}
                                                    </li>
                                                    <li>{data
                                                            .name
                                                            .split('.')[1]}</li>
                                                    <li>
                                                        <i className="fa fa-check" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            className="fa fa-times-circle"
                                                            aria-hidden="true"
                                                            onClick={() => {
                                                            hdlr_asg.deleteFile(data.id)
                                                        }}></i>
                                                    </li>
                                                </ul>
                                            ))
}
                                    </div>
                                : null
}
                        </div>
                    </div>
                    <div className="_c5m3o8 _c5x3o6 _c5x33 _c5m32 _pd3r">
                        <button type="button" onClick={()=>{
                            history.push(`/admin/course/${dt.schedule_id}`)
                        }} className="_bt5m">Back</button>
                    </div>
                    <div className="_c5x33 _c5m32 _pd3l">
                        <button type="button" className="_bt5m3b" onClick={hdlr_asg.updateAssignment}>Update</button>
                    </div>
                </div>
            </div>
        : <table className="_se3msg">
            <tbody>
                <tr>
                    <td>
                        <LoadingAnim color_left="#333" color_right="#333"/>
                    </td>
                </tr>
            </tbody>
        </table>)
}

const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message, modules_access: state.modules_access}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
        dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminAssignmentUpdate)