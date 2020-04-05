<template>
    <div>
        <div class="job-banner">
            <div class="inner">
                <div class="job-primary detail-box">
                    <div class="info-primary">
                        <div class="job-status">
                            <span>
                                招聘中
                            </span>
                        </div>
                        <div class="name">
                            <h1>小初高各科教师</h1>
                            <span class="salary">7-12k</span>
                        </div>
                        <p>
                            南宁 <em class="dolt"></em>1-3年 <em class="dolt"></em>本科
                        </p>
                        <div class="tag-container">

                        </div>
                    </div>
                    <div class="job-op">
                        <router-link to="" class="btn btn-startchat">
                            立即沟通
                        </router-link>
                        <div class="op-container">
                            <router-link to="">
                                <i class="el-icon-files"></i>
                                完善在线简历
                            </router-link>
                            <router-link to="" class="fr">
                                <i class="el-icon-upload"></i>
                                上传简历附件
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="job-box bgd">
            <div class="inner">
                <!--公司信息-->
                <div class="job-sider">
                    <div class="sider-company">
                        <p class="title">公司基本信息</p>
                        <div class="company-info">
                            <router-link to="">
                                <img src="../../../assets/img/aliyun.jpg" alt>
                            </router-link>
                            <router-link to="" class="company-name">
                                阿里云
                            </router-link>
                        </div>
                        <p>
                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                            融资阶段
                        </p>
                        <p>
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                            公司规模
                        </p>
                        <p>
                            <i class="fa fa-tags" aria-hidden="true"></i>
                            互联网
                        </p>
                        <p>
                            <i class="fa fa-sitemap" aria-hidden="true"></i>
                            网址
                        </p>
                    </div>
                </div>
                <!--公司信息-->

                <!--职位信息-->
                <div class="job-detail">
                    <div class="detail-op">
                        <div class="detail-figure">
                            <img src="../../../assets/img/msg_avatar.png" alt>
                        </div>
                        <h2 class="name">潘双全</h2>
                        <p class="gray">
                            招聘者<em class="vdot">·</em>刚刚在线
                        </p>
                    </div>
                    <div class="detail-content">
                        <div class="job-sec">
                            <h3>职位详情</h3>
                            <div class="text">
                                1、职位描述
                                <br>
                                软件工程师
                                <br>
                                2、职业要求
                                <br>
                                技术专业、认真负责
                            </div>
                        </div>
                        <div class="job-sec">
                            <h3>工作地点</h3>
                            <div class="job-location">

                            </div>
                            <div class="text">
                                上海市上海区浦东新区世纪大道
                            </div>
                        </div>
                    </div>
                </div>
                <!--职位信息-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "job_detail",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
@import "../../../assets/css/jobHunter/job/job_detail.css";
</style>