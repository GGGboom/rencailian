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
                        <el-link v-for="item in ind" :key="item.id" :underline="false"
                                 :class="item.id==industryId?'cur':''" @click.native="selectInd(item)">
                            {{item.txt}}
                        </el-link>
                    </div>
                </div>
                <!--融资阶段-->
                <div class="filter-row stage">
                    <span class="title">融资阶段:</span>
                    <div class="content">
                        <el-link v-for="item in financeRound" :key="item.id" :class="item.id==financeId?'cur':''"
                                 @click.native="selectFin(item)" :underline="false">
                            {{item.txt}}
                        </el-link>
                    </div>
                </div>
                <!--公司规模-->
                <div class="filter-row scale">
                    <span class="title">公司规模:</span>
                    <div class="content">
                        <el-link v-for="item in companyScale" :key="item.id" :class="item.id==companyScaleId?'cur':''"
                                 @click.native="selectScale(item)" :underline="false">
                            {{item.txt}}
                        </el-link>
                    </div>
                </div>
            </div>
            <div class="expect">
                <div class="company-count">
                    共<span>{{total}}</span>公司
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
        <div class="company-tab-box company-list" v-loading="loading">
            <div class="empty-box" v-if="companyList.length===0 && !loading">
                <div class="message">
                    <img class="mark" src="../../../assets/img/i.png" alt>
                    <span class="message-txt">
                            当前数据为空
                            </span>
                </div>
            </div>
            <ul>
                <li v-for="item in companyList" :key="item.id">
                    <router-link
                            :to="{path:'/company/detail',query: {companyId: item.companyId,positionId:item.positionId}}"
                            class="company-info">
                        <img :src="url" alt>
                        <div class="conpany-text">
                            <h4>
                                {{item.companyName}}
                                <el-tag type="success" size="mini">信</el-tag>
                                <span class="company-credit">100</span>
                            </h4>
                            <p :title="item.address">
                                {{item.address}}
                            </p>
                            <p>
                                {{item.city}}
                                <!--<el-divider direction="vertical"></el-divider>-->
                                <!--{{item.financingRound}}-->
                                <!--<el-divider direction="vertical"></el-divider>-->
                                <!--无数据-->
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
            </ul>
        </div>
        <div class="inner mrg-bt">
            <div class="layout-center">
                <el-pagination
                        :page-size="pageSize"
                        :pager-count="11"
                        :current-page.sync="currentPage"
                        layout="prev, pager, next"
                        @current-change="currentChange"
                        :total="total">
                </el-pagination>
            </div>
        </div>
        <!--公司列表-->
    </div>
</template>

<script>

    import {CommonUtils} from "../../../utils/commonUtil";
    import {getCompanyList, searchCompany} from "../../../api/company";

    export default {
        name: "company_all",
        components: {},
        data() {
            return {
                company: 'first',
                url: require("../../../assets/img/alibaba.jpg"),
                industryId: 0,
                ind: CommonUtils.getEnumNameList('POSITION_TYPE').slice(0, 15),               //行业类型
                financeRound: CommonUtils.getEnumNameList('FINANCING_ROUND'),                //融资规模
                financeId: 1,
                companyScale: CommonUtils.getEnumNameList('COMPANY_SIZE'),
                companyScaleId: 2,
                companyList: [],
                pageSize: 8,
                total: 0,
                salaryRange: [0],
                industryType: [0],
                nearDistance: 2000,
                location: [],
                city: "上海市",
                area: "",
                loading:true,
                currentPage:1
            }
        },
        methods: {
            async FuzzySearch(search, pageS, pageN) {
                let res = await searchCompany({
                    pageSize: pageS,
                    pageNum: pageN,
                    authorization: CommonUtils.getStore("token")
                }, search);
                if (res.code === 0) {
                    this.loading = false;
                    this.companyList = res.model;
                    console.log(this.companyList)
                    this.companyList.forEach(item => {
                        item.id = item.companyId + item.positionId;
                    });
                    this.total = res.model.length;
                }
            },
            currentChange(page) {
                let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
                if (searchContent === undefined) {
                    this.get(this.pageSize, page);
                } else {
                    this.FuzzySearch(searchContent, this.pageSize, page);
                }
            },
            get(pageSize, pageNum) {
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
                            this.loading = false;
                            this.companyList = res.result.collection;
                            this.companyList.forEach(item => {
                                item.id = item.companyId + item.positionId;
                            });
                            this.total = res.result.total;
                        }
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            selectInd(item) {
                this.industryId = item.id;
            },
            selectFin(item) {
                this.financeId = item.id;
            },
            selectScale(item) {
                this.companyScaleId = item.id;
            }
        }
        ,
        created() {
            let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
            if (searchContent === undefined) {
                this.get(this.pageSize, 1);
            } else {
                this.FuzzySearch(searchContent, this.pageSize, 1);
            }
        },
        watch:{
            async '$route.query'(){
                let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
                if (searchContent === undefined) {
                    this.currentPage = 1;
                    this.get(5, 1);
                } else {
                    this.currentPage = 1;
                    await this.FuzzySearch(searchContent, this.pageSize, 1);
                }
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/jobHunter/company/allcompany.css";

    .layout-center {
        display: flex;
        justify-content: center;
        background: #fff;
    }

    .el-pagination {
        white-space: nowrap;
        padding: 2px 5px;
        color: #303133;
        font-weight: 700;
    }
</style>