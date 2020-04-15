<template>
    <div>
        <!--筛选框-->
        <div id="filter-box">
            <div class="inner filter-mrg">
                <div class="condition-box">
                    <div class="show-condition-district">
                        <span class="hotcity">热门城市:</span>
                        <el-link :underline="false">全国</el-link>
                        <el-link :underline="false">北京</el-link>
                        <el-link :underline="false">上海</el-link>
                        <el-link :underline="false">广州</el-link>
                        <el-link :underline="false">深圳</el-link>
                        <el-link :underline="false">杭州</el-link>
                        <el-link :underline="false">天津</el-link>
                        <el-link :underline="false">苏州</el-link>
                        <el-link :underline="false">武汉</el-link>
                        <el-link :underline="false">厦门</el-link>
                        <el-link :underline="false">长沙</el-link>
                        <el-link :underline="false">成都</el-link>
                        <el-link :underline="false">郑州</el-link>
                        <el-link :underline="false">重庆</el-link>
                        <el-button class="allcity" type="text" @click="showdialog">全部城市</el-button>
                    </div>
                    <div class="condition-district show-condition-district">
                        <span class="hotcity">区域:</span>
                        <el-link :underline="false">全国</el-link>
                        <el-link :underline="false">全国</el-link>
                        <el-link :underline="false">全国</el-link>
                        <el-link :underline="false">全国</el-link>
                        <el-link :underline="false">全国</el-link>
                        <el-link :underline="false">全国</el-link>
                        <el-link :underline="false">全国</el-link>
                        <el-link :underline="false">全国</el-link>
                    </div>
                </div>
                <div class="filter-select-box">
                    <div class="dropdown-wrap ">
                        <el-dropdown class="jobdialog">
                        <span class="el-dropdown-link">
                            工作经验<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="dropdown-wrap">
                        <el-dropdown  class="jobdialog">
                        <span class="el-dropdown-link">
                            融资规模<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="dropdown-wrap">
                        <el-dropdown  class="jobdialog">
                        <span class="el-dropdown-link">
                            公司规模<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <!--筛选框-->

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
                <div class="job-list" v-loading="loading">
                    <div class="empty-box" v-if="jobList.length===0 && !loading">
                        <div class="message">
                            <img class="mark" src="../../../assets/img/i.png" alt>
                            <span class="message-txt">
                            当前数据为空
                            </span>
                        </div>
                    </div>
                    <ul>
                        <li v-for="item in jobList" :key="item.id" class="job-li" >
                            <div class="job-primary">
                                <div class="info-primary">
                                    <div class="primary-wrapper">
                                        <router-link :to="{path:'/job/detail',query: {companyId: item.companyId,positionId:item.positionId}}" style="float: left;">
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
                                                    <span><i class="el-icon-location-information"></i>{{item.address}}</span>
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
                    <div class="page-box">
                        <el-pagination
                                background
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
        <el-dialog
                title="请选择城市"
                :visible.sync="dialogVisible"
                >
            <div class="citys">
                <el-button type="text">北京</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">上海</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">广州</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">深圳</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">杭州</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">天津</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">西安</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">苏州</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">武汉</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">厦门</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">长沙</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">成都</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">郑州</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">重庆</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">珠海</el-button>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>


</template>

<script>
    import {getJobList,searchJob} from "../../../api/job";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "job_all",
        data() {
            return {
                job_type: "",
                industry: "",
                dialogVisible: false,
                loading:true,
                jobList:[],
                salaryRange:[0],
                industryType:[0],
                nearDistance:2000,
                location:[],
                area:"",
                city: "上海市",            //默认值
                total:0,
                pageSize:5,
                currentPage:1             //当前处于第几页
            }
        },
        methods: {
            curChange(page){
                let searchContent = this.$route.params.search?this.$route.params.search:undefined;
                if(searchContent===undefined){
                    this.get(this.pageSize,page);
                }else{
                    this.FuzzySearch(searchContent,this.pageSize,page);
                }
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(()=> {
                        done();
                    })
                    .catch(() => {});
            },
            showdialog(){
                this.dialogVisible = true;
            },
            async get(pageSize,pageNum){
                let data = {
                    salaryRange:this.salaryRange,
                    industryType:this.industryType,
                    nearDistance:this.nearDistance,
                    location:this.location,
                    area:this.area,
                    city:this.city
                };
                let res = await getJobList(data,CommonUtils.getStore("token"),pageSize,pageNum);
                if(res.code===0){
                    this.loading = false;
                    this.jobList = res.result.collection;
                    this.total = res.result.total;
                    this.jobList.forEach(item=>{
                        item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                        item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                        item.createTimeTxt = CommonUtils.getFormatDateTime(item.createTime,"yyyy-MM-dd HH:mm:ss");
                        item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                        item.publishStatusTxt = CommonUtils.getKeyName('PUBLISH_STATUS', item.publishStatus);
                    });
                }
            },
            async FuzzySearch(search,pageS,pageN){//模糊搜索
                let res =await searchJob({pageSize:pageS,pageNum:pageN,authorization:CommonUtils.getStore("token")},search);
                if(res.code===0){
                    this.loading = false;
                    this.jobList = res.result.collection;
                    this.total = res.result.total;
                    this.jobList.forEach(item=>{
                        item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                        item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                        item.createTimeTxt = CommonUtils.getFormatDateTime(item.createTime,"yyyy-MM-dd HH:mm:ss");
                        item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                        item.publishStatusTxt = CommonUtils.getKeyName('PUBLISH_STATUS', item.publishStatus);
                    });
                }
            }
        },
        beforeCreate() {
            this.$emit('setHeader','job');
        },
        async created() {
            let searchContent = this.$route.params.search?this.$route.params.search:undefined;
            if(searchContent===undefined){
                this.get(5,1);
            }else{

                this.FuzzySearch(searchContent,this.pageSize,1);
            }
        },
        watch:{
           async '$route.query'() {
               let searchContent = this.$route.params.search?this.$route.params.search:undefined;
               if(searchContent===undefined){
                   this.currentPage = 1;
                   this.get(5,1);
               }else{
                   this.currentPage = 1;
                   await this.FuzzySearch(searchContent,this.pageSize,1);
               }
           }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/jobHunter/job/job.css";
</style>