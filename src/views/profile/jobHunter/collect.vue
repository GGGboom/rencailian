<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
            <!--收藏职位-->
            <el-tab-pane label="收藏职位" name="first">
                <ul class="list-box">
                    <li v-for="positionItem in positions" :key="positionItem.positionId" class="list-item">
                        <div class="">
                            <div class="d-inline-block mb-1">
                                <h3 class="wb-break-all">
                                    <router-link to="">
                                        {{positionItem.name}}

                                    </router-link>
                                    <span class="salary">
                                        {{positionItem.salaryRange}}
                                    </span>
                                </h3>
                            </div>
                            <div class="f6 text-gray mt-2">
                                <span class="ml-0 mr-3">
                                    {{positionItem.companyName}}
                                </span>
                                <span class="ml-0 mr-3">
                                    {{positionItem.financingRound}}
                                </span>
                                <span class="ml-0 mr-3">
                                    {{positionItem.address}}
                                </span>
                            </div>
                        </div>
                        <div class="col-4">
                            <el-button size="mini" @click="deleteFavourite(positionItem.positionId,2)">取消收藏</el-button>
                            <el-button size="mini" @click="chat(positionItem)">立即沟通</el-button>
                        </div>
                    </li>
                </ul>
                <div class="empty-box" v-if="positions.length===0" >
                    <div class="message">
                        <img class="mark" src="../../../assets/img/i.png" alt>
                        <span class="message-txt">
                            当前收藏职位为空
                        </span>
                    </div>
                </div>
            </el-tab-pane>
            <!--收藏职位-->

            <!--收藏公司-->
            <el-tab-pane label="收藏公司" name="second">
                <ul class="list-box">
                    <li v-for="item in companys" :key="item.companyId" class="list-item">
                        <div class="d-md-flex">
                            <div class="collect-img">
                                <img :src="item.logoImagePath" alt>
                            </div>
                            <div>
                                <div class="d-inline-block mb-1">
                                    <h3 class="wb-break-all">
                                        <router-link to="" class="company-name">
                                            {{item.companyName}}
                                        </router-link>
                                        <el-tag type="success" size="mini">信</el-tag>
                                        <span class="company-credit">100</span>
                                    </h3>
                                </div>
                                <div class="f6 text-gray mt-2">
                                <span class="ml-0 mr-3">
                                    {{item.address}}
                                </span>
                                </div>
                                <div class="f6 text-gray mt-2">
                                    <div>
                                        <span>{{item.companySize}}</span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span>{{item.financingRound}}</span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span>{{item.financingRound}}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="d-md-flex vertical-center">
                            <el-button size="mini">查看全部在招职位</el-button>
                            <el-button size="mini" @click="deleteFavourite(item.companyId,1)">取消收藏</el-button>
                        </div>
                    </li>
                </ul>
                <div class="empty-box" v-if="positions.companys===0" >
                    <div class="message">
                        <img class="mark" src="../../../assets/img/i.png" alt>
                        <span class="message-txt">
                            当前收藏公司为空
                        </span>
                    </div>
                </div>
            </el-tab-pane>
            <!--收藏公司-->

        </el-tabs>
    </div>
</template>

<script>
    import {getFavourite} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";
    import {canelFavourite} from "../../../api/job";
    import {canelFavouriteComp} from "../../../api/company";

    export default {
        name: "collect",
        data() {
            return {
                activeName: 'first',
                companys:[],                //收藏的公司列表
                positions:[],               //收藏的职位列表
            };
        },
        methods: {
            handleClick(tab, event) {//切换
                console.log(tab, event);
            },
            getCompany(){ //获取收藏公司列表
                getFavourite({authorization:CommonUtils.getStore("token")},1).then((res)=>{
                    if(res.code===0){
                        console.log(res);
                        this.companys = JSON.parse(JSON.stringify(res.companys));
                        this.companys.forEach(item=>{
                            item.verifiedStatus = CommonUtils.getKeyName('VERIFIED_STATUS',item.verifiedStatus);
                            item.financingRound = CommonUtils.getKeyName('FINANCING_ROUND',item.financingRound);
                            item.companySize = CommonUtils.getKeyName('COMPANY_SIZE',item.companySize);
                        })
                    }else if(res.code===1){
                        this.$router.push("/login");
                    }else{
                        this.$message.error(res.message);
                    }
                }).catch(err=>{
                    console.log(err);
                });
            },
            getPosition(){//获取收藏职位列表
                getFavourite({authorization:CommonUtils.getStore("token")},2).then((res)=>{
                    if(res.code===0){
                        this.positions = res.positions;
                        this.positions.forEach(item=>{
                            item.salaryRange = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                            item.serviceLength = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                            item.education = CommonUtils.getKeyName('EDUCATION', item.education);
                            item.financingRound = CommonUtils.getKeyName('FINANCING_ROUND', item.financingRound);
                        });
                        console.log(this.positions);
                    }else if(res.code===1){
                        this.$router.push("/login");
                    }else{
                        this.$message.error(res.message);
                    }
                }).catch(err=>{
                    console.log(err);
                });
            },
            deleteFavourite(id,type){
                if(type===2){       //2是取消收藏职位
                    canelFavourite(null,CommonUtils.getStore("token"),id,type)
                        .then(res=>{
                            if(res.code===0){
                                this.$message.success("取消收藏成功");
                                setTimeout(()=>{
                                    this.$router.go(0);
                                },900)
                            }else if(res.code===1){
                                this.$router.push("/login");
                            }else{
                                this.$message.error(res.message);
                            }
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                }else{              //取消收藏公司
                    canelFavouriteComp(null,CommonUtils.getStore("token"),id,type)
                        .then(res=>{
                            if(res.code===0){
                                this.$message.success("取消收藏成功");
                                setTimeout(()=>{
                                    this.$router.go(0);
                                },900)
                            }else if(res.code===1){
                                this.$router.push("/login");
                            }else{
                                this.$message.error(res.message);
                            }
                        })
                        .catch(err=>{
                            console.log(err);
                        });
                }

            },
            chat(positionItem){//转到聊天界面，同时将聊天对象信息存入localstorage中
                let receiveUser={};
                receiveUser.receiveUserId = positionItem.publishUserId;
                receiveUser.headerImage = positionItem.headerImagePath==""?"":positionItem.headerImagePath;
                receiveUser.name = positionItem.publishUserName;
                CommonUtils.setStore("receiveUser",receiveUser);
                this.$router.push("/talent/msg");
            },
        },
        mounted() {
            this.getCompany();
            this.getPosition();
        }
    }
</script>

<style scoped>
@import "../../../assets/css/profile/jobhunter/collect.css";
</style>