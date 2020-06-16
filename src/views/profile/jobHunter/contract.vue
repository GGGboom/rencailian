<template>
    <div class="position-relative">
        <div :style="styleObj">
            <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="全部" name="first">
                    <div>
                        <ul class="list" >
                            <li v-for="item in showList_all" :key="item.receiveUserId" @click="goToDetail(item.contractId)">
                                <router-link to="">
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
                                                {{item.buttonName}}
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
                                </router-link>
                            </li>
                        </ul>
                        <el-pagination
                                v-if="contract.length>=this.pageSize"
                                :page-size="pageSize"
                                :pager-count="5"
                                layout="prev, pager, next"
                                @current-change="pageChangeAll"
                                :total="contract.length">
                        </el-pagination>
                        <div class="empty-box" v-if="contract.length===0" >
                            <div class="message">
                                <img class="mark" src="../../../assets/img/i.png" alt>
                                <span class="message-txt">
                                    当前数据为空
                                </span>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="待签约" name="second">
                    <div>
                        <ul class="list" >
                            <li v-for="item in showList_wait" :key="item.receiveUserId" @click="goToDetail(item.contractId)">
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
                                            {{item.buttonName}}
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
                        <el-pagination
                                v-if="contract_wait.length>=this.pageSize"
                                :page-size="pageSize"
                                :pager-count="5"
                                layout="prev, pager, next"
                                @current-change="pageChangeWait"
                                :total="contract_wait.length">
                        </el-pagination>
                        <div class="empty-box" v-if="contract_wait.length===0" >
                            <div class="message">
                                <img class="mark" src="../../../assets/img/i.png" alt>
                                <span class="message-txt">
                                    当前数据为空
                                </span>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已签约" name="third">
                    <div>
                        <ul class="list" >
                            <li v-for="item in showList_signed" :key="item.receiveUserId" @click="goToDetail(item.contractId)">
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
                                            {{item.buttonName}}
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
                        <el-pagination
                                v-if="contract_signed.length>=this.pageSize"
                                :page-size="pageSize"
                                :pager-count="5"
                                layout="prev, pager, next"
                                @current-change="pageChangeSigned"
                                :total="contract_signed.length">
                        </el-pagination>
                        <div class="empty-box" v-if="contract_signed.length===0" >
                            <div class="message">
                                <img class="mark" src="../../../assets/img/i.png" alt>
                                <span class="message-txt">
                                    当前数据为空
                                </span>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已仲裁" name="fourth">
                    <div>
                        <ul class="list" >
                            <li v-for="item in showList_arbitration" :key="item.receiveUserId" @click="goToDetail(item.contractId)">
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
                                            {{item.buttonName}}
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
                        <el-pagination
                                v-if="contract_arbitration.length>=this.pageSize"
                                :page-size="pageSize"
                                :pager-count="5"
                                layout="prev, pager, next"
                                @current-change="pageChangeArbitration"
                                :total="contract_arbitration.length">
                        </el-pagination>
                        <div class="empty-box" v-if="contract_arbitration.length===0" >
                            <div class="message">
                                <img class="mark" src="../../../assets/img/i.png" alt>
                                <span class="message-txt">
                                    当前数据为空
                                </span>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已失效" name="fifth">
                    <div>
                        <ul class="list" >
                            <li v-for="item in showList_invalid" :key="item.receiveUserId" @click="goToDetail(item.contractId)">
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
                                            {{item.buttonName}}
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
                        <el-pagination
                                v-if="contract_invalid.length>=this.pageSize"
                                :page-size="pageSize"
                                :pager-count="5"
                                layout="prev, pager, next"
                                @current-change="pageChangeInvalid"
                                :total="contract_invalid.length">
                        </el-pagination>
                        <div class="empty-box" v-if="contract_invalid.length===0" >
                            <div class="message">
                                <img class="mark" src="../../../assets/img/i.png" alt>
                                <span class="message-txt">
                                    当前数据为空
                                </span>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import {getContract} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "contract_jobhunter",
        data(){
            return{
                activeName: 'first',
                contract:[],          //所有智能合约
                contract_wait:[],     //待显示待签约所有合约
                contract_signed:[],
                contract_invalid:[],
                contract_arbitration:[],
                showList_all:[],
                showList_wait:[],
                showList_signed:[],
                showList_invalid:[],
                showList_arbitration:[],
                styleObj:{
                    'display':'block'
                },
                styleObj2:{
                    'display':'none'
                },
                pageSize:5             //页面大小
            }
        },
        methods:{
            goToDetail(id){
                console.log(id);
                this.$router.push({name:'contract_detail',query:{id:id}});
            },
            get(){
                getContract({loginId:CommonUtils.getStore("user").userId,authorization:CommonUtils.getStore("token")},2)
                    .then(res=>{
                        if(res.code===0){
                            this.contract = res.contracts;
                            this.contract.forEach(item=>{
                                if(item.contractStatus===1){
                                    item.buttonName ='待签约';
                                    item.buttonType = 1;
                                    this.contract_wait.push(item);
                                    item.buttonColorType = 'yellow';//#FFCC00
                                }else if(item.contractStatus===2 || item.contractStatus===5){
                                    item.buttonName ='已签约';
                                    item.buttonType = 2;
                                    this.contract_signed.push(item);
                                    item.buttonColorType = 'green';//#00CC00
                                }else if(item.contractStatus>=7 && item.contractStatus<=15){
                                    item.buttonName ='已仲裁';
                                    item.buttonType = 3;
                                    this.contract_arbitration.push(item);
                                    item.buttonColorType = 'blue';//#0099FF
                                }else if(item.contractStatus===3 || item.contractStatus===4 || item.contractStatus===6){
                                    item.buttonName ='已失效';
                                    item.buttonType = 4;
                                    this.contract_invalid.push(item);
                                    item.buttonColorType = 'gray';//#A1A1A1
                                }
                            });
                            for(let i = 0; i<5 && i<this.contract.length; i++){                       //显示五个所有种类智能合约
                                this.showList_all.push(this.contract[i]);
                            }
                            for(let i = 0; i<5 && i<this.contract_wait.length; i++){                  //显示五个待签约的智能合约
                                this.showList_wait.push(this.contract_wait[i]);
                            }
                            for(let i = 0; i<5 && i<this.contract_signed.length; i++){                //显示五个已签约的智能合约
                                this.showList_signed.push(this.contract_signed[i]);
                            }
                            for(let i = 0; i<5 && i<this.contract_arbitration.length; i++){           //显示五个已仲裁的智能合约
                                this.showList_arbitration.push(this.contract_arbitration[i]);
                            }
                            for(let i = 0; i<5 && i<this.contract_invalid.length; i++){                 //显示五个已失效的智能合约
                                this.showList_invalid.push(this.contract_invalid[i]);
                            }
                        }else if(res.code===1){
                            this.$router.push("/login");
                        }else{
                            this.$message.error(res.message);
                        }

                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            pageChangeAll(page){
                this.showList_all = [];
                for(let i = (page-1)*this.pageSize; i<(page-1)*this.pageSize+this.pageSize && i<this.contract.length; i++){
                    this.showList_all.push(this.contract[i]);
                }
            },
            pageChangeWait(page){
                this.showList_wait = [];
                for(let i = (page-1)*this.pageSize; i<(page-1)*this.pageSize+this.pageSize && i<this.contract_wait.length; i++){
                    this.showList_wait.push(this.contract_wait[i]);
                }
            },
            pageChangeSigned(page){
                this.showList_signed = [];
                for(let i = (page-1)*this.pageSize; i<(page-1)*this.pageSize+this.pageSize && i<this.contract_signed.length; i++){
                    this.showList_signed.push(this.contract_signed[i]);
                }
            },
            pageChangeArbitration(page){
                this.showList_arbitration = [];
                for(let i = (page-1)*this.pageSize; i<(page-1)*this.pageSize+this.pageSize && i<this.contract_arbitration.length; i++){
                    this.showList_arbitration.push(this.contract_arbitration[i]);
                }
            },
            pageChangeInvalid(page){
                this.showList_invalid = [];
                for(let i = (page-1)*this.pageSize; i<(page-1)*this.pageSize+this.pageSize && i<this.contract_invalid.length; i++){
                    this.showList_invalid.push(this.contract_invalid[i]);
                }
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