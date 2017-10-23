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
} from '../component/index.js'
export const routes = [
    {
        path: '/login',
        component: Login,
        exact: false
    }, {
        path: '/signup',
        component: Signup,
        exact: false
    }, {
        path: '/email-activation/:id',
        component: EmailActivation,
        exact: true
    }, {
        path: '/success-signup',
        component: SuccessSignup,
        exact: false
    }, {
        path: '/',
        component: Home,
        exact: true
    }, {
        path: '/forgot',
        component: Forgot,
        exact: true
    }, {
        path: '/forgot/:email',
        component: ForgotActivation,
        exact: false
    }, {
        path: '/forgot/:email/:code',
        component: Reset,
        exact: false
    }, {
        path: '/course',
        component: Course,
        exact: false
    }, {
        path: '/detcourse',
        component: DetCourse,
        exact: false
    }, {
        path: '/schedule',
        component: Schedule,
        exact: false
    }, {
        path: '/myactivity',
        component: MyActivity,
        exact: false
    }, {
        path: '/grade',
        component: Grade,
        exact: false
    }, {
        path: '/information',
        component: Information,
        exact: false
    }, {
        path: '/user',
        component: User,
        exact: false
    }
]
