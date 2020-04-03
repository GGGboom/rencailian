import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    /*主页*/
    {
        path: '/',
        name: 'home',
        component: Home
    },
    /*登录*/
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    /*公司*/
    {
        path: '/company',
        name: 'company',
        component: () => import(/* webpackChunkName: "about" */ '../views/jobHunter/company/allcompany.vue'),
        children: [
            //公司详情页面
            {
                path: 'detail',
                name: 'detail',
                component: () => import( '../views/jobHunter/company/detail.vue'),
                meta: {title: '公司详情', requireAuth: true}
            }
        ]
    },
    /*职位*/
    {
        path: '/job',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/jobHunter/job/job.vue')
    },
    /*个人中心*/
    {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/profile/index.vue'),
        children:[
            {
                path: 'info',
                name: 'info',
                component: () => import( '../views/profile/jobHunter/info.vue'),
                meta: {title: '个人信息', requireAuth: true}
            },
            //我的收藏
            {
                path: 'collect',
                name: 'collect',
                component: () => import( '../views/profile/jobHunter/collect.vue'),
                meta: {title: '我的收藏', requireAuth: true}
            },
            //投递记录
            {
                path: 'history',
                name: 'delivery_history',
                component: () => import( '../views/profile/jobHunter/delivery_history.vue'),
                meta: {title: '简历附件', requireAuth: true}
            },
            //面试安排
            {
                path: 'interview',
                name: 'Interview',
                component: () => import( '../views/profile/common/interview.vue'),
                meta: {title: '面试安排', requireAuth: true}
            },
            //隐私设置
            {
                path: 'privacy',
                name: 'privacy',
                component: () => import( '../views/profile/jobHunter/privacy.vue'),
                meta: {title: '隐私设置', requireAuth: true}
            },
            //智能签约
            {
                path: 'contract',
                name: 'contract',
                component: () => import( '../views/profile/common/contract.vue'),
                meta: {title: '智能签约', requireAuth: true}
            },
            //我的账号
            {
                path: 'account',
                name: 'account',
                component: () => import( '../views/profile/common/account.vue'),
                meta: {title: '我的账号', requireAuth: true}
            },
            //切换身份
            {
                path: 'switch',
                name: 'switch',
                component: () => import( '../views/profile/common/switch.vue'),
                meta: {title: '切换身份', requireAuth: true}
            },
            /* ----------------------分割线公司部分------------------------*/

            //公司认证
            {
                path: 'companyCet',
                name: 'company_certification',
                component: () => import( '../views/profile/hr/company_certification.vue'),
                meta: {title: '公司认证', requireAuth: true}
            },
            //实名认证
            {
                path: 'nameCet',
                name: 'name_certification',
                component: () => import( '../views/profile/hr/name_certification.vue'),
                meta: {title: '实名认证', requireAuth: true}
            },
            //简历管理
            {
                path: 'resumeManage',
                name: 'resumeManage',
                component: () => import( '../views/profile/hr/resume_manage.vue'),
                meta: {title: '简历管理', requireAuth: true}
            },

        ]
    },
    //个人简历
    {
        path: '/resume',
        name: 'resume',
        component: () => import( '../views/profile/jobHunter/Resume.vue'),
        meta: {title: '个人简历', requireAuth: true}
    },
    //消息
    {
        path: '/msg',
        name: 'msg_index',
        component: () => import( '../views/message/msg_index.vue'),
        meta: {title: '消息', requireAuth: true}
    },
    /*人才该路由为招聘者所有*/
    {
        path: '/talent',
        name: 'talent',
        component: () => import(/* webpackChunkName: "about" */ '../views/hr/talent/talent_index.vue'),
        children: [
            //公司详情页面
            {
                path: 'detail',
                name: 'detail',
                component: () => import( '../views/jobHunter/company/detail.vue'),
                meta: {title: '公司详情', requireAuth: true}
            },
            //所有公司页面
            {
                path: 'allcompany',
                name: 'allcompany',
                component: () => import( '../views/jobHunter/company/allcompany.vue'),
                meta: {title: '所有公司', requireAuth: true}
            }
        ]
    },

    /*职位*/
    {
        path: '/position',
        name: 'position_index',
        component: () => import(/* webpackChunkName: "about" */ '../views/hr/position/position_index.vue'),
        children:[
            {
                path: 'all',
                name: 'all_position',
                component: () => import( '../views/hr/position/all_position.vue'),
                meta: {title: '简历管理', requireAuth: true}
            },
            //编辑页面
            {
                path: 'edit',
                name: 'edit',
                component: () => import( '../views/hr/position/edit.vue'),
                meta: {title: '简历管理', requireAuth: true}
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
