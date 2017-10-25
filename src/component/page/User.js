import React, {Component} from 'react'

import {Navbar, Newsbar, LayoutUser, InputContent} from '../index.js'

class User extends Component {
    constructor() {
        super()

        this.state = {
            id: '',
            name: '',
            email: '',
            gender: '',
            phone: '',
            line_id: '',
            about_me: ''
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
                <Navbar/>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_pd5m3n _c5m312 _c5x312">
                            <h1 className="_he3b">Account Setting</h1>
                        </div>
                    </div>
                </div>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                            <div className="_ta">
                                <ul className="_ta5l">
                                    <li>
                                        <a className="_ta5l3a" href="">Basic</a>
                                    </li>
                                    <li>
                                        <a href="">Advance</a>
                                    </li>
                                </ul>
                                {/* <div className="_ta5c _dn">
                                    <div className="_se _se3a">
                                        <div className="_ro">
                                            <div className="_c5x312 _c5m312 ">
                                                <h1 className="_he3m3b">Profil</h1>
                                            </div>
                                        </div>
                                        <div className="_ro">
                                            <div className="_c5x33 _c5m31">
                                                <img className="_i3pr _i3ci" src="/img/icon/blue/logo copy 4.png" alt="profil"/>
                                                <i className="fa fa-camera _icx" aria-hidden="true"></i>
                                            </div>
                                            <div className="_c5x34 _c5m32 ">
                                                <button className="_bt">change</button>
                                            </div>
                                        </div>
                                        <div className="_ro">
                                            <div>
                                                <InputContent
                                                    classWraper="_c5x36 _c5m36"
                                                    type="text"
                                                    name="fname"
                                                    placeholder="First Name"
                                                    onChangeState={this.onChangeState}/>
                                            </div>
                                            <div>
                                                <InputContent
                                                    classWraper="_c5x36 _c5m36"
                                                    type="text"
                                                    name="lname"
                                                    placeholder="Last Name"
                                                    onChangeState={this.onChangeState}/>
                                            </div>
                                        </div>
                                        <div className="_ro">
                                            <div>
                                                <InputContent
                                                    classWraper="_c5x36 _c5m36"
                                                    type="text"
                                                    name="lorem"
                                                    placeholder="Lorem Ipsum"
                                                    onChangeState={this.onChangeState}/>
                                            </div>
                                        </div>
                                        <div className="_ro">
                                            <div>
                                                <InputContent
                                                    classWraper="_c5x312 _c5m312"
                                                    type="text"
                                                    name="lorem"
                                                    placeholder="Lorem Ipsum"
                                                    onChangeState={this.onChangeState}/>
                                            </div>
                                        </div>
                                        <div className="_ro">
                                            <div className="_c5x312 _c5m312 ">
                                                <textarea name="about" id="" placeholder="Lorem ipsum"></textarea>
                                            </div>
                                        </div>
                                        <div className="_ro">
                                            <div className="_c5x3o6 _c5m33 _c5x33 _pd3r">
                                                <button className="_bt5m">Cancel</button>
                                            </div>
                                            <div className="_c5m33 _c5x33 _pd3l">
                                                <button className="_bt5m3b">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="_ta5c">
                                    <div className="_se _se3a">
                                        <div className="_ro">
                                            <div className="_c5x312 _c5m312 ">
                                                <h1 className="_he3m3b">Basic</h1>
                                            </div>
                                            <InputContent
                                                classWraper="_c5x312 _c5m312"
                                                type="text"
                                                name="id"
                                                placeholder="NPM"
                                                value={this.state.id}
                                                disabled="true"/>
                                            <InputContent
                                                classWraper="_c5x312 _c5m312"
                                                type="text"
                                                name="email"
                                                placeholder="E-Mail"
                                                value={this.state.email}
                                                disabled="true"/>
                                            <InputContent
                                                classWraper="_c5x312 _c5m312"
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                onChangeState={this.handleChange}
                                                value={this.state.name}/>

                                            <div className="_c5x312 _c5m312">
                                                <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>

                                            <InputContent
                                                classWraper="_c5x312 _c5m312"
                                                type="text"
                                                name="phone"
                                                placeholder="Phone Number"
                                                onChangeState={this.handleChange}
                                                value={this.state.phone}/>
                                            <InputContent
                                                classWraper="_c5x312 _c5m312"
                                                type="text"
                                                name="line_id"
                                                placeholder="Line ID"
                                                onChangeState={this.handleChange}
                                                value={this.state.line_id}/>
                                        </div>
                                        <div className="_ro">
                                            <div className="_c5x3o6 _c5m33 _c5x33 _pd3r ">
                                                <button type="button" className="_bt5m">Cancel</button>
                                            </div>
                                            <div className="_c5m33 _c5x33 _pd3l">
                                                <button type="submit" className="_bt5m3b">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Newsbar/>
                    </div>
                </div>
            </LayoutUser>
        )
    }
}

/*class Advance extends Component {
    constructor() {
        super()

        this.state = {
            id: '',
            email: '',
            old_password: '',
            password: '',
            password_confirmation: '',
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
                <Navbar/>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_pd3cl _c5m312 _c5x312">
                            <h1 className="_he3m3b _ma3xl3t">Account Setting</h1>
                        </div>
                    </div>
                </div>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                            <div className="_ta">
                                <ul className="_ta5l">
                                    <li>
                                        <a className="_ta5l3a" href="">Basic</a>
                                    </li>
                                    <li>
                                        <a href="">Advance</a>
                                    </li>
                                </ul>
                                <div className="_ta5c">
                                    <div className="_se _se3a">
                                        <div className="_ro">
                                            <div className="_c5x312 _c5m312 ">
                                                <h1 className="_he3m3b">Basic</h1>
                                            </div>
                                            <InputContent
                                                classWraper="_c5x312 _c5m312"
                                                type="password"
                                                name="old_password"
                                                placeholder="Old password"
                                                onChangeState={this.handleChange}
                                                value={this.state.old_password}/>
                                            <InputContent
                                                classWraper="_c5x312 _c5m312"
                                                type="password"
                                                name="password"
                                                placeholder="New password"
                                                onChangeState={this.handleChange}
                                                value={this.state.password}/>
                                            <InputContent
                                                classWraper="_c5x312 _c5m312"
                                                type="text"
                                                name="password_confirmation"
                                                placeholder="Repeat password"
                                                onChangeState={this.handleChange}
                                                value={this.state.password_confirmation}/>

                                            <div className="_c5x3o6 _c5m33 _c5x33 _pd3r ">
                                                <button type="button" className="_bt5m">Cancel</button>
                                            </div>
                                            <div className="_c5m33 _c5x33 _pd3l">
                                                <button type="submit" className="_bt5m3b">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Newsbar/>
                    </div>
                </div>
            </LayoutUser>
        )
    }
}*/

export default User