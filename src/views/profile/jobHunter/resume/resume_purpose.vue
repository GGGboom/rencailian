<template>
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
                            <span>求职状态:{{intentionForm.huntingStatusTxt}}</span>
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
</template>

<script>
    import {CommonUtils} from "../../../../utils/commonUtil";
    import {getInfo} from "../../../../api/user";

    export default {
        name: "resume_purpose",
        data(){
            return{
                jobIntention: true,                                                                 //求职意向
                intentionForm: {                   //求职意愿表单
                    huntingStatus: "",
                    expectIndustry: "",
                    salaryRange: "",
                    expectPost: "",
                    selfEvaluation: ""
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
                huntingStatus: CommonUtils.getEnumNameList('HUNTING_STATUS'),                       //求职状态数组
                industryType: CommonUtils.getEnumNameList('INDUSTRY_TYPE'),                         //行业类型数组
                salaryRange: CommonUtils.getEnumNameList('SALARY_RANGE'),                           //薪资范围数组
            }
        },
        methods:{
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
                    this.intentionForm.huntingStatus = this.user.detail.huntingStatus;
                    this.intentionForm.huntingStatusTxt = CommonUtils.getKeyName('HUNTING_STATUS', this.user.detail.huntingStatus);
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
        },
        created() {
            this.get();
        }
    }
</script>

<style scoped>

</style>