import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    /*主页*/
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {title: '首页', requireAuth: true},
    },
    /*登录*/
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
        meta: {title: '登录注册', requireAuth: true},
    },
    /*公司*/
    {
        path: '/company',
        name: 'company_index',
        component: () => import(/* webpackChunkName: "about" */ '../views/jobHunter/company/company_index.vue'),
        meta: {title: '公司', requireAuth: true},
        children: [
            //所有公司页面
            {
                path: 'all',
                name: 'company_all',
                component: () => import( '../views/jobHunter/company/company_all.vue'),
                meta: {title: '所有公司', requireAuth: true}
            },
            //所有公司页面
            {
                path: 'all/:search',
                name: 'companySearch',
                component: () => import( '../views/jobHunter/company/company_all.vue'),
                meta: {title: '所有公司', requireAuth: true}
            },
            //公司详情页面
            {
                path: 'detail',
                name: 'company_detail',
                component: () => import( '../views/jobHunter/company/company_detail.vue'),
                meta: {title: '公司详情', requireAuth: true}
            }
        ]
    },
    /*职位*/
    {
        path: '/job',
        name: 'job_index',
        component: () => import(/* webpackChunkName: "about" */ '../views/jobHunter/job/job_index.vue'),
        meta: {title: '职位', requireAuth: true},
        children: [
            //职位
            {
                path: 'all',
                name: 'job_all',
                component: () => import( '../views/jobHunter/job/job_all.vue'),
                meta: {title: '职位', requireAuth: true}
            },
            //职位
            {
                path: 'all/:search',
                name: 'jobSearch',
                component: () => import( '@/views/jobHunter/job/job_all.vue'),
                meta: {title: '职位', requireAuth: true}
            },
            //职位
            {
                path: 'detail',
                name: 'job_detail',
                component: () => import( '../views/jobHunter/job/job_detail.vue'),
                meta: {title: '职位详情', requireAuth: true}
            },
        ]
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
                path: 'records',
                name: 'delivery_records',
                component: () => import( '../views/profile/jobHunter/delivery_records.vue'),
                meta: {title: '投递记录', requireAuth: true}
            },
            //面试安排
            {
                path: 'interview',
                name: 'Interview',
                component: () => import( '../views/profile/jobHunter/interview.vue'),
                meta: {title: '面试安排', requireAuth: true}
            },
            //隐私设置
            {
                path: 'privacy',
                name: 'privacy',
                component: () => import( '../views/profile/jobHunter/privacy.vue'),
                meta: {title: '隐私设置', requireAuth: true}
            },
            //智能合约
            {
                path: 'contract',
                name: 'contract_jobhunter',
                component: () => import( '../views/profile/jobHunter/contract.vue'),
                meta: {title: '智能签约', requireAuth: true}
            },
            //智能合约
            {
                path: 'contractDetail',
                name: 'contract_detail',
                component: () => import( '../views/profile/jobHunter/contract_detail.vue'),
                meta: {title: '智能签约', requireAuth: true}
            },
            //我的账号
            {
                path: 'account',
                name: 'account',
                component: () => import( '../views/profile/common/account.vue'),
                meta: {title: '我的账号', requireAuth: true}
            },
            //我的简历附件
            {
                path: 'attachment',
                name: 'attachment',
                component: () => import( '../views/profile/jobHunter/attachment.vue'),
                meta: {title: '简历附件', requireAuth: true}
            },



            /* ----------------------分割线公司部分------------------------*/

            //公司认证
            {
                path: 'companyCet',
                name: 'company_certification',
                component: () => import( '../views/profile/hr/company_verify/company_certification.vue'),
                meta: {title: '公司认证', requireAuth: true}
            },
            //实名认证
            {
                path: 'nameCet',
                name: 'name_certification',
                component: () => import( '../views/profile/hr/name_verify/name_certification.vue'),
                meta: {title: '实名认证', requireAuth: true}
            },
            //简历管理
            {
                path: 'resumeManage',
                name: 'resumeManage',
                component: () => import( '../views/profile/hr/resume_manage.vue'),
                meta: {title: '简历管理', requireAuth: true}
            },
            //面试安排
            {
                path: 'hrInterview',
                name: 'hr_interview',
                component: () => import( '../views/profile/hr/interview_hr.vue'),
                meta: {title: '面试安排', requireAuth: true}
            },
            //智能合约
            {
                path: 'hrContract',
                name: 'contract_hr',
                component: () => import( '../views/profile/hr/contract_hr.vue'),
                meta: {title: '智能签约', requireAuth: true}
            },
            //智能合约
            {
                path: 'hrContractDetail',
                name: 'contract_detail_hr',
                component: () => import( '../views/profile/hr/contract_detail_hr.vue'),
                meta: {title: '智能签约', requireAuth: true}
            },


            /* ----------------------公共部分------------------------*/
            {
                path: 'wallet',
                name: 'wallet',
                component: () => import( '../views/profile/common/wallet.vue'),
                meta: {title: '个人信息', requireAuth: true}
            },
        ]
    },
    //个人简历
    {
        path: '/resume',
        name: 'resume',
        component: () => import( '../views/profile/jobHunter/resume/Resume.vue'),
        meta: {title: '个人简历', requireAuth: true},
    },

    //招聘者消息
    {
        path: '/hr/msg',
        name: 'hr_msg',
        component: () => import( '../views/hr/msg/msg_index.vue'),
        meta: {title: '聊天', requireAuth: true},
        children:[
            {
                path: 'detail',
                name: 'hr_msg_detail',
                component: () => import( '../views/hr/msg/msg_detail.vue'),
                meta: {title: '聊天', requireAuth: true}
            },
        ]
    },
    //应聘者消息
    {
        path: '/talent/msg',
        name: 'talent_msg',
        component: () => import( '../views/jobHunter/msg/msg_index.vue'),
        meta: {title: '聊天', requireAuth: true},
        children:[
            {
                path: 'detail',
                name: 'talent_msg_detail',
                component: () => import( '../views/jobHunter/msg/msg_detail.vue'),
                meta: {title: '聊天', requireAuth: true}
            },
        ]
    },

    /*该路由为招聘者所有*/
    {
        path: '/talent',
        name: 'talent',
        component: () => import(/* webpackChunkName: "about" */ '../views/hr/talent/talent_index.vue'),
        meta: {title: '人才', requireAuth: true},
        children: [
            {
                path: 'all',
                name: 'talent_all',
                component: () => import( '../views/hr/talent/talent_all.vue'),
                meta: {title: '人才', requireAuth: true}
            },
            {
                path: 'all/:search',
                name: 'talent_search',
                component: () => import( '../views/hr/talent/talent_all.vue'),
                meta: {title: '人才', requireAuth: true}
            },
            {
                path: 'detail',
                name: 'talent_detail',
                component: () => import( '../views/hr/talent/talent_detail.vue'),
                meta: {title: '人才详情', requireAuth: true}
            },
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
                name: 'position_edit',
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
});
export default router
