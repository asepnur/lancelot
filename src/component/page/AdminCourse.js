/*----------------------------------------------------------------
                        ADMIN COURSE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse, LoadingAnim} from '../index'

class AdminCourse extends Component {
   constructor(props) {
      super(props)
      this.state = {
         active_menu: 'btn_assign',
         assignments: {},
         assignment_loaded: false,
         schedule_id: this.props.match.params.id,
         detail_assignment: {},
         detail_loaded: false,
         assignment_id: ''
      }
   }
   componentDidMount() {
      this.handleGetListAssignment(1)
   }
   /*------------------------------------------------------------
                              HANDLE REQUEST
   -------------------------------------------------------------*/
   handleGetListAssignment = (page) => {
      axios.get(`/api/admin/v1/assignment?ttl=10&pg=${page}&schedule_id=${this.state.schedule_id}`, {
         validateStatus: (status) => {
            return status === 200
         }
      }).then((res) => {
         if (res.data.code === 200) {
            this.setState({assignments: res.data.data, assignment_loaded: true})
         } else {
            this.setState({assignments: {}, assignment_loaded: true})
         }
      }).catch((err) => {
         console.log(err)
      })
   }
   handleDetailAssignment = (page) => {
      axios.get(`/api/admin/v1/assignment/${this.state.assignment_id}?ttl=10&pg=${page}`, {
         validateStatus: (status) => {
            return status === 200
         }
      }).then((res) => {
         if (res.data.code === 200) {
            this.setState({detail_assignments: res.data.data, detail_loaded: true})
         } else {
            this.setState({detail_assignments: {}, detail_loaded: true})
         }
      }).catch((err) => {
         console.log(err)
      })
   }
   render() {
      const {is_logged_in} = this.props
      const hdlr_asg = {
         getList: this.handleGetListAssignment
      }
      const lst_asg = {
         schedule_id : this.state.schedule_id,
         asgs: this.state.assignments
      }
      const dt_nav = {
         schedule_id: this.state.schedule_id
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
                                 <li className="_active">
                                    <Link to={`/admin/course/${this.state.schedule_id}`} >Mobile Computing</Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <AdminNavCourse
                              dt_nav={dt_nav}
                           active_menu={this.state.active_menu}
                           handleActive={this.handleChangeActiveMenu}/>
                        <div className="_c5x312 _c5m310  _pd3l3lr __ass">
                           <div className="_ca">
                              <div className="_ca3h">
                                 <div className="_c5m310 _c5x310 _he3b">List assignment</div>
                                 <div className="_c5m32 _c5x32">
                                    <Link to={`/admin/course/${this.state.schedule_id}/create-assignment`} >
                                       <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    </Link>
                                 </div>
                              </div>

                              <ListAssignment
                                 lst_asg={lst_asg}
                                 is_loaded={this.state.assignment_loaded}
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
      ? <table className="_se _se3ada">
            <thead>
               <tr>
                  <th>Subject</th>
                  <th>Due</th>
                  <th>Created</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {lst_asg.asgs.assignments.length > 0
                  ? lst_asg.asgs
                     .assignments
                     .map((data, i) => (
                        <tr key={i}>
                           <td><Link to={`/admin/course/${lst_asg.schedule_id}/asg/${data.id}`}>{data.name}</Link></td>
                           <td>{data.due_date}</td>
                           <td>{data.updated_at}</td>
                           <td>
                              <Link to={`/admin/course/${lst_asg.schedule_id}/uptate-assignment/${data.id}`}><i className="fa fa-pencil-square-o _ic3b __wr" aria-hidden="true"></i></Link>
                              <Link to={data.url}>
                                 <i className="fa fa-arrow-circle-down _ic3b" aria-hidden="true"></i>
                              </Link>
                              <i className="fa fa-trash _ic3 __wr" aria-hidden="true"></i>
                           </td>
                        </tr>
                     ))
                  : null}
            </tbody>
            <tfoot>
               <tr className="_pg">
                  <td>
                     <button
                        disabled={(lst_asg.asgs.page - 1) === 0
                        ? true
                        : false}
                        onClick={() => {
                        hdlr_asg.getList(lst_asg.asgs.page - 1,)
                     }}>&laquo; Prev</button>
                  </td>
                  <td>
                     <button
                        disabled={(lst_asg.asgs.page - 1) === 0
                        ? true
                        : false}
                        className="_active">{`${lst_asg.asgs.page} of ${lst_asg.asgs.total_page}`}</button>
                  </td>
                  <td>
                     <button
                        disabled={lst_asg.asgs.page === lst_asg.asgs.total_page
                        ? true
                        : false}
                        onClick={() => {
                        hdlr_asg.getList(lst_asg.asgs.page + 1,)
                     }}>Next &raquo;</button>
                  </td>
               </tr>
            </tfoot>
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourse)