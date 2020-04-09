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
                    <a href="javascript:void(0)" :class="{'login-tab':true, active:isLogin}" @click="changeToLog">登录</a>
                    <a href="javascript:void(0)" :class="{'reg-tab':true, active:isReg}" @click="changeToReg">注册</a>
                </div>

            </div>
            <div class="formWrapper" >
                <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="demo-loginForm">
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
                    <el-form-item prop="verify" v-if="isReg">
                        <el-input type="text"
                                  v-model="loginForm.verify"
                                  autocomplete="off">
                            <el-button slot="append">发送验证码</el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item class="forget-item" v-if="!isReg">
                        <el-button type="text" class="forget">忘记密码?</el-button>
                    </el-form-item>
                    <el-form-item v-if="!isReg">
                        <el-button type="primary" class="login" @click="submitForm('loginForm')">登录</el-button>
                    </el-form-item>
                    <el-form-item v-if="isReg">
                        <el-button type="primary" class="login" @click="submitForm('loginForm')">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    import {login} from '@/api/user';
    export default {
        data() {
            return {
                //登录标签页
                isLogin:true,
                //注册标签页
                isReg:false,
                loginForm: {
                    cellphone: '',
                    password: '',
                    verify:null,
                    type:2
                },
                rules: {
                    cellphone: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur'  }
                    ],
                    verify:[
                        { required: true, message: '请输入验证码', trigger: 'blur'  }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        this.loginForm.verify = 2;
                        let res = await login(JSON.stringify(this.loginForm));
                        if(res.code===0){
                            this.$message.success("登录成功");
                            //将header、footer和backtotop设置为可见
                            this.$store.commit('changePageState',true);
                            //将页头设置为登录状态
                            this.$store.commit('login',true);
                            //设置用户类型
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
            changeToLog () {
                this.isLogin = true;
                this.isReg = false;
            },
            changeToReg(){
                this.isLogin = false;
                this.isReg = true;
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