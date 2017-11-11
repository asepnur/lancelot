import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser} from '../index'

import {Pro as base_url} from '../../env/Environment'

const ListCourse = (props) => {
   return (
      <div className="_cn">
         <div className="_ro _c5m312 _c5x132 _pd3n3r ">
            <div className="_c5x312 _c5m312 _pd5m3n _pd3n3l">
               <div className="_se _se3a">
                  <div className="_ro">
                     <div className="_c5x310 _c5m311 ">
                        <h1 className="_he3m3b">List Courses</h1>
                     </div>
                     <div className="_c5x32 _c5m31 ">
                        <button
                           className="_bt5m3b"
                           onClick={e => {
                           e.preventDefault();
                           props.handleRedirect()
                        }}>
                           <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                     </div>
                  </div>
                  <div className="_ro _pd3n3b _ma3l3lr">
                     <table className="_tb3g34">
                        <thead >
                           <tr>
                              <th>No.</th>
                              <th>Subject</th>
                              <th>Class</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                     </table>
                     <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
                        <table className="_tb3g34">
                           <tbody>
                              {props
                                 .data
                                 .map((data, i) => (
                                    <tr key={i + 1}>
                                       <td>{i}</td>
                                       <td>{data.name}</td>
                                       <td>{data.class}</td>
                                       <td>
                                          <div align="center">
                                             <Link to={'/admin/course/manage/' + data.schedule_id}>
                                                <i className="fa fa-pencil-square _ic3mb _ma3lr" aria-hidden="true"></i>
                                             </Link>
                                             <Link
                                                to={'#'}
                                                onClick={e => {
                                                e.preventDefault();
                                                props.handleDelete(props.dispatcherRequest, data.schedule_id)
                                             }}>
                                                <i className="fa fa-window-close _ic3mr _ma3lr" aria-hidden="true"></i>
                                             </Link>
                                          </div>
                                       </td>
                                    </tr>
                                 ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
class AdminCourse extends Component {
   constructor() {
      super()

      this.state = {
         data: [
            {
               id: '',
               name: '',
               class: '',
               start_time: '',
               end_time: '',
               day: '',
               status: '',
               schedule_id:''
            }
         ]
      }
   }
   componentDidMount() {
      fetch(base_url + '/api/admin/v1/course?pg=1&ttl=10', {
         method: 'GET',
         credentials: 'include',
         crossDomain: true
      }).then((res) => {
         return res.json()
      }).then((data) => {
         if (data.code === 200) {
            this.setState({data: data.data})
         }
      })
   }
   handleRedirect = () => {
      window.location = '/admin/create/course'
   }
   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }
   handleRedirectUpdate = (id) => {
      window.location = '/admin/course/manage/' + id
   }

   handleDelete = (dispatcherRequest, id) => {
      const host = `meikoapp.herokuapp.com`;
      const base_url = `https://` + host;
      fetch(base_url + '/api/admin/v1/course/'+ id +'/delete', {
         method: 'POST',
         credentials: 'include',
         crossDomain: true
      }).then((res) => {
         return res.json()
      }).then((data) => {
         if(data.code === 200){
            dispatcherRequest(true, 200, '')
            let val = this.state.data.filter((data,i)=> data.schedule_id !== id? {
               id: data.id,
               name: data.name,
               class: data.class,
               start_time: data.start_time,
               end_time: data.end_time,
               day: data.day,
               status: data.status,
               schedule_id: data.schedule_id
            } : null )
            this.setState({data: val})
         }else{
            dispatcherRequest(true, 401, data.error)
         }
      })
   }

   render() {
      const {is_logged_in} = this.props
      const data = this.state.data
      return (is_logged_in
         ? <LayoutUser>
               <Navbar match={this.props.match}/>
               <div className="_cn">
                  <div className="_ro">
                     <div className="_pd5m3n _c5m312 _c5x312">
                        <h1 className="_he3b">Courses Management</h1>
                     </div>
                  </div>
               </div>
               <div className="_cn">
                  <ListCourse
                     data={data}
                     handleRedirect={this.handleRedirect}
                     handleRedirectUpdate={this.handleRedirectUpdate}
                     handleDelete={this.handleDelete}
                     dispatcherRequest={this.props.dispatcherRequest}/>
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