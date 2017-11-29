import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'

import {Navbar, Newsbar, LayoutUser, InputContent} from '../index.js'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('/api/v1/assignment?schedule_id=149&pg=1&ttl=10', {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                this.setState({data: data.data})
            }
        })
    }
    render() {
        const {is_logged_in} = this.props
        const data = this.state.data
        return (is_logged_in
            ? this.renderMain(data)
            : <Redirect to={`/login`}/>)
    }
    handleClickUpload = () => {
        let modal = document.getElementById('_md')

        let dom = ReactDOM.findDOMNode
        // dom(advance).className = "" dom(basic).className = "_ta5l3a"
        dom(modal).style.display = 'block'
        // dom(advance_content).style.display = 'none'
    }
    renderMain = (props) => {
        return (
            <LayoutUser>
                <Navbar match={this.props.match}/>
                <div className="_ro _ma3mn">
                    <div className="_cn3w">
                        <div className="_ro">
                            <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                                <div className="_he3b">Assignment</div>
                                <Assignment data={props} handleClickUpload={this.handleClickUpload}/>
                                <div className="_he3b">Schedule Today</div>
                                <table className="_se3s">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>10.30-12.00</p>
                                                <p>
                                                    <i className="fa fa-bookmark" aria-hidden="true"></i>
                                                    Algoritma Pemrograman</p>
                                                <p>
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                    Laboratorium Pemrograman/ UDJT12</p>
                                            </td>
                                            <td>
                                                <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>10.30-12.00</p>
                                                <p>
                                                    <i className="fa fa-bookmark" aria-hidden="true"></i>
                                                    Algoritma Pemrograman</p>
                                                <p>
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                    Laboratorium Pemrograman/ UDJT12</p>
                                            </td>
                                            <td>
                                                <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Newsbar/>
                        </div>
                    </div>
                </div>
                <div className="_md" id="_md">
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
export const Assignment = (props) => {
    return (props.data.length === 0
        ? <table className="_se3msg">
                <tbody>
                    <tr>
                        <td>
                            <i className="fa fa-smile-o" aria-hidden="true"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="_head">Nothing To Report!</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="_main">Have a nice day Rifki Muhammad</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        : <div>
            <table className="_se3a">
                <tbody>
                    {props
                        .data
                        .map((data, i) => (
                            <tr key={i}>
                                <td>
                                    <i className="fa fa-circle _i3a" aria-hidden="true"></i>
                                </td>
                                <td>{data.due_date}</td>
                                <td>{data.name}</td>
                                <td>
                                    <i
                                        className="fa fa-pencil-square-o _ic __wr"
                                        aria-hidden="true"
                                        onClick={props.handleClickUpload}></i>
                                </td>
                                <td>
                                    <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                                </td>
                            </tr>
                        ))
}

                </tbody>
            </table>
            <table>
                <tfoot>
                    <tr className="_pg">
                        <td>
                            <a href="">&laquo;</a>
                        </td>
                        <td>
                            <a href="">1</a>
                        </td>
                        <td>
                            <a className="_active" href="">2</a>
                        </td>
                        <td>
                            <a href="">3</a>
                        </td>
                        <td>
                            <a href="">&raquo;</a>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>)
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
