import React from 'react';
//import {Link, Redirect} from 'react-router-dom'
//import {connect} from 'react-redux'

//import {actorRequest} from '../../action/action'
import {NavbarAdmin, LayoutUser} from '../index.js'

//import {base_url} from '../../env/Environment'

class AdminManageSubmission extends React.Component {
    render() {
        return (
            <LayoutUser>
                <NavbarAdmin/>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_pd5m3n _c5m312 _c5x312">
                            <h1 className="_he3b">Lorem Ipsum</h1>
                        </div>
                    </div>
                </div>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_c5m312 _pd5m3n _ta">
                            <ul className="_ta5l">
                                <li>
                                    <a className="" id="">My Courses</a>
                                </li>
                                <li>
                                    <a className="" id="">Manage Courses</a>
                                </li>
                                <li>
                                    <a className="" id="">Lorem Ipsum</a>
                                </li>
                                <li>
                                    <a className="" id="">Assignment</a>
                                </li>
                                <li>
                                    <a className="_ta5l3a" id="">Lorem Ipsum</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="_ro">

                        <div className="_c5x312 _c5m35 _pd5m3n">
                            <div className="_se _se3a _ma3n3r">
                                <div className="_ro _pd3n3b">
                                    <div className="_c5m312 _c5x312">
                                        <h1 className="_he3m3b _pd3l3t _pd3l3l">Check Submission</h1>
                                        <form className="_cn" action="/" method="POST">
                                            <div className="_ro _pd3n3b">
                                                <div className="_c5m312 _c5x312">
                                                    <input type="text" name="subject" placeholder="Subject"/>
                                                    <input type="text" name="dueDate" placeholder="Due Date"/>
                                                    <textarea type="text" name="desc" placeholder="Description"></textarea>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="_c5x312 _c5m37">
                            <div className="_se _se3a _ma3n3l">
                                <div className="_ro _pd3n3b _ma3l3lr">
                                    <table className="_tb3g353l">
                                        <tr>
                                            <th>No.</th>
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th>Grade</th>
                                            <th>Attachment</th>
                                        </tr>
                                    </table>
                                    <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                                        <table className="_tb3g353l">
                                            <tr>
                                                <td>1</td>
                                                <td>140810******</td>
                                                <td>Lorem Ipsum</td>
                                                <td>
                                                    <div>
                                                        <input type="text" name="grade" placeholder="Grade"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button className="_bt5m3b" type="">Download</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>140810******</td>
                                                <td>Lorem Ipsum</td>
                                                <td>
                                                    <div>
                                                        <input type="text" name="grade" placeholder="Grade"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button className="_bt5m3b" type="">Download</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>140810******</td>
                                                <td>Lorem Ipsum</td>
                                                <td>
                                                    <div>
                                                        <input type="text" name="grade" placeholder="Grade"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button className="_bt5m3b" type="">Download</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>140810******</td>
                                                <td>Lorem Ipsum</td>
                                                <td>
                                                    <div>
                                                        <input type="text" name="grade" placeholder="Grade"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button className="_bt5m3b" type="">Download</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>140810******</td>
                                                <td>Lorem Ipsum</td>
                                                <td>
                                                    <div>
                                                        <input type="text" name="grade" placeholder="Grade"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button className="_bt5m3b" type="">Download</button>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_c5x312 _c5m312 _pd5m3n _pd3n3lr">
                            <div>
                                <div className="_ro _pd3n3b _pd3n3lr">
                                    <div className="_c5m312 _c5x312">
                                        <div className="_ro _c5m34 _pl5r">
                                            <div className="_c5m34 _c5x34 _pd3n3lr">
                                                <button className="_bt5m" type="">Cencel</button>
                                            </div>
                                            <div className="_c5m38 _c5x38">
                                                <button className="_bt5m3b" type="submit">Save</button>
                                            </div>
                                        </div>
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

export default AdminManageSubmission