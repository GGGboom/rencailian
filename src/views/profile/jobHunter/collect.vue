<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
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
            <el-tab-pane label="收藏公司" name="second">
                <ul class="list-box">
                    <li v-for="item in companys" :key="item.companyId" class="list-item">
                        <div class="col-8">
                            <div class="d-inline-block mb-1">
                                <h3 class="wb-break-all">
                                    <router-link to="">
                                        {{item.companyName}}

                                    </router-link>
                                    <el-tag type="success" size="mini">信</el-tag>
                                    <span class="company-credit">100</span>
                                </h3>
                            </div>
                            <div class="f6 text-gray mt-2">
                                <span class="ml-0 mr-3">

                                </span>
                                <span class="ml-0 mr-3">

                                </span>
                            </div>
                            <div class="f6 text-gray mt-2">
                                <span class="ml-0 mr-3">
                                </span>
                                <span class="ml-0 mr-3">
                                </span>
                                <span class="ml-0 mr-3">
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
        </el-tabs>
    </div>
</template>

<script>
    import {getFavourite} from "../../../api/user";
    import {getStore} from "../../../utils/localStorageUtil";

    export default {
        name: "collect",
        data() {
            return {
                activeName: 'first',
                companys:[{
                    "companyId": 1235,
                    "logoImagePath": null,
                    "simpleName": "大黄",
                    "verifiedStatus": 0,
                    "financingRound": 1,
                    "companySize": 1,
                    "industryType": 1,
                    "description": null,
                    "address": null,
                    "officialWebsite": null,
                    "createTime": 1534239317000,
                    "createUserId": 5,
                    "updateTime": null,
                    "updateUserId": null,
                    "isDeleted": false,
                    "companyName": "阿里影业公司",
                    "verifiedFailReason": "公司在工商局不存在"
                }],
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
                getFavourite({authorization:getStore("user").token},1).then((res)=>{
                    if(res.code===0){
                        console.log(res);
                        this.companys = JSON.parse(JSON.stringify(res.companys));
                    }
                }).catch(err=>{
                    console.log(err);
                });
            },
            //获取收藏职位列表
            getPosition(){
                getFavourite({authorization:getStore("user").token},2).then((res)=>{
                    if(res.code===0){
                        console.log(res);
                    }
                }).catch(err=>{
                    console.log(err);
                });
            }
        },
        created() {
            this.getCompany();
            this.getPosition();
        }
    }
</script>

<style scoped>
@import "../../../assets/css/profile/collect.css";
</style>