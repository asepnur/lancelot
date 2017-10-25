import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {NavbarAdmin, LayoutUser} from '../index.js'

class AdminUser extends Component {
    constructor() {
        super()

        this.state = {
            status: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <LayoutUser>
                <NavbarAdmin/>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_pd5m3n _c5m312 _c5x312">
                            <h1 className="_he3b">Create User</h1>
                        </div>
                    </div>
                </div>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_c5m312 _pd5m3n _ta">
                            <ul className="_ta5l">
                                <li>
                                    <a className="_ta5l3a" id="btnTab1">Users</a>
                                </li>
                                <li>
                                    <a className="" id="btnTab2">Roles</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="_ro __tab1">
                        <div className="_c5x312 _c5m312 _pd5m3n">
                            <div className="_se _se3a">
                                <div className="_ro _pd3n3b">
                                    <div className="_c5m36 _c5x312">
                                        <div className="_c5m33 _c5x33 _pd3m3t">
                                            <a className="_he3b _pl3l">Users</a>
                                        </div>
                                        <div className="_c5m36 _c5x36">
                                            <button className="_bt5m3b" type="">+Create User</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_c5x312 _c5m312 _pd5m3n">
                            <div className="_se _se3a">
                                <div className="_ro _pd3n3b _ma3l3lr">
                                    <table className="_tb3g">
                                        <tr>
                                            <th>User ID</th>
                                            <th>Account Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </table>
                                    <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                                        <table className="_tb3g">
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" checked></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="_ro __tab2 _dn">
                        <div className="_c5x312 _c5m312 _pd5m3n">
                            <div className="_se _se3a">
                                <div className="_ro _pd3n3b">
                                    <div className="_c5m36 _c5x312">
                                        <div className="_c5m33 _c5x33 _pd3m3t">
                                            <a className="_he3b _pl3l">Roles</a>
                                        </div>
                                        <div className="_c5m36 _c5x36">
                                            <button className="_bt5m3b" type="">+Create New Role</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_c5x312 _c5m312 _pd5m3n">
                            <div className="_se _se3a">
                                <div className="_ro _pd3n3b _ma3l3lr">
                                    <table className="_tb3g">
                                        <tr>
                                            <th>ID</th>
                                            <th>Role Group</th>
                                            <th>Action</th>
                                        </tr>
                                    </table>
                                    <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                                        <table className="_tb3g">
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>Lorem 1</td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>Lorem 1</td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>Lorem 1</td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>Lorem 1</td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>Lorem 1</td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>Lorem 1</td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>Lorem 1</td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>loremipsum@gmail.com</td>
                                                <td>Lorem 1</td>
                                                <td>
                                                    <div>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                        <Link to={'/'}>
                                                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
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

export default AdminUser