import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {NavbarAdmin, LayoutUser, InputContent} from '../index.js'

class AdminCrtAttand extends Component {
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
                    <div className="_ro">
                        <div className="_c5m312 _pd5m3n _ta">
                            <ul className="_ta5l">
                                <li>
                                    <Link to={'/'}>My Courses</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Manage Courses</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Last Course</Link>
                                </li>
                                <li>
                                    <Link className="_ta5l3a" to={'/'}>
                                        Create Attandance</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5x312 _c5m35 _pd5m3n">
                            <div className="_se _se3a _ma3n3r">
                                <div className="_ro _pd3n3b">
                                    <div className="_c5m312 _c5x312">
                                        <h1 className="_he3m3b _pd3l3t _pd3l3l">New Attandance</h1>
                                        <form className="_cn" action="/" method="POST">
                                            <div className="_ro _pd3n3b">
                                                <InputContent
                                                    classWraper="_c5m312 _c5x312"
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject*"
                                                    value={this.state.subject}
                                                    disabled="false"/>
                                                <div className="_c5m312 _c5x312 _pd3n3lr">
                                                    <InputContent
                                                        classWraper="_c5m6 _c5x36"
                                                        type="text"
                                                        name="date"
                                                        placeholder="Date*"
                                                        value={this.state.date}
                                                        disabled="false"/>
                                                    <div className="_c5m36 _c5x36">
                                                        <select>
                                                            <option value="classA">A</option>
                                                            <option value="ClassB">B</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="_c5m312 _c5x312">
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
                                    <table className="_tb3g343l">
                                        <tr>
                                            <th>No.</th>
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th>Absent</th>
                                        </tr>
                                    </table>
                                    <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                                        <table className="_tb3g343l">
                                            <tr>
                                                <td>1</td>
                                                <td>140810140060</td>
                                                <td>Khairil Azmi Ashari</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>140810140070</td>
                                                <td>AsepNur Hidayat</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>140810140013</td>
                                                <td>Risal Falah</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>140810140073</td>
                                                <td>Juniar Arif</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>140810140074</td>
                                                <td>Muh Risno Aji</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>140810140075</td>
                                                <td>Nindya Larasati</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>140810140099</td>
                                                <td>Nanda Sasongko</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
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

export default AdminCrtAttand