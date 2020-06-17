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
                    <a href="javascript:void(0)" :class="{'login-tab':true, 'log-active':type!==3}" @click="change(0)">登录</a>
                    <a href="javascript:void(0)" :class="{'reg-tab':true, 'log-active':type===3}" @click="change(3)">注册</a>
                </div>
            </div>
            
            <!--登录表单-->
            <div class="formWrapper" >
                <el-form :model="loginForm" status-icon ref="loginForm" class="demo-loginForm">
                    <el-form-item prop="cellphone">
                        <el-input
                                  prefix-icon="el-icon-phone"
                                  v-model="loginForm.cellphone"
                                  autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" v-if="type===0">
                        <el-input type="password"
                                  prefix-icon="el-icon-lock"
                                  v-model="loginForm.password"
                                  placeholder="请输入6-25位字母、数字组合"
                                  autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="verifyCode" v-if="type===1 || type===3 || type===2">
                        <el-input type="text"
                                  v-model="loginForm.verifyCode"
                                  autocomplete="off">
                            <el-button slot="append" @click="getIdCode()">发送验证码</el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item class="forget-item">
                        <el-button v-if="type!==1 && type!==3 && type!==2" type="text" class="verify" @click="change(1)">验证码登录</el-button>
                        <el-button v-if="type!==0 && type!==3" type="text" class="verify" @click="change(0)">密码登录</el-button>
                        <el-button v-if="type!==3" type="text" class="forget" @click="change(2)">忘记密码?</el-button>
                        <el-button v-if="type===3" type="text" class="forget" @click="change(2)"></el-button>
                    </el-form-item>
                    <el-form-item v-if="type!==3">
                        <el-button type="primary" class="login" @click="logAnyMeth">登录</el-button>
                    </el-form-item>
                    <el-form-item v-if="type===3">
                        <el-button type="primary" class="login" @click="logAnyMeth">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <!--登录表单-->
            
        </div>
    </div>
</template>
<script>
    import {login} from '@/api/user';
    import {getCode} from "../api/user";

    export default {
        data() {
            return {
                type:0,                     //0为账号密码登录,1为验证码登录，2为忘记密码，3为注册
                loginForm: {                //登录表单
                    cellphone: '',
                    password: '',
                    verifyCode:null,
                    type:2
                }
            };
        },
        methods: {
            logAnyMeth(){//可以通过任何方式登录
                let phoneReg = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/;
                let password_reg = /(^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$)/;
                let data = {
                    cellphone:this.loginForm.cellphone,
                    type:1
                };
                if(this.type===0){
                    data.type = 2;
                }
                if(!phoneReg.test(this.loginForm.cellphone)){
                    this.$message.error("请输入有效的手机号码！");
                    return;
                }
                if(this.type===0 && !password_reg.test(this.loginForm.password)){
                    this.$message.error("输入的密码不符合规范！");
                    return;
                }
                if(this.type===0){
                    data.password = this.loginForm.password;
                }
                else {
                    data.verifyCode = this.loginForm.verifyCode;
                }
                login(data)
                    .then((res)=>{
                        if(res.code===0){
                            this.$message.success("登录成功");
                            setTimeout(()=>{
                                this.$store.commit('changePageState',true);                             //将页头设置为登录状态,将header、footer和backtotop设置为可见
                                this.$store.commit('login',true);                                       //设置用户类型
                                this.$store.commit('saveUserType',res.user.identityType);
                                res.user.token = res.token;
                                localStorage.setItem('user', JSON.stringify(res.user));                 //将用户基本信息存入localStorage
                                localStorage.setItem('token',JSON.stringify(res.token));                //将用户登录的token存入localStorage
                                this.$router.push("/");
                            },900);
                        }else{
                            this.$message.error(res.message);
                        }
                        console.log(res);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            change (type) {//切换登录
                switch (type) {
                    case 0:{
                        this.type = 0;
                        break;
                    }
                    case 1:{
                        this.type = 1;
                        break;
                    }
                    case 2:{
                        this.type = 2;
                        break;
                    }
                    case 3:{
                        this.type = 3;
                        break;
                    }
                }
            },
            getIdCode(){//获取验证码
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