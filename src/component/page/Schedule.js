import React, {Component} from 'react'

import {Navbar, Newsbar, LayoutUser} from '../index.js'

class Schedule extends Component {
    render() {
        return (
            <LayoutUser>
                <Navbar match={this.props.match} active_navbar={"schedule"}/>
                <div className="_cn">
                    <div className="_ro _ma3mn">
                        <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                            <div class="_he3b">Schedule</div>
                            <table class="_se _se3s">
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>Wednesday
                                                <span> At </span>
                                                10.30-12.00</p>
                                            <p>
                                                <i class="fa fa-bookmark" aria-hidden="true"></i>
                                                &nbsp;Algoritma Pemrograman</p>
                                            <p>
                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                &nbsp;Laboratorium Pemrograman/ UDJT12</p>
                                        </td>
                                        <td>
                                            <i class="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Wednesday
                                                <span> At </span>
                                                10.30-12.00</p>
                                            <p>
                                                <i class="fa fa-bookmark" aria-hidden="true"></i>
                                                &nbsp;Algoritma Pemrograman</p>
                                            <p>
                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                &nbsp;Laboratorium Pemrograman/ UDJT12</p>
                                        </td>
                                        <td>
                                            <i class="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Wednesday
                                                <span> At </span>
                                                10.30-12.00</p>
                                            <p>
                                                <i class="fa fa-bookmark" aria-hidden="true"></i>
                                                &nbsp;Algoritma Pemrograman</p>
                                            <p>
                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                &nbsp;Laboratorium Pemrograman/ UDJT12</p>
                                        </td>
                                        <td>
                                            <i class="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Newsbar/>
                    </div>
                </div>

            </LayoutUser>
        )
    }
}

export default Schedule