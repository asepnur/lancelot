import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import {
    Navbar,
    Newsbar,
    LayoutUser,
    InputContent
} from '../index.js'

class Information extends Component{
    render(){
        return(
            <LayoutUser>
            <Navbar/>
            <div className="_cn">
            <div className="_ro">
            <div className="_pd5m3n _c5m312 _c5x312">
                <h1 className="_he3b">Information</h1>
            </div>
        </div>
        </div>
        <div className="_cn">
            <div className="_ro">
                <div className="_c5m36 _pd5m3n">
                    <div className="_se _se3a">
                        <div className="_ro">
                            <div className="_c5x312">
                                <h1 className="_he3x3bk _pd3m3b">Last News</h1>
                            </div>
                        </div>
                        <div className="_se _se3b">
                            <div className="_ro">
                                <div className="_c5x312 _pd3l3t">
                                    <p className="_ct">15 min ago</p>
                                    <p className="_ct _bo">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                    <p className="_ct _pd3m3t">Lorem Ipsum</p>
                                    <p className="_ct3xs  _ma3n3lr ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x34">
                                <p className="_ct">25 min ago</p>
                            </div>
                            <div className="_c5x37">
                                <p className="_ct _bo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="_c5x31 _pd _pl5l">
                                <i className="fa fa-angle-right _ic" aria-hidden="true"></i>
                            </div>
                            <hr/>
                        </div>
                        <div className="_ro">
                            <div className="_c5x34">
                                <p className="_ct">1 hour ago</p>
                            </div>
                            <div className="_c5x37">
                                <p className="_ct _bo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="_c5x31 _pd _pl5l">
                                <i className="fa fa-angle-right _ic" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_c5m32 _pd3n3lr">
                    <div className="_se _se3a">
                        <div className="_ro">
                            <div className="_c5x312">
                                <h1 className="_he3x3bk _pd3m3b">Recent News</h1>
                                <hr/>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x311">
                                <p className="_ct _bo _el3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <p className="_ct3xs">3 hour ago</p>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x311">
                                <p className="_ct _bo _el3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <p className="_ct3xs">5 hour ago</p>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x311">
                                <p className="_ct _bo _el3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <p className="_ct3xs">7 hour ago</p>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x311">
                                <p className="_ct _bo _el3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <p className="_ct3xs">12 hour ago</p>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x311">
                                <p className="_ct _bo _el3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <p className="_ct3xs">19 hour ago</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Newsbar/>
            </div>
        </div>
        <div className="_cn _dn">
            <div className="_ro">
                <div className="_c5m312 _pd5m3n _ta">
                    <ul className="_ta5l">
                        <li><a className="" id="btn_attend">Information</a></li>
                        <li><a className="_ta5l3a" id="btn_assign">Lorem ipsum dolorsit amet, consecturetur adipiscing elit</a></li>
                    </ul>
                </div>
            </div>
            <div className="_ro">
                <div className="_c5m33 _pd5m3n">
                    <div className="_se _se3a">
                        <div className="_ro">
                            <div className="_c5x35 _c5m35">
                                <img className="_i3tb3b _pl5r" src="/img/course.png" alt=""/>
                            </div>
                            <div className="_c5x37 _c5m37">
                                <h6 className="_he3x3bk _pd3m3b _ma3l3t">LOREM IPSUM</h6>
                                <p className="_ct3s">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className="_ro _pd3n3b">
                            <button className="_bt5m3m _pl5r" type="submit">ALL POST</button>
                        </div>
                    </div>
                </div>
                <div className="_c5m35 _pd3n3lr">
                    <div className="_se _se3a">
                        <div className="_ro">
                            <div className="_c5x312">
                                <h3 className="_he3cbk">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                <p className="_ct3xs _al3tc">September 11, 2017 09:20 PM</p>
                                <p className="_ct3ms _ma3l3t">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum."
                                </p>
                                <p className="_ct3ms _ma3l3t">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum."
                                </p>

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

export default Information
