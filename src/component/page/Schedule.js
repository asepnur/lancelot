import React, {Component} from 'react'
import axios from 'axios'

import {Navbar, Newsbar, LayoutUser} from '../index.js'

class Schedule extends Component {

    constructor() {
        super()
        this.state = {
            schedules: []
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
                this.setState({schedules: res.data.data})
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
                                                            At
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
                                                    <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                                </td>
                                            </tr>

                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <Newsbar/>
                    </div>
                </div>

            </LayoutUser>
        )
    }
}

export default Schedule