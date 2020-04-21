<template>
    <div class="resume-m">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="签约" name="first">
            </el-tab-pane>
            <el-tab-pane label="待筛选" name="second"></el-tab-pane>
            <el-tab-pane label="待面试" name="third"></el-tab-pane>
            <el-tab-pane label="待签约" name="fourth"></el-tab-pane>
            <el-tab-pane label="不合格" name="fifth"></el-tab-pane>
        </el-tabs>
        <div v-loading="loading">
            <ul>
                <li v-for="(item,index) in showDelivery" :key="index">
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
            <div class="empty-box" v-if="showDelivery.length===0 && !loading" >
                <div class="message">
                    <img class="mark" src="../../../assets/img/i.png" alt>
                    <span class="message-txt">
                       当前数据为空
                </span>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import {getHrInterview} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "resume_manage",
        data() {
            return {
                activeName: 'first',
                showDelivery: [],
                loading:true,
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            showRecords(type) {
                let showDeliveryList = new Array();
                for (let i = 0; i < this.delivery.length; i++) {
                    let item = this.delivery[i];
                    if (type === 1 && item.resumeRecordStatus === 1) {
                        showDeliveryList.push(item);//待查看
                    }
                    if (type === 2 && (item.resumeRecordStatus === 2
                        || item.resumeRecordStatus === 4
                        || item.resumeRecordStatus === 5
                        || item.resumeRecordStatus === 6)) {
                        showDeliveryList.push(item);//待面试
                    }
                    if (type === 3 && item.resumeRecordStatus === 7) {
                        showDeliveryList.push(item);//待签约
                    }
                    if (type === 4 && (item.resumeRecordStatus === 3 || item.resumeRecordStatus === 8)) {
                        showDeliveryList.push(item);//不合格
                    }
                    if (type === 0 && (item.resumeRecordStatus === 9)) {
                        showDeliveryList.push(item);//进入签约
                    }
                }
                this.showDelivery = showDeliveryList;
            },
            //后台状态共8种：1:待查看 2:简历合格 3:简历不合格 4:邀请中 5:已接受邀请 6:已拒绝邀请 7:面试合格 8：面试不合格 9：进入签约
            //归纳为4种:1.待筛选(1)，2.待面试(2,4,5,6)，3.待签约(7)，4.不合格(3,8)
            get() {
                getHrInterview({authorization: CommonUtils.getStore("token")})
                    .then((res) => {
                        if (res.code == 0) {
                            this.loading = false;
                            this.delivery = res.delivery;
                            console.log(res);
                            this.delivery.forEach(function (item) {
                                if (item.resumeRecordStatus == 1) {
                                    item.buttonName = '待筛选';
                                    item.buttonType = 1;
                                    item.buttonColorType = 'blue';//#0099FF
                                } else if (item.resumeRecordStatus <= 6 && item.resumeRecordStatus >= 2 && item.resumeRecordStatus != 3) {
                                    item.buttonName = '待面试';
                                    item.buttonType = 2;
                                    item.buttonColorType = 'yellow';//#FFCC00
                                } else if (item.resumeRecordStatus == 7) {
                                    item.buttonName = '待签约';
                                    item.buttonType = 3;
                                    item.buttonColorType = 'green';//#00CC00
                                } else if (item.resumeRecordStatus == 3 || item.resumeRecordStatus == 8) {
                                    item.buttonName = '不合格';
                                    item.buttonType = 4;
                                    item.buttonColorType = 'gray';//#A1A1A1
                                } else if (item.resumeRecordStatus == 9) {
                                    item.buttonName = '签约';
                                    item.buttonType = 4;
                                    item.buttonColorType = 'orange';//#A1A1A1
                                }
                                if (item.position != null) {
                                    item.position.educationZh = CommonUtils.getKeyName('EDUCATION', item.position.education);
                                    item.position.serviceLengthZh = CommonUtils.getKeyName('SERVICE_LENGTH', item.position.serviceLength);
                                    item.position.salaryRangeZh = CommonUtils.getKeyName('SERVICE_LENGTH', item.position.salaryRange);
                                    item.position.updateTime = CommonUtils.getFormatDateTime(item.position.updateTime, 'yyyy-MM-dd HH:mm:ss');
                                }
                                if (item.headerImagePath != null) {
                                    item.headerImagePath = CommonUtils.staticPathPrefix + item.headerImagePath;
                                } else {
                                    item.headerImagePath = '../../static/img/icon/ali.jpg';
                                }
                                this.showDelivery.push(item);
                            });
                            this.showRecords(0);
                            //this.showDelivery = this.delivery;
                        }else {
                            this.$toast(res.message);
                        }
                    })
            }
        },
        created() {
            this.get();
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/resume_manage.css";
</style>