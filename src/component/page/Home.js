import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'

import Credentials from '../../Credentials'
import {Navbar, LayoutUser, InputContent} from '../index.js'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            is_logged_in: Credentials.is_logged_in
        }
    }
    render() {
        return (Credentials.is_logged_in
            ? this.renderMain()
            : <Redirect to="/login"/>)
    }
    handleLogout = (e) => {
        e.preventDefault()
        fetch('https://meikoapp.herokuapp.com/api/v1/user/signout', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                Credentials.is_logged_in = false
                this.setState({is_logged_in: false})
            }
        })
    }
    renderMain = () => {
        return (
            <LayoutUser>
                <Navbar handleOut={this.handleLogout}/>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_pd3cl _c5m312 _c5x312">
                            <h1 className="_he3m3m _pd3l3l">WELCOME BACK LOREM IPSUM</h1>
                        </div>
                    </div>
                </div>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                            <div className="_se _se3a">
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <h1 className="_se5t">Assignment</h1>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x34">
                                        <p className="_se5ct">
                                            <i className="fa fa-circle _i3a" aria-hidden="true"></i>
                                        YESTERDAY</p>
                                    </div>
                                    <div className="_c5x36">
                                        <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                    <div className="_c5x31 _pd">
                                        <i className="fa fa-check-square-o _ic " aria-hidden="true"></i>
                                    </div>
                                    <div className="_c5x31 _pd">
                                        <i className="fa fa-pencil-square-o _ic __wr" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x34">
                                        <p className="_se5ct">
                                            <i className="fa fa-circle _ic3xs" aria-hidden="true"></i>
                                            TODAY</p>
                                    </div>
                                    <div className="_c5x36">
                                        <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                    <div className="_c5x31 _pd">
                                        <i className="fa fa-check-square-o _ic" aria-hidden="true"></i>
                                    </div>
                                    <div className="_c5x31 _pd">
                                        <i className="fa fa-pencil-square-o _ic __wr" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x34">
                                        <p className="_se5ct">
                                            <i className="fa fa-circle _ic3xs" aria-hidden="true"></i>
                                            SEPT 12</p>
                                    </div>
                                    <div className="_c5x36">
                                        <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                    <div className="_c5x31 _pd">
                                        <i className="fa fa-check-square-o _ic" aria-hidden="true"></i>
                                    </div>
                                    <div className="_c5x31 _pd">
                                        <i className="fa fa-pencil-square-o _ic __wr" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x34">
                                        <p className="_se5ct">
                                            <i className="fa fa-circle _ic3xs _i3a" aria-hidden="true"></i>
                                            SEPT 12</p>
                                    </div>
                                    <div className="_c5x36">
                                        <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                    <div className="_c5x31 _pd">
                                        <i className="fa fa-check-square-o _ic" aria-hidden="true"></i>
                                    </div>
                                    <div className="_c5x31 _pd">
                                        <i className="fa fa-pencil-square-o _ic __wr" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="_se _se3s">
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <h1 className="_se5t">Schedule</h1>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x33">
                                        <p className="_se5ct">SEPT 12</p>
                                    </div>
                                    <div className="_c5x33 _pd">
                                        <p className="_se5c">10.30-12.00
                                        </p>
                                    </div>
                                    <div className="_c5x36">
                                        <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x33">
                                        <p className="_se5ct">SEPT 12</p>
                                    </div>
                                    <div className="_c5x33 _pd">
                                        <p className="_se5c">10.30-12.00
                                        </p>
                                    </div>
                                    <div className="_c5x36">
                                        <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_c5m34 _pd3cr">
                            <div className="_se _se3n">
                                <div className="_se5m">
                                    + VIEW MORE</div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <h1 className="_se5t">News Board</h1>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312 _c5m312">
                                        <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <p className="_de3n"><img
                                            className="_i3tb"
                                            src="/img/icon/white/logo copy 4.png"
                                            alt="profil thumb"/>
                                            - September 2017</p>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312 _c5m312">
                                        <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <p className="_de3n"><img
                                            className="_i3tb"
                                            src="/img/icon/white/logo copy 4.png"
                                            alt="profil thumb"/>
                                            - September 2017</p>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312 _c5m312">
                                        <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <p className="_de3n"><img
                                            className="_i3tb"
                                            src="/img/icon/white/logo copy 4.png"
                                            alt="profil thumb"/>
                                            - September 2017</p>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312 _c5m312">
                                        <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <p className="_de3n"><img
                                            className="_i3tb"
                                            src="/img/icon/white/logo copy 4.png"
                                            alt="profil thumb"/>
                                            - September 2017</p>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_md _dn">
                    <div className="__x"></div>
                    <div className="_ro">
                        <div className="_c5x312 _c5m36 _c5m3o3">
                            <div className="_cn _md5cu">
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <h1 className="_he3nb">Lorem Ipsum</h1>
                                        <p className="_me3c">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        </p>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <div className="_md5i">
                                            <input type="file" name="file"/>
                                            <img className="_i3ce" src="/img/icon/blue/upload.png" alt="upload logo"/>
                                            <p className="_me3c">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <label className="_me3b _bd" htmlFor="Subjet">Subject</label>
                                        <InputContent
                                            type="text"
                                            name="subject"
                                            placeholder="Lorem Ipsum"
                                            onChangeState={this.onChangeState}/>
                                        <InputContent
                                            type="text"
                                            name="description"
                                            placeholder="Description"
                                            onChangeState={this.onChangeState}/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <input className="_bt5m3b" type="button" name="submit" value="SUBMIT"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_md5s _dn">
                    <div className="__x"></div>
                    <div className="_ro">
                        <div className="_c5x312 _c5m36 _c5m3o3">
                            <div className="_cn _md5cu">
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <h1 className="_he3nb">Congratulation</h1>
                                        <p className="_me3c">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        </p>
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

export default Home
