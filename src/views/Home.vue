<template>
    <div class="wrap">
        <!--海报-->
        <div class="banner">
            <div class="banner-mask">
            </div>
        </div>
        <!--海报-->

        <!--搜索框-->

        <!--搜索框-->

        <!--应聘者职位列表-->
        <div class="inner home-inner" v-if="this.$store.state.identityType===2">
            <div class="home-box">
                <div class="common-tab-box job-tab-box">
                    <!--职位列表-->
                    <div class="box-title">热招职位</div>
                    <div class="common-tab">
                        <el-row :gutter="12">
                            <el-col v-for="(item,index) in jobList" :key="index" :span="6" >
                                <router-link :to="item.url">
                                    <el-card shadow="hover">
                                        <p>
                                            <span>{{item.name===""?"无":item.name}}</span>
                                            <span class="salary">{{item.salaryRangeTxt}}</span>
                                        </p>
                                        <div class="common-tag">
                                            <span>{{item.city}}</span>
                                            <el-divider direction="vertical"></el-divider>
                                            <span>{{item.serviceLengthTxt}}</span>
                                            <el-divider direction="vertical"></el-divider>
                                            <span>{{item.educationTxt}}</span>
                                        </div>
                                        <div class="split">
                                            <el-divider></el-divider>
                                        </div>
                                        <div class="common-bot">
                                            <el-avatar
                                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                            <span class="company">{{item.description}}</span>
                                        </div>
                                    </el-card>
                                </router-link>
                            </el-col>
                        </el-row>
                    </div>
                    <!--查看更多-->
                    <div class="more-box normal-pad-top">
                        <el-button type="primary">
                            <router-link to="/job/all">
                                查看更多
                            </router-link>
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
        <!--应聘者职位列表-->

        <!--公司列表-->
        <div class="inner home-inner" v-if="this.$store.state.identityType===2">
            <div class="home-box">
                <div class="common-tab-box company-tab-box">
                    <!--公司列表-->
                    <div class="box-title">热门企业</div>
                    <div class="common-tab company-tab">
                        <el-row :gutter="12">
                            <el-col v-for="item in companyList" :key="item.id" :span="8">
                                <router-link :to="item.url">
                                    <el-card shadow="hover">
                                        <div class="company-img">
                                            <el-image
                                                    style="width: 100px; height: 100px"
                                                    :src="url"
                                                    fit="cover"
                                                    :lazy='true'></el-image>
                                            <div class="company-right">
                                                <p>
                                                    <span>{{item.companyName}} <span class="credit">信用:100</span></span>
                                                    <span>{{item.address}}</span>
                                                    <span class="Authentication">认证通过</span>
                                                </p>
                                                <div class="common-tag company-tag">
                                                    <span>{{item.city}}</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>{{item.serviceLengthTxt}}</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>{{item.educationTxt}}</span>
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
                    </div>
                    <!--查看更多-->
                    <div class="more-box normal-pad-top">
                        <el-button type="primary">
                            <router-link to="/company/all">
                                查看更多
                            </router-link>
                        </el-button>
                    </div>
                </div>

            </div>
        </div>
        <!--公司列表-->

        <!--人才列表-->
        <div class="inner home-inner" v-if="this.$store.state.identityType===1">
            <div class="home-box">
                <div class="common-tab-box job-tab-box">
                    <!--职位列表-->
                    <div class="box-title">人才</div>
                    <div class="common-tab home-talent">
                        <el-row :gutter="12">
                            <el-col v-for="(item,index) in talentList" :key="index" :span="6" >
                                <router-link to="/">
                                    <el-card shadow="hover">
                                        <div class="common-bot normal-pad-top">
                                            <el-avatar
                                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                            <el-tag class="info-tag" type="success" effect="plain">信</el-tag>
                                            <span class="info-credit">{{item.reputationScore}}</span>
                                        </div>
                                        <p>
                                            <span>{{item.name===""?"无":item.name}}</span>
                                        </p>
                                        <div class="common-tag">
                                            <span>{{item.salaryRangeTxt}}</span>
                                            <el-divider direction="vertical"></el-divider>
                                            <span>{{item.educationTxt}}</span>
                                            <el-divider direction="vertical"></el-divider>
                                            <span>{{item.serviceLengthTxt}}</span>
                                        </div>
                                    </el-card>
                                </router-link>
                            </el-col>
                        </el-row>
                    </div>
                    <!--查看更多-->
                    <div class="more-box normal-pad-top">
                        <el-button type="primary">
                            <router-link to="/talent/all">
                                查看更多
                            </router-link>
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
        <!--人才列表-->

        <!--回到顶部-->
        <Backtop></Backtop>
        <!--回到顶部-->
    </div>
</template>

<script>
    import Backtop from '../components/Backtop';
    import $ from 'jquery';
    import {CommonUtils} from "../utils/commonUtil";
    import {getJobList} from "../api/job";
    import {getCompanyList} from "../api/company";
    import {getTalentList} from "../api/talent";

    $(function(){//返回顶部脚本代码
        let $bottomTools = $('.bottom_tools');
        let $qrTools = $('.qr_tool');
        let qrImg = $('.qr_img');

        $(window).scroll(function () {
            let scrollHeight = $(document).height();
            let scrollTop = $(window).scrollTop();
            let $windowHeight = $(window).innerHeight();
            scrollTop > 50 ? $("#scrollUp").fadeIn().css("display","block") : $("#scrollUp").fadeOut();
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
            Backtop                                                 //返回顶部组件
        },
        data() {
            return {
                url: require("../assets/img/alibaba.jpg"),          //公司的默认图片，若后端数据中有每一个公司的图片，可将这个删除
                pageSize:12,                                        //职位个数的默认大小
                jobList:[],                                         //职位列表
                companyList:[],                                     //公司列表
                talentList:[]                                       //人才列表
            }
        },
        methods: {
            async init() {//初试化页面
                if(this.$store.state.identityType===2){
                    this.getJob(this.pageSize,1);
                    this.getCompany(this.pageSize-3,1);
                }else{
                    this.getTalent(this.pageSize,1);
                }
            },
            async getJob(pageSize, pageNum){//获取职业列表
                let data = {
                    salaryRange: this.salaryRange,
                    industryType: this.industryType,
                    nearDistance: this.nearDistance,
                    location: this.location,
                    area: this.area,
                    city: this.city
                };
                let res = await getJobList(data, CommonUtils.getStore("token"), pageSize, pageNum);
                if (res.code === 0) {
                    this.jobList = res.result.collection;
                    this.jobList.forEach(item => {
                        item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                        item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                        item.createTimeTxt = CommonUtils.getFormatDateTime(item.createTime, "yyyy-MM-dd HH:mm:ss");
                        item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                        item.publishStatusTxt = CommonUtils.getKeyName('PUBLISH_STATUS', item.publishStatus);
                        item.url = `/job/detail?companyId=${item.companyId}&positionId=${item.positionId}`;
                    });
                    console.log(this.jobList);
                }else {
                    this.$router.push("/login");
                }
            },
            getCompany(pageSize, pageNum) {//获取公司列表
                let data = {
                    salaryRange: this.salaryRange,
                    industryType: this.industryType,
                    nearDistance: this.nearDistance,
                    location: this.location,
                    city: this.city,
                    area: this.area
                };
                getCompanyList(data, CommonUtils.getStore("token"), pageSize, pageNum)
                    .then(res => {
                        if (res.code === 0) {
                            this.companyList = res.result.collection;
                            this.companyList.forEach(item => {
                                item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                                item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                                item.url = `/company/detail?companyId=${item.companyId}&positionId=${item.positionId}`;
                            });
                            this.companyList.forEach(item => {
                                item.id = item.companyId + item.positionId;
                            });
                            console.log(res);
                        }else {
                            this.$router.push("/login");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            getTalent(pageSize, pageNum){//获取人才列表
                let data = {
                    workCity:""
                };
                getTalentList(data,CommonUtils.getStore("token"),pageSize,pageNum)
                    .then(res=>{
                        console.log(res);
                        if(res.code===0){
                            this.talentList = res.result.collection;
                            this.talentList.forEach(item=>{
                                item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                                item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.workYears);
                                item.createTimeTxt = CommonUtils.getFormatDateTime(item.createTime, "yyyy-MM-dd HH:mm:ss");
                                item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                                item.publishStatusTxt = CommonUtils.getKeyName('PUBLISH_STATUS', item.publishStatus);
                                item.expectPost = CommonUtils.getKeyName('POSITION_TYPE_'+item.expectIndustry ,Number(item.expectPost));
                            });
                        }else if(res.code===1){
                            this.$router.push("/login");
                        } else {
                            this.$message.error(res.message);
                        }
                    })
                    .catch(err=>{
                        this.$message.error(err.toString());
                    })
            }
        },
        created(){
            this.init();
        },
        beforeCreate() {
            this.$emit('setHeader','home');
        }
    }
</script>
<style>
    @import "../assets/css/Home.css";
</style>
