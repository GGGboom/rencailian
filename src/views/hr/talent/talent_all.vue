<template>
    <div style="padding:10px 0">
        <!--筛选框-->
        <div id="filter-box">
            <div class="inner">
                <div >
                    <div class="inner">
                        <div class="condition-box">
                            <div class="show-condition-district">
                                <span class="hotcity">行业:</span>
                                <el-link v-for="(item,index) in industryList" :class="{'selected': tab.industryType === index}" :key="index" @click="clickTab(index,0)" :underline="false">{{item.name}}</el-link>
                                <el-button class="allcity" type="text">所有</el-button>
                            </div>
                            <div class="show-condition-district">
                                <span class="hotcity">热门城市:</span>
                                <el-link v-for="(item,index) in provinceList" :class="{'selected': tab.provinceIndex === index}" :key="index" @click="clickTab(index,1)" :underline="false">{{item.name}}</el-link>
                                <el-button class="allcity" type="text">全部城市</el-button>
                            </div>
                            <div class="condition-experience show-condition-district">
                                <span class="hotcity">经验:</span>
                                <el-link v-for="(item,index) in serviceLengthList" :class="{'selected': tab.experienceIndex === index}" :key="index" @click="clickTab(index,2)" :underline="false">{{item.name}}</el-link>
                            </div>
                            <div class="show-condition-district">
                                <span class="hotcity">学历:</span>
                                <el-link v-for="(item,index) in educationList" :class="{'selected': tab.educationIndex === index}" :key="index" @click="clickTab(index,3)" :underline="false">{{item.name}}</el-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--筛选框-->
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
                    <div class="layout-center">
                        <el-pagination
                                v-if="total>5"
                                :page-size="pageSize"
                                :pager-count="11"
                                :current-page.sync="currentPage"
                                layout="prev, pager, next"
                                @current-change="currentChange"
                                :total="total">
                        </el-pagination>
                    </div>
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
                talentList:[],
                pageSize:5,
                total:0,
                loading:true,
                industryList:CommonUtils.getEnumObjList('POSITION_TYPE').slice(0, 12),
                workCity: CommonUtils.getEnumObjList('WORK_CITY'),
                serviceLengthList:CommonUtils.getEnumObjList('SERVICE_LENGTH'),
                educationList:CommonUtils.getEnumObjList('EDUCATION'),
                provinceList:CommonUtils.getEnumObjList('PROVINCE').slice(0, 12),
                currentPage:1,
                tab:{
                    industryType:0,         //行业类型
                    provinceIndex:0,        //省份
                    experienceIndex:0,      //经验
                    educationIndex:0        //学历
                }
            }
        },
        methods:{
            currentChange(page){
                let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
                if (searchContent === undefined) {
                    this.get(this.pageSize, page);
                } else {
                    this.FuzzySearch(searchContent, this.pageSize, page);
                }
            },
            goToDetail(index){
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
                        }else{
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
                }
            },
            clickTab(index,type) {
                switch (type) {
                    case 0:{         //行业类型
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
            async '$route.query'() {
                this.tab.educationIndex = 0;
                this.tab.experienceIndex = 0;
                this.tab.industryType = 0;
                this.tab.provinceIndex = 0;
                let searchContent = this.$route.params.search ? this.$route.params.search : undefined;
                console.log(searchContent)
                if (searchContent === undefined) {
                    this.currentPage = 1;
                    this.get(5, 1);
                } else {
                    this.currentPage = 1;
                    await this.FuzzySearch(searchContent, this.pageSize, 1);
                }
            },
            tab:{
                async handler(newValue) {
                    let data = {
                        education:[newValue.educationIndex],
                        workYears:[newValue.experienceIndex],
                        industryType:[newValue.industryType],
                        workCity:"",
                    }
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
                    }else{
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
    .layout-center{
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
    .selected{
        color: #409EFF;
    }
</style>