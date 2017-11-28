import React, {Component} from 'react'
import axios from 'axios'

import {Navbar, Newsbar, LayoutUser} from '../index.js'

class Grade extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get(`/api/v1/course/grade`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            this.setState({data: res.data.data})
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        console.log(this.state.data)
        return (
            <LayoutUser>
                <Navbar match={this.props.match}/>
                <div className="_ro _ma3mn">
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5m38 _c5x312 _pd5m3n">
                                <div className="_he3b _pd3l3b">User Report</div>
                                <Content data={this.state.data}/>
                            </div>
                            <Newsbar/>
                        </div>
                    </div>
                </div>
            </LayoutUser>
        )
    }
}
const Content = (props) => {
    return props.data.length === 0
        ? <div>kosong</div>
        : <table className="_se3g">
            <thead>
                <tr>
                    <th>No</th>
                    <th>
                        <i className="fa fa-bookmark" aria-hidden="true"></i>
                        &nbsp;
                        <span>Subject</span>
                    </th>
                    <th>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        &nbsp;
                        <span>Attendance</span>
                    </th>
                    <th>
                        <i className="fa fa-file-text" aria-hidden="true"></i>
                        &nbsp;
                        <span>Assignment</span>
                    </th>
                    <th>

                        <i className="fa fa-usd" aria-hidden="true"></i>
                        &nbsp;
                        <span>QUIS</span>
                    </th>
                    <th>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        &nbsp;
                        <span>MID</span>
                    </th>
                    <th>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        &nbsp;
                        <span>FINAL</span>
                    </th>
                    <th>
                        <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        &nbsp;
                        <span>Total</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.data
                    .schedules
                    .map((data, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{data.name}</td>
                            <td>75</td>
                            <td>75</td>
                            <td>85</td>
                            <td>-</td>
                            <td>80</td>
                            <td>{data.total}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
}

export default Grade