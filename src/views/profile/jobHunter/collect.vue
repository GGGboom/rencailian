<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
            <!--收藏职位-->
            <el-tab-pane label="收藏职位" name="first">
                <ul class="list-box">
                    <li v-for="positionItem in positions" :key="positionItem.positionId" class="list-item">
                        <div class="col-8">
                            <div class="d-inline-block mb-1">
                                <h3 class="wb-break-all">
                                    <router-link to="">
                                        {{positionItem.name}}

                                    </router-link>
                                    <span class="salary">
                                        {{positionItem.salaryRangeStart}}-{{positionItem.salaryRangeEnd}}K
                                    </span>
                                </h3>
                            </div>
                            <div class="f6 text-gray mt-2">
                                <span class="ml-0 mr-3">
                                    {{positionItem.companyName}}
                                </span>
                                <span class="ml-0 mr-3">
                                    {{positionItem.publishStatus}}
                                </span>
                                <span class="ml-0 mr-3">
                                    {{positionItem.address}}
                                </span>
                            </div>
                        </div>
                        <div class="col-4">
                            <el-button size="mini">取消收藏</el-button>
                            <el-button size="mini">立即沟通</el-button>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <!--收藏职位-->

            <!--收藏公司-->
            <el-tab-pane label="收藏公司" name="second">
                <ul class="list-box">
                    <li v-for="item in companys" :key="item.companyId" class="list-item">
                        <div class="col-8 d-md-flex">
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
                        <div class="col-4  d-md-flex vertical-center">
                            <el-button size="mini">查看全部在招职位</el-button>
                            <el-button size="mini">取消收藏</el-button>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <!--收藏公司-->

        </el-tabs>
    </div>
</template>

<script>
    import {getFavourite} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";
    import {getCompanySize,getFinancingRound,getVerifiedStatus} from "../../../utils/commonUtil";

    export default {
        name: "collect",
        data() {
            return {
                activeName: 'first',
                companys:[],
                positions:[
                    {
                        "companyId": 1,
                        "positionId": 1,
                        "name": "软件工程师",
                        "address": "上海市松江区",
                        "salaryRangeStart": 10,
                        "salaryRangeEnd": 20,
                        "serviceLength": null,
                        "createTime": null,
                        "updateTime": null,
                        "publishTime": null,
                        "publishStatus": "D轮及以上",
                        "education": null,
                        "isDeleted": false,
                        "simpleName": null,
                        "companyName": '阿里巴巴'
                    },
                    {
                        "companyId": 2,
                        "positionId": 2,
                        "name": "软件工程师",
                        "address": "上海市浦东新区",
                        "salaryRangeStart": 15,
                        "salaryRangeEnd": 25,
                        "serviceLength": null,
                        "createTime": null,
                        "updateTime": null,
                        "publishTime": null,
                        "publishStatus": "D轮及以上",
                        "education": null,
                        "isDeleted": false,
                        "simpleName": null,
                        "companyName": '腾讯'
                    },
                    {
                        "companyId": 3,
                        "positionId": 3,
                        "name": "高级软件工程师",
                        "address": "上海市普陀区",
                        "salaryRangeStart": 12,
                        "salaryRangeEnd": 23,
                        "serviceLength": null,
                        "createTime": null,
                        "updateTime": null,
                        "publishTime": null,
                        "publishStatus": "D轮及以上",
                        "education": null,
                        "isDeleted": false,
                        "simpleName": null,
                        "companyName": '百度'
                    }
                    ,
                    {
                        "companyId": 4,
                        "positionId": 4,
                        "name": "软件工程师",
                        "address": "上海市静安区",
                        "salaryRangeStart": 12,
                        "salaryRangeEnd": 23,
                        "serviceLength": null,
                        "createTime": null,
                        "updateTime": null,
                        "publishTime": null,
                        "publishStatus": "D轮及以上",
                        "education": null,
                        "isDeleted": false,
                        "simpleName": null,
                        "companyName": '字节跳动'
                    }
                ]
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            //获取收藏公司列表
            getCompany(){
                getFavourite({authorization:CommonUtils.getStore("token")},1).then((res)=>{
                    if(res.code===0){
                        console.log(res);
                        this.companys = JSON.parse(JSON.stringify(res.companys));
                        this.companys.forEach(item=>{
                            item.verifiedStatus = getVerifiedStatus(item.verifiedStatus);
                            item.financingRound = getFinancingRound(item.financingRound);
                            item.companySize = getCompanySize(item.companySize);
                        })
                    }
                }).catch(err=>{
                    console.log(err);
                });
            },
            //获取收藏职位列表
            getPosition(){
                getFavourite({authorization:CommonUtils.getStore("token")},2).then((res)=>{
                    if(res.code===0){
                        console.log(res);
                    }
                }).catch(err=>{
                    console.log(err);
                });
            }
        },
        mounted() {
            this.getCompany();
            this.getPosition();
        }
    }
</script>

<style scoped>
@import "../../../assets/css/profile/collect.css";
</style>