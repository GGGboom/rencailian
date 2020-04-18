<template>
    <div>
        <div class="talent-detail-box bgd">
            <div class="inner">
                <!--其他信息-->
                <div class="sider">
                    <div class="sider-company">
                        <p class="title">其他信息</p>
                        <div class="company-info">
                            <router-link to="">
                                <img src="../../../assets/img/aliyun.jpg" alt>
                            </router-link>
                            <router-link to="" class="company-name">
                                公司名
                            </router-link>
                        </div>
                        <p>
                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                            融资阶段:
                        </p>
                        <p>
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                            公司规模:
                        </p>
                        <p>
                            <i class="fa fa-tags" aria-hidden="true"></i>

                        </p>
                        <p>
                            <i class="fa fa-sitemap" aria-hidden="true"></i>
                            网址
                        </p>
                    </div>
                </div>
                <!--其他信息-->

                <!--人才消息-->
                <div class="talent-detail">
                    <div class="detail-op">
                        <div class="detail-figure">
                            <img src="../../../assets/img/msg_avatar.png" alt>
                        </div>
                        <div class="name">
                            <span class="gray online-status">
                                信用<em class="vdot">·</em>100
                            </span>
                        </div>
                        <div class="name">
                            <span class="gray online-status">
                                潘双全<em class="vdot">·</em>刚刚在线
                            </span>
                        </div>

                    </div>
                    <div class="detail-content">
                        <div class="job-sec">
                            <h3>基本信息</h3>
                            <div class="text">
                                1、职位描述
                                <br>
                                11111
                                <br>
                                2、职业要求
                                <br>
                                11111
                            </div>
                        </div>
                        <div class="job-sec">
                            <h3>求职状态</h3>
                            <div class="text">

                            </div>
                        </div>
                        <div class="job-sec">
                            <h3>自我评价</h3>
                            <div class="job-location">

                            </div>
                            <div class="text">
                                <i class="el-icon-location-information">1111111</i>
                            </div>
                        </div>
                        <div class="job-sec">
                            <h3>
                                推荐我的发布职位给该求职者
                            </h3>
                            <div class="text">

                            </div>
                        </div>
                    </div>
                </div>
                <!--人才消息-->
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "talent_detail",
        data(){
            return{
                info:{
                    position:{}
                },
                company:{}
            }
        },
        methods:{

        },
        mounted() {

        }
    }
</script>

<style scoped>
    @import "../../../assets/css/hr/talent/talent_detail.css";
</style>