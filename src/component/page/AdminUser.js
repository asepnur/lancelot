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
      const value = data
        .data
        .map(data => ({id: data.id, name: data.name, email: data.email, status: data.status}))
      this.setState({data: value})
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
                <h1 className="_he3b">Create User</h1>
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
              <Users  data={data} />
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
          <div className="_ro _pd3n3b">
            <div className="_c5m36 _c5x312">
              <div className="_c5m33 _c5x33 _pd3m3t">
                <a className="_he3b _pl3l">Users</a>
              </div>
              <div className="_c5m36 _c5x36">
                <button className="_bt5m3b" type="">Add user</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_c5x312 _c5m312 _pd5m3n">
        <div className="_se _se3a">
          <div className="_ro _pd3n3b _ma3l3lr">
            <table className="_tb3g">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Account Status</th>
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
                    .map((data, i) => (
                      <tr key={i}>
                        <td>{data.email}</td>
                        <td>
                          <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td>
                          <Link to={'/'}>
                            <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                          </Link>
                          <Link to={'/'}>
                            <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                          </Link>
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
          <div className="_ro _pd3n3b">
            <div className="_c5m36 _c5x312">
              <div className="_c5m33 _c5x33 _pd3m3t">
                <a className="_he3b _pl3l">Roles</a>
              </div>
              <div className="_c5m36 _c5x36">
                <button className="_bt5m3b" type="">Add role</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_c5x312 _c5m312 _pd5m3n">
        <div className="_se _se3a">
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
                        <Link to={'/'}>
                          <i className="fa fa-pencil-square-o _ic3xs" aria-hidden="true"></i>
                        </Link>
                        <Link to={'/'}>
                          <i className="fa fa-times _ic3xs" aria-hidden="true"></i>
                        </Link>
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