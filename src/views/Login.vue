<template>
    <div class="class-main">
        <div class="m-header-box">
            <div class="m-header-content">
                <div class="u-ercode">
                    <span class="u-font-desc">扫码下载App</span>
                    <div class="ercode-img-wrapper j-ercode-img-wrapper"> <i class="i-arrow"></i>
                        <p class="u-font-desc1">手机扫描二维码即可下载最新版本</p>
                        <img class="u-ercode-img" src="../assets/img/QRcode.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="m-form-wrapper">
            <div class="tab-navs ui-tab-navs zixuanguHide wxmsgHide j-tab-navs-tips">
                <div class="navs-slider">
                    <a href="javascript:void(0)" :class="{'login-tab':true, 'log-active':isLogin}" @click="changeToLog">登录</a>
                    <a href="javascript:void(0)" :class="{'reg-tab':true, 'log-active':isReg}" @click="changeToReg">注册</a>
                </div>

            </div>
            <div class="formWrapper" >
                <el-form :model="loginForm" status-icon ref="loginForm" class="demo-loginForm">
                    <el-form-item prop="cellphone">
                        <el-input
                                  prefix-icon="el-icon-phone"
                                  v-model="loginForm.cellphone"
                                  autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" v-if="!isReg">
                        <el-input type="password"
                                  prefix-icon="el-icon-lock"
                                  v-model="loginForm.password"
                                  autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="verifyCode" v-if="isReg">
                        <el-input type="text"
                                  v-model="loginForm.verifyCode"
                                  autocomplete="off">
                            <el-button slot="append" @click="getIdCode()">发送验证码</el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item class="forget-item" v-if="!isReg">
                        <el-button type="text" class="verify" @click="changeToReg">验证码登录</el-button>
                        <el-button type="text" class="forget" @click="changeToReg">忘记密码?</el-button>
                    </el-form-item>
                    <el-form-item v-if="!isReg">
                        <el-button type="primary" class="login" @click="submitForm('loginForm')">登录</el-button>
                    </el-form-item>
                    <el-form-item v-if="isReg">
                        <el-button type="primary" class="login" @click="logByCode">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    import {login} from '@/api/user';
    import {getCode} from "../api/user";

    export default {
        data() {
            return {
                isLogin:true,                //登录标签页
                isReg:false,                 //注册标签页
                loginForm: {                 //登录表单
                    cellphone: '',
                    password: '',
                    verifyCode:null,
                    type:2
                }
            };
        },
        methods: {
            logByCode(){
                let data = {
                    "cellphone":this.loginForm.cellphone,
                    "verifyCode":this.loginForm.verifyCode,
                    "type":1
                };
                login(data)
                    .then((res)=>{
                        if(res.code===0){
                            this.$message.success("登录成功");                            //将header、footer和backtotop设置为可见
                            this.$store.commit('changePageState',true);                  //将页头设置为登录状态
                            this.$store.commit('login',true);                            //设置用户类型
                            this.$store.commit('saveUserType',res.user.identityType);
                            res.user.token = res.token;
                            localStorage.setItem('user', JSON.stringify(res.user));
                            localStorage.setItem('token',JSON.stringify(res.token));
                            this.$router.push("/");
                        }
                        console.log(res);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        this.loginForm.verifyCode = 2;
                        let res = await login(JSON.stringify(this.loginForm));
                        if(res.code===0){
                            this.$message.success("登录成功");                            //将header、footer和backtotop设置为可见
                            this.$store.commit('changePageState',true);                  //将页头设置为登录状态
                            this.$store.commit('login',true);                            //设置用户类型
                            this.$store.commit('saveUserType',res.user.identityType);
                            res.user.token = res.token;
                            localStorage.setItem('user', JSON.stringify(res.user));
                            localStorage.setItem('token',JSON.stringify(res.token));
                            this.$router.push("/");
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            changeToLog () {            //切换到登录
                this.isLogin = true;
                this.isReg = false;
            },
            changeToReg(){              //切换到注册
                this.isLogin = false;
                this.isReg = true;
            },
            getIdCode(){
                let phoneReg = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/;
                if(!phoneReg.test(this.loginForm.cellphone)){
                    this.$message.error("请输入有效的手机号码！");
                    return;
                }
                getCode({cellphone:this.loginForm.cellphone})
                    .then((res)=>{
                        if(res.code===0){
                            this.$message.success("验证码获取成功");
                        }else{
                            this.$message.error(res.message);
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            }
        },
        created() {
            this.$store.commit('changePageState',false);
        }
    }
</script>
<style>
    @import "../assets/css/login.css";
</style>