import React, {Component} from 'react'

import {
    Navbar,
    Newsbar,
    LayoutUser
} from '../index.js'

class Grade extends Component{
    render(){
        return(
            <LayoutUser>
            <Navbar match={this.props.match}/>
            <div className="_cn">
            <div className="_ro">
                <div className="_pd5m3n _c5m312 _c5x312">
                    <h1 className="_he3b">User Report</h1>
                </div>
            </div>
            </div>
            <div className="_cn">
            <div className="_ro">
                <div className="_c5m38 _c5x312 _pd5m3n">
                    <div className="_se">
                        <div className="_ro _pd3n3b">
                            <div className="_c5m312 _c5x312 _pd3n3lr _pdx3n">
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
                                        <td>Algoritma Pemrograman</td>
                                        <td>90</td>
                                        <td>75</td>
                                        <td>85</td>
                                        <td>70</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Lorem Ipsum</td>
                                        <td>90</td>
                                        <td>90</td>
                                        <td>80</td>
                                        <td>80</td>
                                        <td>85</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Lorem Ipsum</td>
                                        <td>90</td>
                                        <td>90</td>
                                        <td>80</td>
                                        <td>80</td>
                                        <td>85</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Lorem Ipsum</td>
                                        <td>90</td>
                                        <td>90</td>
                                        <td>80</td>
                                        <td>80</td>
                                        <td>85</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Lorem Ipsum</td>
                                        <td>90</td>
                                        <td>90</td>
                                        <td>80</td>
                                        <td>80</td>
                                        <td>85</td>
                                    </tr>
                                </table>
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

export default Grade