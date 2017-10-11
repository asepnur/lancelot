import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {InputContent,
    LayoutGuest
} from '../index.js'

class Signup extends Component {
  render() {
      return(
        <LayoutGuest>
            <div className="_bl5b">
            </div>
            <form className="_cn" action="/" method="POST">
                <div className="_ro">
                    <div className="_c5m37 _c5m3o5 _c5x312">
                        <h2 className="_he3m">Sign Up</h2>
                    </div>
                </div>
                <div className="_ro">
                    <InputContent classWraper="_c5m33 _c5m3o5 _c5x35" type="text" name="fName" placeholder="First Name" />
                    <InputContent classWraper="_c5m33 _c5x37" type="text" name="lName" placeholder="Last Name" />
                </div>
                <div className="_ro">
                    <InputContent classWraper="_c5m36 _c5m3o5 _c5x312" type="text" name="id" placeholder="NPM" />
                </div>
                <div className="_ro">
                    <InputContent classWraper="_c5m36 _c5m3o5 _c5x312" type="text" name="email" placeholder="Email" />
                </div>
                <div className="_ro">
                    <div className="_c5m36 _c5m3o5 _c5x312">
                        <div className="_cn5g">
                            <input type="password" name="password" placeholder="Password"/>
                            <i className="fa fa-eye"></i>
                        </div>
                    </div>  
                </div>
                <div className="_ro">
                    <div className="_c5m33 _c5m3o5 _c5x36">
                        <p className="_me5t" >By Signing up, you agree to our 
                            <b className="itl"> terms of use </b> 
                            and <b className="itl">policy</b>
                        </p>
                    </div>
                    <div className="_c5m33  _c5x36">
                        <button className="_bt5m3m _pl5r" type="submit">Sign Up</button>
                    </div>
                </div>
                <div className="_ro">
                    <div className="_c5m3o5 _c5m36 _c5x3o3 _c5x36">
                        <p className="_me5f"> Have an account? <b><Link to={`/login`}>Login</Link></b></p>
                    </div>
                </div>
            </form>
        </LayoutGuest>
      )
    }
  }
  export default Signup