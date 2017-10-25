import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {NavbarAdmin, LayoutUser, InputContent} from '../index.js'

class AdminCrtAssign extends Component {
    constructor() {
        super()

        this.state = {
            subject:'',
            description:'',
            dueDate:'',
            attachment:''
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
                        <li><Link to={'/'}>My Courses</Link></li>
                        <li><Link to={'/'}>Manage Courses</Link></li>
                        <li><Link to={'/'}>Lorem Ipsum</Link></li>
                        <li><Link className="_ta5l3a" to={'/'}> Create Assignment</Link></li>
                    </ul>
                </div>
            </div>
            <div className="_ro">

                <div className="_c5x312 _c5m312 _pd5m3n">
                    <div className="_se _se3a">
                        <div className="_ro _pd3n3b">
                            <div className="_c5m312 _c5x312">
                                <form className="_cn" action="/" method="POST">
                                    <div className="_ro _pd3l3t">
                                        <InputContent
                                            classWraper="_c5m312 _c5x312 _pd3l3t"
                                            type="text"
                                            name="subject"
                                            placeholder="Subject*"
                                            value={this.state.subject}
                                            disabled="false"/>
                                        <div className="_c5m312 _c5x312">
                                            <textarea type="text" name="description" placeholder="Description"></textarea>
                                        </div>
                                        <InputContent
                                            classWraper="_c5m39 _c5x37"
                                            type="text"
                                            name="dueDate"
                                            placeholder="Due Date"
                                            value={this.state.dueDate}
                                            disabled="false"/>
                                        <InputContent
                                            classWraper="_c5m39 _c5x37"
                                            type="text"
                                            name="attachment"
                                            placeholder="Attactment"
                                            value={this.state.attachment}
                                            disabled="false"/>
                                        <div className="_c5m33 _c5x35">
                                            <button className="_bt5m" type="submit">Upload</button>
                                        </div>
                                    </div>
                                </form>
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

export default AdminCrtAssign