import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser} from '../index'

import {base_url} from '../../env/Environment'

const SideBar = () => {
  return (
    <div className="_ro _c5m33 _c5x33 _pd5m3n _pd3n3r">
      <div className="_c5x312 _c5m312 _pd3n3lr">
        <div className="_se _se3a">
          <div className="_ro _pd3n3b _ma3l3lr">
            <div className="_c5x312 _c5m312 _pd3n3lr _ta">
              <ul className="_ta5lh">
                <li>
                  <Link to="#" className="_ta5l3a __btnmenu1">Basic</Link>
                </li>
                <li>
                  <Link to="#" className="__btnmenu2">Assistant</Link>
                </li>
                <li>
                  <Link to="#" className="__btnmenu3">File</Link>
                </li>
                <li>
                  <Link to="#" className="__btnmenu4">Attandance</Link>
                </li>
                <li>
                  <Link to="#" className="__btnmenu5">Assignment</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const SettingCourse = (props) => {
  return (
    <div className="_ro _c5m39 _c5x39 __menu1">
      <div className="_c5x312 _c5m312 _pd3n3lr">
        <div className="_se _se3a">
          <div className="_ro _pd3n3b _ma3l3lr">
            <div className="_c5x312 _c5m312 _pd3l3t ">
              <form className="_cn" action="/" method="POST">
                <p className="_he3m3b">Basic Information</p>
                <input type="text" value={props.data.name} onChange={props.handleChange} name="name" placeholder="Course Name"></input>
                <input type="text" value={props.data.year} onChange={props.handleChange} name="year" placeholder="Year"></input>
                <input type="text" value={props.data.semester} onChange={props.handleChange} name="semester" placeholder="Semester"></input>
                <input type="text" value={props.data.ucu} onChange={props.handleChange} name="ucu" placeholder="SKS"></input>
                <input type="text" value={props.data.class} onChange={props.handleChange} name="class" placeholder="Class"></input>
                <input type="text" value={props.data.day} onChange={props.handleChange} name="day" placeholder="Day"></input>
                <input type="text" value={props.data.place_id} onChange={props.handleChange} name="place_id" placeholder="Place"></input>
                <textarea type="text" name="description" value={props.description} onChange={props.handleChange} placeholder="Description"></textarea>

                <div className="_c5m33 _c5x35 _pd3l">
                  <button
                    onClick={e => {
                    e.preventDefault();
                    props.handleUpdate(props.dispatcherRequest)
                  }}
                    className="_bt5m3b">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const Assistant = () => {
  return (
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
  )
}
const TutorialFile = () => {
  return (
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const Attendance = () => {
  return (
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
  )
}
const Assignment = () => {
  return (
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
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
   )
}

class AdminManageCourse extends React.Component {
  constructor() {
    super()
    this.state = {
      "id": "",
      "name": "",
      "description": "",
      "ucu": "",
      "status": "",
      "semester": "",
      "year": "",
      "start_time": "",
      "end_time": "",
      "class": "",
      "day": "",
      "place_id": "",
      "schedule_id": ""
    }
  }
  componentDidMount() {
    let id = this.props.match.params.id
    //const host = `meikoapp.herokuapp.com`;
    //const base_url = `https://` + host;
    fetch(base_url + '/api/admin/v1/course/' + id, {
      method: 'GET',
      credentials: 'include',
      crossDomain: true
    }).then((res) => {
      return res.json()
    }).then((data) => {
      if (data.code === 200) {
        this.setState(data.data)
      }
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleUpdate = (dispatcherRequest)=>{
    let formData = new FormData()
    formData.append('id', this.state.id)
    formData.append('name', this.state.name)
    formData.append('ucu', this.state.ucu)
    formData.append('semester', this.state.semester)
    formData.append('year', this.state.year)
    formData.append('day', this.state.day)
    formData.append('start_time', this.state.start_time)
    formData.append('end_time', this.state.end_time)
    formData.append('class', this.state.class)
    formData.append('place', this.state.place)
    formData.append('status', this.state.status)
    formData.append('description', this.state.description)

    //const host = `meikoapp.herokuapp.com`;
    //const base_url = `https://` + host;
    fetch(base_url + '/api/admin/v1/course/' + this.state.schedule_id, {
        method: 'POST',
        credentials: 'include',
        crossDomain: true,
        body: formData
    }).then((res) => {
        return res.json()
    }).then((data) => {
        data.code === 200
            ? window.location = '/admin/course'
            : dispatcherRequest(true, 401, data.error)
    })
  }
  handleBasic = () => {

  }
  handleAssignment = () => {

  }
  render() {
    const {is_logged_in} = this.props
    const data = this.state
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
            <div className="_ro">
              <div className="_c5m312 _pd5m3n _ta">
                <ul className="_ta5l">
                  <li>
                    <Link to={'/admin/course'} id="users">List Courses</Link>
                  </li>
                  <li>
                    <Link id="roles" to={'#'} className="_ta5l3a">Update Course</Link>
                  </li>
                </ul>
              </div>
            </div>
            <SideBar/>
            <SettingCourse data={data} handleChange={this.handleChange} handleUpdate={this.handleUpdate}/>
          </div>
        </LayoutUser>
      : <Redirect to={'/login'}/>)
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminManageCourse)