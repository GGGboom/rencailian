<template>
    <div class="position-relative">
        <div>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first">
                </el-tab-pane>
                <el-tab-pane label="待查看" name="second"></el-tab-pane>
                <el-tab-pane label="待面试" name="third"></el-tab-pane>
                <el-tab-pane label="待签约" name="fourth"></el-tab-pane>
                <el-tab-pane label="不合格" name="fifth"></el-tab-pane>
            </el-tabs>
        </div>
        <div v-loading="loading">
            <ul class="delivery-list">
                <li v-for="item in showDeliverList" :key="item.receiveUserId">
                    <el-card shadow="never">
                        <div class="job-head job-padding">
                            <div class="avatar-container">
                                <img class="job-avatar" src="../../../assets/img/msg_avatar.png">
                            </div>
                            <div class="head-primary">
                                <p class="primary">
                                    <span class="primary-name">
                                        {{item.hrName}}
                                    </span>
                                </p>
                                <p>
                                    <span class="primary-position">
                                        {{item.position.companyName}}
                                    </span>
                                    <span class="primary-position">
                                        {{item.hrPosition}}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="job-info job-padding">
                            <div style="padding: 10px 0;">
                                        <span class="job-info-item">
                                        {{item.position.name}}
                                        </span>
                                <span class="job-info-item">
                                        {{(item.position.salaryRange)}}
                                        </span>
                                <span class="job-info-item">
                                         {{item.position.address}}
                                        </span>
                                <span class="job-info-item">
                                        {{getEducationStr(item.position.education)}}
                                        </span>
                                <span class="job-info-item">
                                        {{getServiceStr(item.position.serviceLength)}}
                                        </span>
                            </div>
                        </div>
                    </el-card>
                </li>
            </ul>
            <div class="empty-box" v-if="showDeliverList.length===0 && !loading" >
                <div class="message">
                    <img class="mark" src="../../../assets/img/i.png" alt>
                    <span class="message-txt">
                       当前数据为空
                </span>
                </div>
            </div>
        </div>
        <el-pagination
                v-if="showDeliverList.length>=this.pageSize"
                :page-size="pageSize"
                :pager-count="5"
                layout="prev, pager, next"
                @current-change="pageChange"
                :total="showDeliverList.length">
        </el-pagination>
    </div>
</template>

<script>
    import {getDeliveryHistory} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "delivery_history",
        data() {
            return {
                pageSize:5,             //一页显示五个数据
                loading:true,
                activeName: 'first',
                delivery:[],
                showDeliverList:[
                ]
            };
        },
        methods: {
            //切换标签
            handleClick(tab) {
                let list = this.showRecords(tab.index);
                for(let i = 0; i<list.length&&i<this.pageSize; i++){
                    this.showDeliverList.push(list[i]);
                }
            },
            //切换标签时更新showDeliverList
            showRecords(type){
                //后台状态共8种：1:待查看 2:简历合格 3:简历不合格 4:邀请中 5:已接受邀请 6:已拒绝邀请 7:面试合格 8：面试不合格
                //归纳为4种:1.待查看(1)，2.待面试(2,4,5,6)，3.待签约(7)，4.不合格(3,8)
                let showDelivery =new Array();
                if(type===0){
                    showDelivery = this.delivery;
                    console.log(showDelivery.length)
                }else{
                    for(let i=0;i<this.delivery.length;i++){
                        let item = this.delivery[i];
                        if(type===1 && item.resumeRecordStatus===1){
                            showDelivery.push(item);//待查看
                        }
                        if(type===2 && (item.resumeRecordStatus===2
                            || item.resumeRecordStatus===4
                            ||item.resumeRecordStatus===5
                            ||item.resumeRecordStatus===6)){
                            showDelivery.push(item);//待面试
                        }
                        if(type===3 && item.resumeRecordStatus===7){
                            showDelivery.push(item);//待签约
                        }
                        if(type===4 && (item.resumeRecordStatus===3 || item.resumeRecordStatus===8)){
                            showDelivery.push(item);//不合格
                        }
                    }
                }
                return showDelivery;
            },
            getEducationStr(num){
                return CommonUtils.getKeyName('EDUCATION',num);
            },
            getServiceStr(num){
                return CommonUtils.getKeyName('SERVICE_LENGTH',num);
            },
            pageChange(page,list){
                this.showDeliverList = [];
                for(let i = (page-1)*this.pageSize; i<(page-1)*this.pageSize+this.pageSize && i<list.length; i++){
                    this.showDeliverList.push(list[i]);
                }
            },
            async init(){
                let res = await getDeliveryHistory({authorization:CommonUtils.getStore("token")});
                if(res.code===0){
                    this.showDeliverList = res.delivery;
                    this.pageChange(1,this.delivery);
                    if(res.delivery.length===0){
                        this.loading  = false;
                    }else if(res.code===1){
                        this.$router.push("/login");
                    }else{
                        this.$message.error(res.message);
                    }
                }
            }
        },
        created() {
            this.init();
        }
    }
</script>

<style scoped>
@import "../../../assets/css/profile/history.css";
</style>