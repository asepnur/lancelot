import React, {Component} from 'react'

import {
    Navbar,
    Newsbar,
    LayoutUser
} from '../index.js'

class Schedule extends Component{
    render(){
        return(
            <LayoutUser>
            <Navbar match={this.props.match}/>
            
            <div className="_cn">
            <div className="_ro">
                <div className="_pd5m3n _c5m312 _c5x312">
                    <h1 className="_he3b">Schedule</h1>
                </div>
            </div>
        </div>
        <div className="_cn">
            <div className="_ro">
                <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                    <div className="_ta">
                        <ul className="_ta5l">
                            <li><a className="_ta5l3a" href="">Day</a></li>
                            <li><a href="">Week</a></li>
                            <li><a href="">Month</a></li>
                        </ul>
                        <div className="_ta5c">
                            <div className="_se _se3a">
                                <div className="_ro">
                                    <div className="_c5x39 _c5m310">
                                        <p className="_he3m3b">11.00 AM - 01.00 PM</p>
                                        <p className="_he3x3bk">Algoritma Pemrograman</p>
                                        <p className="_ct3s">Laboratorium Pemrograman / Gedung PPBSD</p>
                                    </div>
                                    <div className="_c5x33 _c5m32 _ma3xl3t ">
                                        <i className="fa fa-star _ic3ms" aria-hidden="true"></i>
                                        <i className="fa fa-ellipsis-h _ic3ms" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x39 _c5m310">
                                        <p className="_he3m3b">11.00 AM - 01.00 PM</p>
                                        <p className="_he3x3bk">Algoritma Pemrograman</p>
                                        <p className="_ct3s">Laboratorium Pemrograman / Gedung PPBSD</p>
                                    </div>
                                    <div className="_c5x33 _c5m32 _ma3xl3t">
                                        <i className="fa fa-star _ic3ms" aria-hidden="true"></i>
                                        <i className="fa fa-ellipsis-h _ic3ms" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x39 _c5m310">
                                        <p className="_he3m3b">11.00 AM - 01.00 PM</p>
                                        <p className="_he3x3bk">Algoritma Pemrograman</p>
                                        <p className="_ct3s">Laboratorium Pemrograman / Gedung PPBSD</p>
                                    </div>
                                    <div className="_c5x33 _c5m32 _ma3xl3t ">
                                        <i className="fa fa-star _ic3ms" aria-hidden="true"></i>
                                        <i className="fa fa-ellipsis-h _ic3ms" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x39 _c5m310">
                                        <p className="_he3m3b">11.00 AM - 01.00 PM</p>
                                        <p className="_he3x3bk">Algoritma Pemrograman</p>
                                        <p className="_ct3s">Laboratorium Pemrograman / Gedung PPBSD</p>
                                    </div>
                                    <div className="_c5x33 _c5m32 _ma3xl3t">
                                        <i className="fa fa-star _ic3ms" aria-hidden="true"></i>
                                        <i className="fa fa-ellipsis-h _ic3ms" aria-hidden="true"></i>
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
                <Newsbar/>
            </div>
        </div>

            </LayoutUser>
        )
    }
}

export default Schedule