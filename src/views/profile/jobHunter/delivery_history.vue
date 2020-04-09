<template>
    <div class="position-relative">
        <div>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first">
                    <ul class="delivery-list">
                        <li v-for="item in deliverRecords" :key="item.receiveUserId">
                            <el-card shadow="never">
                                <div class="job-head job-padding">
                                    <div class="avatar-container">
                                        <img class="job-avatar" :src="item.receiveUserHeaderImage">
                                    </div>
                                    <div class="head-primary">
                                        <p class="primary">
                                            <span class="primary-name">
                                                {{item.receiveUserName}}
                                            </span>
                                        </p>
                                        <p>
                                            <span class="primary-position">
                                                {{item.receiveUserPosition}}
                                            </span>
                                            <span class="primary-position">
                                                技术总监
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="job-info job-padding">
                                    <div style="padding: 10px 0;">
                                        <span class="job-info-item">
                                        软件工程师
                                        </span>
                                        <span class="job-info-item">
                                        26k-30k
                                        </span>
                                        <span class="job-info-item">
                                        上海市上海城区浦东新区
                                        </span>
                                        <span class="job-info-item">
                                        硕士
                                        </span>
                                        <span class="job-info-item">
                                        5年
                                        </span>
                                    </div>
                                </div>
                            </el-card>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="待查看" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="待面试" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="待签约" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import {getDeliveryHistory} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "delivery_history",
        data() {
            return {
                activeName: 'first',
                deliverRecords:[
                    {
                        receiveUserName:"吴女士",
                        receiveUserId:1,
                        updateTime:"03月07日",
                        receiveUserHeaderImage:require("../../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"阿里云"
                    },
                    {
                        receiveUserName:"张先生",
                        receiveUserId:2,
                        updateTime:"03月04日",
                        receiveUserHeaderImage:require("../../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"腾讯"
                    },
                    {
                        receiveUserName:"郭先生",
                        receiveUserId:3,
                        updateTime:"03月01日",
                        receiveUserHeaderImage:require("../../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"百度"
                    },
                    {
                        receiveUserName:"黄先生",
                        receiveUserId:4,
                        updateTime:"03月02日",
                        receiveUserHeaderImage:require("../../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"京东"
                    }
                ]
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            getDeliveryHistory
        },
        created() {
            this.getDeliveryHistory({authorization:CommonUtils.getStore("token")})
                .then(res=>{
                    console.log(res);
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }
</script>

<style scoped>
@import "../../../assets/css/profile/history.css";
</style>