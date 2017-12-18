/*----------------------------------------------------------------
                            COURSE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser, InformationDetail, LoadingAnim} from '../index.js'

class Course extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            all: [],
            current: [],
            last: [],
            is_all_loaded: false,
            is_current_loaded: false,
            is_last_loaded: false,
            is_loaded: false,
            detail_information:{}
        }
    }
    /*----------------------------------------------------------------
                        LIFE CYCLE
    ------------------------------------------------------------------*/
    componentDidMount() {
        let current = document.getElementById('tab_current')
        let dom = ReactDOM.findDOMNode
        dom(current).className = "_active"

        axios.get(`/api/v1/course?payload=current`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            res.data.code === 200
                ? this.setState({current: res.data.data, is_current_loaded: true})
                : this.setState({current: [], is_current_loaded: true})
            this.setState({data: this.state.current, is_loaded: true})
        }).catch((err) => {
            console.log(err)
        })
    }
    /*----------------------------------------------------------------
                            HANDLE FUNCTION
    ------------------------------------------------------------------*/
    handleDetail = (id) => {
        axios.get(`api/v1/information/` + id, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({detail_information: res.data.data, modal_detail: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleClose = () => {
        this.setState({modal_detail: false})
    }
    handleToggleEnrolled = (id, status) => {
        const {dispatcherRequest, dispatcherLoading} = this.props
        let payload = "cancel"
        let message = "Cancelling course successfully"
        if (status === "unenrolled") {
            payload = "enroll"
            message = "Enrolling course successfully"
        }
        dispatcherLoading(10, false)
        axios.post(`/api/v1/course/` + id + `/enrollment?payload=` + payload, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            dispatcherLoading(100, false)
            this.setState({isUploading: false})
            if (res.status === 200) {
                this.handleGetAll()
                dispatcherRequest(true, 200, message)
            } else {
                dispatcherRequest(true, 401, message)
            }
        }).catch((err) => {
            dispatcherRequest(true, 401, 'Error connection')
            this.setState({isUploading: false})
        })
    }
    handleGetAll = () => {
        this.setState({is_loaded: false})
        axios.get(`/api/v1/course?payload=all`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({all: res.data.data, data: res.data.data, is_all_loaded: true, is_loaded: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    handleActiveTab = (e) => {
        const tagID = e.currentTarget.id
        const id = ["tab_all", "tab_last", "tab_current"]
        id.forEach((val) => {
            let dom = document.getElementById(val)
            val === tagID
                ? ReactDOM
                    .findDOMNode(dom)
                    .className = "_active"
                : ReactDOM
                    .findDOMNode(dom)
                    .className = ""
        }, this)

        switch (tagID) {
            case "tab_all":
                if (!this.state.is_all_loaded) {
                    this.handleGetAll()
                } else {
                    this.setState({data: this.state.all, is_loaded: this.state.is_all_loaded})
                }
                break
            case "tab_last":
                if (!this.state.is_last_loaded) {
                    this.setState({is_loaded: false})
                    axios.get(`/api/v1/course?payload=last`, {
                        validateStatus: (status) => {
                            return status === 200
                        }
                    }).then((res) => {
                        if (res.data.code === 200) {
                            this.setState({last: res.data.data, data: res.data.data, is_last_loaded: true, is_loaded: true})
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                } else {
                    this.setState({data: this.state.last, is_loaded: this.state.is_last_loaded})
                }
                break
            case "tab_current":
                if (!this.state.is_current_loaded) {
                    this.setState({is_loaded: false})
                    axios.get(`/api/v1/course?payload=current`, {
                        validateStatus: (status) => {
                            return status === 200
                        }
                    }).then((res) => {
                        if (res.data.code === 200) {
                            this.setState({current: res.data.data, data: res.data.data, is_current_loaded: true, is_loaded: true})
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                } else {
                    this.setState({data: this.state.current, is_loaded: this.state.is_current_loaded})
                }
                break
            default:
                break
        }

    }
    /*----------------------------------------------------------------
                            RENDER COMPONENT
    ------------------------------------------------------------------*/
    render() {
        const {is_logged_in} = this.props
        const {data, is_loaded} = this.state
        const handle = {
            toggleEnrolled: this.handleToggleEnrolled
        }
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"course"}/>
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro">
                                <div className="_c5m38 _c5x312 _pd5n _pd3cl _pd5m3n ">
                                    <div className="_he3b _pd3l3b">My Course</div>
                                    <div className="_c5x312 _c5m312 _d3n3lr _ta ">
                                        <ul className="_ta5l3b">
                                            <li id="tab_last" onClick={this.handleActiveTab}>
                                                <i className="fa fa-history" aria-hidden="true"></i>
                                                <Link to="#">
                                                    &nbsp;Last</Link>
                                            </li>
                                            <li id="tab_current" onClick={this.handleActiveTab}>
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                <Link to="#">
                                                    &nbsp;Current</Link>
                                            </li>
                                            <li id="tab_all" onClick={this.handleActiveTab}>
                                                <i className="fa fa-list" aria-hidden="true"></i>
                                                <Link to="#">
                                                    &nbsp;All</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <ListCourse data={data} is_loaded={is_loaded} handle={handle}/>
                                </div>
                                <Newsbar handleDetail={this.handleDetail}/>
                            </div>
                        </div>
                    </div>
                    <InformationDetail
                        data={this.state.detail_information}
                        modal_detail={this.state.modal_detail}
                        handleClose={this.handleClose}/>
                </LayoutUser>
            : <Redirect to={`/login`}/>);
    }
}

/*----------------------------------------------------------------
                            ELEMENT
------------------------------------------------------------------*/
const ListCourse = props => {
    const {data, is_loaded, handle} = props

    return (!is_loaded
        ? (
            <table className="_se3msg3l">
                <tbody>
                    <tr>
                        <td>
                            <LoadingAnim color_left="#333" color_right="#333"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
        : data.length === 0
            ? (
                <table className="_se3msg3l">
                    <tbody>
                        <tr>
                            <td>
                                <i className="fa fa-book" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="_head">Ooops... No course yet in this Category</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="_main">Find in another Category</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
            : (data.map(data => (
                <div className="_c5x312 _c5m34 _pd3n3lr3x" key={data.id}>
                    <div className="_se3lc">
                        <div>
                            <p>{data.name}</p>
                            <p>{data.description}
                            </p>
                            {data.status === 'enrolled'
                                ? (
                                    <Link to={"/course/" + data.id}>
                                        <button className="_bt5xs3b">View Detail</button>
                                    </Link>
                                )
                                : data.status === 'unenrolled'
                                    ? <button
                                            className="_bt5xs3g"
                                            onClick={() => {
                                            handle.toggleEnrolled(data.id, data.status)
                                        }}>Enroll</button>
                                    : <input
                                        type="button"
                                        className="_bt5xs3r"
                                        value="Waiting"
                                        onMouseOver={(e) => {
                                        e.target.value = "Cancel"
                                    }}
                                        onClick={() => {
                                        handle.toggleEnrolled(data.id, data.status)
                                    }}/>
}
                        </div>
                    </div>
                </div>
            ))))
}
/*----------------------------------------------------------------
                            DISPATCHER
------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
        dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Course)