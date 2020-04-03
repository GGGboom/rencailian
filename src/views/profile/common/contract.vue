<template>
    <div class="position-relative">
        <div :style="styleObj">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first">
                    <ul class="list">
                        <li v-for="item in contractRecords" :key="item.receiveUserId" @click="goToDetail(item)">
                            <el-card shadow="hover">
                                <div class="contract-head job-padding">
                                    <div class="head-primary">
                                        <p class="primary">
                                            <span class="primary-name">
                                                {{item.company}}
                                            </span>
                                        </p>
                                        <p>
                                            <span class="primary-position">
                                                录取岗位：
                                            </span>
                                            <span class="primary-position">
                                                {{item.receiveUserPosition}}
                                            </span>
                                        </p>
                                    </div>

                                </div>
                                <div class="contractStatus">
                                    <el-tag effect="dark">
                                        {{item.contractStatus}}
                                    </el-tag>
                                </div>
                                <div class="divider">
                                    <el-divider></el-divider>
                                </div>
                                <div class="contract-info job-padding">
                                    <div class="avatar-container">
                                        <img class="avatar-contract" :src="item.receiveUserHeaderImage">
                                    </div>
                                    <div class="contract-detail" style="padding: 10px 0;">
                                        <span class="contract-info-item">
                                        潘双全
                                        </span>
                                    </div>
                                </div>
                            </el-card>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="待签约" name="second">配置管理</el-tab-pane>
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
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/contract.css";
</style>