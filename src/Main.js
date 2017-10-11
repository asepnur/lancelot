import React from 'react'
import { Switch, Route } from 'react-router-dom'

//import Auth from './Auth.js'
import {
    EmailActivation,
    Forgot,
    Login,
    Signup,
    Reset,
    SuccessSignup
} from './component/index.js'
const Main = ()=>{
    return(
        <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/forgot' component={Forgot} />
                <Route path='/reset' component={Reset} />
                <Route path='/email-activation' component={EmailActivation} />
                <Route path='/success-signup' component={SuccessSignup} />
        </Switch>
    )
}
export default Main