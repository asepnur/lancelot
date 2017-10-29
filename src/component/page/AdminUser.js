//------------------------------------------------------------------------------------------------;
//                                          Admin Users
// -----------------------------------------------------------------------------------------------;
import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'

import {actorRequest} from '../../action/action'
import {Navbar, LayoutUser} from '../index.js'

class AdminUser extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          id: '',
          name: '',
          email: '',
          status: ''
        }
      ]
    }
  }
  componentDidMount() {
    const host = `meikoapp.herokuapp.com`;
    const base_url = `https://` + host;
    fetch(base_url + '/api/admin/v1/user?pg=1&ttl=10', {
      method: 'GET',
      credentials: 'include',
      crossDomain: true
    }).then((res) => {
      return res.json()
    }).then((data) => {
      if(data.code === 200){
      this.setState({data: data.data})
      }
    })
  }

  handleUsersMenu = (e) => {
    e.preventDefault()

    let users = document.getElementById('users')
    let roles = document.getElementById('roles')
    let users_content = document.getElementById('users-content')
    let roles_content = document.getElementById('roles-content')

    let dom = ReactDOM.findDOMNode
    dom(users).className = '_ta5l3a'
    dom(roles).className = ''
    dom(users_content).style.display = 'block'
    dom(roles_content).style.display = 'none'

  }
  handleRolesMenu = (e) => {
    e.preventDefault()
    let users = document.getElementById('users')
    let roles = document.getElementById('roles')

    let users_content = document.getElementById('users-content')
    let roles_content = document.getElementById('roles-content')
    let dom = ReactDOM.findDOMNode
    dom(users).className = ''
    dom(roles).className = '_ta5l3a'
    dom(users_content).style.display = 'none'
    dom(roles_content).style.display = 'block'

  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleToCreateUser = () =>{
    window.location = '/admin/users/create';
  }
  handleDelete = (dispatcherRequest, id) => {
    const host = `meikoapp.herokuapp.com`;
    const base_url = `https://` + host;
    fetch(base_url + '/api/admin/v1/user/' + id, {
      method: 'POST',
      credentials: 'include',
      crossDomain: true
    }).then((res) => {
      return res.json()
    }).then((data) => {
      data.code === 200
        ? dispatcherRequest(true,200,'')
        : dispatcherRequest(true,401,data.error)
    })
  }
  handleChangeStatus = (dispatcherRequest, id, status)=>{
    const value = status === 'active'? 'inactive': 'active'
    let formData = new FormData()
    formData.append('status', value )

    const host = `meikoapp.herokuapp.com`;
    const base_url = `https://` + host;
    fetch(base_url + '/api/admin/v1/user/' + id + '/activate', {
        method: 'POST',
        credentials: 'include',
        crossDomain: true,
        body: formData
    }).then((res) => {
        return res.json()
    }).then((data) => {
        data.code === 200
            ? window.location = '/admin/users'
            : dispatcherRequest(true, 401, data.error)
    })
  }
//------------------------------------------------------------------------------------------------;
//                                          Render Element
// -----------------------------------------------------------------------------------------------;
  render() {
    const {is_logged_in} = this.props
    const data = this.state.data
    return (is_logged_in
      ? <LayoutUser>
          <Navbar match={this.props.match}/>
          <div className="_cn">
            <div className="_ro">
              <div className="_pd5m3n _c5m312 _c5x312">
                <h1 className="_he3b">User Management</h1>
              </div>
            </div>
          </div>
          <div className="_cn">
            <div className="_ro">
              <div className="_c5m312 _pd5m3n _ta">
                <ul className="_ta5l">
                  <li>
                    <Link onClick={this.handleUsersMenu} id="users" to={'#'} className="_ta5l3a">Users</Link>
                  </li>
                  <li>
                    <Link onClick={this.handleRolesMenu} id="roles" to={'#'} className="">Roles</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div id="users-content">
              <Users  data={data} handleToCreateUser={this.handleToCreateUser} handleDelete={this.handleDelete} handleChangeStatus={this.handleChangeStatus}/>
            </div>
            <div id="roles-content" style={{display:'none'}}>
              <Roles  data={data} />
            </div>
          </div>
        </LayoutUser>
      : <Redirect to={'/login'}/>)
  }
}
//------------------------------------------------------------------------------------------------;
//                                          Users Menu;
// -----------------------------------------------------------------------------------------------;

const Users = (props) => {
  return (
    <div className="_ro __tab1">
      <div className="_c5x312 _c5m312 _pd5m3n">
        <div className="_se _se3a">
            <div className="_ro">
              <div className="_c5x310 _c5m311 ">
                  <h1 className="_he3m3b">List Users</h1>
              </div>
              <div className="_c5x32 _c5m31 ">
                  <button onClick={ props.handleToCreateUser} className="_bt5m3b"><i className="fa fa-plus" aria-hidden="true"></i></button>
              </div>
            </div>
          <div className="_ro _pd3n3b _ma3l3lr">
            <table className="_tb3g">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
              <table className="_tb3g">
                <tbody>
                  {props
                    .data
                    .map((data) => (
                      <tr key={data.id}>
                        <td>{data.email}</td>
                        <td>
                          <div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked={data.status ==='active' ? true:false} onClick={ e => { e.preventDefault(); props.handleChangeStatus(props.dispatcherRequest, data.id, data.status)}} />
                                <span className="slider round"></span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <div align="center">
                            <Link to={'/admin/users/update/' + data.id}>
                              <i className="fa fa-pencil-square _ic3mb _ma3lr" aria-hidden="true"></i> 
                            </Link>
                            <Link to={'#'} onClick={
                              e => {
                                e.preventDefault();
                                props.handleDelete(props.dispatcherRequest, data.id)
                              }
                            }>
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
  )
}
//------------------------------------------------------------------------------------------------;
//                                          Roles Menu
// -----------------------------------------------------------------------------------------------;
const Roles = (props) => {
  return (
    <div className="_ro __tab2">
      <div className="_c5x312 _c5m312 _pd5m3n">
        <div className="_se _se3a">
          <div className="_ro">
            <div className="_c5x310 _c5m311 ">
                <h1 className="_he3m3b">Roles</h1>
            </div>
            <div className="_c5x32 _c5m31 ">
                <button className="_bt5m3b"><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
          </div>
          <div className="_ro _pd3n3b _ma3l3lr">
            <table className="_tb3g">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Role Group</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
            <div className="_c5m312 _c5x312 _pd3n3lr _ov3y _pdx3n">
              <table className="_tb3g">
                <tbody>
                {props
                  .data
                  .map((data, i) => (
                    <tr key={i}>
                      <td>{data.id}</td>
                      <td>
                        {data.status}
                      </td>
                      <td>
                      <div align="center">
                        <Link to={'/'}>
                          <i className="fa fa-pencil-square _ic3mb _ma3lr" aria-hidden="true"></i> 
                        </Link>
                        <Link to={'/'}>
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
  )
}
//------------------------------------------------------------------------------------------------;
//                                   state and dispatch to props
// -----------------------------------------------------------------------------------------------;
const mapStatetoProps = (state) => {
  return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
  return {
    dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminUser)