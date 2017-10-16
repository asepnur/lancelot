import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import {
    Navbar,
    Newsbar,
    LayoutUser,
    InputContent
} from '../index.js'

class DetCourse extends Component{
    render(){
        return(
            <LayoutUser>
            <Navbar/>
            <div className="_cn">
            <div className="_ro">
                <div className="_pd5m3n _c5m312 _c5x312">
                    <h1 className="_he3b">My Courses</h1>
                </div>
            </div>
        </div>
        <div className="_cn">
            <div className="_ro">
                <div className="_c5x312 _c5m312 _pd5m3n">
                    <div className="_se _se3a">
                        <div className="_c5x312 _c5m312 _pd3n3lr _ta">
                            <ul className="_ta5l">
                                <li><a href="">Current</a></li>
                                <li><a className="_ta5l3a" href="">Algortma Pemrograman</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_ro _c5m38 _c5x312 _pd5m3n">
                <div className="_c5x312 _c5m312 _pd3n3lr">
                    <div className="_se _se3a">
                        <div className="_ro">
                            <div className="_c5x312 _c5m312">
                                <div className="_c5x312 _c5m312 _he5co ">
                                    <h4 className="_ma3l3b">ALGORITMA PEMROGRAMAN</h4>
                                </div>
                                <div className="_c5x312 _c5m312">
                                    <p className="_d5ab _ma3n3lr">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_c5x312 _c5m312">
                    <div className="_c5x312 _c5m312 _pd3n3lr">
                        <div className="_c5x312 _c5m312 _pd3n3lr _ta">
                            <ul className="_ta5l">
                                <li><a className="_ta5l3a" id="btn_assign">Assignment</a></li>
                                <li><a className="" id="btn_attend">Attendance</a></li>
                                <li><a className="" id="btn_downld">Download</a></li>
                                <li><a className="" id="btn_assist">Assistant</a></li>
                                <li><a className="" id="btn_grade">Grade</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="_c5x312 _c5m312 _pd3n3lr __ass">
                    <div className="_se _se3a">
                        <div className="_ro">
                            <div className="_c5x312">
                                <h1 className="_he3x3bk">Assignment</h1>
                                <hr/>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x34">
                                <p className="_pd3t"><i className="fa fa-circle _i3a" aria-hidden="true"></i> YESTERDAY</p>
                            </div>
                            <div className="_c5x36">
                                <p className="_ct _bo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="_c5x31 _pd">
                                <i className="fa fa-check-square-o _ic" aria-hidden="true"></i>
                            </div>
                            <div className="_c5x31 _pd">
                                <i className="fa fa-pencil-square-o _ic" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x34">
                                <p className="_pd3t"><i className="fa fa-circle _i3a" aria-hidden="true"></i> TODAY</p>
                            </div>
                            <div className="_c5x36">
                                <p className="_ct _bo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="_c5x31 _pd">
                                <i className="fa fa-check-square-o _ic" aria-hidden="true"></i>
                            </div>
                            <div className="_c5x31 _pd">
                                <i className="fa fa-pencil-square-o _ic" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x34">
                                <p className="_pd3t"><i className="fa fa-circle _i3a" aria-hidden="true"></i> SEPT 12</p>
                            </div>
                            <div className="_c5x36">
                                <p className="_ct _bo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="_c5x31 _pd">
                                <i className="fa fa-check-square-o _ic" aria-hidden="true"></i>
                            </div>
                            <div className="_c5x31 _pd">
                                <i className="fa fa-pencil-square-o _ic" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_c5x312 _c5m312 _pd3n3lr __att _dn">
                    <div className="_se _se3a">
                        <div className="_ro _pd3n3b">
                            <div className="_c5x33 _c5m33">
                                <p className="_he3x3cbk _ma3l3t">Lorem Ipsum</p>
                                <h1 className="_ma3l3b _ma3n3t _he3cb">15</h1>
                            </div>
                            <div className="_c5x33 _c5m33">
                                <p className="_he3x3cbk _ma3l3t">Lorem Ipsum</p>
                                <h1 className="_ma3l3b _ma3n3t _he3cb">1</h1>
                            </div>
                            <div className="_c5x33 _c5m33">
                                <p className="_he3x3cbk _ma3l3t">Lorem Ipsum</p>
                                <h1 className="_ma3l3b _ma3n3t _he3cb">0</h1>
                            </div>
                            <div className="_c5x33 _c5m33">
                                <p className="_he3x3cbk _ma3l3t">Lorem Ipsum</p>
                                <h1 className=" _ma3l3b _ma3n3t _he3cb">98%</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_c5x312 _c5m312 _pd3n3lr __dow _dn">
                    <div className="_c5x33 _c5m33 _pd3n3lr _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b">
                                <div className="_c5x312 _c5m312">
                                    <div className="_ma3n3lr">
                                        <img className="_i3s" src="/img/course.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="_me3l _al3tc">Pertemuan 1</p>
                    </div>
                    <div className="_c5x33 _c5m33 _pd3n3lr _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b">
                                <div className="_c5x312 _c5m312">
                                    <div className="_ma3n3lr">
                                        <img className="_i3s" src="/img/course.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="_me3l _al3tc">Pertemuan 2</p>
                    </div>
                    <div className="_c5x33 _c5m33 _pd3n3lr _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b">
                                <div className="_c5x312 _c5m312">
                                    <div className="_ma3n3lr">
                                        <img className="_i3s" src="/img/course.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="_me3l _al3tc">Pertemuan 3</p>
                    </div>
                    <div className="_c5x33 _c5m33 _pd3n3lr _pd3n3lr">
                        <div className="_se _se3a">
                            <div className="_ro _pd3n3b">
                                <div className="_c5x312 _c5m312">
                                    <div className="_ma3n3lr">
                                        <img className="_i3s" src="/img/course.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="_me3l _al3tc">Pertemuan 4</p>
                    </div>
                </div>
                <div className="_c5x312 _c5m312 _pd3n3lr __ast _dn">
                    <div className="_c5x312 _c5m36 _pd3n3lr _pd3n3lr">
                        <div className="_c5x36 _c5m36 _pd3n3lr">
                            <div className="_se _se3a">
                                <div className="_ro _pd3n3b">
                                    <div className="_c5x312 _c5m312 _pd3n3lr _pd3n3lr">
                                        <div className="_ma3n3lr">
                                            <img className="_i3as" src="/img/course.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <h5 className="_ct3m _pd3m3t _bo _ma3l3t">lorem ipsum</h5>
                                        <p className="_ct3xs _ma3l3t _ma3n3t">Assistant</p>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <p className="_ct3xs _el3 _ma3l3t _ma3n3t"><i className="fa fa-phone _ic" aria-hidden="true"></i> Lorem Ipsum</p>
                                        <p className="_ct3xs _el3 _ma3l3t _ma3n3t"><i className="fa fa-envelope-o _ic" aria-hidden="true"></i> Loremipsum@gmail.com</p>
                                        <p className="_ct3xs _el3 _ma3n3t"><i className="fa fa-map-marker _ic" aria-hidden="true"></i> lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_c5x36 _c5m36 _pd3n3lr">
                            <div className="_se _se3a">
                                <div className="_ro _pd3n3b">
                                    <div className="_c5x312 _c5m312 _pd3n3lr _pd3n3lr">
                                        <div className="_ma3n3lr">
                                            <img className="_i3as" src="/img/course.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <h5 className="_ct3m _pd3m3t _bo _ma3l3t">lorem ipsum</h5>
                                        <p className="_ct3xs _ma3l3t _ma3n3t">Assistant</p>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <p className="_ct3xs _el3 _ma3l3t _ma3n3t"><i className="fa fa-phone _ic" aria-hidden="true"></i> Lorem Ipsum</p>
                                        <p className="_ct3xs _el3 _ma3l3t _ma3n3t"><i className="fa fa-envelope-o _ic" aria-hidden="true"></i> Loremipsum@gmail.com</p>
                                        <p className="_ct3xs _el3 _ma3n3t"><i className="fa fa-map-marker _ic" aria-hidden="true"></i> lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="_c5x312 _c5m36 _pd3n3lr _pd3n3lr">
                        <div className="_c5x36 _c5m36 _pd3n3lr">
                            <div className="_se _se3a">
                                <div className="_ro _pd3n3b">
                                    <div className="_c5x312 _c5m312 _pd3n3lr _pd3n3lr">
                                        <div className="_ma3n3lr">
                                            <img className="_i3as" src="/img/course.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <h5 className="_ct3m _pd3m3t _bo _ma3l3t">lorem ipsum</h5>
                                        <p className="_ct3xs _ma3l3t _ma3n3t">Assistant</p>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <p className="_ct3xs _el3 _ma3l3t _ma3n3t"><i className="fa fa-phone _ic" aria-hidden="true"></i> Lorem Ipsum</p>
                                        <p className="_ct3xs _el3 _ma3l3t _ma3n3t"><i className="fa fa-envelope-o _ic" aria-hidden="true"></i> Loremipsum@gmail.com</p>
                                        <p className="_ct3xs _el3 _ma3n3t"><i className="fa fa-map-marker _ic" aria-hidden="true"></i> lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_c5x36 _c5m36 _pd3n3lr">
                            <div className="_se _se3a">
                                <div className="_ro _pd3n3b">
                                    <div className="_c5x312 _c5m312 _pd3n3lr _pd3n3lr">
                                        <div className="_ma3n3lr">
                                            <img className="_i3as" src="/img/course.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <h5 className="_ct3m _pd3m3t _bo _ma3l3t">lorem ipsum</h5>
                                        <p className="_ct3xs _ma3l3t _ma3n3t">Assistant</p>
                                    </div>
                                    <div className="_c5x312 _c5m312">
                                        <p className="_ct3xs _el3 _ma3l3t _ma3n3t"><i className="fa fa-phone _ic" aria-hidden="true"></i> Lorem Ipsum</p>
                                        <p className="_ct3xs _el3 _ma3l3t _ma3n3t"><i className="fa fa-envelope-o _ic" aria-hidden="true"></i> Loremipsum@gmail.com</p>
                                        <p className="_ct3xs _el3 _ma3n3t"><i className="fa fa-map-marker _ic" aria-hidden="true"></i> lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_c5x312 _c5m312 _pd3n3lr __grd _dn">
                    <div className="_se">
                        <div className="_ro _pd3n3b">
                            <table className="_tb">
                                <tr>
                                    <th>No</th>
                                    <th>Mata Kuliah</th>
                                    <th>Tugas</th>
                                    <th>QUIS</th>
                                    <th>UTS</th>
                                    <th>UAS</th>
                                    <th>Final Score</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>ALgoritma Pemrograman</td>
                                    <td>90</td>
                                    <td>75</td>
                                    <td>85</td>
                                    <td>70</td>
                                    <td>80</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Newsbar/>
        </div>
            </LayoutUser>
        )
    }
}

export default DetCourse