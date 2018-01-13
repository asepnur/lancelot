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
    AdminUpdateUser,
    AdminUser,
    AdminCourse,
    AdminManageCourse,
    AdminManageAssignment,
    NotFound,
    AdminHome,
    AdminCourseAbout,
    AdminCourseGrade,
    AdminCourseAttendance,
    AdminCourseTutorial,
    AdminCourseUser,
    AdminUserCreate,
    AdminRole,
    AdminRoleCreate,
    AdminInformation,
    AdminCourseAssignment,
    AdminAssignmentCreate,
    AdminAssignmentUpdate,
    AdminGradeDetail,
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
        exact: true
    }, {
        path: '/forgot/:email/:code',
        component: Reset,
        exact: true
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
        path: '/admin/users/update/:id',
        component: AdminUpdateUser,
        exact: true
    }, {
        path: '/admin/role',
        component: AdminRole,
        exact: true
    }, {
        path: '/admin/role/add',
        component: AdminRoleCreate,
        exact: true
    }, {
        path: '/admin/user',
        component: AdminUser,
        exact: true
    }, {
        path: '/admin/user/add',
        component: AdminUserCreate,
        exact: true
    }, {
        path: '/admin/course/:id',
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
        path: '/admin/',
        component: AdminHome,
        exact: true
    }, {
        path: '/admin/course/:id/about',
        component: AdminCourseAbout,
        exact: true
    }, {
        path: '/admin/course/:id/grade',
        component: AdminCourseGrade,
        exact: true
    }, {
        path: '/admin/course/:id/grade/:assignment_id',
        component: AdminGradeDetail,
        exact: true
    }, {
        path: '/admin/course/:id/attendance',
        component: AdminCourseAttendance,
        exact: true
    }, {
        path: '/admin/course/:id/tutorial',
        component: AdminCourseTutorial,
        exact: true
    }, {
        path: '/admin/course/:id/user',
        component: AdminCourseUser,
        exact: true
    }, {
        path: '/admin/information',
        component: AdminInformation,
        exact: true
    }, {
        path: '/admin/course/:id/asg/:asg_id',
        component: AdminCourseAssignment,
        exact: true
    }, {
        path: '/admin/course/:id/create-assignment',
        component: AdminAssignmentCreate,
        exact: true
    }, {
        path: '/admin/course/:id/update-assignment/:asg_id',
        component: AdminAssignmentUpdate,
        exact: true
    }, {
        path: '*',
        component: NotFound,
        exact: true
    }, {
        path: '/404',
        component: NotFound,
        exact: true
    }
]
