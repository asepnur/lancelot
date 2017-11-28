import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser, InputContent} from '../index.js'


class AssignmentDetail extends Component {
    constructor(){
        super()
        this.state = {
            assignment:{},
            file:{},
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id

        fetch('/api/v1/assignment/' + id, {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            return data.code === 200
                ? this.setState({assignment: data.data.Assignment})
                : null
        })
    }
    handleClickUpload = ()=>{
        let modal = document.getElementById('_md')
        let dom = ReactDOM.findDOMNode
        dom(modal).style.display = 'block'
    }
    handleSubmit = (dispatcherRequest) => {
        let formData = new FormData()
        formData.append('id', this.state.id)
        formData.append('email', this.state.email)

        fetch('/api/v1/user/profile', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            data.code === 200
                ? dispatcherRequest(true, 200, '')
                : dispatcherRequest(true, 401, data.error)
        })
    }
    render() {
        const {is_logged_in} = this.props
        const data = this.state.assignment
        console.log(data.ID)
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match}/> 
                    
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_pd5m3n _c5m312 _c5x312">
                                <h1 className="_he3b">My Activity</h1>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                                <div className="_ta">
                                    <div className="_ta5c">
                                        <div className="_se _se3a">
                                            <div className="_ro _pd3l3t">
                                                <div className="_c5x312 _c5m312">
                                                    <h1 className="_he3m3bk"></h1>
                                                    <p className="_ct _pd3l3t">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Etiam non sagittis tortor. Mauris mattis sem vitae tellus fringilla lacinia.
                                                        Etiam suscipit leo ac ligula pretium, nec aliquet purus dapibus. Ut consectetur
                                                        libero metus, sit amet interdum justo egestas in. Suspendisse velit leo,
                                                        venenatis at elementum eu, venenatis non mi. Aliquam dignissim dignissim erat,
                                                        at tincidunt nisi commodo nec. Pellentesque nec elit interdum, accumsan ligula
                                                        nec, vehicula ex. Nam et ultricies sus, quis varius elit.</p>
                                                </div>
                                            </div>
                                            <div className="_ro _pd3l3t">
                                                <div className="_c5m312 _c5x312">
                                                    <table className="_tb">
                                                        <thead>
                                                            <tr>
                                                                <th>Status</th>
                                                                <th>Grade</th>
                                                                <th>Time</th>
                                                                <th>File</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>No Attempt</td>
                                                                <td>No Grade</td>
                                                                <td>4 Hours</td>
                                                                <td>No Attempt</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="_ro _pd3l3t">
                                                <div className="_c5x35 _c5x3o7 _c5m33 _c5m3o9">
                                                    <button className="_bt5m3b" onClick={this.handleClickUpload}>Add submition</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Newsbar/>
                        </div>
                    </div>
                    <div className="_md" id="_md">
                    <div className="__x"></div>
                    <div className="_ro">
                        <div className="_c5x312 _c5m36 _c5m3o3">
                            <div className="_cn _md5cu">
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <h1 className="_he3nb">Lorem Ipsum</h1>
                                        <p className="_me3c">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        </p>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <div className="_md5i">
                                            <input type="file" name="file"/>
                                            <img className="_i3ce" src="/img/icon/blue/upload.png" alt="upload logo"/>
                                            <p className="_me3c">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <label className="_me3b _bd" htmlFor="Subjet">Subject</label>
                                        <InputContent
                                            type="text"
                                            name="subject"
                                            placeholder="Lorem Ipsum"
                                            onChangeState={this.onChangeState}/>
                                        <InputContent
                                            type="text"
                                            name="description"
                                            placeholder="Description"
                                            onChangeState={this.onChangeState}/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <input className="_bt5m3b" type="button" name="submit" value="SUBMIT"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>)
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

export default connect(mapStatetoProps, mapDispatchtoProps)(AssignmentDetail)