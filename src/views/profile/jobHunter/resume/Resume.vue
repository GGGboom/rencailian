<template>
    <div class="inner">
        <div class="resume-container">
            <div class="resume-content">
                <div class="resume-content-box resume-box">
                    <!--更新时间-->
                    <div class="update-time">
                        <span>最后更新2020/3/2 18:20</span>
                    </div>

                    <!--用户信息-->
                    <resume-info></resume-info>
                    <!--用户信息-->

                    <!--求职意向-->
                    <resume-purpose></resume-purpose>
                    <!--求职意向-->

                    <!--工作经历-->
                    <resume-work-exp></resume-work-exp>
                    <!--工作经历-->

                    <!--项目经历-->
                    <resume-project></resume-project>
                    <!--项目经历-->

                    <!--教育经历-->
                    <resume-education></resume-education>
                    <!--教育经历-->
                </div>
            </div>
            <div class="resume-sider">
                <div class="sider-box">
                    <p>附件管理</p>
                    <div class="btn">
                        <el-button type="primary" :round="false">上传简历</el-button>
                    </div>
                </div>
                <div class="sider-box resume-settings">
                    <div class="settings-item privacy-set">
                        <span>隐私设置</span>
                        <div>
                            <el-button type="text">设置</el-button>
                        </div>
                    </div>
                    <div class="settings-item">
                        <span>简历设置：</span>
                        <span>对外开放</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import resumeInfo from './resume_info';
    import resumePurpose from './resume_purpose';
    import resumeWorkExp from './resume_workExp';
    import resumeProject from './resume_project';
    import resumeEducation from './resume_education';

    export default {
        name: "Resume",
        components:{
            resumeInfo,                 //基本信息组件,上传时间出错
            resumePurpose,              //求职意向,未完成上传
            resumeWorkExp,              //工作经验
            resumeProject,              //项目经验
            resumeEducation,            //教育经历
        },
        data() {
            return {
                /*
                对于用户信息、求职意向、工作经历、项目经历和教育经历，他们都有3个属性：
                1.类似于baseinfo等flag变量，用于控制编辑框显示与隐藏；
                2.类似于baseForm,即表单属性
                3.类似于baseRules，用于检查表单输入是否符合规则
                */
            }
        },
        methods: {

        },
        created() {

        },
    }
</script>

<style scoped>
    @import "../../../../assets/css/profile/jobhunter/resume.css";
</style>