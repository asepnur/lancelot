import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import {Navbar, Newsbar, LayoutUser, LoadingAnim} from '../index.js'

class Schedule extends Component {

    constructor() {
        super()
        this.state = {
            schedules: [],
            is_loaded: false
        }
    }

    componentDidMount() {
        this.handleGetSchedule()
    }

    handleGetSchedule = () => {
        axios.get(`api/v1/course?payload=current`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({schedules: res.data.data, is_loaded: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <LayoutUser>
                <Navbar match={this.props.match} active_navbar={"schedule"}/>
                <div className="_cn">
                    <div className="_ro _ma3mn">
                        <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                            <div className="_he3b">Schedule</div>
                            {
                                !this.state.is_loaded ? (
                                    <table className="_se3msg">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <LoadingAnim color_left="#333" color_right="#333"/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : this.state.schedules.length === 0 ? (
                                    <table className="_se3msg">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="_head">You have nothing to do today!</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="_main">Have a nice day</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : (
                                    <table className="_se _se3s">
                                        <tbody>
                                            {this
                                                .state
                                                .schedules
                                                .map(val => (
                                                    <tr key={val.id}>
                                                        <td>
                                                            <p>{val.day}
                                                                <span>
                                                                &nbsp;<i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;
                                                                </span>
                                                                {val.time}</p>
                                                            <p>
                                                                <i className="fa fa-bookmark" aria-hidden="true"></i>
                                                                &nbsp;{val.name}</p>
                                                            <p>
                                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                                &nbsp;{val.place}</p>
                                                        </td>
                                                        <td>
                                                            <Link to={`/course/${val.id}`} >
                                                                <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                                            </Link>
                                                        </td>
                                                    </tr>
        
                                                ))}
                                        </tbody>
                                    </table>
                                )
                            }
                            
                        </div>
                        <Newsbar/>
                    </div>
                </div>

            </LayoutUser>
        )
    }
}

export default Schedule