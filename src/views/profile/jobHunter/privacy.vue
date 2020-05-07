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
                                @click="handleDelete(scope.row.companyId)">移除</el-button>
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
            <div>
                <div class="resume-hidden">
                    <span>隐藏简历</span>
                    <el-switch
                            v-model="visible"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </div>
                <div class="warning-container">
                    <img src="../../../assets/img/i.png" alt>
                    <span class="warning">隐藏简历后雇主将不会再浏览到您的简历</span>
                </div>
            </div>

        </div>
        <el-dialog
                title="添加屏蔽公司"
                :visible.sync="dialogVisible"
                width="400px">
                    <el-input v-model="companyName" placeholder="请输入要屏蔽的公司名称" @blur.native.capture="getCompanyIdByName()"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="blockCompany()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {getBlackList,addBlack,deleteBlack} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";
    import {searchCompany} from "../../../api/company";

    export default {
        name: "privacy",
        data() {
            return {
                visible:true,
                companys:[],
                companyName:"",
                dialogVisible:false,
                searchForm:{

                },
                dateSlots: [{
                    flex: 1,
                    values: [],
                    className: 'slot3',
                    textAlign: 'left'
                }],
                model : [],
            }
        },

        methods: {
            blockCompany(){
                if(typeof(this.companyName)=='undefined'){
                    this.$message.error("请输入要屏蔽的公司名称");
                    return;
                }
                let companyId = 0;
                console.log(this.model,'model');
                this.model.forEach((item)=>{
                    console.log(item,'item')
                    if(this.companyName == item.companyName){
                        companyId = item.companyId;
                    }
                });
                addBlack(null,CommonUtils.getStore("token"),companyId)
                    .then(res=>{
                        if(res.code===0){
                            this.$message.success("添加成功");
                            // setTimeout(()=>{
                            //     this.$router.go(0);
                            // },900)
                        }else{
                            console.log(res.message);
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })

            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            get(){
                getBlackList({authorization:CommonUtils.getStore("token")})
                    .then(res=>{
                        if(res.code===0){
                            this.companys = res.companys;
                            console.log(this.companys)
                        }else{
                            console.log(res.message);
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            handleDelete(companyId) {
                deleteBlack(null,CommonUtils.getStore("token"),companyId)
                    .then(res=>{
                        if(res.code===0){
                            this.$message.success("移除成功");
                            this.get();
                        }else{
                            console.log(res.message);
                        }
                    })
            },
            getCompanyIdByName(){
                searchCompany({authorization: CommonUtils.getStore("token")},this.companyName)
                    .then((res)=>{
                        console.log(res,'data')
                        var companyName = new Array();
                        //vm.popupVisible = true;
                        res.model.forEach(function(item){
                            console.log(item)
                            companyName.push(item.companyName);
                        });
                        this.model = res.model;
                        this.dateSlots[0].values = companyName;
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                console.log(this.companyName);
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