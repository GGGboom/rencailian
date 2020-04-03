<template>
    <div class="privacy">
        <el-table
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
        </el-table>
        <div class="btn_select">
            <el-button size="mini" @click="toggleSelection()">移除已选中</el-button>
        </div>
        <div class="Subhead Subhead--spacious">
            <h2 class="Subhead-heading">
                简历设置
            </h2>
        </div>
        <el-form ref="form" :model="form">
            <el-form-item label="隐藏简历">
                <el-switch v-model="form.visible"></el-switch>
            </el-form-item>
        </el-form>
        <div class="pro-detail">
            <span>隐藏简历后雇主将不会再浏览到您的简历</span>
        </div>
    </div>
</template>

<script>
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

                }
            }
        },

        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style scoped>
@import "../../assets/css/profile/privacy.css";
</style>