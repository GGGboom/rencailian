<template>
    <div class="wallet-container">
        <div class="flex-list-header">
            <div class="flex-row">
                <div class="flex-cell first">
                    钱包名称
                </div>
                <div class="flex-cell first">
                    钱包余额
                </div>
                <div class="flex-cell first">
                    钱包地址
                </div>
                <div class="flex-cell first">
                    操作
                </div>
            </div>
        </div>
        <div v-loading="loading" v-for="item in walletList" :key="item.id" class="flex-list-item mrg-top">
            <div  class="flex-row content">
                <div class="flex-cell first state">
                    {{item.name}}
                </div>
                <div class="flex-cell first state">
                    {{item.balanceOf}}
                </div>
                <div class="flex-cell first hash">
                    {{item.address}}
                </div>
                <div class="flex-cell first hash">
                    <el-button type="text" @click="deleteWalletById(item.id)">
                        删除
                    </el-button>
                </div>
            </div>
            <div v-if="!loading && walletList.length<0" class="empty-box" >
                <div class="message">
                    <img class="mark" src="../../../assets/img/i.png" alt>
                    <span class="message-txt">
                    当前钱包为空
                </span>
                </div>
            </div>
        </div>
        <div class="d-flex d-flex-jte mrg-top">
            <el-button type="primary" @click="walletDialog=true">导入钱包</el-button>
        </div>
        <el-dialog
                :visible.sync="walletDialog"
                width="400px">
            <div class="import-panel">
                <h4 class="title">
                    <a :class="{'wallet-active':index===1}" @click="index=1">助记词</a>
                    <b>·</b>
                    <a :class="{'wallet-active':index===2}" @click="index=2">私钥</a>
                </h4>
                <div v-if="index===1">
                    <el-form ref="walletForm" :rules="rules" :model="walletForm">
                        <el-form-item label="钱包名称" prop="name">
                            <el-input v-model="walletForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="助记词" prop="seed">
                            <el-input v-model="walletForm.seed"  type="textarea" placeholder="助记词"></el-input>
                        </el-form-item>
                        <el-form-item label="钱包密码" prop="seedPassword">
                            <el-input type="password" v-model="walletForm.seedPassword"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div v-if="index===2">
                    <el-form ref="privateForm" :rules="privateRules" :model="privateForm">
                        <el-form-item label="钱包名称" prop="name">
                            <el-input v-model="privateForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="私钥" prop="privateKey">
                            <el-input v-model="privateForm.privateKey"  type="textarea" placeholder="请输入私钥"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="walletDialog = false">取 消</el-button>
                <el-button v-if="index===1" type="primary" @click="importBySeed('walletForm')">导 入</el-button>
                <el-button v-if="index===2" type="primary" @click="importByPri('privateForm')">导 入</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {getWalletDetail,addWallet,deleteWallet} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "wallet",
        data() {
            return {
                walletList: [],
                walletDialog:false,
                loading:true,
                index:1,
                walletForm:{
                    name: '',
                    seed:"",
                    seedPassword:""
                },
                rules:{
                    name: [
                        { required: true, message: '请输入钱包名称', trigger: 'blur' },
                    ],
                    seed: [
                        { required: true, message: '请输入助记词', trigger: 'blur' }
                    ],
                    seedPassword: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                },
                privateForm:{
                    name: '',
                    privateKey:"",
                },
                privateRules:{
                    name: [
                        { required: true, message: '请输入钱包名称', trigger: 'blur' },
                    ],
                    privateKey: [
                        { required: true, message: '请输入私钥', trigger: 'blur' }
                    ]
                },
            }
        },
        methods: {
            importBySeed(formName){                             //通过助记词导入钱包
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {
                            "seed": this.walletForm.seed,
                            "password": this.walletForm.seedPassword,
                            "name": this.walletForm.name,
                        };
                        addWallet(data,CommonUtils.getStore("token"))
                            .then(res=>{
                                if(res.code===0){
                                    this.$message.success("添加成功");
                                    this.walletDialog = false;
                                    let result = CommonUtils.updateLocalUser(2);
                                    console.log(`result:${result}`);
                                    setTimeout(()=>{
                                        this.$router.go(0);
                                    },1000);
                                }
                            })
                            .catch(err=>{
                                console.log(err);
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            importByPri(formName){                             //通过私钥导入钱包
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {
                            "privateKey": this.privateForm.privateKey,
                            "name": this.privateForm.name,
                        };
                        addWallet(data,CommonUtils.getStore("token"))
                            .then(res=>{
                                if(res.code===0){
                                    this.$message.success("添加成功");
                                    this.walletDialog = false;
                                    setTimeout(()=>{
                                        this.$router.go(0);
                                    },100)
                                }
                            })
                            .catch(err=>{
                                console.log(err);
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            async getWalletDetail() {
                let list = JSON.parse(localStorage.getItem("user")).bstWallets;
                list.forEach(item => {
                    getWalletDetail({authorization: CommonUtils.getStore("token")}, item.id)
                        .then(res => {
                            this.walletList.push(res.result);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
            },
            deleteWalletById(id) {                              //删除钱包
                this.$confirm('确定删除？', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteWallet(null,CommonUtils.getStore("token"),id)
                        .then(res=>{
                            if(res.code===0){
                                this.$message({
                                    type: 'success',
                                    message: '删除成功'
                                });
                                let result = CommonUtils.updateLocalUser(2);
                                console.log(`result:${result}`);
                                setTimeout(()=>{
                                    this.$router.go(0);
                                },1000);
                            }else{
                                this.$message({
                                    type: 'info',
                                    message: res.message
                                });
                            }
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
        ,
        mounted() {

        },
        async created() {
            await this.getWalletDetail();
            this.loading = false;
        },
        watch: {
            walletList() {

            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/wallet.css";
</style>