import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorSignOut} from '../../action/action'
class Navbar extends Component {
    handlerSignOut = (dispatcherSignOut) => {
        fetch('https://meikoapp.herokuapp.com/api/v1/user/signout', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                dispatcherSignOut(false)
            } else {
                dispatcherSignOut(true)
            }
        })
    }
    render() {
        return (
            <div className="_cn">
                <div className="_c5x32">
                    <nav className="_cn5n">
                        <i className="fa fa-bars _i5h" aria-hidden="true"></i>
                        <ul className="_n">
                            <div className="_n51">
                                <li><img className="_i3c" src="/img/icon/white/logo copy 4.png" alt="logo"/></li>
                                <li className="_n3a">
                                    <Link to={'/'}>
                                        <i className="fa fa-home" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/course'}>
                                        <i className="fa fa-clone" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/schedule'}>
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/myactivity'}>
                                        <i className="fa fa-tasks" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/grade'}>
                                        <i className="fa fa-folder" aria-hidden="true"></i>
                                    </Link>
                                </li>
                            </div>
                            <div className="_n52">
                                <li>
                                    <Link to={'/information'}>
                                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/user'}>
                                        <i className="fa fa-cog" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'#'}>
                                        <i
                                            onClick={(e) => {
                                            e.preventDefault();
                                            this
                                                .handlerSignOut(this.props.dispatcherSignOut)
                                        }}
                                            className="fa fa-power-off"
                                            aria-hidden="true"></i>
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
                <div className="_c5x3o1 _c5x39">
                    <p className="_me5ts _pd3cr">11.59 PM | Monday, September 11, 2017</p>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {

    return {is_logged_in: state.is_logged_in}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherSignOut: (is_logged_in) => dispatch(actorSignOut(is_logged_in))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Navbar)

