import React from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import {Initialize, store} from './config/index'
import {
    Login,
    Signup,
    Home,
    EmailActivation,
    SuccessSignup,
    Forgot,
    ForgotActivation,
    Reset,
    Course,
    DetCourse,
    Schedule,
    MyActivity,
    Grade,
    Information,
    User
} from './component/index.js'

const Main = () => {
    return (
        <Provider store={store}>
            <Initialize>
                <Router>
                    <Switch>
                        <Route exact={true} path='/email-activation/:id' component={EmailActivation}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/signup' component={Signup}/>
                        <Route exact={true} path='/' component={Home}/>
                        <Route path='/success-signup' component={SuccessSignup}/>
                        <Route exact={true} path='/forgot' component={Forgot}/>
                        <Route exact={true} path='/forgot/:email' component={ForgotActivation}/>
                        <Route exact={true} path='/reset/:email/:code' component={Reset}/>
                        <Route path='/course' component={Course}/>
                        <Route path='/detcourse' component={DetCourse}/>
                        <Route path='/schedule' component={Schedule}/>
                        <Route path='/myactivity' component={MyActivity}/>
                        <Route path='/grade' component={Grade}/>
                        <Route path='/information' component={Information}/>
                        <Route path='/user' component={User}/>
                    </Switch>
                </Router>
            </Initialize>
        </Provider>
    )
}
export default Main