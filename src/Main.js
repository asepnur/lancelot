import React from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import App from './App'
import { Login, Signup, Home, EmailActivation, SuccessSignup } from './component/index.js'
const Main = () => {
    return (
        <App>
            <Router>
                <Switch>
                    <Route exact={true} path='/email-activation/:id' component={EmailActivation}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={Signup}/>
                    <Route exact={true} path='/' component={Home}/>
                    <Route path='/success-signup' component={SuccessSignup}/>
                    <Route exact={true} path='/forgot' component={Forgot} />
                    <Route exact={true} path='/forgot/:email' component={ForgotActivation} />
                    <Route exact={true} path='/reset/:email/:code' component={Reset} />
                </Switch>
            </Router>
        </App>
    )
}
export default Main