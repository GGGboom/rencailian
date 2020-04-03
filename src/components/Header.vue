<template>
    <header class="Header">
        <div class="left">
            <div class="Header-item first">
        <router-link to="/">
            <el-avatar :src="logoUrl"
                       size="small"></el-avatar>
        </router-link>
    </div>
            <div class="Header-item stretch">
        <nav class="nav">
            <router-link class="nav-item" to="/">首页</router-link>
            <router-link v-if="this.$store.state.user.identityType===1" class="nav-item" to="/job">职位</router-link>
            <router-link v-if="this.$store.state.user.identityType===1" class="nav-item" to="/company">公司</router-link>
            <router-link v-if="this.$store.state.user.identityType===2" class="nav-item" to="/talent">人才</router-link>
            <router-link v-if="this.$store.state.user.identityType===2" class="nav-item" to="/position/all">职位</router-link>
            <router-link class="nav-item" to="/">资讯</router-link>
        </nav>
    </div>
        </div>
        <!--已登录-->
        <div class="right" v-if="!this.$store.state.isLogin">
            <div class="Header-item ">
                <el-tooltip class="item item-img" effect="light" content="添加简历" placement="top-start">
                    <router-link to="/profile">
                        <i class="el-icon-plus"></i>
                    </router-link>
                </el-tooltip>
            </div>
            <div class="Header-item ">
                <el-tooltip class="item item-img" effect="light" content="你有新消息" placement="top-start">
                    <router-link to="/msg">
                        <i class="el-icon-message-solid"></i>
                    </router-link>
                </el-tooltip>
            </div>
            <div class="Header-item  n-avatar">
                <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            <router-link to="/profile/info">
                                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                           size="small"></el-avatar>
                            </router-link>
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-document">
                            <router-link :to="{name:'resume'}">
                                我的简历
                            </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-magic-stick">我的收藏</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-close">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <!--未登录-->
        <div class="right login" v-else>
            <router-link  to="/login">
                <el-button class="lgn-btn">登录</el-button>
            </router-link>
            <router-link to="">
                <el-button>注册</el-button>
            </router-link>
        </div>
    </header>
</template>
<script>
    export default {
        name: "Navigation",
        props: {},
        data() {
            return {
                logoUrl:require("../assets/img/logo.png")
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            /* 进度条增加*/
            increase() {
                this.percentage += 10;
                if (this.percentage > 100) {
                    this.percentage = 100;
                }
            },
            /* 进度条减少*/
            decrease() {
                this.percentage -= 10;
                if (this.percentage < 0) {
                    this.percentage = 0;
                }
            }
        }
    }
</script>
<style scoped>
    @import "../assets/css/components/header.css";
</style>