import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {Navbar, LayoutUser, InputContent} from '../index.js'

class Home extends Component {
    render() {
        const {is_logged_in} = this.props
        return (is_logged_in
            ? this.renderMain()
            : <Redirect to={`/login`}/>)
    }
    renderMain = () => {
        return (
            <LayoutUser>
                <Navbar match={this.props.match}/>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_pd3cl _c5m312 _c5x312">
                            <h1 className="_he3m3m _pd3l3l">WELCOME BACK Risal!</h1>
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
                                        <p className="_se5c">Tugas Basis Data Pertemuan 8 mengerjakan tugas pada ppt</p>
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
                                        <p className="_se5c">Tidak Ada tugas Minggu ini</p>
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
                                        <p className="_se5c">Tugas Kriptografi mempelajari dan membuat resume mengenai  fungsi hashing</p>
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
                                        <p className="_se5c">Tugas Pemrograman Web membuat program pada Git</p>
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
                                        <p className="_se5c">Praktikum Pemrorgraman Web</p>
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
                                        <p className="_se5c">Praktikum Basis Data</p>
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
                                        <p className="_se5c">Praktikum Pemrograman Web minggu ini ditiadakan</p>
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
                                        <p className="_se5c">Praktikum Basis Data diundur 30 menit</p>
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
                                        <p className="_se5c">Praktikum Kriptografi akan melakuka UTS minggu depan</p>
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
                                        <p className="_se5c">Praktikum Pemrograman Web tidak jadi ditiadakan</p>
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
                                        <h1 className="_he3nb">Tugas 1</h1>
                                        <p className="_me3c">Upload Tugas 1 di sini,
                                        </p>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <div className="_md5i">
                                            <input type="file" name="file"/>
                                            <img className="_i3ce" src="/img/icon/blue/upload.png" alt="upload logo"/>
                                            <p className="_me3c">Anda akan mengupload suatu file di sini
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
                                        <p className="_me3c">Selaamt, memuaskan,
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

const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcher: () => dispatch()
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Home)
