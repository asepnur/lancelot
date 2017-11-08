import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'

class MyActivity extends Component {
    render() {
        const {is_logged_in} = this.props

        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match}/>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_pd3cl _c5m312 _c5x312 _pd5m3n">
                                <h1 className="_he3m3b _ma3xl3t">My Activity</h1>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                                <div className="_ta">
                                    <ul className="_ta5l">
                                        <li>
                                            <a className="_ta5l3a" href="">Last Activity</a>
                                        </li>
                                        <li>
                                            <a href="">Active Task</a>
                                        </li>
                                    </ul>
                                    <div className="_ta5c _dn">
                                        <div className="_se _se3a">
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _c5m38 _pd">
                                                    <p className="_se5c">Praktikum Pemrograman Web pertemuan 11, buat Aplikasi web simple dengan menggunakan HTML</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3g">submited</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _pd _c5m38">
                                                    <p className="_se5c">Praktikum Pemrograman Web pertemuan 11, buat Aplikasi web simple dengan menggunakan HTML</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3g">submited</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _pd _c5m38">
                                                    <p className="_se5c">Praktikum Pemrograman Web pertemuan 11, buat Aplikasi web simple dengan menggunakan HTML</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3g">submited</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32 ">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _pd _c5m38">
                                                    <p className="_se5c ">Praktikum Pemrograman Web pertemuan 11, buat Aplikasi web simple dengan menggunakan HTML</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3r">not submited</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_ta5c _dn">
                                        <div className="_se _se3a">
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _c5m38 _pd">
                                                    <p className="_se5c">Praktikum Pemrograman Web pertemuan 11, buat Aplikasi web simple dengan menggunakan HTML</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3b">add</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _pd _c5m38">
                                                    <p className="_se5c">Praktikum Pemrograman Web pertemuan 11, buat Aplikasi web simple dengan menggunakan HTML</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3b">add</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _pd _c5m38">
                                                    <p className="_se5c">Praktikum Pemrograman Web pertemuan 11, buat Aplikasi web simple dengan menggunakan HTML</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3b">add</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32 ">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _pd _c5m38">
                                                    <p className="_se5c ">Praktikum Pemrograman Web pertemuan 11, buat Aplikasi web simple dengan menggunakan HTML</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3b">add</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_ta5c">
                                        <div className="_se _se3a">
                                            <div className="_ro">
                                                <div className="_c5x312 _c5m312">
                                                    <h1 className="_he3m3bk">Pemrograman Web 11</h1>
                                                    <p className="_ct">Praktikum Pemrograman Web pertemuan 11, buat Aplikasi web simple dengan menggunakan HTML.</p>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5m312 _c5x312">
                                                    <table className="_tb">
                                                        <thead>
                                                            <tr>
                                                                <th>Status</th>
                                                                <th>Grade</th>
                                                                <th>Time</th>
                                                                <th>File</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>No Attempt</td>
                                                                <td>No Grade</td>
                                                                <td>4 Hours</td>
                                                                <td>No Attempt</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x35 _c5x3o7 _c5m33 _c5m3o9">
                                                    <button className="_bt5m3b">Add submition</button>
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
            : <Redirect to={`/login`}/>)
    }
}
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(MyActivity)