import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {NavbarAdmin, LayoutUser} from '../index.js'

class AdminCrtCourse extends Component {
    constructor() {
        super()

        this.state = {
            subject: '',
            date: '',
            class: '',
            desc: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <LayoutUser>
                <NavbarAdmin/>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_pd5m3n _c5m312 _c5x312">
                            <h1 className="_he3b">Create User</h1>
                        </div>
                    </div>
                </div>
                <div className="_cn">
                    <div className="_ro _c5m312 _c5x132 _pd3n3r ">
                        <div className="_c5x312 _c5m312 _pd3n3lr">
                            <div className="_se _se3a">
                                <div className="_ro _pd3n3b">
                                <div className="_c5m36 _c5x312">
                                    <div className="_c5m35 _c5x35 _el3 _pd3m3t">
                                        <Link to="#" className="_he3b _pl3l ">Attandance</Link>
                                    </div>
                                    <div className="_c5m36 _c5x37 _el3">
                                        <button className="_bt5m3b" type="">+Create New</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="_c5x312 _c5m312 _pd3n3lr">
                            <div className="_se _se3a">
                                <div className="_ro _pd3n3b _ma3l3lr">
                                <table className="_tb3g36">
                                    <tr>
                                        <th>No.</th>
                                        <th>Subject</th>
                                        <th>Description</th>
                                        <th>Class</th>
                                        <th>n</th>
                                        <th>Action</th>
                                    </tr>
                                </table>
                                <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                                    <table className="_tb3g36">
                                        <tr>
                                            <td>1</td>
                                            <td>Lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>A</td>
                                            <td>29</td>
                                            <td>
                                            <div>
                                                <Link to="#" className="" href="">
                                                    <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                </Link>
                                                <Link to="#" className="" href="">
                                                    <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                </Link>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>A</td>
                                            <td>29</td>
                                            <td>
                                            <div>
                                                <Link to="#" className="" href="">
                                                    <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                </Link>
                                                <Link to="#" className="" href="">
                                                    <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                </Link>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>A</td>
                                            <td>29</td>
                                            <td>
                                            <div>
                                                <Link to="#" className="" href="">
                                                    <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                </Link>
                                                <Link to="#" className="" href="">
                                                    <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                </Link>

                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>A</td>
                                            <td>29</td>
                                            <td>
                                            <div>
                                                <Link to="#" className="" href="">
                                                    <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                </Link>
                                                <Link to="#" className="" href="">
                                                    <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                </Link>
                                            </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </LayoutUser>
        )
    }
}

export default AdminCrtCourse