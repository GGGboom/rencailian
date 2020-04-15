<template>
    <div class="position-relative">
        <div :style="styleObj">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first">
                    <!--如果为应聘者-->
                    <div v-if="this.$store.state.identityType===2">
                        <ul class="list" >
                            <li v-for="item in jobHunter_contract" :key="item.receiveUserId" @click="goToDetail(item)">
                                <el-card shadow="hover">
                                    <div class="contract-head job-padding">
                                        <div class="head-primary">
                                            <p class="primary">
                                            <span class="primary-name">
                                                {{item.companyName}}
                                            </span>
                                            </p>
                                            <p>
                                            <span class="primary-position">
                                                录取岗位：
                                            </span>
                                                <span class="primary-position">
                                                {{item.positionName}}
                                            </span>
                                            </p>
                                        </div>

                                    </div>
                                    <div class="contractStatus">
                                        <el-tag :class="{'el-tag--warning':item.buttonType===1,'el-tag--info':item.buttonType===2,'el-tag--info':item.buttonType===3,'el-tag--danger':item.buttonType===4}">
                                            {{item.contractStatus}}
                                        </el-tag>
                                    </div>
                                    <div class="divider">
                                        <el-divider></el-divider>
                                    </div>
                                    <div class="contract-info job-padding">
                                        <div class="avatar-container">
                                            <img class="avatar-contract" src="../../../assets/img/msg_avatar.png">
                                        </div>
                                        <div class="contract-detail" style="padding: 10px 0;">
                                        <span class="contract-info-item">
                                        {{item.hrName}}
                                        </span>
                                        </div>
                                    </div>
                                </el-card>
                            </li>
                        </ul>
                    </div>
                    <!--如果为应聘者-->

                    <!--如果为招聘者-->
                    <div v-else>
                        <ul class="list">
                            <li v-for="item in contractRecords" :key="item.receiveUserId" @click="goToDetail(item)">
                                <el-card shadow="hover">
                                    <div class="contract-container">
                                        <div class="contract-img">
                                            <img :src="item.receiveUserHeaderImage" alt>
                                        </div>
                                        <div class="c-right">
                                            <p>张恒华</p>
                                            <p>录取岗位：{{item.receiveUserPosition}}</p>
                                        </div>
                                        <div class="tags">
                                            <el-tag effect="dark">
                                                {{item.contractStatus}}
                                            </el-tag>
                                        </div>
                                    </div>
                                </el-card>
                            </li>
                        </ul>
                    </div>
                    <!--如果为招聘者-->

                </el-tab-pane>
                <el-tab-pane label="待签约" name="second">
                    <div v-if="this.$store.state.identityType===2">
                        <ul class="list" >
                            <li v-for="item in jobHunter_contract"  :key="item.receiveUserId" @click="goToDetail(item)">
                                <el-card v-if="item.contractStatus===1" shadow="hover">
                                    <div class="contract-head job-padding">
                                        <div class="head-primary">
                                            <p class="primary">
                                            <span class="primary-name">
                                                {{item.companyName}}
                                            </span>
                                            </p>
                                            <p>
                                            <span class="primary-position">
                                                录取岗位：
                                            </span>
                                                <span class="primary-position">
                                                {{item.positionName}}
                                            </span>
                                            </p>
                                        </div>

                                    </div>
                                    <div class="contractStatus">
                                        <el-tag :class="{'el-tag--warning':item.buttonType===1,'el-tag--info':item.buttonType===2,'el-tag--info':item.buttonType===3,'el-tag--danger':item.buttonType===4}">
                                            {{item.contractStatus}}
                                        </el-tag>
                                    </div>
                                    <div class="divider">
                                        <el-divider></el-divider>
                                    </div>
                                    <div class="contract-info job-padding">
                                        <div class="avatar-container">
                                            <img class="avatar-contract" src="../../../assets/img/msg_avatar.png">
                                        </div>
                                        <div class="contract-detail" style="padding: 10px 0;">
                                        <span class="contract-info-item">
                                        {{item.hrName}}
                                        </span>
                                        </div>
                                    </div>
                                </el-card>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已签约" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="已仲裁" name="fourth">定时任务补偿</el-tab-pane>
                <el-tab-pane label="已失效" name="fifth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
        <div :style="styleObj2">
            <el-button type="text" icon="el-icon-back" @click="goBack">返回</el-button>
            <div class="contract-list">
                <div class="contract-item">
                    <div class="item-left">
                        <span>甲方:阿里云</span>
                    </div>
                    <div class="item-right">
                        <span>签约日期:2019-8-17</span>
                    </div>
                </div>
                <div class="contract-item">
                    <div class="item-left">
                        <span>乙方:张恒华</span>
                    </div>
                    <div class="item-right">
                        <span>签约日期:2019-8-23</span>
                    </div>
                </div>
                <div class="contract-item">
                    <div class="item-left">
                        <span>基本工资（按月）:</span>
                    </div>
                    <div class="item-right">
                        <span>123</span>
                    </div>
                </div>
                <div class="contract-item">
                    <div class="item-left">
                        <span>绩效薪资（按月）:</span>
                    </div>
                    <div class="item-right">
                        <span>123</span>
                    </div>
                </div>
                <div class="contract-item">
                    <div class="item-left">
                        <span>其他薪资（按月）:</span>
                    </div>
                    <div class="item-right">
                        <span>123</span>
                    </div>
                </div>
                <div class="contract-item">
                    <div class="item-left">
                        <span>工资总月数:</span>
                    </div>
                    <div class="item-right">
                        <span>123</span>
                    </div>
                </div>
                <div class="contract-item">
                    <div class="item-left">
                        <span>年薪:</span>
                    </div>
                    <div class="item-right">
                        <span>123</span>
                    </div>
                </div>
                <div class="contract-content">
                    <p>合约内容</p>
                    <div class="ct-content">
                        <span>123</span>
                    </div>
                </div>
                <div class="contract-btn">
                    <div class="btn-box">
                        <el-button>拒绝签约</el-button>
                        <el-button type="primary">完成签约</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getContract} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";
    export default {
        name: "contract",
        data(){
            return{
                activeName: 'first',
                contractRecords:[
                    {
                        receiveUserName:"吴女士",
                        contractStatus:"已签约",
                        company:"阿里云",
                        receiveUserId:1,
                        updateTime:"03月07日",
                        receiveUserHeaderImage:require("../../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"软件工程师"
                    },
                    {
                        receiveUserName:"张先生",
                        contractStatus:"已签约",
                        company:"腾讯",
                        receiveUserId:2,
                        updateTime:"03月04日",
                        receiveUserHeaderImage:require("../../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"软件工程师"
                    },
                    {
                        receiveUserName:"郭先生",
                        contractStatus:"已签约",
                        company:"百度",
                        receiveUserId:3,
                        updateTime:"03月01日",
                        receiveUserHeaderImage:require("../../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"软件工程师"
                    },
                    {
                        receiveUserName:"黄先生",
                        contractStatus:"已签约",
                        company:"字节跳动",
                        receiveUserId:4,
                        updateTime:"03月02日",
                        receiveUserHeaderImage:require("../../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"软件工程师"
                    }
                ],
                jobHunter_contract:[],          //应聘者智能合约
                hr_contract:[],                 //招聘者智能合约
                styleObj:{
                    'display':'block'
                },
                styleObj2:{
                    'display':'none'
                }
            }
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            goBack() {
                this.styleObj.display = 'block';
                this.styleObj2.display = 'none';
            },
            goToDetail(item){
                console.log(item);
                this.styleObj.display = 'none';
                this.styleObj2.display = 'block';
            },
            get(){
                getContract({loginId:CommonUtils.getStore("user").userId,authorization:CommonUtils.getStore("token")},2)
                    .then(res=>{
                        this.jobHunter_contract = res.contracts;
                        console.log(res);
                        this.jobHunter_contract.forEach(item=>{
                            if(item.contractStatus===1){
                                item.contractStatus = '待签约';
                                item.buttonType = 1;
                                item.buttonColorType = 'yellow';//#FFCC00
                            }else if(item.contractStatus===2 || item.contractStatus===5){
                                item.contractStatus = '已签约';
                                item.buttonType = 2;
                                item.buttonColorType = 'green';//#00CC00
                            }else if(item.contractStatus>=7 && item.contractStatus<=15){
                                item.contractStatus = '已仲裁';
                                item.buttonType = 3;
                                item.buttonColorType = 'blue';//#0099FF
                            }else if(item.contractStatus===3 || item.contractStatus===4 || item.contractStatus===6){
                                item.contractStatus = '已失效';
                                item.buttonType = 4;
                                item.buttonColorType = 'gray';//#A1A1A1
                            }
                        })
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }
        },
        mounted() {
            this.get();
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/contract.css";
</style>