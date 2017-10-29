import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser} from '../index'

class AdminCourse extends Component {
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
            <Navbar match={this.props.match}/>
            <div className="_cn">
               <div className="_ro">
                  <div className="_pd5m3n _c5m312 _c5x312">
                     <h1 className="_he3b">Course Management</h1>
                  </div>
               </div>
            </div>
            <div className="_cn">
               <div className="_ro">
                  <div className="_c5m312 _pd5m3n _ta">
                     <ul className="_ta5l">
                        <li>
                           <Link to="#" className="" id="mycourse">My Courses</Link>
                        </li>
                        <li>
                           <Link to="#" className="" id="manage-users">Manage Courses</Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="_ro _c5m33 _c5x33 _pd5m3n _pd3n3r">
                  <div className="_c5x312 _c5m312 _pd3n3lr">
                     <div className="_se _se3a">
                        <div className="_ro _pd3n3b _ma3l3lr">
                           <div className="_c5x312 _c5m312 _pd3n3lr _ta">
                              <ul className="_ta5lh">
                                 <li>
                                    <Link to="#" to="#" className="_ta5l3a __btnmenu1">Basic</Link>
                                 </li>
                                 <li>
                                    <Link to="#" to="#" className="__btnmenu2">Assistant</Link>
                                 </li>
                                 <li>
                                    <Link to="#" to="#" className="__btnmenu3">File</Link>
                                 </li>
                                 <li>
                                    <Link to="#" to="#" className="__btnmenu4">Attandance</Link>
                                 </li>
                                 <li>
                                    <Link to="#" to="#" className="__btnmenu5">Assignment</Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
               <div className="_ro _c5m39 _c5x39 __menu1">
                  <div className="_c5x312 _c5m312 _pd3n3lr">
                     <div className="_se _se3a">
                        <div className="_ro _pd3n3b _ma3l3lr">
                           <div className="_c5x312 _c5m312 _pd3l3t ">
                              <form className="_cn" action="/" method="POST">
                                 <p className="_he3m3b">Basic Information</p>
                                 <input type="text" name="courseName" placeholder="Course Name"></input>
                                 <select>
                                    <option value="lorem1">Lorem1</option>
                                    <option value="lorem2">lorem2</option>
                                    <option value="lorem3">Lorem3</option>
                                    <option value="lorem4">lorem4</option>
                                 </select>
                                 <textarea type="text" name="courseName" placeholder="Description"></textarea>
                                 <select>
                                    <option value="lorem1">Lorem1</option>
                                    <option value="lorem2">lorem2</option>
                                    <option value="lorem3">Lorem3</option>
                                    <option value="lorem4">lorem4</option>
                                 </select>
                                 <div className="_c5m33 _c5x35 _pd3l">
                                    <button
                                       onClick={e => {
                                       e.preventDefault();
                                       this.handleUpdate(this.props.dispatcherRequest)
                                    }}
                                       className="_bt5m3b">Save</button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="_ro _c5m39 _c5x39 __menu2 ">
                  <div className="_c5x312 _c5m312 _pd3n3lr">
                     <div className="_se _se3a">
                        <div className="_ro _pd3n3b">
                           <div className="_c5m36 _c5x312">
                              <div className="_c5m35 _c5x35 _el3 _pd3m3t">
                                 <Link to="#" to="#" className="_he3b _pl3l ">Assistants</Link>
                              </div>
                              <div className="_c5m36 _c5x37 _el3">
                                 <button className="_bt5m3b" type="">+Create New</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="_c5x312 _c5m312 _pd3n3lr">
                     <div className="_se _se3a">
                        <div className="_ro _pd3n3b _ma3l3lr">
                           <table className="_tb3g">
                              <tr>
                                 <th>Assistant Name</th>
                                 <th>No. Hp</th>
                                 <th>Action</th>
                              </tr>
                           </table>
                           <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                              <table className="_tb3g">
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>0858 **** ****</td>
                                    <td>
                                       <div>
                                          <Link to="#" to="#" className="" to="#">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" to="#">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>0858 **** ****</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" to="#">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" to="#">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>0858 **** ****</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" to="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>0858 **** ****</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>0858 **** ****</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>0858 **** ****</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>0858 **** ****</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
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
               <div className="_ro _c5m39 _c5x39 __menu3 ">
                  <div className="_c5x312 _c5m312 _pd3n3lr">
                     <div className="_se _se3a">
                        <div className="_ro _pd3n3b">
                           <div className="_c5m36 _c5x312">
                              <div className="_c5m35 _c5x35 _el3 _pd3m3t">
                                 <Link to="#" className="_he3b _pl3l ">Tutorial File</Link>
                              </div>
                              <div className="_c5m36 _c5x37 _el3">
                                 <button className="_bt5m3b" type="">Upload File</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="_c5x312 _c5m312 _pd3n3lr">
                     <div className="_se _se3a">
                        <div className="_ro _pd3n3b _ma3l3lr">
                           <table className="_tb3g34">
                              <tr>
                                 <th>File</th>
                                 <th>Description</th>
                                 <th>Created At</th>
                                 <th>Action</th>
                              </tr>
                           </table>
                           <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                              <table className="_tb3g34">
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
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
               <div className="_ro _c5m39 _c5x39 __menu4 ">
                  <div className="_c5x312 _c5m312 _pd3n3lr">
                     <div className="_se _se3a">
                        <div className="_ro _pd3n3b">
                           <div className="_c5m36 _c5x312">
                              <div className="_c5m35 _c5x35 _el3 _pd3m3t">
                                 <Link to="#" className="_he3b _pl3l ">Attandance</Link>
                              </div>
                              <div className="_c5m36 _c5x37 _el3">
                                 <button className="_bt5m3b" type="">+Create New</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="_c5x312 _c5m312 _pd3n3lr">
                     <div className="_se _se3a">
                        <div className="_ro _pd3n3b _ma3l3lr">
                           <table className="_tb3g36">
                              <tr>
                                 <th>No.</th>
                                 <th>Subject</th>
                                 <th>Description</th>
                                 <th>Class</th>
                                 <th>n</th>
                                 <th>Action</th>
                              </tr>
                           </table>
                           <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                              <table className="_tb3g36">
                                 <tr>
                                    <td>1</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>A</td>
                                    <td>29</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>2</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>A</td>
                                    <td>29</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>3</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>A</td>
                                    <td>29</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>

                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>4</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum Dolor Set Amet</td>
                                    <td>A</td>
                                    <td>29</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
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
               <div className="_ro _c5m39 _c5x39 __menu5 ">
                  <div className="_c5x312 _c5m312 _pd3n3lr">
                     <div className="_se _se3a">
                        <div className="_ro _pd3n3b">
                           <div className="_c5m36 _c5x312">
                              <div className="_c5m35 _c5x35 _el3 _pd3m3t">
                                 <Link to="#" className="_he3b _pl3l ">Assignment</Link>
                              </div>
                              <div className="_c5m36 _c5x37 _el3">
                                 <button className="_bt5m3b" type="">+Create New</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="_c5x312 _c5m312 _pd3n3lr">
                     <div className="_se _se3a">
                        <div className="_ro _pd3n3b _ma3l3lr">
                           <table className="_tb3g34">
                              <tr>
                                 <th>Subject</th>
                                 <th>Due Date</th>
                                 <th>Created At</th>
                                 <th>Action</th>
                              </tr>
                           </table>
                           <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                              <table className="_tb3g34">
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>lorem Ipsum</td>
                                    <td>Tuesday, 19 September 2017, 9.00 PM</td>
                                    <td>11 September 2017 00:12:23</td>
                                    <td>
                                       <div>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-folder-open _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
                                             <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                                          </Link>
                                          <Link to="#" className="" href="">
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

const mapStatetoProps = (state) => {
   return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
   return {
      dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
   }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminCourse)