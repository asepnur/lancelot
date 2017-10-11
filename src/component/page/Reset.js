import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import {
    LayoutGuest,
    InputContent
} from '../index.js'

class Reset extends Component {
  render() {
      return(
          <LayoutGuest>
        <div className="_bl5c">
        </div>
      <form className="_cn" action="/" method="POST">
        <div className="_ro">
          <div className="_c5m310 _c5m3o3 _c5x3o1 _c5x310">
            <h2 className="_he3m">Reset Password</h2>
          </div>
        </div>
        <div className="_ro">
          <InputContent classWraper="_c5m36 _c5m3o3 _c5x3o1 _c5x310" type="password" name="password" placeholder="Enter new password" />
        </div>
        <div className="_ro">
          <InputContent classWraper="_c5m36 _c5m3o3 _c5x3o1 _c5x310" type="password" name="rePassword" placeholder="Re-enter new password" />
        </div>
        <div className="_ro">
            <div className="_c5m3o3 _c5m33 _c5x3o1  _c5x35">
                <button className="_bt5m3m _pl5r" type="submit">Send</button>
            </div>
        </div>
        <div className="_ro">
          <div className="_c5m3o3 _c5m36 _c5x3o2 _c5x38">
            <p className="_me5f">Remember your password? <b><Link to={'/login'}>Login</Link></b></p>
          </div>
        </div>
    </form>
  </LayoutGuest>
      )
  }
}
export default Reset