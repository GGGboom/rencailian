<template>
    <div class="company-main">
        <div class="company-banner">
            <div class="company-inner">
                <div class="prf">
                    <div class="company-primary">
                        <img :src="url" alt="">
                        <div class="info">
                            <h1>阿里云</h1>
                            <div>
                                <span>D轮及以上</span>
                                <el-divider direction="vertical"></el-divider>
                                <span>500-1000</span>
                                <el-divider direction="vertical"></el-divider>
                                <span>互联网</span>
                            </div>
                        </div>
                    </div>
                    <div class="company-stat">
                        <div class="stat-both">
                            <router-link to="">
                                <p class="number">1</p>
                                <p class="place">热招职位</p>
                            </router-link>
                            <router-link to="">
                                <p class="resume"><i class="el-icon-document"></i>完善简历</p>
                            </router-link>
                        </div>
                        <div class="stat-both">
                            <router-link to="">
                                <p class="number">1</p>
                                <p class="place">热招职位</p>
                            </router-link>
                            <router-link to="">
                                <p class="resume"><i class="el-icon-upload"></i>上传简历附件</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tag-page">
                <el-menu :default-active="activeIndex"
                         class="el-menu-demo"
                         mode="horizontal"
                         @select="handleSelect"
                         text-color="#fff"
                         active-text-color="#ffd04b"
                         background-color="transparent">
                    <el-menu-item index="1">公司简介</el-menu-item>
                    <el-menu-item index="2">招聘职位</el-menu-item>
                </el-menu>
            </div>
        </div>
        <div class="company-detail">
            <div class="box">
                <div class="detail-content">
                    <div class="content-item">
                        <h2>公司简介</h2>
                        <div style="width: 20px">
                            <el-divider></el-divider>
                        </div>
                        <div class="text fold-text">
                            阿里云创立于2009年,是全球领先的云计算及人工公司简介
                            阿里云创立于2009年,是全球领先的云计算及人工
                            智能科技公司,致力于以在线公共服务的方式，提供
                            安全、可靠的计算和数据处理能力，让计算和人工智
                            能成为普惠科技。阿里云服务着制造、金融、政务、.
                            交通、医疗...
                        </div>
                    </div>
                    <div class="content-item">
                        <h2>公司产品</h2>
                        <div style="width: 20px">
                            <el-divider></el-divider>
                        </div>
                        <div class="products">
                            <div class="product-img">
                                <img src="../../../assets/img/aliyun.jpg">
                            </div>
                            <div class="product-info">
                                <span>阿里云</span>
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
                            阿里云创立于2009年,是全球领先的云计算及人工公司简介
                            阿里云创立于2009年,是全球领先的云计算及人工
                            智能科技公司,致力于以在线公共服务的方式，提供
                            安全、可靠的计算和数据处理能力，让计算和人工智
                            能成为普惠科技。阿里云服务着制造、金融、政务、.
                            交通、医疗...
                        </div>
                    </div>
                </div>
                <div class="detail-sider">
                    <div class="sider-content-item">
                        <h2>公司环境</h2>
                        <div style="width: 20px">
                            <el-divider></el-divider>
                        </div>
                        <div>
                            <el-carousel :interval="4000" type="card" height="200px">
                                <el-carousel-item v-for="item in 6" :key="item">
                                    <h3 class="medium"><img src="../../../assets/img/aliyun.jpg" alt
                                                            style="width: inherit;height: inherit"></h3>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "detail",
        data() {
            return {
                url: require("../../../assets/img/alibaba.jpg"),
                activeIndex: "1"
            }
        },
        methods: {
            init(){
                window.scrollTo(0,0);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created() {
            this.init();
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/company/detail.css";
</style>