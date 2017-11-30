import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

import {Navbar, Newsbar, LayoutUser, InputContent} from '../index.js'
import {actorRequest, loadingRequest} from '../../action/action'

class User extends Component {
    constructor() {
        super()

        this.state = {
            id: '',
            name: '',
            email: '',
            gender: '',
            phone: '',
            line_id: '',
            about_me: '',
            file_name:'',
            password: '',
            old_password: '',
            password_confirmation: '',
            img: '',
            img_t: ''
        }
    }
    render() {
        let data = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            line_id: this.state.line_id,
            about_me: this.state.about_me,
            file_name: this.state.file_name,
            img: this.state.img,
            img_t: this.state.img_t,
            handleChange: this.handleChange,
            handleChangePassword: this.handleChangePassword,
            handleUpdate: this.handleUpdate,
            handleUpload: this.handleUpload,
            dispatcherRequest: this.props.dispatcherRequest,
            dispatcherLoading: this.props.dispatcherLoading
        }
        const {is_logged_in} = this.props
        return (is_logged_in
            ? <div>
                    <LayoutUser>
                        <Navbar match={this.props.match} active_navbar={"user"}/>
                        <div className="_cn">
                            <div className="_ro">
                                <div className="_pd3cl _c5m312 _c5x312">
                                    <h1 className="_he3b _ma3xl3t">Account Setting</h1>
                                </div>
                            </div>
                        </div>
                        <div className="_cn">
                            <div className="_ro">
                                <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                                    <div className="_ta">
                                        <ul className="_ta5l">
                                            <li>
                                                <Link id="basic" onClick={this.handleBasic} className="_ta5l3a" to="#">Basic</Link>
                                            </li>
                                            <li>
                                                <Link id="advance" onClick={this.handleAdvance} className="" to="#">Advance</Link>
                                            </li>
                                            <div id="basic-content">
                                                <Basic data={data}/></div>
                                            <div
                                                id="advance-content"
                                                style={{
                                                display: 'none'
                                            }}>
                                                <Advance data={data}/></div>

                                        </ul>
                                    </div>
                                </div>
                                <Newsbar/>
                            </div>
                        </div>
                    </LayoutUser>
                </div>
            : <Redirect to={`/login`}/>)
    }
    componentDidMount() {
        fetch('/api/v1/user/profile', {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            return data.code === 200
                ? this.setState({
                    id: data.data.id,
                    name: data.data.name,
                    email: data.data.email,
                    phone: data.data.phone,
                    line_id: data.data.line_id,
                    about_me: data.data.about_me,
                    img: data.data.img,
                    img_t: data.data.img_t
                })
                : null
        })
    }
    handleChangePassword = (dispatcherRequest, dispatcherLoading) => {
        dispatcherLoading(10, false)

        let formData = new FormData()
        formData.append('id', this.state.id)
        formData.append('email', this.state.email)
        formData.append('old_password', this.state.old_password)
        formData.append('password', this.state.password)
        formData.append('password_confirmation', this.state.password_confirmation)

        fetch('/api/v1/user/changepassword', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, '')
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(this.props.is_logged_in, 401, data.error)
            }
        })
    }
    handleUpdate = (dispatcherRequest, dispatcherLoading) => {

        dispatcherLoading(10, false)

        let formData = new FormData()
        formData.append('id', this.state.id)
        formData.append('email', this.state.email)
        formData.append('name', this.state.name)
        formData.append('gender', this.state.gender)
        formData.append('phone', this.state.phone)
        formData.append('line_id', this.state.line_id)
        formData.append('about_me', this.state.about_me)

        fetch('/api/v1/user/profile', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, '')
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(this.props.is_logged_in, 401, data.error)
            }
        })
    }
    handleUpload = (value, dispatcherRequest, dispatcherLoading) => {
        dispatcherLoading(10, false)

        let formData = new FormData()
        formData.append('file', value)

        fetch('/api/v1/image/profile', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, '')
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(this.props.is_logged_in, 401, data.error)
            }
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleBasic = (e) => {
        let basic = document.getElementById('basic')
        let advance = document.getElementById('advance')

        let basic_content = document.getElementById('basic-content')
        let advance_content = document.getElementById('advance-content')

        let dom = ReactDOM.findDOMNode
        dom(advance).className = ""
        dom(basic).className = "_ta5l3a"
        dom(basic_content).style.display = 'block'
        dom(advance_content).style.display = 'none'
    }
    handleAdvance = (e) => {
        let advance = document.getElementById('advance')
        let basic = document.getElementById('basic')

        let basic_content = document.getElementById('basic-content')
        let advance_content = document.getElementById('advance-content')

        let dom = ReactDOM.findDOMNode

        dom(advance).className = "_ta5l3a"
        dom(basic).className = ""
        dom(basic_content).style.display = 'none'
        dom(advance_content).style.display = 'block'

    }
}
class Advance extends Component {
    render() {
        return (
            <div className="_ta5c">
                <div className="_se _se3a">
                    <div className="_ro">
                        <div className="_c5x312 _c5m312 ">
                            <h1 className="_he3m3b">Account Advance</h1>
                        </div>
                        <InputContent
                            classWraper="_c5x312 _c5m312"
                            type="text"
                            name="email"
                            placeholder="E-Mail"
                            value={this.props.data.email}
                            disabled="true"/>
                        <InputContent
                            classWraper="_c5x312 _c5m312"
                            type="text"
                            name="id"
                            placeholder="NPM"
                            value={this.props.data.id}
                            disabled="true"/>
                        <InputContent
                            classWraper="_c5x312 _c5m312"
                            type="password"
                            name="old_password"
                            placeholder="Old Password"
                            onChangeState={this.props.data.handleChange}
                            value={this.props.data.old_password}/>
                        <InputContent
                            classWraper="_c5x36 _c5m312"
                            type="password"
                            name="password"
                            placeholder="New Password"
                            onChangeState={this.props.data.handleChange}
                            value={this.props.data.password}/>
                        <InputContent
                            classWraper="_c5x36 _c5m312"
                            type="password"
                            name="password_confirmation"
                            placeholder="Password Confirmation"
                            onChangeState={this.props.data.handleChange}
                            value={this.props.data.password_confirmation}/>

                    </div>
                    <div className="_ro">
                        <div className="_c5x3o8 _c5m33 _c5x34 _pd3l">
                            <button
                                onClick={e => {
                                e.preventDefault();
                                this
                                    .props
                                    .data
                                    .handleChangePassword(this.props.data.dispatcherRequest, this.props.data.dispatcherLoading)
                            }}
                                className="_bt5m3b">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Basic extends Component {
    handleImage = () =>{
        let update_file = document.getElementById('update_file')
        update_file.click()
    }
    render() {
        return (
            <div className="_ta5c">
                <div className="_se _se3a">
                    <div className="_ro">
                        <div className="_c5x312 _c5m312 ">
                            <h1 className="_he3m3b">Account Basic</h1>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="_c5x33 _c5m31">
                            <input name="file" id="update_file" accept="image/*" type="file" style={{display: 'none'}}
                                onChange={(e)=>{ 
                                    this.props.data.handleUpload(e.target.value, this.props.data.dispatcherRequest, this.props.dispatcherLoading)
                                    }} />
                            <div className="_cn3ep" >
                                <img className="_i3pr _i3ci" src={this.props.data.img_t} alt="profil"/>
                                <i className="fa fa-camera _icx _i3ep" aria-hidden="true"></i>
                            </div>
                        </div>

                        <InputContent
                            classWraper="_c5x312 _c5m312"
                            type="text"
                            name="id"
                            placeholder="NPM"
                            value={this.props.data.id}
                            disabled="true"/>
                        <InputContent
                            classWraper="_c5x312 _c5m312"
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
                                name="about"
                                id=""
                                value={this.props.data.about_me}
                                placeholder="About me"></textarea>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5x3o8 _c5m33 _c5x34 _pd3l">
                            <button
                                onClick={e => {
                                e.preventDefault();
                                this
                                    .props
                                    .data
                                    .handleUpdate(this.props.data.dispatcherRequest, this.props.data.dispatcherLoading)
                            }}
                                className="_bt5m3b"
                                type="submit">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
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
