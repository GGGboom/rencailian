<template>
    <div class="inner">
        <div class="resume-container">
            <div class="resume-content">
                <div class="resume-content-box">
                    <!--更新时间-->
                    <div class="update-time">
                        <span>最后更新{{update_time}}</span>
                    </div>
                    <!--用户信息-->
                    <div class="resume-userinfo">
                        <div class="item-primary">
                            <div class="info-flex">
                                <div class="info-flex-item">
                                    <p class="name">{{username}}</p>
                                    <div class="label">
                                        <span class="label-item"><i class="el-icon-user"></i>20年毕业生</span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span class="label-item"><i class="el-icon-user"></i>本科学历</span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span class="label-item"><i class="el-icon-user"></i>在校-月内到岗</span>
                                    </div>
                                </div>
                                <div class="info-flex-item avatar">
                                    <el-avatar :size="70" :src="avatar"></el-avatar>
                                </div>
                            </div>
                            <div class="edit">
                                <el-button type="text" icon="el-icon-edit-outline">编辑</el-button>
                            </div>
                        </div>
                    </div>
                    <!--求职意向-->
                    <div class="resume-purpose">
                        <div class="item-primary">
                            <p class="title">求职意向</p>
                            <div class="purpose-label item-pad">
                                <div class="purpose-detail label-detail">
                                    <span>数据挖掘/机器学习</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>面议</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>不限</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>南宁</span>
                                </div>
                                <div class="edit">
                                    <el-button type="text" icon="el-icon-edit-outline">编辑</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--教育经历-->
                    <div class="resume-education">
                        <div class="item-primary">
                            <p class="title">教育经历</p>
                            <div class="education-label item-pad">
                                <p class="uni">东华大学<span>2016-2020</span></p>
                                <div class="label-detail">
                                    <span>计算机科学与技术</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>本科</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
    export default {
        name: "Resume",
        data() {
            return {
                update_time:"2020/3/2 18:20",
                username:"张恒华",
                avatar:require("../../assets/img/aliyun.jpg")
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/css/profile/resume.css";
</style>