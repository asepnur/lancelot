import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {NavbarAdmin, LayoutUser} from '../index.js'

class AdminCourse extends Component {
    constructor() {
        super()

        this.state = {
            status: ''
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
                <div className="_ro">
                    <div className="_c5m312 _pd5m3n _ta">
                        <ul className="_ta5l">
                            <li><a className="" id="">My Courses</a></li>
                            <li><a className="" id="">Manage Courses</a></li>
                            <li><a className="_ta5l3a" id="">Lorem Ipsum</a></li>
                        </ul>
                    </div>
                </div>
                <div className="_ro _c5m33 _c5x33 _pd5m3n _pd3n3r">
                    <div className="_c5x312 _c5m312 _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b _ma3l3lr">
                                <div className="_c5x312 _c5m312 _pd3n3lr _ta">
                                    <ul className="_ta5lh">
                                        <li><a className="_ta5l3a __btnmenu1">Basic Information</a></li>
                                        <li><a className="__btnmenu2">Assistant</a></li>
                                        <li><a className="__btnmenu3">Tutorial File</a></li>
                                        <li><a className="__btnmenu4">Attandance</a></li>
                                        <li><a className="__btnmenu5">Assignment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div className="_ro _c5m39 _c5x39 __menu1">
                    <div className="_c5x312 _c5m312 _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b _ma3l3lr">
                                <div className="_c5x312 _c5m312 _pd3l3t ">
                                    <form className="_cn" action="/" method="POST">
                                        <p className="_he3b">Basic Information</p>
                                        <input type="text" name="courseName" placeholder="Course Name"></input>
                                        <select>
                                            <option value="lorem1">Lorem1</option>
                                            <option value="lorem2">lorem2</option>
                                            <option value="lorem3">Lorem3</option>
                                            <option value="lorem4">lorem4</option>
                                        </select>
                                        <textarea type="text" name="courseName" placeholder="Description"></textarea>
                                        <select>
                                            <option value="lorem1">Lorem1</option>
                                            <option value="lorem2">lorem2</option>
                                            <option value="lorem3">Lorem3</option>
                                            <option value="lorem4">lorem4</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="_c5x312 _c5m312 _pd5m3n _pd3n3lr">
                        <div>
                            <div className="_ro _pd3n3b _pd3n3lr">
                                <div className="_c5m312 _c5x312 _pd3n3lr">
                                    <div className="_ro _c5m35 _pl5r _pd3n3lr">
                                        <div className="_c5m34 _c5x34 _pd3n3lr">
                                            <button className="_bt5m" type="">Cencel</button>
                                        </div>
                                        <div className="_c5m38 _c5x38">
                                            <button className="_bt5m3b" type="submit">Save Course</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_ro _c5m39 _c5x39 __menu2 _dn">
                    <div className="_c5x312 _c5m312 _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b">
                                <div className="_c5m36 _c5x312">
                                    <div className="_c5m35 _c5x35 _el3 _pd3m3t">
                                        <a className="_he3b _pl3l ">Assistants</a>
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
                                <table className="_tb3g">
                                    <tr>
                                        <th>Assistant Name</th>
                                        <th>No. Hp</th>
                                        <th>Action</th>
                                    </tr>
                                </table>
                                <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                                    <table className="_tb3g">
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>0858 **** ****</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>0858 **** ****</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>0858 **** ****</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>0858 **** ****</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>0858 **** ****</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>0858 **** ****</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>0858 **** ****</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_ro _c5m39 _c5x39 __menu3 _dn">
                    <div className="_c5x312 _c5m312 _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b">
                                <div className="_c5m36 _c5x312">
                                    <div className="_c5m35 _c5x35 _el3 _pd3m3t">
                                        <a className="_he3b _pl3l ">Tutorial File</a>
                                    </div>
                                    <div className="_c5m36 _c5x37 _el3">
                                        <button className="_bt5m3b" type="">Upload File</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="_c5x312 _c5m312 _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b _ma3l3lr">
                                <table className="_tb3g34">
                                    <tr>
                                        <th>File</th>
                                        <th>Description</th>
                                        <th>Created At</th>
                                        <th>Action</th>
                                    </tr>
                                </table>
                                <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                                    <table className="_tb3g34">
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Lorem Ipsum Dolor Set Amet</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_ro _c5m39 _c5x39 __menu4 _dn">
                    <div className="_c5x312 _c5m312 _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b">
                                <div className="_c5m36 _c5x312">
                                    <div className="_c5m35 _c5x35 _el3 _pd3m3t">
                                        <a className="_he3b _pl3l ">Attandance</a>
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
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
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
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
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
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
    
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
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_ro _c5m39 _c5x39 __menu5 _dn">
                    <div className="_c5x312 _c5m312 _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b">
                                <div className="_c5m36 _c5x312">
                                    <div className="_c5m35 _c5x35 _el3 _pd3m3t">
                                        <a className="_he3b _pl3l ">Assignment</a>
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
                                <table className="_tb3g34">
                                    <tr>
                                        <th>Subject</th>
                                        <th>Due Date</th>
                                        <th>Created At</th>
                                        <th>Action</th>
                                    </tr>
                                </table>
                                <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                                    <table className="_tb3g34">
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lorem Ipsum</td>
                                            <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                            <td>11 September 2017 00:12:23</td>
                                            <td>
                                                <div>
                                                    <a className="" href=""><i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i></a>
                                                    <a className="" href=""><i className="fa fa-times _ic3xs" aria-hidden="true"></i></a>
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

export default AdminCourse