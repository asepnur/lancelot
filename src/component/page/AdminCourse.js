import React, {Component} from 'react'
import { Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse} from '../index'

class AdminCourse extends Component {
      constructor() {
            super()
            this.state = {
                  active_menu: 'btn_assign'
            }
      }
      render() {
            const {is_logged_in} = this.props
            return (is_logged_in
                  ? <LayoutUser>
                              <Navbar match={this.props.match} active_navbar={"admin"}/>
                              <div className="_ro _ma3mn">
                                    <div className="_cn">
                                          <div className="_ro _c5m312 _c5x312 _pd5m3n">
                                                <div className="_c5x312 _c5m312 _he3b _pd3l3b">Mobile Computing</div>
                                                <div className="_c5x312 _c5m312 _pd3n3lr  _pd3l3b">
                                                      <div className="_pd3n3lr _ta">
                                                            <ul className="_ta5p">
                                                                  <li>
                                                                        <a href="">Home</a>
                                                                  </li>
                                                                  <li className="_active">
                                                                        <a href="">Mobile Computing</a>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                                <AdminNavCourse
                                                      active_menu={this.state.active_menu}
                                                      handleActive={this.handleChangeActiveMenu}/>
                                                <div className="_c5x312 _c5m310  _pd3l3lr __ass">
                                                      <div className="_ca">
                                                            <div className="_ca3h">
                                                                  <div className="_c5m310 _c5x310">Assignment</div>
                                                                  <div className="_c5m32 _c5x32">
                                                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                                                  </div>
                                                                  <div className="_c5m310 _c5x310">
                                                                        <a href="">Assignment</a>
                                                                        <a href="">Create</a>
                                                                  </div>
                                                            </div>
                                                            <table className="_se _se3ada">
                                                                  <thead>
                                                                        <tr>
                                                                              <th>Subject</th>
                                                                              <th>Due</th>
                                                                              <th>Created</th>
                                                                              <th>Action</th>
                                                                        </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                        <tr>
                                                                              <td>Tugas 1 Tentang Sesuatu</td>
                                                                              <td>Monday, 21 December 2017 13:00</td>
                                                                              <td>Monday, 21 December 2017
                                                                              </td>
                                                                              <td>
                                                                                    <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                                                    <i className="fa fa-arrow-circle-down _ic3b" aria-hidden="true"></i>
                                                                                    <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                                              </td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td>Tugas 1 Tentang Sesuatu</td>
                                                                              <td>Monday, 21 December 2017 13:00</td>
                                                                              <td>Monday, 21 December 2017
                                                                              </td>
                                                                              <td>
                                                                                    <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                                                    <i className="fa fa-arrow-circle-down _ic3b" aria-hidden="true"></i>
                                                                                    <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                                              </td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td>Tugas 1 Tentang Sesuatu</td>
                                                                              <td>Monday, 21 December 2017 13:00</td>
                                                                              <td>Monday, 21 December 2017
                                                                              </td>
                                                                              <td>
                                                                                    <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                                                    <i className="fa fa-arrow-circle-down _ic3b" aria-hidden="true"></i>
                                                                                    <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                                              </td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td>Tugas 1 Tentang Sesuatu</td>
                                                                              <td>Monday, 21 December 2017 13:00</td>
                                                                              <td>Monday, 21 December 2017
                                                                              </td>
                                                                              <td>
                                                                                    <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                                                    <i className="fa fa-arrow-circle-down _ic3b" aria-hidden="true"></i>
                                                                                    <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                                              </td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td>Tugas 1 Tentang Sesuatu</td>
                                                                              <td>Monday, 21 December 2017 13:00</td>
                                                                              <td>Monday, 21 December 2017
                                                                              </td>
                                                                              <td>
                                                                                    <i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i>
                                                                                    <i className="fa fa-arrow-circle-down _ic3b" aria-hidden="true"></i>
                                                                                    <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                                                                              </td>
                                                                        </tr>
                                                                  </tbody>
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
                                                            <table className="_se _se3ada">
                                                                  <thead>
                                                                        <tr>
                                                                              <th>Subject</th>
                                                                              <th>Name</th>
                                                                              <th>NPM</th>
                                                                              <th>Created</th>
                                                                              <th>Action</th>
                                                                        </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                        <tr>
                                                                              <td>Tugas1_140810140070.pdf</td>
                                                                              <td>Rifki Muhammad</td>
                                                                              <td>140810140070</td>
                                                                              <td>Monday, 21 December 2017
                                                                              </td>
                                                                              <td>
                                                                                    <i className="fa fa-arrow-circle-down _ic3mb __wr" aria-hidden="true"></i>
                                                                              </td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td>Tugas1_140810140070.pdf</td>
                                                                              <td>Rifki Muhammad</td>
                                                                              <td>140810140070</td>
                                                                              <td>Monday, 21 December 2017
                                                                              </td>
                                                                              <td>
                                                                                    <i className="fa fa-arrow-circle-down _ic3mb __wr" aria-hidden="true"></i>
                                                                              </td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td>Tugas1_140810140070.pdf</td>
                                                                              <td>Rifki Muhammad</td>
                                                                              <td>140810140070</td>
                                                                              <td>Monday, 21 December 2017
                                                                              </td>
                                                                              <td>
                                                                                    <i className="fa fa-arrow-circle-down _ic3mb __wr" aria-hidden="true"></i>
                                                                              </td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td>Tugas1_140810140070.pdf</td>
                                                                              <td>Rifki Muhammad</td>
                                                                              <td>140810140070</td>
                                                                              <td>Monday, 21 December 2017
                                                                              </td>
                                                                              <td>
                                                                                    <i className="fa fa-arrow-circle-down _ic3mb __wr" aria-hidden="true"></i>
                                                                              </td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td>Tugas1_140810140070.pdf</td>
                                                                              <td>Rifki Muhammad</td>
                                                                              <td>140810140070</td>
                                                                              <td>Monday, 21 December 2017
                                                                              </td>
                                                                              <td>
                                                                                    <i className="fa fa-arrow-circle-down _ic3mb __wr" aria-hidden="true"></i>
                                                                              </td>
                                                                        </tr>
                                                                  </tbody>
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

                                                            <div className="_se">
                                                                  <div className="_c5x36 _c5m38">
                                                                        <label htmlFor="name">Assignment Name</label>
                                                                        <input name="name" type="text"/>
                                                                  </div>
                                                                  <div className="_c5x36 _c5m34">
                                                                        <label htmlFor="course_name">Due Date</label>
                                                                        <input name="due" type="date"/>
                                                                  </div>
                                                                  <div className="_c5x36 _c5m33">
                                                                        <button type="button" className="_bt5m3b">Add Attachment</button>
                                                                  </div>
                                                                  <div className="_c5x312 _c5m312">
                                                                        <label htmlFor="description">Description*</label>
                                                                        <textarea placeholder="input description"></textarea>
                                                                  </div>
                                                                  <div className="_c5m3o8 _c5x3o6 _c5x33 _c5m32 _pd3r">
                                                                        <button type="button" className="_bt5m">Back</button>
                                                                  </div>
                                                                  <div className="_c5x33 _c5m32 _pd3l">
                                                                        <button type="button" className="_bt5m3b">Save</button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </LayoutUser>
                  : <Redirect to="/login"/>)
      }
}

const mapStatetoProps = (state) => {
      return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
      return {
            dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
      }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourse)