import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {Navbar, LayoutUser, InputContent} from '../index.js'

import {Dev as base_url} from '../../env/Environment'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: 
            [
                {
                    Assignment: {
                        ID: '',
                        Name: '',
                        Status: '',
                        Description: {
                            String: '',
                            Valid: ''
                        },
                        GradeParameterID: '',
                        DueDate: ''
                    }
                }
            ]
        }
    }
    componentDidMount() {
        fetch(base_url + '/api/v1/course/assignment/149?pg=1&ttl=10', {
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
    renderMain = (props) => {
        return (
            <LayoutUser>
                <Navbar match={this.props.match}/>
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
                            <Assignment data={props}/>
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
                <div className="_md">
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
const Assignment = (props) => {
    return (
        <div className="_se _se3a">
            <div className="_ro">
                <div className="_c5x312">
                    <h1 className="_se5t">Assignment</h1>
                    <hr/>
                </div>
            </div>
            {props
                .data
                .map((data, i) => (
                    <div className="_ro" key={i}>
                        <div className="_c5x34">
                            <p className="_se5ct">
                                <i className="fa fa-circle _i3a" aria-hidden="true"></i>
                                {data.Assignment.DueDate}</p>
                        </div>
                        <div className="_c5x36">
                            <p className="_se5c">{data.Assignment.Name}</p>
                        </div>
                        <div className="_c5x31 _pd">
                            <i className="fa fa-check-square-o _ic " aria-hidden="true"></i>
                        </div>
                        <div className="_c5x31 _pd">
                            <i className="fa fa-pencil-square-o _ic __wr" aria-hidden="true"></i>
                        </div>
                        <div className="_c5x312">
                            <hr/>
                        </div>
                    </div>
                    
                )
            )}
        </div>
    )
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
