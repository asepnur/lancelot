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
    User,
    AdminCrtUser,
    AdminUser,
    AdminCrtRole,
    AdminCrtInfo,
    AdminCourse,
    AdminCrtAssign,
    AdminCrtAssis,
    AdminCrtAttand,
    Test
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
                        <Route path='/admin/users/create' component={AdminCrtUser} />
                        <Route path='/admin/users/role' component={AdminCrtRole} />
                        <Route path='/admin/users' component={AdminUser} />
                        <Route path='/admin/information/create' component={AdminCrtInfo} />
                        <Route path='/admin/course/assistant/create' component={AdminCrtAssis} />
                        <Route path='/admin/course/assignment/create' component={AdminCrtAssign} />
                        <Route path='/admin/course/attandance/create' component={AdminCrtAttand} />
                        <Route path='/admin/course' component={AdminCourse} />
                        <Route path='/test' component={Test}/>
                    </Switch>
                </Router>
            </Initialize>
        </Provider>
    )
}
export default Main