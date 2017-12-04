/*----------------------------------------------------------------
                            INFORMATION PAGE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser, InformationDetail} from '../index.js'

class Information extends Component {
    constructor() {

        super()
        this.state = {
            information: [],
            detail:{},
            modal_detail : false
        }
    }
/*----------------------------------------------------------------
                            LIFE CYCLE
------------------------------------------------------------------*/
    componentDidMount() {
        this.handlerGetInformation()
    }
/*----------------------------------------------------------------
                            FUNCTION HANDLER
------------------------------------------------------------------*/
    handlerGetInformation = () => {
        axios.get(`api/v1/information`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({information: res.data.data.last})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleDetail = (id) =>{
        axios.get(`api/v1/information/` + id, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({detail: res.data.data, modal_detail: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleClose = () =>{
        this.setState({modal_detail: false})
    }
/*----------------------------------------------------------------
                            RENDER COMPONENT
------------------------------------------------------------------*/
    render() {
        const {is_logged_in} = this.props
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"information"}/>
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro">
                                <div className="_c5m38 _pd5m3n">
                                    <div className="_ro _pd3l3l">
                                        <h1 className="_he3b">Information</h1>
                                    </div>
                                    <Content data={this.state.information} detail={this.handleDetail} />
                                    <div className="_pg">
                                        <div className="_pd3m3l">
                                            <p>1 of 2 Page</p>
                                        </div>
                                        <div className="_pd3m3r">
                                            <a href="">
                                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                &nbsp;previous</a>
                                            <a href="">next&nbsp;
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <Newsbar/>
                            </div>
                        </div>
                    </div>
                    <InformationDetail modal_detail={this.state.modal_detail} handleClose={this.handleClose} />
                </LayoutUser>
            : <Redirect to={`/login`}/>);
    }
}
/*----------------------------------------------------------------
                            FUNCTION ELEMENT
------------------------------------------------------------------*/
const Content = (props) => {
    return (props.data.map((data, i) => (
        <div className="_c5x312 _c5m34 _pd3n3lr3x" key={i}>
            <div className="_se3b">
                <div>
                    <img src="/img/image.png" alt="informations_image"/>
                    <p>{data.date}</p>
                    <p>{data.title},</p>
                    <p>{data.description}</p>
                </div>
                <button className="_bt5xs3b __wr" onClick={ (e)=>{ props.detail(6)}}>Read More</button>
            </div>
        </div>
    )))
}
/*----------------------------------------------------------------
                            DISPATCHER
------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Information)
//export default Information