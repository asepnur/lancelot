import React, {Component} from 'react'

import {LayoutGuest} from '../index.js'

class SuccessSignup extends Component {
  render() {
      return(
        <LayoutGuest>
            <div className="_bl5c">
                </div>
            <form className="_cn" action="/" method="POST">
                <div className="_ro">
                <div className="_c5m310 _c5m3o1 _c5x312">
                    <h2 className="_he3cm">Congratulation, your account has been activated!</h2>
                </div>
                </div>
                <div className="_ro">
                <div className="_c5m38 _c5m3o2 _c5x3o1 _c5x310">
                    <p className="_me3v">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                </div>

                <div className="_ro">
                    <div className="_c5m3o4 _c5m34 _c5x3o3  _c5x36">
                        <button className="_bt5m3m" type="submit">Login</button>
                    </div>
                </div>
                <div className="_ro">
                <div className="_c5m3o3 _c5m36 _c5x3o3 _c5x36">
                    <p className="_me5f"> Forgot Password? <b><a href="">here</a></b></p>
                </div>
                </div>
            </form>
            </LayoutGuest>
      )
  }
}
export default SuccessSignup