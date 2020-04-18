<template>
    <div>
        <div id="filter-box">
            <div class="inner">
                <div >
                    <div class="inner">
                        <div class="condition-box">
                            <div class="show-condition-district">
                                <span class="hotcity">行业:</span>
                                <el-link :underline="false">全部</el-link>
                                <el-link :underline="false">市场</el-link>
                                <el-link :underline="false">公关/媒介</el-link>
                                <el-link :underline="false">广告/会展</el-link>
                                <el-link :underline="false">财务/审计/税务</el-link>
                                <el-link :underline="false">人力资源</el-link>
                                <el-link :underline="false">行政/后勤/文秘</el-link>
                                <el-link :underline="false">项目管理/项目协调</el-link>
                                <el-link :underline="false">质量管理/安全防护</el-link>
                                <el-link :underline="false">高级管理</el-link>
                                <el-link :underline="false">硬件开发</el-link>
                                <el-link :underline="false">银行</el-link>
                                <el-button class="allcity" type="text">所有</el-button>
                            </div>
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
                                <el-button class="allcity" type="text">全部城市</el-button>
                            </div>
                            <div class="condition-experience show-condition-district">
                                <span class="hotcity">经验:</span>
                                <el-link :underline="false">全部</el-link>
                                <el-link :underline="false">1年以内</el-link>
                                <el-link :underline="false">1-3年</el-link>
                                <el-link :underline="false">3-5年</el-link>
                                <el-link :underline="false">5-10年</el-link>
                                <el-link :underline="false">10年以上</el-link>
                            </div>
                            <div class="show-condition-district">
                                <span class="hotcity">学历:</span>
                                <el-link :underline="false">全部</el-link>
                                <el-link :underline="false">小学</el-link>
                                <el-link :underline="false">初中</el-link>
                                <el-link :underline="false">高中</el-link>
                                <el-link :underline="false">大专</el-link>
                                <el-link :underline="false">本科</el-link>
                                <el-link :underline="false">硕士</el-link>
                                <el-link :underline="false">博士</el-link>
                                <el-link :underline="false">博士后</el-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                <div class="talent-list">
                    <ul class="talent-ul">
                        <li v-for="item in talentList" :key="item.userId"  @click="goToDetail(item.userId)">
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
                                        <span>无数据</span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span>无数据</span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span>无数据</span>
                                    </div>
                                    <div>
                                        <span class="expectation">期望岗位:</span>
                                        <span style="margin-left: 10px">无数据</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <app-Pager></app-Pager>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {getTalentList} from "../../../api/talent";
    import Pager from "@/components/Pager";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "talent_all",
        components:{
            'app-Pager':Pager
        },
        data(){
            return{
                talentList:[],
                pageSize:5,
            }
        },
        methods:{
            goToDetail(id){
                console.log(id);
                this.$router.push("/talent/detail");
            },
            get(){
                let data = {
                    workCity:""
                }
                getTalentList(data,CommonUtils.getStore("token"),this.pageSize,1)
                    .then(res=>{
                        this.talentList = res.result.collection;
                        console.log(res);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }
        },
        created() {
            this.get();
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/hr/talent/index.css";
</style>