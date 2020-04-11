<template>
    <div class="inner">
        <div class="resume-container">
            <div class="resume-content">
                <div class="resume-content-box resume-box">
                    <!--更新时间-->
                    <div class="update-time">
                        <span>最后更新2020/3/2 18:20</span>
                    </div>

                    <!--用户信息-->
                    <div class="resume-userinfo normal-margin-top">
                        <div v-if="baseInfo" class="item-primary">
                            <div class="info-flex">
                                <div class="info-flex-item">
                                    <p class="name">{{baseForm.name}}</p>
                                    <div class="label">
                                        <span class="label-item">
                                            <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                            {{baseForm.birthday }}
                                        </span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span class="label-item">
                                            <i v-if="baseForm.gender===1" class="fa fa-mars" aria-hidden="true">男</i>
                                            <i v-else class="fa fa-venus" aria-hidden="true">女</i>
                                        </span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span class="label-item">
                                            <i class="el-icon-location-outline"></i>上海
                                        </span>
                                    </div>
                                </div>
                                <div class="info-flex-item avatar">
                                    <el-avatar :size="70" :src="avatar"></el-avatar>
                                </div>
                            </div>
                            <div class="edit">
                                <el-button type="text" icon="el-icon-edit-outline" @click="baseInfo = false">编辑</el-button>
                            </div>
                        </div>
                        <div v-else class="item-form">
                            <h3 class="title">编辑个人信息</h3>

                            <el-form ref="baseForm" :rules="baseFormRules" :model="baseForm" class="ui-form normal-margin-top">
                                <!--姓名-->
                                <div class="form-item">
                                    <div class="item-label">
                                        姓名
                                    </div>
                                    <div class="item-content">
                                        <el-input v-model="baseForm.name" placeholder="请输入内容"></el-input>
                                    </div>
                                </div>
                                <!--求职状态-->
                                <div class="form-item">
                                    <div class="item-label">
                                        当前求职状态
                                    </div>
                                    <div class="item-content">
                                        <el-select v-model="baseForm.huntingStatus" placeholder="请选择">
                                            <el-option label="在职-暂不考虑" value="1">
                                            </el-option>
                                            <el-option label="在职-考虑机会" value="2">
                                            </el-option>
                                            <el-option label="在职-月内到岗" value="3">
                                            </el-option>
                                            <el-option label="离职-随时到岗" value="4">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <!--生日-->
                                <div class="form-item">
                                    <div class="item-label">
                                        生日
                                    </div>
                                    <div class="item-content">
                                        <el-date-picker
                                                v-model="baseForm.birthday"
                                                type="date"
                                                placeholder="选择日期">
                                        </el-date-picker>
                                    </div>
                                </div>
                                <!--所在城市-->
                                <div class="form-item">
                                    <div class="item-label">
                                        所在城市
                                    </div>
                                    <div class="item-content">
                                        <el-select v-model="baseForm.citys" placeholder="请选择">
                                            <el-option v-for="item in cities" :key="item.id" :label="item.txt" :value="item.id">

                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <div class="form-item">
                                    <div class="item-label">
                                        性别
                                    </div>
                                    <div class="item-content">
                                        <el-radio-group v-model="baseForm.gender">
                                            <el-radio label="1">男</el-radio>
                                            <el-radio label="2">女</el-radio>
                                        </el-radio-group>
                                    </div>
                                </div>
                                <div class="d-flex d-flex-jte">
                                    <el-button type="primary" @click="baseInfo = true">取消</el-button>
                                    <el-button type="primary" @click="updateBaseInfo('baseForm')">保存</el-button>
                                </div>
                            </el-form>
                        </div>
                    </div>
                    <!--用户信息-->

                    <!--求职意向-->
                    <div class="resume-purpose">
                        <div class="item-primary">
                            <p class="title">求职意向</p>
                            <div :class="{stretch:!jobIntention}"></div>
                            <div v-if="jobIntention" class="purpose-label">
                                <div class="purpose-detail label-detail d-flex d-flex-sbt">
                                    <div class="d-flex-row">
                                        <p class="normal-pdd">
                                            <span>期望行业:{{intentionForm.expectIndustry}}</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>期望岗位:{{intentionForm.expectPost}}</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>期望薪资:{{intentionForm.salaryRange}}</span>
                                        </p>
                                    </div>
                                    <div class="d-flex-row">
                                        <p class="normal-pdd">
                                            <span>求职状态:{{intentionForm.huntingStatus}}</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>自我评价:{{intentionForm.selfEvaluation}}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="edit">
                                    <el-button type="text" icon="el-icon-edit-outline" @click="jobIntention = false">编辑</el-button>
                                </div>
                            </div>
                            <div v-else class="item-form item-pad">
                                <h3 class="title clear-title">编辑求职意向</h3>
                                <el-form ref="intentionForm" :rules="intentionRules" v-model="intentionForm" class="ui-form normal-margin-top">
                                    <div class="form-item">
                                        <div class="item-label">
                                            期望行业
                                        </div>
                                        <div class="item-content">
                                            <el-select v-model="intentionForm.expectIndustry" placeholder="请选择">
                                                <el-option v-for="item in industryType" :key="item.id" :label="item.txt" :value="item.id">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <div class="item-label">
                                            求职状态
                                        </div>
                                        <div class="item-content">
                                            <el-select v-model="intentionForm.huntingStatus" placeholder="请选择">
                                                <el-option v-for="item in huntingStatus" :key="item.id" :label="item.txt" :value="item.id">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <div class="item-label">
                                            薪资范围
                                        </div>
                                        <div class="item-content">
                                            <el-select v-model="intentionForm.salaryRange" placeholder="请选择">
                                                <el-option v-for="item in salaryRange" :key="item.id" :label="item.txt" :value="item.id">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <div class="item-label">
                                            期望岗位
                                        </div>
                                        <div class="item-content">
                                            <el-select v-model="intentionForm.expectPost" placeholder="请选择">
                                                <el-option label="兼职" value="1">
                                                </el-option>
                                                <el-option label="临时" value="2">
                                                </el-option>
                                                <el-option label="其他" value="3">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="item-label">
                                            自我评价
                                        </div>
                                        <div class="item-content">
                                            <el-input
                                                    type="textarea"
                                                    :rows="3"
                                                    placeholder="请输入内容"
                                                    v-model="intentionForm.selfEvaluation">
                                            </el-input>
                                        </div>
                                    </div>
                                </el-form>
                                <div class="d-flex d-flex-jte normal-margin-top">
                                    <el-button type="primary" @click="jobIntention = true">取消</el-button>
                                    <el-button type="primary" @click="updateIntention('intentionForm')">保存</el-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!--求职意向-->

                    <!--工作经历-->
                    <div class="resume-education">
                        <div class="item-primary">
                            <p class="title">工作经历</p>
                            <div :class="{stretch:!experience}"></div>
                            <div v-if="experience" class="purpose-label">
                                <div class="purpose-detail label-detail d-flex d-flex-sbt">
                                    <div class="d-flex-row">
                                        <p class="normal-pdd">
                                            <span>公司名称:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>行业类型:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>工作内容:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>所属部门:</span>
                                        </p>
                                    </div>
                                    <div class="d-flex-row">
                                        <p class="normal-pdd">
                                            <span>开始时间:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>结束时间:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>职位名称:</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="edit">
                                    <el-button type="text" icon="el-icon-edit-outline" @click="experience = false">编辑</el-button>
                                </div>
                            </div>
                            <div v-else class="item-form item-pad">
                                <h3 class="title clear-title">编辑工作经历</h3>
                                <el-form ref="experienceForm" v-model="experienceForm" class="ui-form normal-margin-top">
                                    <!--公司名称-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            公司名称
                                        </div>
                                        <div class="item-content">
                                            <el-input v-model="experienceForm.companyName" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <!--行业类型-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            行业类型
                                        </div>
                                        <div class="item-content">
                                            <el-select v-model="experienceForm.industryType" placeholder="请选择">
                                                <el-option v-for="item in industryType" :key="item.id" :label="item.txt" :value="item.id">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                    <!--开始时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            开始时间
                                        </div>
                                        <div class="item-content">
                                            <el-date-picker
                                                    v-model="experienceForm.startTime"
                                                    type="date"
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                    </div>
                                    <!--结束时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            结束时间
                                        </div>
                                        <div class="item-content">
                                            <el-date-picker
                                                    v-model="experienceForm.endTime"
                                                    type="date"
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                    </div>
                                    <!--职位名称-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            职位名称
                                        </div>
                                        <div class="item-content">
                                            <el-input v-model="experienceForm.positionName" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <!--所属部门-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            所属部门
                                        </div>
                                        <div class="item-content">
                                            <el-input v-model="experienceForm.department" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <!--工作内容-->
                                    <div>
                                        <div class="item-label">
                                            工作内容
                                        </div>
                                        <div class="item-content">
                                            <el-input
                                                    type="textarea"
                                                    :rows="3"
                                                    placeholder="请输入内容"
                                                    v-model="experienceForm.descr">
                                            </el-input>
                                        </div>
                                    </div>
                                </el-form>
                                <div class="d-flex d-flex-jte normal-margin-top">
                                    <el-button type="primary" @click="experience = true">取消</el-button>
                                    <el-button type="primary" @click="experience = true">保存</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--工作经历-->

                    <!--项目经历-->
                    <div class="resume-education">
                        <div class="item-primary">
                            <p class="title">项目经历</p>
                            <div :class="{stretch:!project}"></div>
                            <div v-if="project" class="purpose-label">
                                <div class="purpose-detail label-detail d-flex d-flex-sbt">
                                    <div class="d-flex-row">
                                        <p class="normal-pdd">
                                            <span>项目名称:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>项目角色:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>开始时间:</span>
                                        </p>
                                    </div>
                                    <div class="d-flex-row">
                                        <p class="normal-pdd">
                                            <span>项目描述:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>项目URL:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>结束时间:</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="edit">
                                    <el-button type="text" icon="el-icon-edit-outline" @click="project = false">编辑</el-button>
                                </div>
                            </div>
                            <div v-else class="item-form item-pad">
                                <h3 class="title clear-title">编辑工作经历</h3>
                                <el-form ref="projectForm" v-model="projectForm" class="ui-form normal-margin-top">
                                    <!--项目名称-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            项目名称
                                        </div>
                                        <div class="item-content">
                                            <el-input v-model="projectForm.projectName" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <!--项目角色-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            项目角色
                                        </div>
                                        <div class="item-content">
                                            <div class="item-content">
                                                <el-input v-model="projectForm.projectRole" placeholder="请输入内容"></el-input>
                                            </div>
                                        </div>
                                    </div>
                                    <!--开始时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            开始时间
                                        </div>
                                        <div class="item-content">
                                            <el-date-picker
                                                    v-model="projectForm.startTime"
                                                    type="date"
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                    </div>
                                    <!--结束时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            结束时间
                                        </div>
                                        <div class="item-content">
                                            <el-date-picker
                                                    v-model="projectForm.endTime"
                                                    type="date"
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                    </div>
                                    <!--项目URL-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            项目URL
                                        </div>
                                        <div class="item-content">
                                            <el-input v-model="projectForm.projectURL" placeholder="（选填）"></el-input>
                                        </div>
                                    </div>
                                    <!--项目描述-->
                                    <div>
                                        <div class="item-label">
                                            项目描述
                                        </div>
                                        <div class="item-content">
                                            <el-input
                                                    type="textarea"
                                                    :rows="3"
                                                    placeholder="请输入内容"
                                                    v-model="projectForm.descr">
                                            </el-input>
                                        </div>
                                    </div>
                                </el-form>
                                <div class="d-flex d-flex-jte normal-margin-top">
                                    <el-button type="primary" @click="project = true">取消</el-button>
                                    <el-button type="primary" @click="project = true">保存</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--项目经历-->

                    <!--教育经历-->
                    <div class="resume-education">
                        <div class="item-primary">
                            <p class="title">教育经历</p>
                            <div :class="{stretch:!education}"></div>
                            <div v-if="education" class="purpose-label">
                                <div class="purpose-detail label-detail d-flex d-flex-sbt">
                                    <div class="d-flex-row">
                                        <p class="normal-pdd">
                                            <span>学校:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>开始时间:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>学历:</span>
                                        </p>
                                    </div>
                                    <div class="d-flex-row">
                                        <p class="normal-pdd">
                                            <span>专业:</span>
                                        </p>
                                        <p class="normal-pdd">
                                            <span>结束时间:</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="edit">
                                    <el-button type="text" icon="el-icon-edit-outline" @click="education = false">编辑</el-button>
                                </div>
                            </div>
                            <div v-else class="item-form item-pad">
                                <h3 class="title clear-title">编辑教育经历</h3>
                                <el-form ref="projectForm" v-model="projectForm" class="ui-form normal-margin-top">
                                    <!--学校-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            学校
                                        </div>
                                        <div class="item-content">
                                            <el-input v-model="projectForm.projectName" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <!--专业-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            专业
                                        </div>
                                        <div class="item-content">
                                            <div class="item-content">
                                                <el-input v-model="projectForm.projectRole" placeholder="请输入内容"></el-input>
                                            </div>
                                        </div>
                                    </div>
                                    <!--开始时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            开始时间
                                        </div>
                                        <div class="item-content">
                                            <el-date-picker
                                                    v-model="projectForm.startTime"
                                                    type="date"
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                    </div>
                                    <!--结束时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            结束时间
                                        </div>
                                        <div class="item-content">
                                            <el-date-picker
                                                    v-model="projectForm.endTime"
                                                    type="date"
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                    </div>
                                    <!--学历-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            学历
                                        </div>
                                        <div class="item-content">
                                            <el-select v-model="baseForm.citys" placeholder="请选择">
                                                <el-option v-for="item in educationList" :key="item.id" :label="item.txt" :value="item.id">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                </el-form>
                                <div class="d-flex d-flex-jte normal-margin-top">
                                    <el-button type="primary" @click="education = true">取消</el-button>
                                    <el-button type="primary" @click="education = true">保存</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--教育经历-->
                </div>
            </div>
            <div class="resume-sider">
                <div class="sider-box">
                    <p>附件管理</p>
                    <div class="btn">
                        <el-button type="primary" :round="false">上传简历</el-button>
                    </div>
                </div>
                <div class="sider-box resume-settings">
                    <div class="settings-item privacy-set">
                        <span>隐私设置</span>
                        <div>
                            <el-button type="text">设置</el-button>
                        </div>
                    </div>
                    <div class="settings-item">
                        <span>简历设置：</span>
                        <span>对外开放</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {CommonUtils} from "../../../utils/commonUtil";
    import {getInfo,saveInfo} from "../../../api/user";

    export default {
        name: "Resume",
        data() {
            return {
                baseInfo:true,
                jobIntention:true,
                experience:true,
                project:true,
                education:true,
                avatar:require("../../../assets/img/aliyun.jpg"),
                industryType: CommonUtils.industryType,
                huntingStatus:CommonUtils.huntingStatus,
                salaryRange:CommonUtils.salaryRange,
                educationList:CommonUtils.education,
                cities:CommonUtils.cities,
                baseForm:{
                    gender:"",
                    name:"",
                    birthday:"",
                    citys:"",
                    huntingStatus:""
                },
                intentionForm:{
                    huntingStatus:"",
                    expectIndustry:"",
                    salaryRange:"",
                    expectPost:"",
                    selfEvaluation:""
                },
                experienceForm:{
                    companyName:"",
                    industryType:"",
                    startTime:"",
                    endTime:"",
                    positionName:"",
                    department:"",
                    descr:""
                },
                projectForm:{
                    projectName:"",
                    projectRole:"",
                    startTime:"",
                    endTime:"",
                    projectURL:"",
                    descr:"",
                },
                baseFormRules:{
                    huntingStatus: [
                        { required: true, message: '请选择求职状态', trigger: 'blur' },
                    ],
                    expectIndustry: [
                        { required: true, message: '请选择期望行业', trigger: 'blur' }
                    ],
                    salaryRange:[
                        { required: true, message: '请选择薪资范围', trigger: 'blur' }
                    ],
                    expectPost:[
                        { required: true, message: '请选择期望职业', trigger: 'blur'  }
                    ],
                    selfEvaluation:[
                        { required: true, message: '请输入自我评价', trigger: 'blur'  }
                    ]
                },
                intentionRules:{
                    name: [
                        { required: true, message: '请输入名字', trigger: 'blur' },
                    ],
                    huntingStatus: [
                        { required: true, message: '请选择求职状态', trigger: 'change' }
                    ],
                    birthday:[
                        { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
                    ],
                    citys:[
                        { required: true, message: '请选择城市', trigger: 'blur' }
                    ],
                    gender:[
                        { required: true, message: '请选择性别', trigger: 'blur'  }
                    ]
                },
                user:{},
                degrees:{},
                projects:{},
                workExperiences:{}
            }
        },
        methods:{
            get(){
                getInfo({authorization:CommonUtils.getStore("token")})
                    .then(res=>{
                        console.log(res);
                        if(res.code===0){
                            this.show(res.user);
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            show(user){
                this.user = user;
                if(user.detail!==null){
                    this.baseForm.name = this.user.name;
                    this.baseForm.birthday = this.user.detail.birthday;
                    this.baseForm.huntingStatus = this.user.detail.huntingStatus.toString();
                    this.baseForm.citys = this.user.detail.workCity;
                    this.baseForm.gender = user.detail.gender.toString();
                    this.intentionForm.huntingStatus = CommonUtils.getHuntingStatus(this.user.detail.huntingStatus);
                    this.intentionForm.expectIndustry = this.user.detail.expectIndustry;
                    this.intentionForm.selfEvaluation = this.user.detail.selfEvaluation;
                    this.intentionForm.expectPost = this.user.detail.expectPost;
                    this.intentionForm.salaryRange = this.user.detail.salaryRange;
                }
                if(user.degrees!=null){
                    this.degrees = user.degrees;
                }
                if(user.projects!=null){
                    this.projects = user.projects;
                }
                if(user.workExperiences!=null){
                    this.workExperiences = user.workExperiences;
                }
            },
            //更新基本信息
            updateBaseInfo(formName){
                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        let user = CommonUtils.getStore("user");
                        let formdata = new FormData();
                        formdata.append("name",this.baseForm.name);
                        formdata.append("birthday",(this.baseForm.birthday));
                        formdata.append("huntingStatus",this.baseForm.huntingStatus);
                        formdata.append("workCity",1);
                        formdata.append("gender",this.baseForm.gender);
                        saveInfo(formdata,CommonUtils.getStore("token"))
                            .then(res => {
                                if (res.code === 0) {
                                    user.gender = this.baseForm.gender;
                                    user.huntingStatus = this.baseForm.huntingStatus;
                                    user.name = this.baseForm.name;
                                    user.birthday = (this.baseForm.birthday).toString();
                                    this.$message.success("修改成功");
                                    CommonUtils.setStore("user",user);
                                    setTimeout(()=>{
                                        this.$router.go(0);
                                    },900);
                                }else{
                                    this.$message.warning(res.message);
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            updateIntention(formName){
                this.$refs[formName].validate(valid=>{
                    if(valid){
                        console.log(valid);
                    }else{
                        console.log("err");
                        return false;
                    }
                })
            }
        },
        created() {
            this.get();
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/jobhunter/resume.css";
</style>