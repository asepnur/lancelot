import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'
import {base_url} from '../../env/Environment'

class DetInformation extends Component {
    constructor() {

        super()
        this.state = {
            info: [
                {
                    avatar: '',
                    title: '',
                    author: '',
                    job: '',
                    date: '',
                    description: ''
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
                this.setState({info: data.data.info})
            }
        })

    }
    render() {
        const {is_logged_in} = this.props
        const info = this.state.info
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match}/>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_pd5m3n _c5m312 _c5x312">
                                <h1 className="_he3b">Information</h1>
                            </div>
                        </div>
                        <DetInfo data={info}/>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>);
    }
}

const DetInfo = (props) => {
    return (
        <div>
            <div className="_ro">
                <div className="_c5x312">
                    <h1 className="_he3x3bk _pd3m3b">Last News</h1>
                </div>
            </div>
            {props
                .data
                .map((data, i) => (

                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5m312 _pd5m3n _ta">
                                <ul className="_ta5l">
                                    <li>
                                        <a className="" id="btn_attend">Information</a>
                                    </li>
                                    <li>
                                        <a className="_ta5l3a" id="btn_assign">{data.title}</a>
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
                                                <img className="_i3tb3b" src={data.avatar} alt={data.author}/></center>
                                        </div>
                                        <div className="_c5x312 _c5m312">
                                            <h6 className="_he3x3cbk _ma3l3t">{data.author}</h6>
                                            <p className="_he3x3c _ma3n3t">{data.job}</p>
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
                                            <h3 className="_he3cbk">{data.title}</h3>
                                            <p className="_ct3xs _al3tc">{data.date}</p>
                                        </div>
                                        <div className="_c5x312 _pd3l3t">
                                            <p className="_ct3ms">{data.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(DetInformation)
//export default Information