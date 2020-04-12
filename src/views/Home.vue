<template>
    <div class="wrap">
        <!--海报-->
        <div class="banner">
            <div class="banner-mask">
            </div>
        </div>
        <!--搜索框-->
        <div class="search-panel">
            <div class="inner">
                <div class="search-box">
                    <div class="search-form">
                        <div class="search-form-con" :style="styleObject">
   
                            <p class="ipt-wrap">
                                <input v-on:focus="getFoucs" class="ipt-search" type="text" placeholder="搜索职位、公司">
                            </p>
                        </div>
                        <el-button type="primary">搜索</el-button>
                    </div>

                </div>
            </div>
        </div>
        <!--职位-->
        <div class="inner home-inner">
            <div class="home-box">
                <div class="common-tab-box job-tab-box">
                    <!--职位列表-->
                    <div class="common-tab">
                        <el-tabs v-model="job" @tab-click="handleClick">
                            <el-tab-pane label="IT·互联网" name="first">
                                <el-row :gutter="12">
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="6">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <p>
                                                    <span>算法工程师</span>
                                                    <span class="salary">30-50k</span>
                                                </p>
                                                <div class="common-tag">
                                                    <span>上海</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>3-5年</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>本科</span>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="common-bot">
                                                    <el-avatar
                                                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                    <span class="company">招商银行信用卡中心</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                            </el-tab-pane>
                            <el-tab-pane label="金融" name="second">金融</el-tab-pane>
                            <el-tab-pane label="房地产·建筑" name="third">房地产·建筑</el-tab-pane>
                            <el-tab-pane label="教育培训" name="fourth">教育培训</el-tab-pane>
                        </el-tabs>
                    </div>
                    <!--查看更多-->
                    <div class="more-box">
                        <el-button type="primary">
                            <router-link to="">
                                查看更多
                            </router-link>
                        </el-button>
                    </div>
                </div>

            </div>
        </div>
        <!--公司-->
        <div class="inner home-inner">
            <div class="home-box">
                <div class="common-tab-box company-tab-box">
                    <!--职位列表-->
                    <div class="common-tab company-tab">
                        <el-tabs v-model="company" @tab-click="handleClick">
                            <el-tab-pane label="热门企业" name="first">
                                <el-row :gutter="12">
                                    <el-col :span="8">
                                        <router-link to="/company/detail">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                            </el-tab-pane>
                            <el-tab-pane label="上市公司" name="second">上市公司</el-tab-pane>
                        </el-tabs>
                    </div>
                    <!--查看更多-->
                    <div class="more-box">
                        <el-button type="primary">
                            <router-link to="">
                                查看更多
                            </router-link>
                        </el-button>
                    </div>
                </div>

            </div>
        </div>
        <Backtop></Backtop>
    </div>
</template>

<script>
    import Backtop from '../components/Backtop';
    import $ from 'jquery';
    $(function(){
        let $bottomTools = $('.bottom_tools');
        let $qrTools = $('.qr_tool');
        let qrImg = $('.qr_img');

        $(window).scroll(function () {
            let scrollHeight = $(document).height();
            let scrollTop = $(window).scrollTop();
            let $windowHeight = $(window).innerHeight();
            scrollTop > 10 ? $("#scrollUp").fadeIn().css("display","block") : $("#scrollUp").fadeOut();
            $bottomTools.css("bottom", scrollHeight - scrollTop > $windowHeight ? 40 : $windowHeight + scrollTop + 40 - scrollHeight);
        });

        $('#scrollUp').click(function (e) {
            e.preventDefault();
            $('html,body').animate({ scrollTop:0});
        });

        $qrTools.hover(function () {
            qrImg.fadeIn();
        }, function(){
            qrImg.fadeOut();
        });

    });
    export default {
        name: 'Home',
        components: {
            Backtop
        },
        data() {
            return {
                imgUrl: "../assets/img/aliyun.jpg",
                fill: "fill",
                number: 11,
                styleObject: {
                    border: '1px solid #fff'
                },
                //职位标签页默认index
                job: 'first',
                //公司标签页默认index
                company: 'first',
                //公司图片设置为cover
                fit: 'cover',

                url: require("../assets/img/alibaba.jpg")
            }
        },
        methods: {
            getFoucs: function () {
                // this.styleObject.border = '1px solid #53cac3';
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        beforeCreate() {
            this.$emit('setHeader','home');
        }
    }
</script>
<style>
    @import "../assets/css/Home.css";
</style>
