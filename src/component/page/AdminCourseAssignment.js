/*----------------------------------------------------------------
                        ADMIN COURSE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse, LoadingAnim} from '../index'
import history from '../../history'

class AdminCourseAssignment extends Component {
   constructor(props) {
      super(props)
      this.state = {
         active_menu: 'btn_assign',
         assignments: {},
         assignment_loaded: false,
         schedule_id: this.props.match.params.id,
         detail_assignment: {},
         detail_loaded: false,
         assignment_id: this.props.match.params.asg_id
      }
   }
   componentDidMount() {
      this.handleDetailAssignment(1)
   }
   /*------------------------------------------------------------
                              HANDLE REQUEST
   -------------------------------------------------------------*/
   handleDetailAssignment = (page) => {
      axios.get(`/api/admin/v1/assignment/${this.state.assignment_id}?ttl=10&pg=${page}`, {
         validateStatus: (status) => {
            return status === 200
         }
      }).then((res) => {
         if (res.data.code === 200) {
            this.setState({detail_assignment: res.data.data, detail_loaded: true})
         } else {
            this.setState({detail_assignment: {}, detail_loaded: true})
         }
      }).catch((err) => {
         axios.get(`/api/admin/v1/assignment/${this.state.assignment_id}?ttl=10&pg=${page}`, {
            validateStatus: (status) => {
               return status === 200
            }
         }).then((res) => {
            if (res.data.code === 200) {
               this.setState({detail_assignment: res.data.data, detail_loaded: true})
            } else {
               this.setState({detail_assignment: {}, detail_loaded: true})
            }
         }).catch((err) => {
            history.push(`/404`)
         })
      })
   }
   render() {
      const {is_logged_in} = this.props
      const hdlr_asg = {
         getList: this.handleDetailAssignment
      }
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
                                    <Link to={`/admin`}>Admin</Link>
                                 </li>
                                 <li >
                                    <Link to={`/admin/course/${this.state.schedule_id}`}>Mobile Computing</Link>
                                 </li>
                                 <li className="_active">
                                    <Link
                                       to={`/admin/course/${this.state.schedule_id}/asg/${this.state.detail_assignment.id}`}>{this.state.detail_assignment.name}
                                    </Link>
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
                                 <div className="_c5m310 _c5x310">{this.state.detail_assignment.name}</div>
                                 <div className="_c5m32 _c5x32">
                                    <i className="fa fa-download" aria-hidden="true"></i>
                                 </div>
                              </div>

                              <ListAssignment
                                 lst_asg={this.state.detail_assignment}
                                 is_loaded={this.state.detail_loaded}
                                 hdlr_asg={hdlr_asg}/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </LayoutUser>
         : <Redirect to="/login"/>)
   }
}
const ListAssignment = (props) => {
   const {is_loaded, lst_asg, hdlr_asg} = props
   return (is_loaded
      ? lst_asg.status === "upload_not_required"
         ? <table className="_se _se3ada">
               <thead>
                  <tr>
                     <th>NPM</th>
                     <th>Name</th>
                     <th>Due Date</th>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  {lst_asg.users.length !== 0
                     ? lst_asg
                        .users
                        .map((data, i) => (
                           <tr key={i}>
                              <td>{data.id}</td>
                              <td>{data.name}</td>
                              <td>{lst_asg.due_date}</td>
                              <td>{lst_asg.status}
                              </td>
                           </tr>
                        ))
                     : <table className="_se3msg">
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
                                 <p className="_main">Have a nice day</p>
                              </td>
                           </tr>
                        </tbody>
                     </table>
}
               </tbody>
               <tfoot>
                  <tr className="_pg">
                     <td>
                        <button
                           disabled={(lst_asg.current_page - 1) === 0
                           ? true
                           : false}
                           onClick={() => {
                           hdlr_asg.getList(lst_asg.current_page - 1)
                        }}>&laquo; Prev</button>
                     </td>
                     <td>
                        <button className="_active">{`${lst_asg.current_page} of ${lst_asg.total_page}`}</button>
                     </td>
                     <td>
                        <button
                           disabled={lst_asg.current_page === lst_asg.total_page
                           ? true
                           : false}
                           onClick={() => {
                           hdlr_asg.getList(lst_asg.current_page + 1)
                        }}>Next &raquo;</button>
                     </td>
                  </tr>
               </tfoot>
            </table>
         : <table className="_se _se3ada">
               <thead>
                  <tr>
                     <th>Description</th>
                     <th>Name</th>
                     <th>NPM</th>
                     <th>Created</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {lst_asg.users.length !== 0
                     ? lst_asg
                        .users
                        .map((data, i) => (
                           <tr key={i}>
                              {data.description === ""
                                 ? <td
                                       style={{
                                       fontStyle: "italic"
                                    }}>no description</td>
                                 : <td>{data.description}</td>}
                              <td>{data.name}</td>
                              <td>{data.id}</td>
                              <td>{lst_asg.due_date}
                              </td>
                              <td>
                                 <i className="fa fa-arrow-circle-down _ic3mb __wr" aria-hidden="true"></i>
                              </td>
                           </tr>
                        ))
                     : <tr className="_se3msg">
                        <td
                           style={{
                           textAlign: "center"
                        }}className="_head">Nothing To Report!</td>
                     </tr>
}
               </tbody>
               {lst_asg.users.length !== 0
                  ? <tfoot>
                        <tr className="_pg">
                           <td>
                              <button
                                 disabled={(lst_asg.current_page - 1) === 0
                                 ? true
                                 : false}
                                 onClick={() => {
                                 hdlr_asg.getList(lst_asg.current_page - 1)
                              }}>&laquo; Prev</button>
                           </td>
                           <td>
                              <button className="_active">{`${lst_asg.current_page} of ${lst_asg.total_page}`}</button>
                           </td>
                           <td>
                              <button
                                 disabled={lst_asg.current_page === lst_asg.total_page
                                 ? true
                                 : false}
                                 onClick={() => {
                                 hdlr_asg.getList(lst_asg.current_page + 1)
                              }}>Next &raquo;</button>
                           </td>
                        </tr>
                     </tfoot>
                  : null
}
            </table>
      : <table className="_se3msg">
         <tbody>
            <tr>
               <td>
                  <LoadingAnim color_left="#333" color_right="#333"/>
               </td>
            </tr>
         </tbody>
      </table>)
}

const mapStatetoProps = (state) => {
   return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
   return {
      dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
   }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourseAssignment)