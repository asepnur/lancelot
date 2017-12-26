/*----------------------------------------------------------------
                            INFORMATION PAGE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser, InformationDetail, LoadingAnim} from '../index.js'

class Information extends Component {
    constructor() {

        super()
        this.state = {
            information: [],
            detail: {},
            modal_detail: false,
            is_loaded: false
        }
    }
    /*----------------------------------------------------------------
                            LIFE CYCLE
------------------------------------------------------------------*/
    componentDidMount() {
        this.handlerGetInformation(1)
    }
    /*----------------------------------------------------------------
                            FUNCTION HANDLER
------------------------------------------------------------------*/
    handlerGetInformation = (page) => {
        axios.get(`api/v1/information?ttl=10&pg=${page}`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({information: res.data.data, is_loaded: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleDetail = (id) => {
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
    handleClose = () => {
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
                                    {!this.state.is_loaded
                                        ? (
                                            <table className="_se3msg">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <LoadingAnim color_left="#333" color_right="#333"/>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        )
                                        : (
                                            <div>
                                                <Content
                                                    data={this.state.information}
                                                    detail={this.handleDetail}
                                                    handlerGetInformation={this.handlerGetInformation}/>
                                            </div>
                                        )
                                    }
                                </div>
                                <Newsbar handleDetail={this.handleDetail}/>
                            </div>
                        </div>
                    </div>
                    <InformationDetail
                        data={this.state.detail}
                        modal_detail={this.state.modal_detail}
                        handleClose={this.handleClose}/>
                </LayoutUser>
            : <Redirect to={`/login`}/>);
    }
}
/*----------------------------------------------------------------
                            FUNCTION ELEMENT
------------------------------------------------------------------*/
const Content = (props) => {
    return (
        <div>
            <table>
                <tfoot>
                    <tr className="_pg">
                        <td>
                            <button
                                disabled={props.data.links.prev === 0
                                ? true
                                : false}
                                onClick={() => {
                                props.handlerGetInformation(props.data.links.prev)
                            }}>&laquo; Prev</button>
                        </td>
                        <td>
                            <a
                                className="_active"
                                onClick={() => {
                                props.handlerGetInformation(props.data.links.self)
                            }}>{props.data.links.self}
                                of {props.data.meta.total_page}</a>
                        </td>
                        <td>
                            <button
                                disabled={(props.data.links.next - 1) === props.data.meta.total_page
                                ? true
                                : false}
                                onClick={(e) => {
                                props.handlerGetInformation(props.data.links.next)
                            }}>Next &raquo;</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            {props
                .data
                .data
                .map((data, i) => (
                    <div className="_c5x312 _c5m34 _pd3n3lr3x" key={i}>
                        <div className="_se3b">
                            <div>
                                <p>{data.date}</p>
                                <p>@{data.course_name}</p>
                                <p>{data.title},</p>
                                {data.description === ""
                                    ? <p
                                            style={{
                                            height: "63px",
                                            overflow: "hidden",
                                            fontStyle: "italic"
                                        }}>No description available</p>
                                    : <p
                                        style={{
                                        height: "63px",
                                        overflow: "hidden"
                                    }}>{data.description}</p>}
                            </div>
                            <button
                                className="_bt5xs3b __wr"
                                onClick={(e) => {
                                props.detail(data.id)
                            }}>Read More</button>
                        </div>
                    </div>
                ))
}
        </div>
    )

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