<template>
    <div>
        <div id="filter-box">
            <div class="inner">
                <div class="search-box">
                    <div class="search-form">
                        <el-input placeholder="搜索职位和公司" v-model="input" class="input-with-select">
                            <el-select v-model="city" slot="prepend" placeholder="城市">
                                <el-option label="餐厅名" value="1"></el-option>
                                <el-option label="订单号" value="2"></el-option>
                                <el-option label="用户电话" value="3"></el-option>
                            </el-select>
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div>
                </div>
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
                    <div class="dropdown-wrap">
                        <el-dropdown>
                        <span class="el-dropdown-link">
                            工作经验<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="dropdown-wrap">
                        <el-dropdown>
                        <span class="el-dropdown-link">
                            融资规模<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="dropdown-wrap">
                        <el-dropdown>
                        <span class="el-dropdown-link">
                            公司规模<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner">
            <div class="job-box">
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
                <div class="job-list">
                    <ul>
                        <li>
                            <div class="job-primary">
                                <div class="info-primary">
                                    <div class="primary-wrapper">
                                        <router-link to="" style="float: left;">
                                            <div class="job-title">
                                                <span class="job-name">电商平面设计管培生</span>
                                                <span class="job-area-wrapper">
                                                        <span class="job-area">北京</span>
                                                    </span>
                                                <span class="job-pub-time">发布于02月15日</span>
                                            </div>
                                            <div class="job-limit">
                                                <span class="red">6-7K</span>
                                                <p>
                                                    <span>雨纷纷</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>旧故里</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>草木深</span>
                                                </p>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="info-company">
                                        <div class="company-text">
                                            <h3 class="name">
                                                <router-link to="">
                                                    公司名称
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
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                    </div>
                                    <div class="info-desc">
                                        节日福利，零食下午茶，员工旅游，带薪年假，年终奖，五险一金，餐补，加班补助，定期体检，交通补助，补充医疗保险
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="job-primary">
                                <div class="info-primary">
                                    <div class="primary-wrapper">
                                        <router-link to="" style="float: left;">
                                            <div class="job-title">
                                                <span class="job-name">电商平面设计管培生</span>
                                                <span class="job-area-wrapper">
                                                        <span class="job-area">北京</span>
                                                    </span>
                                                <span class="job-pub-time">发布于02月15日</span>
                                            </div>
                                            <div class="job-limit">
                                                <span class="red">6-7K</span>
                                                <p>
                                                    <span>雨纷纷</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>旧故里</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>草木深</span>
                                                </p>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="info-company">
                                        <div class="company-text">
                                            <h3 class="name">
                                                <router-link to="">
                                                    公司名称
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
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                    </div>
                                    <div class="info-desc">
                                        节日福利，零食下午茶，员工旅游，带薪年假，年终奖，五险一金，餐补，加班补助，定期体检，交通补助，补充医疗保险
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="job-primary">
                                <div class="info-primary">
                                    <div class="primary-wrapper">
                                        <router-link to="" style="float: left;">
                                            <div class="job-title">
                                                <span class="job-name">电商平面设计管培生</span>
                                                <span class="job-area-wrapper">
                                                        <span class="job-area">北京</span>
                                                    </span>
                                                <span class="job-pub-time">发布于02月15日</span>
                                            </div>
                                            <div class="job-limit">
                                                <span class="red">6-7K</span>
                                                <p>
                                                    <span>雨纷纷</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>旧故里</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>草木深</span>
                                                </p>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="info-company">
                                        <div class="company-text">
                                            <h3 class="name">
                                                <router-link to="">
                                                    公司名称
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
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                    </div>
                                    <div class="info-desc">
                                        节日福利，零食下午茶，员工旅游，带薪年假，年终奖，五险一金，餐补，加班补助，定期体检，交通补助，补充医疗保险
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="job-primary">
                                <div class="info-primary">
                                    <div class="primary-wrapper">
                                        <router-link to="" style="float: left;">
                                            <div class="job-title">
                                                <span class="job-name">电商平面设计管培生</span>
                                                <span class="job-area-wrapper">
                                                        <span class="job-area">北京</span>
                                                    </span>
                                                <span class="job-pub-time">发布于02月15日</span>
                                            </div>
                                            <div class="job-limit">
                                                <span class="red">6-7K</span>
                                                <p>
                                                    <span>雨纷纷</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>旧故里</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>草木深</span>
                                                </p>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="info-company">
                                        <div class="company-text">
                                            <h3 class="name">
                                                <router-link to="">
                                                    公司名称
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
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                    </div>
                                    <div class="info-desc">
                                        节日福利，零食下午茶，员工旅游，带薪年假，年终奖，五险一金，餐补，加班补助，定期体检，交通补助，补充医疗保险
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="job-primary">
                                <div class="info-primary">
                                    <div class="primary-wrapper">
                                        <router-link to="" style="float: left;">
                                            <div class="job-title">
                                                <span class="job-name">电商平面设计管培生</span>
                                                <span class="job-area-wrapper">
                                                        <span class="job-area">北京</span>
                                                    </span>
                                                <span class="job-pub-time">发布于02月15日</span>
                                            </div>
                                            <div class="job-limit">
                                                <span class="red">6-7K</span>
                                                <p>
                                                    <span>雨纷纷</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>旧故里</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>草木深</span>
                                                </p>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="info-company">
                                        <div class="company-text">
                                            <h3 class="name">
                                                <router-link to="">
                                                    公司名称
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
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                        <el-tag type="info" size="mini">标签三</el-tag>
                                    </div>
                                    <div class="info-desc">
                                        节日福利，零食下午茶，员工旅游，带薪年假，年终奖，五险一金，餐补，加班补助，定期体检，交通补助，补充医疗保险
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

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
    export default {
        name: "job",
        data() {
            return {
                input: "",
                city: "",
                job_type: "",
                industry: "",
                dialogVisible: false
            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(()=> {
                        done();
                    })
                    .catch(() => {});
            },
            showdialog(){
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/occupation/job.css";
</style>