import React from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import App from './App'
import {Login, Signup, Home} from './component/index.js'
const Main = () => {
    return (
        <App>
            <Router>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/home' component={Home}/>
                </Switch>
            </Router>
        </App>
    )
}
export default Main