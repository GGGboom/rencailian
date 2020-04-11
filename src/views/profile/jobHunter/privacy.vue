<template>
    <div class="privacy">
        <div>
            <div class="Subhead">
                <h2 class="Subhead-heading">
                    屏蔽设置
                </h2>
            </div>
            <el-table
                    border
                    ref="multipleTable"
                    :data="companys"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        label="已屏蔽公司"
                        prop="companyName"
                        width="120">
                    <template slot-scope="scope">{{ scope.row.companyName }}</template>
                </el-table-column>
                <el-table-column
                        prop="industryType"
                        label="行业类型"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="操作" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">移除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="btn_select">
                <el-button size="mini" @click="dialogVisible = true">添加屏蔽公司</el-button>
            </div>
        </div>
        <div>
            <div class="Subhead Subhead--spacious">
                <h2 class="Subhead-heading">
                    简历设置
                </h2>
            </div>
            <el-form ref="form" :model="form">
                <el-form-item label="隐藏简历">
                    <el-switch v-model="form.visible"></el-switch>
                </el-form-item>
                <div class="warning-container">
                    <img src="../../../assets/img/i.png" alt>
                    <span class="warning">隐藏简历后雇主将不会再浏览到您的简历</span>
                </div>
            </el-form>

        </div>
        <el-dialog
                title="添加屏蔽公司"
                :visible.sync="dialogVisible"
                width="400px">
            <el-form :model="searchForm" :rules="rules" ref="searchForm" label-width="auto" class="demo-ruleForm">
                <el-form-item label="公司名称" prop="name">
                    <el-input v-model="searchForm.companyName" placeholder="请输入要屏蔽的公司名称"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="blockCompany('searchForm')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {getBlackList,addBlack} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "privacy",
        data() {
            return {
                multipleSelection: [],
                companys:[
                    {
                        "companyId": 1,
                        "logoImagePath": null,
                        "simpleName": "大黄",
                        "verifiedStatus": 0,
                        "financingRound": 1,
                        "companySize": 1,
                        "industryType": 1,
                        "description": null,
                        "address": "上海市松江区",
                        "officialWebsite": null,
                        "createTime": 1534239317000,
                        "createUserId": 5,
                        "updateTime": null,
                        "updateUserId": null,
                        "isDeleted": false,
                        "companyName": "阿里影业公司",
                        "verifiedFailReason": "公司在工商局不存在"
                    },
                    {
                        "companyId": 2,
                        "logoImagePath": null,
                        "simpleName": "大黄",
                        "verifiedStatus": 0,
                        "financingRound": 1,
                        "companySize": 1,
                        "industryType": 1,
                        "description": null,
                        "address": "上海市浦东新区",
                        "officialWebsite": null,
                        "createTime": 1534239317000,
                        "createUserId": 5,
                        "updateTime": null,
                        "updateUserId": null,
                        "isDeleted": false,
                        "companyName": "腾讯影业公司",
                        "verifiedFailReason": "公司在工商局不存在"
                    }
                ],
                form:{
                    companyName:""
                },
                dialogVisible:false,
                searchForm:{

                },
                rules:{
                    companyName: [
                        { required: true, message: '公司名不能为空', trigger: 'blur' }
                    ]
                }
            }
        },

        methods: {
            blockCompany(searchForm){
                this.$refs[searchForm].validate((valid)=>{
                    if(valid){
                        addBlack(null,CommonUtils.getStore("user"),1)
                            .then(res=>{
                                console.log(res)
                            })
                            .catch(err=>{
                                console.log(err)
                            })
                    }
                })

            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            get(){
                getBlackList({authorization:CommonUtils.getStore("token")})
                    .then(res=>{
                        console.log(res);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
        mounted() {
            this.get();
        }
    }
</script>

<style scoped>
@import "../../../assets/css/profile/privacy.css";
</style>