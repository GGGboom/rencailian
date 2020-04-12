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
                                <el-button type="text" icon="el-icon-edit-outline" @click="baseInfo = false">编辑
                                </el-button>
                            </div>
                        </div>
                        <div v-else class="item-form">
                            <h3 class="title">编辑个人信息</h3>

                            <el-form ref="baseForm" :rules="baseFormRules" :model="baseForm"
                                     class="ui-form normal-margin-top">
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
                                            <el-option v-for="item in cities" :key="item.id" :label="item.txt"
                                                       :value="item.id">

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
                                    <el-button type="text" icon="el-icon-edit-outline" @click="jobIntention = false">
                                        编辑
                                    </el-button>
                                </div>
                            </div>
                            <div v-else class="item-form item-pad">
                                <h3 class="title clear-title">编辑求职意向</h3>
                                <el-form ref="intentionForm" :rules="intentionRules" v-model="intentionForm"
                                         class="ui-form normal-margin-top">
                                    <div class="form-item">
                                        <div class="item-label">
                                            期望行业
                                        </div>
                                        <div class="item-content">
                                            <el-select v-model="intentionForm.expectIndustry" placeholder="请选择">
                                                <el-option v-for="item in industryType" :key="item.id" :label="item.txt"
                                                           :value="item.id">
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
                                                <el-option v-for="item in huntingStatus" :key="item.id"
                                                           :label="item.txt" :value="item.id">
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
                                                <el-option v-for="item in salaryRange" :key="item.id" :label="item.txt"
                                                           :value="item.id">
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
                            <div style="position: relative">
                                <div class="title">工作经历
                                    <div class="add" @click="showWorkExper(0,1)">
                                        <el-button type="text" icon="el-icon-circle-plus-outline">添加</el-button>
                                    </div>
                                </div>
                            </div>
                            <div :class="{stretch:!experience}"></div>
                            <div v-if="experience" class="purpose-label">
                                <ul>
                                    <li  v-for="item in workExperiencesList"
                                        :key="item.id">
                                        <div @click="showWorkExper(item.id,0)" class="primary-info">
                                            <div class="info-text">
                                                <h4 class="name">{{item.companyName}}</h4>
                                                <span class="gray period">{{item.startTime}}-{{item.endTime}}</span>
                                            </div>
                                            <h4>
                                                <span>{{item.departName}}</span>
                                                <span class="prev-line">{{item.positionName}}</span>
                                            </h4>
                                            <div class="info-text">
                                                <span class="text-type">内容：</span>
                                                {{item.workDescription}}
                                            </div>
                                        </div>
                                        <div class="resume-delete" @click="delWorkExp(item.id)">
                                            <el-button type="text" icon="el-icon-delete" >删除
                                            </el-button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div v-else class="item-form item-pad">
                                <h3 class="title clear-title">编辑工作经历</h3>
                                <el-form ref="experienceForm" :rules="experienceRules" :model="experienceForm"
                                         class="ui-form normal-margin-top">
                                    <!--公司名称-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            公司名称
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="companyName">
                                                <el-input v-model="experienceForm.companyName"
                                                          placeholder="请输入内容"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--行业类型-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            行业类型
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="industryType">
                                                <el-select v-model="experienceForm.industryType" placeholder="请选择">
                                                    <el-option v-for="item in industryType" :key="item.id"
                                                               :label="item.txt" :value="item.id">
                                                    </el-option>
                                                </el-select>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--开始时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            开始时间
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="startTime">
                                                <el-date-picker
                                                        v-model="experienceForm.startTime"
                                                        type="date"
                                                        placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--结束时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            结束时间
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="endTime">
                                                <el-date-picker
                                                        v-model="experienceForm.endTime"
                                                        type="date"
                                                        placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--职位名称-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            职位名称
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="positionName">
                                                <el-input v-model="experienceForm.positionName"
                                                          placeholder="请输入内容"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--所属部门-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            所属部门
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="departName">
                                                <el-input v-model="experienceForm.departName"
                                                          placeholder="请输入内容"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--工作内容-->
                                    <div>
                                        <div class="item-label">
                                            工作内容
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="workDescription">
                                                <el-input
                                                        type="textarea"
                                                        :rows="3"
                                                        placeholder="请输入内容"
                                                        v-model="experienceForm.workDescription">
                                                </el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                </el-form>
                                <div class="d-flex d-flex-jte normal-margin-top">
                                    <el-button type="primary" @click="experience = true">取消</el-button>
                                    <el-button type="primary" @click="updateExperience('experienceForm')">保存</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--工作经历-->

                    <!--项目经历-->
                    <div class="resume-education">
                        <div class="item-primary">
                            <div style="position: relative">
                                <div class="title">项目经历
                                    <div class="add" @click="showProjects(0,1)">
                                        <el-button type="text" icon="el-icon-circle-plus-outline">添加</el-button>
                                    </div>
                                </div>
                            </div>
                            <div :class="{stretch:!project}"></div>
                            <div v-if="project" class="purpose-label">
                                <ul>
                                    <li  v-for="item in projectList" :key="item.id">
                                        <div class="primary-info" @click="showProjects(item.id,0)">
                                            <div class="info-text">
                                                <h4 class="name">{{item.projectName}}</h4>
                                                <span class="gray period">{{item.startTime}}-{{item.endTime}}</span>
                                            </div>
                                            <h4>
                                                <span>{{item.projectRole}}</span>
                                            </h4>
                                            <div class="info-text">
                                                <span class="text-type">内容：</span>
                                                {{item.projectDescprition}}
                                            </div>
                                        </div>
                                        <div class="resume-delete" @click="deleteProject(item.id)">
                                            <el-button type="text" icon="el-icon-delete" >删除
                                            </el-button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div v-else class="item-form item-pad">
                                <h3 class="title clear-title">编辑项目经历</h3>
                                <el-form ref="projectForm" :rules="projectRules" :model="projectForm"
                                         class="ui-form normal-margin-top">
                                    <!--项目名称-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            项目名称
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="projectName">
                                                <el-input v-model="projectForm.projectName"
                                                          placeholder="请输入内容"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--项目角色-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            项目角色
                                        </div>
                                        <div class="item-content">
                                            <div class="item-content">
                                                <el-form-item prop="projectRole">
                                                    <el-input v-model="projectForm.projectRole"
                                                              placeholder="请输入内容"></el-input>
                                                </el-form-item>
                                            </div>
                                        </div>
                                    </div>
                                    <!--开始时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            开始时间
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="startTime">
                                                <el-date-picker
                                                        v-model="projectForm.startTime"
                                                        type="date"
                                                        placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--结束时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            结束时间
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="endTime">
                                                <el-date-picker
                                                        v-model="projectForm.endTime"
                                                        type="date"
                                                        placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--项目URL-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            项目URL
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="projectUrl">
                                                <el-input v-model="projectForm.projectUrl"
                                                          placeholder="（选填）"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--项目描述-->
                                    <div>
                                        <div class="item-label">
                                            项目描述
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="projectDescprition">
                                                <el-input
                                                        type="textarea"
                                                        :rows="3"
                                                        placeholder="请输入内容"
                                                        v-model="projectForm.projectDescprition">
                                                </el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="d-flex d-flex-jte normal-margin-top">
                                        <el-button type="primary" @click="project = true">取消</el-button>
                                        <el-button type="primary" @click="updateProject('projectForm')">保存</el-button>
                                    </div>
                                </el-form>

                            </div>
                        </div>
                    </div>
                    <!--项目经历-->

                    <!--教育经历-->
                    <div class="resume-education">
                        <div class="item-primary">
                            <div style="position: relative">
                                <div class="title">教育经历
                                    <div class="add" @click="showDegrees(0,1)">
                                        <el-button type="text" icon="el-icon-circle-plus-outline">添加</el-button>
                                    </div>
                                </div>
                            </div>
                            <div :class="{stretch:!education}"></div>
                            <div v-if="education" class="purpose-label">
                                <ul>
                                    <li  v-for="item in degreesList" :key="item.id">
                                        <div @click="showDegrees(item.id,0)" class="primary-info">
                                            <div class="info-text">
                                                <h4 class="name">{{item.college}}</h4>
                                                <span class="gray period">{{item.startTime}}-{{item.endTime}}</span>
                                            </div>
                                            <h4>
                                                <span>{{item.major}}</span>
                                                <span class="prev-line">{{item.degree}}</span>
                                            </h4>
                                        </div>
                                        <div class="resume-delete">
                                            <el-button type="text" icon="el-icon-delete" @click="delDegree(item.id)">删除
                                            </el-button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div v-else class="item-form item-pad">
                                <h3 class="title clear-title">编辑教育经历</h3>
                                <el-form ref="educationForm" :rules="educationRules" :model="educationForm"
                                         class="ui-form normal-margin-top">
                                    <!--学校-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            学校
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="college">
                                                <el-input v-model="educationForm.college"
                                                          placeholder="请输入内容"></el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--专业-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            专业
                                        </div>
                                        <div class="item-content">
                                            <div class="item-content">
                                                <el-form-item prop="major">
                                                    <el-input v-model="educationForm.major"
                                                              placeholder="请输入内容"></el-input>
                                                </el-form-item>
                                            </div>
                                        </div>
                                    </div>
                                    <!--开始时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            开始时间
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="startTime">
                                                <el-date-picker
                                                        v-model="educationForm.startTime"
                                                        type="date"
                                                        placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--结束时间-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            结束时间
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="endTime">
                                                <el-date-picker
                                                        v-model="educationForm.endTime"
                                                        type="date"
                                                        placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <!--学历-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            学历
                                        </div>
                                        <div class="item-content">
                                            <el-form-item prop="degree">
                                                <el-select v-model="educationForm.degree" placeholder="请选择">
                                                    <el-option v-for="item in educationList" :key="item.id"
                                                               :label="item.txt" :value="item.id">
                                                    </el-option>
                                                </el-select>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="d-flex d-flex-jte normal-margin-top">
                                        <el-button type="primary" @click="education = true">取消</el-button>
                                        <el-button type="primary" @click="updateEducation('educationForm')">保存</el-button>
                                    </div>
                                </el-form>

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
    import {getInfo, saveInfo} from "../../../api/user";
    import {updateWorkExp, updateProjectExp,updateDegree,deleteWorkExp,deleteProjectExp,deleteDegree} from "../../../api/resume";

    export default {
        name: "Resume",
        data() {
            return {
                baseInfo: true,
                jobIntention: true,
                experience: true,
                project: true,
                education: true,
                avatar: require("../../../assets/img/aliyun.jpg"),
                industryType: CommonUtils.industryType,
                huntingStatus: CommonUtils.huntingStatus,
                salaryRange: CommonUtils.salaryRange,
                educationList: CommonUtils.education,
                cities: CommonUtils.cities,
                baseForm: {                      //基本信息表单
                    gender: "",
                    name: "",
                    birthday: "",
                    citys: "",
                    huntingStatus: ""
                },
                intentionForm: {                   //求职意愿表单
                    huntingStatus: "",
                    expectIndustry: "",
                    salaryRange: "",
                    expectPost: "",
                    selfEvaluation: ""
                },
                experienceForm: {                   //工作经验表单
                    companyName: "",
                    industryType: "",
                    startTime: "",
                    endTime: "",
                    positionName: "",
                    departName: "",
                    workDescription: "",
                },
                projectForm: {                    //项目经历表单
                    projectName: "",
                    projectRole: "",
                    startTime: "",
                    endTime: "",
                    projectUrl: "",
                    projectDescprition: "",
                },
                educationForm: {
                    college: "",
                    major: "",
                    degree: "",
                    startTime: {},
                    endTime: {}
                },
                baseFormRules: {
                    huntingStatus: [
                        {required: true, message: '请选择求职状态', trigger: 'blur'},
                    ],
                    expectIndustry: [
                        {required: true, message: '请选择期望行业', trigger: 'blur'}
                    ],
                    salaryRange: [
                        {required: true, message: '请选择薪资范围', trigger: 'blur'}
                    ],
                    expectPost: [
                        {required: true, message: '请选择期望职业', trigger: 'blur'}
                    ],
                    selfEvaluation: [
                        {required: true, message: '请输入自我评价', trigger: 'blur'}
                    ]
                },
                intentionRules: {
                    name: [
                        {required: true, message: '请输入名字', trigger: 'blur'},
                    ],
                    industryType: [
                        {required: true, message: '请选择求行业类型', trigger: 'change'}
                    ],
                    startTime: [
                        {type: 'date', required: true, message: '请选择开始时间', trigger: 'blur'}
                    ],
                    endTime: [
                        {type: 'date', required: true, message: '请选择结束时间', trigger: 'blur'}
                    ],
                    positionName: [
                        {required: true, message: '请输入职称名称', trigger: 'blur'}
                    ],
                    descr: [
                        {required: true, message: '请输入工作内容', trigger: 'blur'}
                    ]
                },
                experienceRules: {
                    companyName: [
                        {required: true, message: '请输入公司名称', trigger: 'blur'},
                    ],
                    industryType: [
                        {required: true, message: '请选择求职状态', trigger: 'blur'}
                    ],
                    startTime: [
                        {type: 'date', required: true, message: '请选择开始时间', trigger: 'change'}
                    ],
                    endTime: [
                        {type: 'date', required: true, message: '请选择结束时间', trigger: 'change'}
                    ],
                    positionName: [
                        {required: true, message: '请选择职业名称', trigger: 'blur'}
                    ],
                    departName: [
                        {required: true, message: '请输入部门', trigger: 'blur'}
                    ],
                    workDescription: [
                        {required: true, message: '请输入工作内容', trigger: 'blur'}
                    ]
                },
                projectRules: {
                    projectName: [
                        {required: true, message: '请输入项目名称', trigger: 'blur'},
                    ],
                    projectRole: [
                        {required: true, message: '请输入项目角色', trigger: 'blur'}
                    ],
                    startTime: [
                        {type: 'date', required: true, message: '请选择开始时间', trigger: 'change'}
                    ],
                    endTime: [
                        {type: 'date', required: true, message: '请选择结束时间', trigger: 'change'}
                    ],
                    projectDescprition: [
                        {required: true, message: '请输入项目描述', trigger: 'blur'}
                    ]
                },
                educationRules: {
                    college: [
                        {required: true, message: '请输入大学', trigger: 'blur'},
                    ],
                    major: [
                        {required: true, message: '请输入主修', trigger: 'blur'}
                    ],
                    startTime: [
                        {type: 'date', required: true, message: '请选择开始时间', trigger: 'change'}
                    ],
                    endTime: [
                        {type: 'date', required: true, message: '请选择结束时间', trigger: 'change'}
                    ],
                    degree: [
                        {required: true, message: '请选择学历', trigger: 'blur'}
                    ]
                },
                workExperiencesList: [],             //工作经验列表
                projectList: [],
                degreesList: []
            }
        },
        methods: {
            get() {
                getInfo({authorization: CommonUtils.getStore("token")})
                    .then(async res => {

                        if (res.code === 0) {
                            await CommonUtils.setStore("user", res.user);      //用户信息-存入我的个人中心本地数据
                            console.log(res);
                            this.show(res.user);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            show(user) {
                this.user = user;
                if (user.detail !== null) {
                    this.baseForm.name = this.user.name;
                    this.baseForm.birthday = this.user.detail.birthday;
                    this.baseForm.huntingStatus = this.user.detail.huntingStatus.toString();
                    this.baseForm.citys = this.user.detail.workCity;
                    this.baseForm.gender = user.detail.gender.toString();
                    this.intentionForm.huntingStatus = CommonUtils.getHuntingStatus(this.user.detail.huntingStatus);
                    this.intentionForm.expectIndustry = CommonUtils.getKeyName('POSITION_TYPE', this.user.detail.expectIndustry);
                    this.intentionForm.selfEvaluation = this.user.detail.selfEvaluation;
                    this.intentionForm.expectPost = CommonUtils.getKeyName('POSITION_TYPE_' + this.user.detail.expectIndustry, this.user.detail.expectPost);
                    this.intentionForm.salaryRange = CommonUtils.getKeyName('SALARY_RANGE', this.user.detail.salaryRange);
                }
                if (user.degrees != null) {
                    this.degreesList = user.degrees;
                }
                if (user.projects != null && user.projects !== undefined) {
                    this.projectList = user.projects;
                }
                if (user.workExperiences != null && user.workExperiences !== undefined) {
                    this.workExperiences = user.workExperiences;
                }
                if (this.user.workExperiences.length > 0) {
                    this.workExperiencesList = this.user.workExperiences
                }
            },
            updateBaseInfo(formName) {            //更新基本信息
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let user = CommonUtils.getStore("user");
                        let formdata = new FormData();
                        formdata.append("name", this.baseForm.name);
                        formdata.append("birthday", (this.baseForm.birthday));
                        formdata.append("huntingStatus", this.baseForm.huntingStatus);
                        formdata.append("workCity", 1);
                        formdata.append("gender", this.baseForm.gender);
                        saveInfo(formdata, CommonUtils.getStore("token"))
                            .then(res => {
                                if (res.code === 0) {
                                    user.gender = this.baseForm.gender;
                                    user.huntingStatus = this.baseForm.huntingStatus;
                                    user.name = this.baseForm.name;
                                    user.birthday = (this.baseForm.birthday).toString();
                                    this.$message.success("修改成功");
                                    CommonUtils.setStore("user", user);
                                    setTimeout(() => {
                                        this.$router.go(0);
                                    }, 900);
                                } else {
                                    this.$message.warning(res.message);
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            updateIntention(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        console.log(valid);
                    } else {
                        console.log("err");
                        return false;
                    }
                })
            },
            showWorkExper(id, type) {
                this.experience = false;
                if (type === 0) {                   //修改工作经历
                    let workExperiences = CommonUtils.getStore("user").workExperiences;
                    workExperiences.forEach(item => {
                        if (item.id === id) {
                            this.experienceForm.companyName = item.companyName;
                            this.experienceForm.industryType = CommonUtils.getKeyName("POSITION_TYPE", item.industryType);
                            this.experienceForm.startTime = CommonUtils.strToDate(item.startTime);
                            this.experienceForm.endTime = CommonUtils.strToDate(item.endTime);
                            this.experienceForm.departName = item.departName;
                            this.experienceForm.positionName = item.positionName;
                            this.experienceForm.workDescription = item.workDescription;
                            this.experienceForm.id = id;                         //修改工作经历
                        }
                    })
                } else {                   //新建工作经历
                    this.experienceForm = {};                                //id为空为新建工作经历
                    this.experienceForm.id = null;
                }

            },
            async delWorkExp(id){            //删除工作经历
               let res = await deleteWorkExp(null,CommonUtils.getStore("token"),id);
               if(res.code===0){
                   this.$message.success("删除成功");
                   this.$router.go(0);
               }else{
                   this.$message.error(res.message);
               }
            },
            updateExperience(formName) {             //新建工作经历
                this.$refs[formName].validate(async valid => {
                    if (valid) {
                        if (this.experienceForm.startTime.getTime() > this.experienceForm.endTime.getTime()) {
                            this.$message.error("结束时间不能小于开始时间");
                        } else {
                            let data = {
                                industryType: 1217,
                                startTime: CommonUtils.dateToString(this.experienceForm.startTime),
                                endTime: CommonUtils.dateToString(this.experienceForm.endTime),
                                positionName: this.experienceForm.positionName,
                                departName: this.experienceForm.departName,
                                workDescription: this.experienceForm.workDescription,
                                companyName: this.experienceForm.companyName,
                                position: 0,
                                ishidden: 0                 //是否隐藏简历
                            }
                            if (this.experienceForm.id !== undefined) {
                                data.id = this.experienceForm.id;
                            }

                            console.log(CommonUtils.getKeyValue('POSITION_TYPE', this.experienceForm.industryType))
                            let res = await updateWorkExp(JSON.stringify(data), CommonUtils.getStore("token"));
                            if (res.code === 0) {
                                this.$message.success("修改成功");
                                setTimeout(() => {
                                    this.$router.go(0);
                                }, 1000)
                            } else {
                                console.log(res);
                            }
                        }
                    } else {
                        console.log("err!")
                    }
                })
            },
            showProjects(id, type) {
                this.project = false;
                if (type === 0) {
                    let list = CommonUtils.getStore("user").projects;
                    list.forEach(item => {
                        if (item.id === id) {
                            this.projectForm.projectName = item.projectName;
                            this.projectForm.projectRole = item.projectRole;
                            this.projectForm.startTime = CommonUtils.strToDate(item.startTime);
                            this.projectForm.endTime = CommonUtils.strToDate(item.endTime);
                            this.projectForm.projectDescprition = item.projectDescprition;
                            this.projectForm.id = id;
                        }
                    })
                } else {
                    this.projectForm = {};                                //id为空为新建项目
                }
            },
            updateProject(formName) {
                this.$refs[formName].validate(async valid => {
                    if (valid) {
                        if (this.projectForm.startTime.getTime() > this.projectForm.endTime.getTime()) {
                            this.$message.error("结束时间不能小于开始时间");
                        } else {
                            let data = {
                                startTime: CommonUtils.dateToString(this.projectForm.startTime),
                                endTime: CommonUtils.dateToString(this.projectForm.endTime),
                                projectName: this.projectForm.projectName,
                                projectRole: this.projectForm.projectRole,
                                projectDescprition: this.projectForm.projectDescprition,
                            }
                            if (this.projectForm.id !== undefined) {
                                data.id = this.projectForm.id;
                            }
                            let res = await updateProjectExp(data, CommonUtils.getStore("token"));
                            if (res.code === 0) {
                                this.$message.success("修改成功");
                                setTimeout(() => {
                                    this.$router.go(0);
                                }, 900)
                            }
                        }
                    } else {
                        console.log("err!")
                    }
                })
            },
            async deleteProject(id){
               let res = await deleteProjectExp(null,CommonUtils.getStore("token"),id);
                if(res.code===0){
                    this.$message.success("删除成功");
                    this.$router.go(0);
                }else{
                    this.$message.error(res.message);
                }
            },
            showDegrees(id, type) {
                this.education = false;
                if (type === 0) {
                    let list = CommonUtils.getStore("user").degrees;
                    list.forEach(item => {
                        if (item.id === id) {
                            this.educationForm.college = item.college;
                            this.educationForm.major = item.major;
                            this.educationForm.degree = item.degree;
                            this.educationForm.startTime = CommonUtils.strToDate(item.startTime);
                            this.educationForm.endTime = CommonUtils.strToDate(item.endTime);
                            this.educationForm.id = id;
                        }
                    })
                } else {
                    this.educationForm = {};                                //id为空为新建项目
                }
            },
            async delDegree(id){
                let res = await deleteDegree(null,CommonUtils.getStore("token"),id);
                if(res.code===0){
                    this.$message.success("删除成功");
                    this.$router.go(0);
                }else{
                    this.$message.error(res.message);
                }
            },
            updateEducation(formName){
                this.$refs[formName].validate(async valid=>{
                    if(valid){
                        if (this.educationForm.startTime.getTime() > this.educationForm.endTime.getTime()) {
                            this.$message.error("结束时间不能小于开始时间");
                        }else{
                            let data = {
                                startTime: CommonUtils.dateToString(this.educationForm.startTime),
                                endTime: CommonUtils.dateToString(this.educationForm.endTime),
                                college: this.educationForm.college,
                                major: this.educationForm.major,
                                degree: this.educationForm.degree,
                            }
                            if (this.educationForm.id !== undefined && this.educationForm.id!==null) {
                                data.id = this.educationForm.id;

                            }
                            let res =await updateDegree(data,CommonUtils.getStore("token"));
                            if(res.code===0){
                                this.$message.success("修改成功");
                                this.$router.go(0);
                            }else{
                                console.log(res.messge);
                            }
                        }
                    }else{
                        console.log("err!")
                    }
                })
            }
        },
        created() {

        },
        async mounted() {
            this.get();
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/jobhunter/resume.css";
</style>