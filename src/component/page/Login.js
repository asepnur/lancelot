import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import {
    LayoutGuest,
    InputContent
} from '../index.js'

class Login extends Component {
  constructor(){
    super()
    this.state = {
        email : '',
        password: '',
    }
  }
  loginAction = ()=>{
    let formData  = new FormData()
    formData.append('email',this.state.email)
    formData.append('password',this.state.password)
    fetch('http://10.112.1.222:9000/api/v1/user/signin',{
      method:'POST',
      credentials:'include',
      crossDomain: true,
      body: formData
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  onChangeState = (e)=>{
    const target = e.target

    this.setState({
      [target.name]:target.value,
    })
  }
  render() {
    return (
      <LayoutGuest>
      <div className="_bl5b">
      </div>
      <form className="_cn"  method="POST">
        <div className="_ro">
          <div className="_c5m38 _c5m3o5 _c5x312">
            <h2 className="_he3m">Sign In</h2>
          </div>
        </div>
        <div className="_ro">
          <InputContent classWraper="_c5m36 _c5m3o5 _c5x312" type="text" name="email" placeholder="Email" onChangeState={this.onChangeState}/>
        </div>
        <div className="_ro">
          <div className="_c5m36 _c5m3o5 _c5x312">
          <div className="_cn5g">
            <input type="password" name="password" placeholder="Password" onChange={this.onChangeState}/>
            <i className="fa fa-eye"></i>
          </div>
        </div>  
        </div>
        <div className="_ro">
          <div className="_c5m33 _c5m3o5 _c5x36">
          <p className="_me5t" >Forgot password? <b><Link to={'/forgot'}>here</Link></b>
          </p>
        </div>
        <div className="_c5m33  _c5x36">
          <button className="_bt5m3m _pl5r" type="button" onClick={this.loginAction} >Login</button>
        </div>
        </div>
        <div className="_ro">
          <div className="_c5m3o5 _c5m36 _c5x3o2 _c5x38">
            <p className="_me5f"> Don't Have an account? <b><Link to={`/signup`}>Signup</Link></b></p>
          </div>
        </div>
    </form>
  </LayoutGuest>
    );
  }
}

export default Login