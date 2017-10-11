import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import {
    LayoutGuest,
    InputContent
} from '../index.js'

class EmailActivation extends Component {
  render() {
      return(
          <LayoutGuest>
        <div className="_bl5c">
        </div>
      <form className="_cn" action="/" method="POST">
        <div className="_ro">
          <div className="_c5m310 _c5m3o1 _c5x312">
            <h2 className="_he3cm">Thank you for your registration!</h2>
          </div>
        </div>
        <div className="_ro">
          <div className="_c5m38 _c5m3o2 _c5x3o1 _c5x310">
              <p className="_me3v">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
        <div className="_ro">
            <InputContent classWraper="_c5m36 _c5m3o3 _c5x3o1 _c5x310" type="text" name="code" placeholder="Activation Code"/>
        </div>
        <div className="_ro">
            <div className="_c5m3o3 _c5m33 _c5x3o3  _c5x36">
                <button className="_bt5m3m" type="submit">Activation</button>
            </div>
        </div>
        <div className="_ro">
          <div className="_c5m3o3 _c5m36 _c5x3o3 _c5x36">
            <p className="_me5f"> Have an account? <b><Link to={'/login'}>Login</Link></b></p>
          </div>
        </div>
    </form>
  </LayoutGuest>
      )
  }
}

export default EmailActivation