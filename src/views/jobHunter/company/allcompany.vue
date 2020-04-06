<template>
    <div class="company-search home-site">
        <!--搜索区-->
        <div class="filter-box">
            <div class="filter-condition ">
                <!--行业-->
                <div class="filter-row industry">
                    <span class="title">行业类型:</span>
                    <div class="content">
                        <!--:class="cur:"-->
                        <el-link v-for="item in ind" :key="item.id" :underline="false" :class="item.id==industryId?'cur':''" @click.native="selectInd(item)">
                            {{item.txt}}
                        </el-link>
                    </div>
                </div>
                <!--融资阶段-->
                <div class="filter-row stage">
                    <span class="title">融资阶段:</span>
                    <div class="content">
                        <el-link v-for="item in financeRound" :key="item.id" :class="item.id==financeId?'cur':''"  @click.native="selectFin(item)" :underline="false">
                            {{item.txt}}
                        </el-link>
                    </div>
                </div>
                <!--公司规模-->
                <div class="filter-row scale">
                    <span class="title">公司规模:</span>
                    <div class="content">
                        <el-link v-for="item in companyScale" :key="item.id" :class="item.id==companyScaleId?'cur':''"  @click.native="selectScale(item)"  :underline="false">
                            {{item.txt}}
                        </el-link>
                    </div>
                </div>
            </div>
            <div class="expect">
                <div class="company-count">
                    共<span>{{count}}</span>公司
                </div>
                <div class="dropdown-wrap expect-dropdown-wrap">
                    <span class="filter-font border-right">
                        行业类型:{{ind[industryId].txt}}
                    </span>
                    <span class="filter-font border-right pd-lf">
                        融资阶段:{{financeRound[financeId].txt}}
                    </span>
                    <span class="filter-font pd-lf">
                        公司规模:{{companyScale[companyScaleId].txt}}
                    </span>
                </div>
            </div>
            <div id="top_filter_bar" class="top-filter-bar">
                <div class="inner">
                    <div class="filter-bar-item">
                        <div>
                            <el-dropdown>
                            <span class="el-dropdown-link">
                                公司规模<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>0-20人</el-dropdown-item>
                                    <el-dropdown-item>20-99人</el-dropdown-item>
                                    <el-dropdown-item>100-499人</el-dropdown-item>
                                    <el-dropdown-item>1000-9999人</el-dropdown-item>
                                    <el-dropdown-item>10000人以上</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                    <div class="filter-bar-item">
                        <div>
                            <el-dropdown>
                            <span class="el-dropdown-link">
                                融资阶段<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                                <el-dropdown-menu size="mini" slot="dropdown">
                                    <el-dropdown-item>不限</el-dropdown-item>
                                    <el-dropdown-item>未融资</el-dropdown-item>
                                    <el-dropdown-item>天使轮</el-dropdown-item>
                                    <el-dropdown-item>A轮</el-dropdown-item>
                                    <el-dropdown-item>B轮</el-dropdown-item>
                                    <el-dropdown-item>C轮</el-dropdown-item>
                                    <el-dropdown-item>D轮及以上</el-dropdown-item>
                                    <el-dropdown-item>已上市</el-dropdown-item>
                                    <el-dropdown-item>不需要融资</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                    <div class="filter-bar-item">
                        <div>
                            <el-dropdown>
                            <span class="el-dropdown-link">
                                公司规模<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>0-20人</el-dropdown-item>
                                    <el-dropdown-item>20-99人</el-dropdown-item>
                                    <el-dropdown-item>100-499人</el-dropdown-item>
                                    <el-dropdown-item>1000-9999人</el-dropdown-item>
                                    <el-dropdown-item>10000人以上</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--搜索区-->


        <!--公司列表-->
        <div class="company-tab-box company-list">
            <ul>
                <li>
                    <router-link to="/company/detail" class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </router-link>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
                <li>
                    <a class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                阿里云
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p>
                                上海市浦东城区浦东
                            </p>
                            <p>
                                无数据<el-divider direction="vertical"></el-divider>无数据<el-divider direction="vertical"></el-divider>无数据
                            </p>
                        </div>
                    </a>
                    <div class="about-info">
                        <p>
                            <span>全部在招职业</span>
                            <span style="padding-left: 5px">1</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="inner mrg-bt">
            <pager></pager>
        </div>
        <!--公司列表-->
    </div>
</template>

<script>
    import Pager from "../../../components/Pager";
    import $ from 'jquery';
    $(function () {
        $(window).scroll(function () {
            let scrollTop = $(window).scrollTop();
            scrollTop > 268 ? $("#top_filter_bar").addClass("show") : $("#top_filter_bar").removeClass("show") ;
        });
    });
    export default {
        name: "allcompany",
        components:{
            Pager
        },
        data() {
            return {
                fit: "fill",
                company: 'first',
                url: require("../../../assets/img/alibaba.jpg"),
                count:10,
                //行业类型
                industryId:0,
                ind:[
                    {
                        txt:"不限",
                        id:0
                    },
                    {
                        txt:"快销",
                        id:1
                    },
                    {
                        txt:"电子商务",
                        id:2
                    },
                    {
                        txt:"游戏",
                        id:3
                    },
                    {
                        txt:"媒体",
                        id:4
                    },
                    {
                        txt:"广告营销",
                        id:5
                    },
                    {
                        txt:"数据服务",
                        id:6
                    },
                    {
                        txt:"医疗健康",
                        id:7
                    },
                    {
                        txt:"O2O",
                        id:8
                    },
                    {
                        txt:"音乐/视频/阅读",
                        id:9
                    },
                    {
                        txt:"在线教育",
                        id:10
                    },
                    {
                        txt:"社交网络",
                        id:11
                    },
                    {
                        txt:"人力资源服务",
                        id:12
                    },
                    {
                        txt:"企业服务",
                        id:13
                    },
                    {
                        txt:"信息安全",
                        id:14
                    },
                    {
                        txt:"智能硬件",
                        id:15
                    },
                    {
                        txt:"移动互联网",
                        id:16
                    },
                    {
                        txt:"互联网",
                        id:17
                    },
                    {
                        txt:"计算机软件",
                        id:18
                    },
                    {
                        txt:"通信/网络设备",
                        id:19
                    },
                    {
                        txt:"广告/公关/会展",
                        id:20
                    },
                    {
                        txt:"互联网金融",
                        id:21
                    },
                    {
                        txt:"物流/仓储",
                        id:22
                    },
                    {
                        txt:"贸易/进出口",
                        id:23
                    },
                    {
                        txt:"汽车生产",
                        id:24
                    }

                ],
                //融资规模
                financeRound:[
                    {
                        txt:"未融资",
                        id:1,
                        formId:1
                    },{
                        txt:"天使轮",
                        id:2,
                        formId:2
                    },{
                        txt:"A轮",
                        id:3,
                        formId:3
                    },{
                        txt:"B轮",
                        id:4,
                        formId:4
                    },{
                        txt:"C轮",
                        id:5,
                        formId:5
                    },{
                        txt:"D轮及以上",
                        id:6,
                        formId:6
                    },{
                        txt:"已上市",
                        id:7,
                        formId:7
                    },{
                        txt:"不需要融资",
                        id:8,
                        formId:8
                    },
                ],
                financeId:1,
                //公司规模
                companyScale:[
                    {
                        txt:"0-20人",
                        id:1,
                        formId:1
                    },{
                        txt:"20-100人",
                        id:2,
                        formId:2
                    },{
                        txt:"100-500人",
                        id:3,
                        formId:3
                    },{
                        txt:"500-1000人",
                        id:4,
                        formId:4
                    },{
                        txt:"1000-10000人 ",
                        id:5,
                        formId:5
                    },{
                        txt:"10000人以上",
                        id:6,
                        formId:6
                    },
                ],
                companyScaleId:1
            }
        },
        methods: {
            getFoucs: function () {
                // this.styleObject.border = '1px solid #53cac3';
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            selectInd(item){
                this.industryId = item.id;
            },
            selectFin(item){
                this.financeId = item.id;
            },selectScale(item){
                this.companyScaleId = item.id;
            }
        },created() {
            console.log(this.$route.query);
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/jobHunter/company/allcompany.css";
</style>