import React from 'react'
import { Switch, Route } from 'react-router-dom'

//import Auth from './Auth.js'
import {
    EmailActivation,
    Forgot,
    ForgotActivation,
    Login,
    Signup,
    Reset,
    SuccessSignup,
    Home,
    Course,
    DetCourse,
    Schedule,
    MyActivity,
    Grade,
    Information,
    User,
    Test
} from './component/index.js'
const Main = ()=>{
    return(
        <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route exact={true} path='/forgot' component={Forgot} />
                <Route exact={true} path='/forgot/:email' component={ForgotActivation} />
                <Route exact={true} path='/reset/:email/:code' component={Reset} />
                <Route path='/email-activation' component={EmailActivation} />
                <Route path='/success-signup' component={SuccessSignup} />
                <Route path='/home' component={Home} />
                <Route path='/course' component={Course} />
                <Route path='/detcourse' component={DetCourse} />
                <Route path='/schedule' component={Schedule} />
                <Route path='/myactivity' component={MyActivity} />
                <Route path='/grade' component={Grade} />
                <Route path='/information' component={Information} />  
                <Route path='/user' component={User} />                
                <Route path='/test' component={Test} />
        </Switch>
    )
}
export default Main