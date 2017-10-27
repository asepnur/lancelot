import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {NavbarAdmin, LayoutUser, InputContent} from '../index.js'

class AdminCrtInfo extends Component {
    constructor() {
        super()

        this.state = {
            subject: '',
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
                                    <Link to={'/'}>
                                        <i className="" id="btn_attend">Information</i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/'}>
                                        <i className="_ta5l3a" id="btn_attend">Create Information</i>
                                    </Link>
                                </li>
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
                                                <div className="_c5m312 _c5x312">
                                                    <InputContent
                                                        classWraper="_c5m312 _c5x312"
                                                        type="text"
                                                        name="subject"
                                                        placeholder="Sibject*"
                                                        value={this.state.subject}
                                                        disabled="false"/>
                                                </div>
                                                <div className="_c5m312 _c5x312">
                                                    <textarea
                                                        className="_txa3l"
                                                        type="text"
                                                        name="description"
                                                        placeholder="Description"></textarea>
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

export default AdminCrtInfo