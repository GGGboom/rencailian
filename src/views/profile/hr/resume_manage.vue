<template>
    <div class="resume-m">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="签约" name="first">
                <ul>
                    <li>
                        <el-card hover="never">
                            <div class="resume-container">
                                <div class="resume-img">
                                    <img src="../../../assets/img/msg_avatar.png" alt>
                                </div>
                                <div class="resume-info">
                                    <p>
                                        <span class="resume-name">张恒华</span>
                                        <span class="resume-span">软件工程师</span>
                                    </p>
                                    <p>
                                        <span>硕士</span>
                                        <span class="resume-span">5-10年</span>
                                    </p>
                                    <p>
                                        <span>更新时间</span>
                                        <span class="resume-span">时间</span>
                                    </p>
                                </div>
                                <div class="resume-tag">
                                    <el-tag effect="dark">
                                        已签约
                                    </el-tag>
                                </div>
                            </div>
                        </el-card>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="待筛选" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="待面试" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="待签约" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="不合格" name="fifth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "resume_manage",
        data(){
            return{
                activeName: 'first'
            }
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/resume_manage.css";
</style>