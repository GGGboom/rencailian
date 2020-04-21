<template>
    <div>
        <!--搜索区-->
        <div class="filter-box">
            <div class="filter-condition ">
                <!--融资规模-->
                <div class="filter-row industry">
                    <span class="title">融资规模:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in financeRound" :key="index" :underline="false"
                                 :class="{red:index===tabJob.financeInd}" @click.native="filterClick(index,0)">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--融资规模-->

                <!--员工规模-->
                <div class="filter-row industry">
                    <span class="title">员工规模:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in companyScale" :key="index" :underline="false"
                                 :class="{red:index===tabJob.companyScaleInd}" @click.native="filterClick(index,1)">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--员工规模-->

                <!--学历-->
                <div class="filter-row industry">
                    <span class="title">学历:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in educationList" :key="index" :underline="false"
                                 :class="{red:index===tabJob.educationInd}" @click.native="filterClick(index,2)">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--学历-->

                <!--薪资-->
                <div class="filter-row industry">
                    <span class="title">薪资:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in salaryRangeList" :key="index" :underline="false"
                                 :class="{red:index===tabJob.salaryRangeInd}" @click.native="filterClick(index,3)">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--薪资-->

                <!--经验-->
                <div class="filter-row industry">
                    <span class="title">经验:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in experienceList" :key="index" :underline="false"
                                 :class="{red:index===tabJob.experienceInd}" @click.native="filterClick(index,4)">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--经验-->
            </div>
        </div>
        <!--搜索区-->

        <div class="inner">
            <div class="job-box medium-margin-top">
                <div class="sider">
                    <div class="sider-item">
                        <a href="javascript:;" class="btn attachment-resume-upload"
                           ka="nlp_resume_upload_choose">上传附件简历</a>
                    </div>
                    <div class="sider-list">
                        <h3>看过的职位</h3>
                    </div>
                    <div class="promotion-img">
                        <router-link to="">
                            <img src="../../../assets/img/pro-1.png">
                        </router-link>
                    </div>
                    <div class="promotion-img">
                        <router-link to="">
                            <img src="../../../assets/img/pro-1.png">
                        </router-link>
                    </div>
                </div>
                <div class="job-list normal-margin-btm" v-loading="loading">
                    <div class="empty-box" v-if="jobList.length===0 && !loading">
                        <div class="message">
                            <img class="mark" src="../../../assets/img/i.png" alt>
                            <span class="message-txt">
                            当前数据为空
                            </span>
                        </div>
                    </div>
                    <ul>
                        <li v-for="item in jobList" :key="item.id" class="job-li">
                            <div class="job-primary">
                                <div class="info-primary">
                                    <div class="primary-wrapper">
                                        <router-link
                                                :to="{path:'/job/detail',query: {companyId: item.companyId,positionId:item.positionId}}"
                                                style="float: left;">
                                            <div class="job-title">
                                                <span class="job-name">{{item.name}}</span>
                                                <span class="job-area-wrapper">
                                                        <span class="job-area">{{item.city}}</span>
                                                    </span>
                                                <span class="job-pub-time">发布于{{item.createTimeTxt}}</span>
                                            </div>
                                            <div class="job-limit">
                                                <span class="red">{{item.salaryRangeTxt}}</span>
                                                <p>
                                                    <span><i
                                                            class="el-icon-location-information"></i>{{item.address}}</span>
                                                </p>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="info-company">
                                        <div class="company-text">
                                            <h3 class="name">
                                                <router-link to="">
                                                    {{item.companyName}}
                                                </router-link>
                                            </h3>
                                            <div>
                                                <span>细节</span>
                                                <el-divider direction="vertical"></el-divider>
                                                <span>细节</span>
                                                <el-divider direction="vertical"></el-divider>
                                                <span>细节</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <el-divider class="divider"></el-divider>
                                <div class="info-append">

                                    <div class="tags">
                                        <el-tag type="info" size="mini">{{item.educationTxt}}</el-tag>
                                        <el-tag type="info" size="mini">{{item.serviceLengthTxt}}</el-tag>
                                    </div>
                                    <div class="info-desc">
                                        {{item.description}}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="layout-center" v-if="jobList.length!==0">
                        <el-pagination
                                :current-page.sync="currentPage"
                                @current-change="curChange"
                                layout="prev, pager, next"
                                :page-size="pageSize"
                                :total="total">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getJobList, searchJob} from "../../../api/job";
    import {CommonUtils} from "../../../utils/commonUtil";
    export default {
        name: "job_all",
        data() {
            return {
                financeRound: [],                  //融资规模
                companyScale: [],                  //员工规模
                educationList:[],                  //学历
                salaryRangeList: [],               //薪资
                experienceList: [],                //经验
                tabJob: {
                    financeInd: 0,                 //融资规模默认筛选项
                    companyScaleInd: 0,            //员工规模默认筛选项
                    educationInd:0,                //学历默认筛选项
                    salaryRangeInd:0,              //薪资默认筛选项
                    experienceInd:0,               //经验默认筛选项
                },
                loading: true,                     //v-loading默认参数
                jobList: [],                       //v-for职位列表
                salaryRange: [0],                  //post默认参数
                industryType: [0],                 //post默认参数
                nearDistance: 2000,                //post默认参数
                location: [],                      //post默认参数
                area: "",                          //post默认参数
                city: "上海市",                     //post默认参数
                total: 0,                          //分页搜索总数
                pageSize: 5,                       //页面大小
                currentPage: 1                     //当前处于第几页
            }
        },
        methods: {
            curChange(page) {
                let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
                if (searchContent === undefined) {
                    this.get(this.pageSize, page);
                } else {
                    this.FuzzySearch(searchContent, this.pageSize, page);
                }
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(() => {
                        done();
                    })
                    .catch(() => {
                    });
            },
            async get(pageSize, pageNum) {//获取默认数据
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
                    this.loading = false;
                    this.jobList = res.result.collection;
                    this.total = res.result.total;
                    this.jobList.forEach(item => {
                        item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                        item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                        item.createTimeTxt = CommonUtils.getFormatDateTime(item.createTime, "yyyy-MM-dd HH:mm:ss");
                        item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                        item.publishStatusTxt = CommonUtils.getKeyName('PUBLISH_STATUS', item.publishStatus);
                    });
                }
            },
            async FuzzySearch(search, pageS, pageN) {//模糊搜索
                let res = await searchJob({
                    pageSize: pageS,
                    pageNum: pageN,
                    authorization: CommonUtils.getStore("token")
                }, search);
                if (res.code === 0) {
                    this.loading = false;
                    this.jobList = res.result.collection;
                    this.total = res.result.total;
                    this.jobList.forEach(item => {
                        item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                        item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                        item.createTimeTxt = CommonUtils.getFormatDateTime(item.createTime, "yyyy-MM-dd HH:mm:ss");
                        item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                        item.publishStatusTxt = CommonUtils.getKeyName('PUBLISH_STATUS', item.publishStatus);
                    });
                }
            },
            filterClick(index,type){
                switch (type) {
                    case 0:{                     //融资规模
                        this.tabJob.financeInd = index;
                        break;
                    }
                    case 1:{                     //员工规模
                        this.tabJob.companyScaleInd = index;
                        break;
                    }
                    case 2:{                     //学历
                        this.tabJob.educationInd = index;
                        break;
                    }
                    case 3:{                    //薪资
                        this.tabJob.salaryRangeInd = index;
                        break;
                    }
                    case 4:{                     //经验
                        this.tabJob.experienceInd = index;
                        break;
                    }

                }
            },
            init(){
                this.financeRound = CommonUtils.getEnumObjList('FINANCING_ROUND');
                this.companyScale = CommonUtils.getEnumObjList('COMPANY_SIZE');
                this.educationList = CommonUtils.getEnumObjList('EDUCATION');
                this.salaryRangeList = CommonUtils.getEnumObjList('SALARY_RANGE');
                this.experienceList = CommonUtils.getEnumObjList('SERVICE_LENGTH');
            }
        },
        beforeCreate() {
            this.$emit('setHeader', 'job');
        },
        async created() {
            this.init();
            let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
            if (searchContent === undefined) {
                this.get(5, 1);
            } else {
                this.FuzzySearch(searchContent, this.pageSize, 1);
            }
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
            tabJob:{
                async handler(newValue) {
                    let data = {
                        education:[this.tabJob.educationInd],
                        salaryRange:[this.tabJob.salaryRangeInd],
                        serviceLength:[this.tabJob.experienceInd],
                        financingRound:[this.tabJob.financeInd],
                        companySize:[this.tabJob.companyScaleInd],
                        nearDistance:this.nearDistance,
                        location:this.location,
                        city:this.city,
                        area:this.area
                    };
                    let res = await getJobList(data, CommonUtils.getStore("token"), this.pageSize, 1);
                    if (res.code === 0) {
                        this.loading = false;
                        this.jobList = res.result.collection;
                        this.total = res.result.total;
                        this.jobList.forEach(item => {
                            item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                            item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                            item.createTimeTxt = CommonUtils.getFormatDateTime(item.createTime, "yyyy-MM-dd HH:mm:ss");
                            item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                            item.publishStatusTxt = CommonUtils.getKeyName('PUBLISH_STATUS', item.publishStatus);
                        });
                    }
                    console.log(newValue);
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/jobHunter/job/job.css";
</style>