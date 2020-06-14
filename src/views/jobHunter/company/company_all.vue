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
                        <el-link v-for="(item,index) in ind" :key="index" :underline="false"
                                 :class="index===tab.industryId?'cur':''" @click.native="clickTab(index,0)">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--行业-->

                <!--融资阶段-->
                <div class="filter-row stage">
                    <span class="title">融资阶段:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in financeRound" :key="index"
                                 :class="index===tab.financeId?'cur':''"
                                 @click.native="clickTab(index,1)" :underline="false">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--公司规模-->
                <div class="filter-row scale">
                    <span class="title">公司规模:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in companyScale" :key="index"
                                 :class="{cur:index===tab.companyScaleId}"
                                 @click.native="clickTab(index,2)" :underline="false">
                            {{item.name}}
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
                        行业类型:{{ind[tab.industryId].name}}
                    </span>
                    <span class="filter-font border-right pd-lf">
                        融资阶段:{{financeRound[tab.financeId].name}}
                    </span>
                    <span class="filter-font pd-lf">
                        公司规模:{{companyScale[tab.companyScaleId].name}}
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
                            <span style="margin-right: 10px">{{item.serviceLengthTxt}}</span>
                            <span style="margin-right: 10px">{{item.educationTxt}}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <!--分页-->
        <div class="inner mrg-bt">
            <div class="layout-center" v-if="companyList.length!==0">
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
        <!--分页-->

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
                company: 'first',                                                           //tabs默认index
                url: require("../../../assets/img/alibaba.jpg"),
                ind: CommonUtils.getEnumObjList('POSITION_TYPE').slice(0, 20),               //行业类型
                financeRound: CommonUtils.getEnumObjList('FINANCING_ROUND'),                 //融资规模
                companyScale: CommonUtils.getEnumObjList('COMPANY_SIZE'),                    //员工规模
                tab: {
                    industryId: 0,                                                           //行业类型默认筛选项
                    financeId: 0,                                                            //融资规模默认筛选项
                    companyScaleId: 0,            //员工规模默认筛选项
                },
                companyList: [],                  //v-for公司列表
                pageSize: 8,                      //页面大小
                total: 0,                         //分页搜索总数
                salaryRange: [0],                 //post默认参数
                industryType: [0],                //post默认参数
                nearDistance: 2000,               //post默认参数
                location: [],                     //post默认参数
                city: "上海市",                    //post默认参数
                area: "",                         //post默认参数
                loading: true,                    //v-loading默认参数
                currentPage: 1                    //当前处于第几页
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
                        item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                        item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                        item.id = item.companyId + item.positionId;
                    });
                    this.total = res.model.length;
                }else if(res.code===1){
                    this.$router.push("/login");
                } else{
                    console.log(res.message);
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
                                item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                                item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                                item.id = item.companyId + item.positionId;
                            });
                            this.total = res.result.total;
                        }else if(res.code===1){
                            this.$router.push("/login");
                        } else{
                            console.log(res.message);
                        }
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            clickTab(index, type) {
                switch (type) {
                    case 0: {         //行业类型
                        this.tab.industryId = index;
                        break;
                    }
                    case 1: {        //融资规模
                        this.tab.financeId = index;
                        break;
                    }
                    case 2: {        //员工规模
                        this.tab.companyScaleId = index;
                        break;
                    }
                    default:
                }
            }
        },
        created() {
            console.log(this.ind);
            let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
            if (searchContent === undefined) {
                this.get(this.pageSize, 1);
            } else {
                this.FuzzySearch(searchContent, this.pageSize, 1);
            }
            console.log(this.companyList);
        },
        watch: {
            async '$route.query'() {
                let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
                if (searchContent === undefined) {
                    this.currentPage = 1;
                    this.get(5, 1);
                } else {
                    this.currentPage = 1;
                    await this.FuzzySearch(searchContent, this.pageSize, 1);
                }
            },
            tab: {
                async handler(newValue) {
                    let data = {
                        financingRound: [this.tab.companyScaleId],
                        companySize: [this.tab.financeId],
                        industryType: [this.tab.industryId],
                        positionType: [],
                    };
                    let res = await getCompanyList(data, CommonUtils.getStore("token"), 5, 1);
                    if (res.code === 0) {
                        this.loading = false;
                        this.companyList = res.result.collection;
                        this.companyList.forEach(item => {
                            item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                            item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                            item.id = item.companyId + item.positionId;
                        });
                        this.total = res.result.total;
                    }else if(res.code===1){
                        this.$router.push("/login");
                    }else{
                        this.$message.error(res.message);
                    }
                    console.log(newValue);
                },
                deep: true
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