import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {actorRequest} from '../../action/action'
import {NavbarAdmin, Newsbar, LayoutUser} from '../index.js'
import {base_url} from '../../env/Environment'

class DetInformation extends Component {
    constructor() {

        super()
        this.state = {
            title: '',
            description: {},
            scheduleID: {},
            createAt:''
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id

        fetch(base_url + '/api/v1/information/' + id, {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                this.setState({
                    ID: data.ID,
                    Title: data.Title,
                    Description: data.Description,
                    String: data.String,
                    ScheduleID: data.ScheduleID,
                    Int64: data.Int64
                })
            }
        })

    }
    render() {
        /*let data = {
            ID: this.state.ID,
            Title: this.state.Title,
            Description: this.state.Description,
            String: this.state.String,
            ScheduleID: this.state.ScheduleID,
            Int64: this.state.Int64
        }*/
        const {is_logged_in} = this.props
        return (is_logged_in
            ? <LayoutUser>
                    <NavbarAdmin/>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_pd5m3n _c5m312 _c5x312">
                                <h1 className="_he3b">Information</h1>
                            </div>
                        </div>
                        <div className="_cn">
                            <div className="_ro">
                                <div className="_c5m312 _pd5m3n _ta">
                                    <ul className="_ta5l">
                                        <li>
                                            <a className="" id="btn_attend">Information</a>
                                        </li>
                                        <li>
                                            <a className="_ta5l3a" id="btn_assign">{this.Title}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="_ro">
                                <div className="_c5m33 _pd5m3n">
                                    <div className="_se _se3a">
                                        <div className="_ro">
                                            <div className="_c5x312 _c5m312">
                                                <center>
                                                    <img className="_i3tb3b" src={this.Avatar} alt={this.Author}/></center>
                                            </div>
                                            <div className="_c5x312 _c5m312">
                                                <h6 className="_he3x3cbk _ma3l3t">{this.Author}</h6>
                                                <p className="_he3x3c _ma3n3t">{this.ScheduleID}</p>
                                            </div>
                                        </div>
                                        <div className="_ro _pd3n3b">
                                            <button className="_bt5m3m _ma3n3b" type="submit">ALL POST</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="_c5m35">
                                    <div className="_se _se3a3n3lr">
                                        <div className="_ro">
                                            <div className="_c5x312">
                                                <h3 className="_he3cbk">{this.Title}</h3>
                                                <p className="_ct3xs _al3tc">{this.Date}</p>
                                            </div>
                                            <div className="_c5x312 _pd3l3t">
                                                <p className="_ct3ms">{this.Description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Newsbar/>
                            </div>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>);
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

export default connect(mapStatetoProps, mapDispatchtoProps)(DetInformation)