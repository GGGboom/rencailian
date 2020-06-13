<template>
    <div>
        <div class="job-banner">
            <div class="inner">
                <div class="job-primary detail-box">
                    <div class="info-primary">
                        <div class="job-status">
                            <span>
                                招聘中
                            </span>
                        </div>
                        <div class="name">
                            <h1>{{info.position.name}}</h1>
                            <span class="salary">{{info.position.salaryRangeTxt}}</span>
                        </div>
                        <p>
                             {{info.position.city}}
                            <em class="dolt"></em>
                            {{info.position.serviceLengthTxt}}
                            <em class="dolt"></em>
                            {{info.position.educationTxt}}
                        </p>
                        <div class="tag-container">

                        </div>
                    </div>
                    <div class="job-op">
                        <div class="btn btn-startchat" @click="chat">
                            立即沟通
                        </div>
                        <div class="op-container d-flex d-flex-sbt">
                            <div class="job-btn">
                                <i class="el-icon-files"></i>
                                完善在线简历
                            </div>
                            <div class="job-btn fr star-hover" @click="favourite" >
                                <i class="el-icon-star-on"></i>
                                收藏
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="job-box bgd">
            <div class="inner">
                <!--公司信息-->
                <div class="job-sider">
                    <div class="sider-company">
                        <p class="title">公司基本信息</p>
                        <div class="company-info">
                            <router-link to="">
                                <img src="../../../assets/img/aliyun.jpg" alt>
                            </router-link>
                            <router-link to="" class="company-name">
                                {{company.simpleName}}
                            </router-link>
                        </div>
                        <p>
                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                            融资阶段:{{company.financingRoundTxt}}
                        </p>
                        <p>
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                            公司规模:{{company.companySizeTxt}}
                        </p>
                        <p>
                            <i class="fa fa-tags" aria-hidden="true"></i>
                            {{company.industryTypeTxt}}
                        </p>
                        <p>
                            <i class="fa fa-sitemap" aria-hidden="true"></i>
                            网址
                        </p>
                    </div>
                </div>
                <!--公司信息-->

                <!--职位信息-->
                <div class="job-detail">
                    <div class="detail-op">
                        <div class="detail-figure">
                            <img src="../../../assets/img/msg_avatar.png" alt>
                        </div>
                        <div class="name">
                            {{info.publishUserName}}
                            <span class="gray online-status">
                                招聘者<em class="vdot">·</em>刚刚在线
                            </span>
                        </div>

                    </div>
                    <div class="detail-content">
                        <div class="job-sec">
                            <h3>职位详情</h3>
                            <div class="text">
                                1、职位描述
                                <br>
                                {{info.position.description}}
                                <br>
                                2、职业要求
                                <br>
                                {{info.position.positionRequire?info.position.positionRequire:"无"}}
                            </div>
                        </div>
                        <div class="job-sec">
                            <h3>工作地点</h3>
                            <div class="job-location">

                            </div>
                            <div class="text">
                                <i class="el-icon-location-information">{{info.position.address}}</i>
                            </div>
                        </div>
                    </div>
                </div>
                <!--职位信息-->
            </div>
        </div>
    </div>
</template>

<script>
    import {getJobById,favourite} from "../../../api/job";
    import {getCompanyById} from "../../../api/company";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "job_detail",
        data(){
            return{
                info:{
                    position:{}
                },
                company:{},
                positionId:"",
                companyId:""
            }
        },
        methods:{
            get(positionId,companyId){//获取职位具体信息
               getJobById({authorization:CommonUtils.getStore("token")},positionId)
                   .then(res=>{
                       if(res.code===0){
                           this.info = res;
                           this.info.position.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', res.position.salaryRange);
                           this.info.position.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', res.position.serviceLength);
                           this.info.position.educationTxt = CommonUtils.getKeyName('EDUCATION', res.position.education);
                           console.log(res);
                       }
                   })
                   .catch(err=>{
                       console.log(err);
                   })

               getCompanyById({authorization:CommonUtils.getStore("token")},companyId)
                   .then(res=>{
                       if(res.code === 0){
                           this.company = res.company;
                           console.log(this.company)
                           this.company.companySizeTxt = CommonUtils.getKeyName('COMPANY_SIZE',this.company.companySize);
                           this.company.industryTypeTxt = CommonUtils.getKeyName('POSITION_TYPE', this.company.industryType);
                           this.company.financingRoundTxt = CommonUtils.getKeyName('FINANCING_ROUND', this.company.financingRound);
                           this.company.companySizeTxt = this.company.companySize;

                       }
                   })
                   .catch(err=>{
                       console.log(err);
                   })
           },
            favourite(){//收藏职位
                let positionID = this.$route.query.positionId;
                favourite(positionID,CommonUtils.getStore("token"))
                    .then(res=>{
                        if(res.code===0){
                            this.$message.success("收藏成功");
                            setTimeout(()=>{
                                this.$router.go(0);
                            },900)
                        }else{
                            this.$message.error(res.message);
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            chat(){
                let receiveUser={};
                receiveUser.receiveUserId = this.info.position.publishUserId;
                receiveUser.headerImage = this.info.headerImagePath;
                receiveUser.name = this.info.publishUserName;
                CommonUtils.setStore("receiveUser",receiveUser);
                this.$router.push("/talent/msg");
            }
        },
        mounted() {
            this.positionID = this.$route.query.positionId;
            this.companyId = this.$route.query.companyId;
            this.get(this.positionID,this.companyId);
            console.log(this.info);
        }
    }
</script>

<style scoped>
@import "../../../assets/css/jobHunter/job/job_detail.css";
</style>