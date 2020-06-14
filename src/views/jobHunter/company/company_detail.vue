<template>
    <div class="company-main">
        <div class="company-banner">

            <!--背景图-->
            <div class="company-inner">
                <div class="prf">
                    <div class="company-primary">
                        <img :src="company.logoImagePath" alt="">
                        <div class="info">
                            <h1>{{company.simpleName}}</h1>
                            <div>
                                <span>{{company.financingRound}}</span>
                                <el-divider direction="vertical"></el-divider>
                                <span>{{company.companySize===""?"默认值":company.companySize}}</span>
                                <el-divider direction="vertical"></el-divider>
                                <span>{{company.industryType}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="company-stat">
                        <div class="stat-both">
                            <router-link to="">
                                <p class="number">{{company.positionList.length}}</p>
                                <p class="place">热招职位</p>
                            </router-link>
                            <router-link to="">
                                <p class="resume"><i class="el-icon-document"></i>完善简历</p>
                            </router-link>
                        </div>
                        <div class="stat-both ">
                            <div>
                                <p class="number">1</p>
                                <p class="place">热招职位</p>
                            </div>
                            <div @click="favouriteCom()" class="btn-pointer">
                                <p class="resume"><i class="el-icon-star-on"></i>收藏</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--背景图-->

            <!--菜单栏-->
            <div class="tag-page">
                <el-menu :default-active="activeIndex"
                         class="el-menu-demo"
                         mode="horizontal"
                         @select="handleSelect"
                         text-color="#fff"
                         active-text-color="#ffd04b"
                         background-color="transparent">
                    <el-menu-item index="1" @click="flag=true">公司简介</el-menu-item>
                    <el-menu-item index="2" @click="flag=false">招聘职位</el-menu-item>
                </el-menu>
            </div>
            <!--菜单栏-->

        </div>
        <div class="company-detail">
            <div class="box">
                <!--公司详细信息-->
                <div :class="flag===true?'detail-content':'display-none'">
                    <div class="content-item">
                        <h2>公司简介</h2>
                        <div style="width: 20px">
                            <el-divider></el-divider>
                        </div>
                        <div class="text fold-text">
                            {{company.description}}
                        </div>
                    </div>
                    <div class="content-item">
                        <h2>公司产品</h2>
                        <div style="width: 20px">
                            <el-divider></el-divider>
                        </div>
                        <div class="products" v-for="item in produceList" :key="item.productId">
                            <div class="product-img">
                                <img src="../../../assets/img/aliyun.jpg" alt>
                            </div>
                            <div class="product-info">
                                <span>{{company.simpleName}}</span>
                                <el-divider direction="vertical"></el-divider>
                                <span>云服务器ECS</span>
                                <p>可弹性扩展、安全、稳定、易用的计算服务</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-item">
                        <h2>公司地址</h2>
                        <div style="width: 20px">
                            <el-divider></el-divider>
                        </div>
                        <div class="text fold-text">
                            {{company.address}}
                        </div>
                    </div>
                    <div class="content-item">
                        <h2>公司网址</h2>
                        <div style="width: 20px">
                            <el-divider></el-divider>
                        </div>
                        <div class="text fold-text">
                            {{company.officialWebsite}}
                        </div>
                    </div>
                </div>
                <!--公司详细信息-->

                <div :class="flag===false?'detail-content':'display-none'">
                    <div class="content-item">
                        <h2>热招职位</h2>
                        <div style="width: 20px">
                            <el-divider></el-divider>
                        </div>
                        <router-link :to="{path:'/job/detail',query: {companyId: item.companyId,positionId:item.positionId}}" class="products" v-for="item in company.positionList" :key="item.productId">
                            <div class="position-info">
                                <span class="pst-title">{{item.name}}</span>
                                <el-divider direction="vertical"></el-divider>
                                <span class="salary">{{item.salaryRange}}</span>
                                <div class="pst-label">
                                    <span>{{item.address}}</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>{{item.education}}</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>{{item.serviceLength}}</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>

                <!--公司边框-->
                <div class="detail-sider">
                    <div class="sider-content-item">
                        <h2>公司环境</h2>
                        <div style="width: 20px">
                            <el-divider></el-divider>
                        </div>
                        <div>
                            <el-carousel :interval="4000" type="card" height="200px">
                                <el-carousel-item>
                                    <h3 class="medium">
                                        <img src="../../../assets/img/introduction1.png" alt
                                             style="width: inherit;height: inherit">
                                    </h3>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <h3 class="medium">
                                        <img src="../../../assets/img/introduction2.png" alt
                                             style="width: inherit;height: inherit">
                                    </h3>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <h3 class="medium">
                                        <img src="../../../assets/img/introduction3.png" alt
                                             style="width: inherit;height: inherit">
                                    </h3>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                </div>
                <!--公司边框-->
            </div>
        </div>
    </div>
</template>

<script>
    import {getCompanyById, favouriteCompany} from "../../../api/company";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "company_detail",
        data() {
            return {
                activeIndex: "1",                       //菜单栏index
                flag:true,                              //判断显示公司简介还是显示招聘职位
                company: {                              //公司基本信息
                    positionList: []                    //公司所含职位列表
                },
                produceList: []                         //公司产品列表
            }
        },
        methods: {
            favouriteCom() {//收藏公司
                let companyId = this.$route.query.companyId;
                favouriteCompany(companyId, CommonUtils.getStore("token"))
                    .then(res => {
                        if (res.code === 0) {
                            this.$message.success("收藏成功");
                            setTimeout(() => {
                                this.$router.go(0);
                            }, 900)
                        }else if(res.code===1){
                            this.$router.push("/login");
                        } else {
                            this.$message.error(res.message);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            get(companyId) {//获取公司的详细信息
                getCompanyById({authorization: CommonUtils.getStore("token")}, companyId)
                    .then(res => {
                        if (res.code === 0) {
                            console.log(res);
                            this.company = res.company;
                            this.company.positionList.forEach(item=>{
                                item.salaryRange = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                                item.serviceLength = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                                item.education = CommonUtils.getKeyName('EDUCATION', item.education);
                            });
                            this.produceList = res.company.companyProductList;
                            this.company.companySize = CommonUtils.getKeyName('COMPANY_SIZE', this.company.companySize);
                            this.company.industryType = CommonUtils.getKeyName('POSITION_TYPE', this.company.industryType);
                            this.company.financingRound = CommonUtils.getKeyName('FINANCING_ROUND', this.company.financingRound);
                        }else if(res.code===1){
                            this.$router.push("/login");
                        }else{
                            this.$message.error(res.message);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);

            }
        },
        created() {
            console.log(this.$route.query);
            this.get(this.$route.query.companyId)
        },
        beforeCreate() {
            this.$emit("setHeader", "detail")
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/jobHunter/company/detail.css";
</style>