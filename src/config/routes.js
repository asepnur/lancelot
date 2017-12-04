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
    CourseDetail,
    Schedule,
    MyActivity,
    AssignmentDetail,
    Grade,
    Information,
    User,
    AdminCrtUser,
    AdminUpdateUser,
    AdminUser,
    AdminCrtRole,
    AdminCrtInfo,
    AdminCourse,
    AdminCrtAssign,
    AdminCrtAssis,
    AdminCrtAttand,
    AdminCrtCourse,
    AdminManageCourse,
    AdminManageAssignment
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
        exact: true
    }, {
        path: '/course/:id',
        component: CourseDetail,
        exact: true
    }, {
        path: '/schedule',
        component: Schedule,
        exact: false
    }, {
        path: '/assignment',
        component: MyActivity,
        exact: true
    }, {
        path: '/assignment/:id',
        component: AssignmentDetail,
        exact: true
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
    }, {
        path: '/admin/users/create',
        component: AdminCrtUser,
        exact: false
    }, 
    {
        path: '/admin/users/update/:id',
        component: AdminUpdateUser,
        exact: true
    }, {
        path: '/admin/users/role',
        component: AdminCrtRole,
        exact: false
    }, {
        path: '/admin/users',
        component: AdminUser,
        exact: false
    }, {
        path: '/admin/information/create',
        component: AdminCrtInfo,
        exact: false
    }, {
        path: '/admin/course/assistant/create',
        component: AdminCrtAssis,
        exact: true
    }, {
        path: '/admin/course/assignment/create',
        component: AdminCrtAssign,
        exact: true
    }, {
        path: '/admin/course/attandance/create',
        component: AdminCrtAttand,
        exact: true
    }, {
        path: '/admin/course',
        component: AdminCourse,
        exact: true
    }, {
        path: '/admin/course/manage/:id',
        component: AdminManageCourse,
        exact: true
    }, {
        path: 'admin/course/manage/assignment/:id',
        component: AdminManageAssignment,
        exact: true
    }, {
        path: '/admin/create/course',
        component: AdminCrtCourse,
        exact: true
    }
]
