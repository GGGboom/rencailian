<template>
    <div>
        <!--搜索区-->
        <div class="filter-box">
            <div class="filter-condition ">
                <!--行业-->
                <div class="filter-row industry">
                    <span class="title">行业:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in industryList" :key="index" :underline="false"
                                 :class="{'selected': tab.industryType === index}" @click.native="clickTab(index,0)">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--行业-->


                <!--热门城市-->
                <div class="filter-row industry">
                    <span class="title">热门城市:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in provinceList" :key="index" :underline="false"
                                 :class="{'selected': tab.provinceIndex === index}" @click.native="clickTab(index,1)">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--热门城市-->

                <!--经验-->
                <div class="filter-row industry">
                    <span class="title">经验:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in serviceLengthList" :key="index" :underline="false"
                                 :class="{'selected': tab.experienceIndex === index}" @click.native="clickTab(index,2)">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--经验-->

                <!--学历-->
                <div class="filter-row industry">
                    <span class="title">学历:</span>
                    <div class="content">
                        <el-link v-for="(item,index) in educationList" :key="index" :underline="false"
                                 :class="{'selected': tab.educationIndex === index}" @click.native="clickTab(index,3)">
                            {{item.name}}
                        </el-link>
                    </div>
                </div>
                <!--学历-->

            </div>
        </div>
        <!--搜索区-->

        <div class="inner">
            <div class="talent-box">
                <div class="sider">
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
                <div class="talent-list" v-loading="loading">
                    <div class="empty-box" v-if="talentList.length===0 && !loading">
                        <div class="message">
                            <img class="mark" src="../../../assets/img/i.png" alt>
                            <span class="message-txt">
                            当前数据为空
                            </span>
                        </div>
                    </div>

                    <!--应聘者列表-->
                    <ul class="talent-ul">
                        <li v-for="(item,index) in talentList" :key="item.userId"  @click="goToDetail(index)">
                            <div class="talent-primary">
                                <div class="talent-img">
                                    <img src="../../../assets/img/msg_avatar.png" alt>
                                </div>
                                <div class="talent-info">
                                    <div>
                                        <span class="info-name">{{item.name}}</span>
                                        <el-tag class="info-tag" type="success" effect="plain">信</el-tag>
                                        <span class="info-credit">{{item.reputationScore}}</span>
                                    </div>
                                    <div>
                                        <span>{{item.salaryRangeTxt}}</span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span>{{item.educationTxt}}</span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span>{{item.serviceLengthTxt}}</span>
                                    </div>
                                    <div>
                                        <span class="expectation">期望岗位:</span>
                                        <span style="margin-left: 10px">{{item.expectPost===""?"无数据":item.expectPost}}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!--应聘者列表-->

                    <!--分页-->
                    <div class="layout-center" v-if="talentList.length!==0">
                        <el-pagination
                                :page-size="pageSize"
                                :pager-count="11"
                                :current-page.sync="currentPage"
                                layout="prev, pager, next"
                                @current-change="currentChange"
                                :total="total">
                        </el-pagination>
                    </div>
                    <!--分页-->

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {getTalentList,searchTalent} from "../../../api/talent";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "talent_all",
        components:{

        },
        data(){
            return{
                talentList:[],                                                              //应聘者列表
                pageSize:5,                                                                 //分页的页面数据大小
                total:0,                                                                    //应聘者总数
                loading:true,                                                               //v-loading参数
                industryList:CommonUtils.getEnumObjList('POSITION_TYPE').slice(0, 12),      //行业类型数组,默认取前12个
                workCity: CommonUtils.getEnumObjList('WORK_CITY'),                          //工作城市数组
                serviceLengthList:CommonUtils.getEnumObjList('SERVICE_LENGTH'),             //服务时长数组
                educationList:CommonUtils.getEnumObjList('EDUCATION'),                      //教育类型数组
                provinceList:CommonUtils.getEnumObjList('PROVINCE').slice(0, 20),           //省份数组,默认取前20个
                currentPage:1,                                                              //当前页面，用于解决搜索时出现的分页index出错
                tab:{                                                                       //用于监视搜索框是否发生变化，如果发生变化则会触发搜索
                    industryType:0,                                                         //行业类型
                    provinceIndex:0,                                                        //省份
                    experienceIndex:0,                                                      //经验
                    educationIndex:0                                                        //学历
                }
            }
        },
        methods:{
            currentChange(page){//该函数用于解决筛选时出现的分页index不从1开始的问题
                let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
                if (searchContent === undefined) {
                    this.get(this.pageSize, page);
                } else {
                    this.FuzzySearch(searchContent, this.pageSize, page);
                }
            },
            goToDetail(index){//转到detail页面
                sessionStorage.setItem('talentUser',JSON.stringify(this.talentList[index]));
                this.$router.push("/talent/detail");
            },
            get(pageSize, pageNum){
                let data = {
                    workCity:""
                };
                getTalentList(data,CommonUtils.getStore("token"),pageSize,pageNum)
                    .then(res=>{
                        console.log(res);
                        if(res.code===0){
                            this.loading = false;
                            this.talentList = res.result.collection;
                            this.talentList.forEach(item=>{
                                item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                                item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.workYears);
                                item.createTimeTxt = CommonUtils.getFormatDateTime(item.createTime, "yyyy-MM-dd HH:mm:ss");
                                item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                                item.publishStatusTxt = CommonUtils.getKeyName('PUBLISH_STATUS', item.publishStatus);
                                item.expectPost = CommonUtils.getKeyName('POSITION_TYPE_'+item.expectIndustry ,Number(item.expectPost));
                            });
                            this.total = res.result.total;
                        }else if(res.code===1){
                            this.$router.push("/login");
                        } else{
                            console.log(res.message);
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            async FuzzySearch(search, pageS, pageN) {//模糊搜索
                let res = await searchTalent({
                    pageSize: pageS,
                    pageNum: pageN,
                    authorization: CommonUtils.getStore("token")
                }, search);
                if (res.code === 0) {
                    this.loading = false;
                    this.talentList = res.result.collection;
                    this.talentList.forEach(item=>{
                        item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                        item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.workYears);
                        item.createTimeTxt = CommonUtils.getFormatDateTime(item.createTime, "yyyy-MM-dd HH:mm:ss");
                        item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                        item.publishStatusTxt = CommonUtils.getKeyName('PUBLISH_STATUS', item.publishStatus);
                        item.expectPost = CommonUtils.getKeyName('POSITION_TYPE_'+item.expectIndustry ,Number(item.expectPost));
                    });
                    this.total = res.result.total;
                }else if(res.code===1){
                    this.$router.push("/login");
                } else{
                    console.log(res.message);
                }
            },
            /*
            用于处理点击搜索框某一类别时的标签高亮
             */
            clickTab(index,type) {
                switch (type) {
                    case 0:{        //行业类型
                        this.tab.industryType = index;
                        break;
                    }
                    case 1:{        //省份
                        this.tab.provinceIndex = index;
                        break;
                    }
                    case 2:{        //经验
                        this.tab.experienceIndex = index;
                        break;
                    }
                    case 3:{        //学历
                        this.tab.educationIndex = index;
                        break;
                    }
                }
            },
        },
        created() {
            let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
            if (searchContent === undefined) {
                this.get(5, 1);
            } else {
                this.FuzzySearch(searchContent, this.pageSize, 1);
            }
        },
        watch: {
            async '$route.query'() {//路由出现变化时触发的函数
                this.tab.educationIndex = 0;
                this.tab.experienceIndex = 0;
                this.tab.industryType = 0;
                this.tab.provinceIndex = 0;
                let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
                if (searchContent === undefined) {
                    this.currentPage = 1;
                    this.get(5, 1);
                } else {
                    this.currentPage = 1;
                    await this.FuzzySearch(searchContent, this.pageSize, 1);
                }
            },
            tab:{
                async handler(newValue) {//当行业类型、省份、经验和学历等搜索框出现变化时触发的函数
                    let data = {
                        education:[newValue.educationIndex],
                        workYears:[newValue.experienceIndex],
                        industryType:[newValue.industryType],
                        workCity:"",
                    };
                    let res = await getTalentList(data,CommonUtils.getStore("token"),5,1);
                    if(res.code===0){
                        this.loading = false;
                        this.talentList = res.result.collection;
                        this.talentList.forEach(item=>{
                            item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                            item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.workYears);
                            item.createTimeTxt = CommonUtils.getFormatDateTime(item.createTime, "yyyy-MM-dd HH:mm:ss");
                            item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                            item.publishStatusTxt = CommonUtils.getKeyName('PUBLISH_STATUS', item.publishStatus);
                            item.expectPost = CommonUtils.getKeyName('POSITION_TYPE_'+item.expectIndustry ,Number(item.expectPost));
                        });
                        this.total = res.result.total;
                    }else if(res.code===1){
                        this.$router.push("/login");
                    } else{
                        console.log(res.message);
                    }
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/hr/talent/index.css";
    .el-pagination {
        white-space: nowrap;
        padding: 2px 5px;
        color: #303133;
        font-weight: 700;
    }
    .selected{
        color: #409EFF!important;
    }
    .el-link.el-link--default:hover{
        color:#409EFF!important;
    }
</style>