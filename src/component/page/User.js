/*----------------------------------------------------------------
                            USER PAGE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {Navbar, Newsbar, LayoutUser, InputContent, LoadingAnim} from '../index.js'
import {actorRequest, loadingRequest} from '../../action/action'
const State = {
    about_me: "",
    email: "",
    gender: "",
    id: 0,
    img: "",
    img_t: "",
    line_id: "",
    name: "",
    phone: "",
    profil: true,
    basic: false,
    password: "",
    old_password: "",
    password_confirmation: "",
    file: "",
    change_image: false,
    is_loaded: false
}

class User extends Component {
    constructor() {
        super()
        this.state = {
            ...State
        }
    }
    /*------------------------------------------------------------
                            LIFE CYCLE
------------------------------------------------------------------*/
    componentDidMount() {
        this.handleInitTab()
    }
    /*------------------------------------------------------------
                        HANDLE FUNCTION
------------------------------------------------------------------*/
    handleActiveTab = (e) => {
        const tagID = e.currentTarget.id
        const id = ["tab_basic", "tab_profil"]
        id.forEach((val) => {
            let dom = document.getElementById(val)
            val === tagID
                ? ReactDOM
                    .findDOMNode(dom)
                    .className = "_active"
                : ReactDOM
                    .findDOMNode(dom)
                    .className = ""
        }, this)
        switch (tagID) {
            case "tab_basic":
                this.setState({profil: false, basic: true});
                break
            case "tab_profil":
                this.setState({profil: true, basic: false});
                break;

            default:
                break;
        }
    }
    handleGetProfil = (e) => {
        axios.get(`/api/v1/user/profile`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({
                    about_me: res.data.data.about_me,
                    email: res.data.data.email,
                    gender: res.data.data.gender,
                    id: res.data.data.id,
                    img: res.data.data.img,
                    img_t: res.data.data.img_t,
                    line_id: res.data.data.line_id,
                    name: res.data.data.name,
                    phone: res.data.data.phone,
                    is_loaded: true
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleInitTab = (e) => {
        let dom = document.getElementById("tab_profil")
        ReactDOM
            .findDOMNode(dom)
            .className = "_active"
        this.handleGetProfil()
    }
    handleChangePassword = (e) => {
        e.preventDefault()
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)
        if (this.state.old_password === "") {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Old password can not be empty')
            return
        }
        if (this.state.password === "" || this.state.old_password === "") {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Password or confirmation password can not be empty')
            return
        }
        if (this.state.password !== this.state.password_confirmation) {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Password and confirmation password does not match')
            return
        }
        let formData = new FormData()
        formData.append('id', this.state.id)
        formData.append('email', this.state.email)
        formData.append('old_password', this.state.old_password)
        formData.append('password', this.state.password)
        formData.append('password_confirmation', this.state.password_confirmation)

        axios.post(`/api/v1/user/changepassword`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, 'Your password has been changed')
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleUpdate = (e) => {
        e.preventDefault()
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)

        let formData = new FormData()
        formData.append('id', this.state.id)
        formData.append('email', this.state.email)
        formData.append('name', this.state.name)
        formData.append('gender', this.state.gender)
        formData.append('phone', this.state.phone)
        formData.append('line_id', this.state.line_id)
        formData.append('about_me', this.state.about_me)

        axios.post(`/api/v1/user/profile`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, 'Profil Updated')
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChangeImg = () => {
        document
            .getElementById("upload")
            .click()
    }
    handleUploadImg = (e) => {
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)
        let formData = new FormData()
        formData.append('foo', 'bar');
        formData.append('file', document.getElementById('upload').files[0]);
        axios.post(`/api/v1/image/profile`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatcherLoading(100, false)
                this.setState({change_image: !this.state.change_image})
                dispatcherRequest(true, 200, 'Profile Updated')
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    render() {
        const data = {
            about_me: this.state.about_me,
            email: this.state.email,
            gender: this.state.gender,
            id: this.state.id,
            img: this.state.img,
            img_t: this.state.img_t,
            line_id: this.state.line_id,
            name: this.state.name,
            phone: this.state.phone,
            handleChange: this.handleChange,
            handleChangeImg: this.handleChangeImg,
            handleUploadImg: this.handleUploadImg
        }

        const {is_logged_in} = this.props
        const is_loaded = this.state.is_loaded
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"user"}/>
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro">
                                <div className="_c5m38 _c5x312 _pd5n _pd3cl _pd5m3n ">
                                    <div className="_he3b _pd3l3b">User Setting</div>
                                    <div className="_c5x312 _c5m312 _pd3n3lr _ta">
                                        <ul className="_ta5l3w">
                                            <li id="tab_profil" onClick={this.handleActiveTab}>
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                                <a className="">
                                                    &nbsp; Profile</a>
                                            </li>
                                            <li onClick={this.handleActiveTab} id="tab_basic">
                                                <i className="fa fa-wrench" aria-hidden="true"></i>
                                                <a>
                                                    &nbsp; Basic</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {
                                        !is_loaded ? (
                                            <table className="_se3msg3l">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <LoadingAnim color_left="#333" color_right="#333"/>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        ) : (
                                            <div>
                                                <Profil
                                                    data={data}
                                                    profil={this.state.profil}
                                                    handleUpdate={this.handleUpdate}
                                                    change_image={this.state.change_image}/>
                                                <Basic
                                                    old_password={this.state.old_password}
                                                    password={this.state.password}
                                                    password_confirmation={this.state.password_confirmation}
                                                    data={data}
                                                    basic={this.state.basic}
                                                    handleChangePassword={this.handleChangePassword}/>
                                            </div>
                                        )
                                    }
                                </div>
                                <Newsbar/>
                            </div>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>)
    }
}
/*----------------------------------------------------------------
                            FUNCTION ELEMENT
------------------------------------------------------------------*/
class Profil extends Component {
    render() {
        return (
            <form
                className="_se3usr"
                style={this.props.profil
                ? {
                    display: 'block'
                }
                : {
                    display: 'none'
                }}
                onSubmit={this.props.handleUpdate}>
                <div className="_ro">
                    <div className="_c5x312 _c5m312 ">
                        <h1 className="_he3m3b">Profil</h1>
                    </div>
                </div>
                <div className="_ro">
                    <div className="_c5x33 _c5m31">
                        <img className="_i3pr _i3ci" src={this.props.change_image?this.props.data.img_t:this.props.data.img} alt="profil"/>
                        <i
                            className="fa fa-camera _icx"
                            aria-hidden="true"
                            onClick={this.props.data.handleChangeImg}></i>
                        <input
                            type="file"
                            id="upload"
                            name="file"
                            onChange={this.props.data.handleUploadImg}
                            value={this.props.data.file}
                            accept='image/*'
                            style={{
                            display: "none"
                        }}/>
                    </div>
                </div>
                <div className="_ro">
                    <InputContent
                        classWraper="_c5x312 _c5m36"
                        type="text"
                        name="id"
                        placeholder="NPM"
                        value={this.props.data.id}
                        disabled="true"/>
                    <InputContent
                        classWraper="_c5x312 _c5m36"
                        type="text"
                        name="email"
                        placeholder="E-Mail"
                        value={this.props.data.email}
                        disabled="true"/>
                    <InputContent
                        classWraper="_c5x312 _c5m312"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChangeState={this.props.data.handleChange}
                        value={this.props.data.name}/>

                    <div className="_c5x312 _c5m312">
                        <select
                            name="gender"
                            value={this.props.data.gender}
                            onChange={this.props.data.handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <InputContent
                        classWraper="_c5x312 _c5m312"
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        onChangeState={this.props.data.handleChange}
                        value={this.props.data.phone}/>
                    <InputContent
                        classWraper="_c5x312 _c5m312"
                        type="text"
                        name="line_id"
                        placeholder="Line ID"
                        onChangeState={this.props.data.handleChange}
                        value={this.props.data.line_id}/>
                </div>
                <div className="_ro">
                    <div className="_c5x312 _c5m312 ">
                        <textarea
                            name="about_me"
                            onChange={this.props.data.handleChange}
                            value={this.props.data.about_me}
                            placeholder="About me"></textarea>
                    </div>
                </div>
                <div className="_ro">
                    <div className="_c5x3o8 _c5m3o10 _c5m32 _c5x34">
                        <button className="_bt5m3b">Save</button>
                    </div>
                </div>
            </form>
        )
    }
}
const Basic = (props) => {
    return (
        <form
            onSubmit={props.handleChangePassword}
            className="_se3usr"
            style={props.basic
            ? {
                display: 'block'
            }
            : {
                display: 'none'
            }}>
            <div className="_ro">
                <div className="_c5x312 _c5m312">
                    <h1 className="_he3m3b">Basic</h1>
                </div>
            </div>
            <div className="_ro">
                <InputContent
                    classWraper="_c5x312 _c5m312"
                    type="text"
                    name="email"
                    placeholder="E-Mail"
                    value={props.data.email}
                    disabled="true"/>
                <InputContent
                    classWraper="_c5x312 _c5m312"
                    type="text"
                    name="id"
                    placeholder="NPM"
                    value={props.data.id}
                    disabled="true"/>
            </div>
            <div className="_ro">
                <div className="_c5x316 _c5m36 ">
                    <label className="_ct3xb" htmlFor="password">Change password</label>
                    <input
                        type="password"
                        onChange={props.data.handleChange}
                        name="old_password"
                        value={props.old_password}
                        placeholder="Old password"/>
                </div>
            </div>
            <div className="_ro">
                <InputContent
                    classWraper="_c5x36 _c5m36 "
                    type="password"
                    name="password"
                    placeholder="New Password"
                    onChangeState={props.data.handleChange}
                    value={props.password}/>
                <InputContent
                    classWraper="_c5x36 _c5m36 "
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirmation"
                    onChangeState={props.data.handleChange}
                    value={props.password_confirmation}/>
            </div>
            <div className="_ro">
                <div className="_c5x3o8 _c5m3o10 _c5m32 _c5x34">
                    <button className="_bt5m3b">Save</button>
                </div>
            </div>
        </form>
    )
}
/*----------------------------------------------------------------
                            DISPATCHER
------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
        dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(User)
