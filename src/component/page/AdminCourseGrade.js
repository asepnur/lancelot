/*----------------------------------------------------------------
                        ADMIN COURSE GRADE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import { Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavCourse, LoadingAnim} from '../index'

class AdminCourseGrade extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_menu: 'btn_grade',
            schedule_id: this.props.match.params.id,
            assignments: {},
        }
    }
    componentDidMount(){
        this.handleGetGrade(1)
    }
    handleGetGrade = (page) =>{
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
    
    render() {
        const {is_logged_in, modules_access} = this.props
        const hdlr_asg = {
           getList: this.handleGetListAssignment,
           On: this.modalDeleteOn,
           Off: this.modalDeleteOff,
           Action: this.handelDeleteAssignment
        }
        const lst_asg = {
           schedule_id: this.state.schedule_id,
           asgs: this.state.assignments,
           modules_access: modules_access
        }
        const asg_mdl = {
           read: this.state.asg_read,
           create: this.state.asg_create,
           update: this.state.asg_update,
           delete: this.state.asg_delete,
           xcreate: this.state.asg_xcreate,
           xread: this.state.asg_xread,
           xupdate: this.state.asg_xupdate,
           xdelete: this.state.asg_xdelete
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
                                                <a href="">Home</a>
                                            </li>
                                            <li className="_active">
                                                <a href="">Mobile Computing</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavCourse active_menu={this.state.active_menu}/>
                                <div className="_c5x312 _c5m310 _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">Grade</div>
                                        </div>
                                        <ListAssignment
                                       asg_mdl={asg_mdl}
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
const ListAssignment = (props)=>{
    const {is_loaded, lst_asg, hdlr_asg, asg_mdl} = props
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
                   ? lst_asg
                      .asgs
                      .assignments
                      .map((data, i) => (
                         <tr key={i}>
                            <td>
                               <Link to={`/admin/course/${lst_asg.schedule_id}/grade/${data.id}`}>{data.name}</Link>
                            </td>
                            <td>{data.due_date}</td>
                            <td>{data.updated_at}</td>
                            <td>
                               {asg_mdl.update === "UPDATE" || asg_mdl.xupdate !== "XUPDATE"
                                  ? <Link to={`/admin/course/${lst_asg.schedule_id}/grade/${data.id}`}>
                                        <i className="fa fa-bar-chart _ic3mb __wr" aria-hidden="true"></i>
                                     </Link>
                                  : null}
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
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message, modules_access: state.modules_access}
 }
 const mapDispatchtoProps = (dispatch) => {
    return {
       dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
       dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
 }
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourseGrade)