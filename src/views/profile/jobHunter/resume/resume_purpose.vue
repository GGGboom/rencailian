<template>
    <div class="resume-purpose">
        <div class="item-primary">
            <p class="title">求职意向</p>
            <div :class="{stretch:!jobIntention}"></div>
            <div v-if="jobIntention" class="purpose-label">
                <ul>
                    <li @click="jobIntention = false">
                        <div class="primary-info">

                            <div class="info-text">
                                <span class="text-type">{{showIntention.expectIndustry}}</span>
                                <span class="text-type prev-line">{{showIntention.salaryRange}}</span>
                                <span class="text-type prev-line">{{showIntention.huntingStatus}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="edit">
                    <el-button type="text" icon="el-icon-edit-outline" @click="jobIntention = false">编辑
                    </el-button>
                </div>
            </div>
            <div v-else class="item-form item-pad">
                <h3 class="title clear-title">编辑求职意向</h3>
                <el-form ref="intentionForm" :rules="intentionRules" :model="intentionForm"
                         class="ui-form normal-margin-top">
                    <div class="form-item">
                        <div class="item-label">
                            期望行业
                        </div>
                        <div class="item-content">
                            <el-form-item prop="expectIndustry">
                                <el-select v-model="intentionForm.expectIndustry" placeholder="请选择"  @change="changeExpPositon">
                                    <el-option v-for="item in expectIndustry" :key="item.value" :label="item.label"
                                           :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="item-label">
                            求职状态
                        </div>
                        <div class="item-content">
                            <el-form-item prop="huntingStatus">
                            <el-select v-model="intentionForm.huntingStatus" placeholder="请选择">
                                <el-option v-for="item in huntingStatus" :key="item.value"
                                           :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="item-label">
                            期望岗位
                        </div>
                        <div class="item-content">
                            <el-form-item prop="expectPost">
                                <el-select v-model="intentionForm.expectPost" placeholder="请选择">
                                    <el-option v-for="item in expectPositionType" :key="item.value"
                                               :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                        </div>
                    </div>
                    <div class="form-item">
                        <div class="item-label">
                            薪资范围
                        </div>
                        <div class="item-content">
                            <el-form-item prop="salaryRange">
                                <el-select v-model="intentionForm.salaryRange" placeholder="请选择">
                                    <el-option v-for="item in salaryRange" :key="item.value" :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                        </div>
                    </div>

                    <div>
                        <div class="item-label">
                            自我评价
                        </div>
                        <div class="item-content">
                            <el-form-item prop="selfEvaluation">
                                <el-input
                                        type="textarea"
                                        :rows="3"
                                        placeholder="请输入内容"
                                        v-model="intentionForm.selfEvaluation">
                                </el-input>
                            </el-form-item>
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
    import {updateWillings} from "../../../../api/resume";

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
                    expectIndustry: [
                        {required: true, message: '请选择求行业类型', trigger: 'blur'}
                    ],
                    huntingStatus: [
                        {required: true, message: '请选择求职状态', trigger: 'blur'}
                    ],
                    expectPost: [
                        {required: true, message: '请选择期望岗位', trigger: 'change'}
                    ],
                    salaryRange: [
                        {required: true, message: '请选择薪资范围', trigger: 'blur'}
                    ],
                    selfEvaluation: [
                        {required: true, message: '请输入自我评价', trigger: 'blur'}
                    ]
                },

                huntingStatus: CommonUtils.getEnumObjList('HUNTING_STATUS'),                       //求职状态数组
                expectIndustry: CommonUtils.getEnumObjList('POSITION_TYPE'),                       //行业类型数组
                expectPositionType:[],                                                             //职位类型数组
                salaryRange: CommonUtils.getEnumObjList('SALARY_RANGE'),                           //薪资范围数组
                showIntention:{                                                                    //为了解决初始化过程中值被覆盖的问题
                    expectIndustry:"",
                    huntingStatus:"",
                    expectPost:"",
                    salaryRange:"",
                },
                user:""
            }
        },
        methods:{
            async init(){//初试化数据
                await getInfo({authorization: CommonUtils.getStore("token")})
                    .then(res => {
                        if (res.code === 0) {
                            this.user = res.user;
                            CommonUtils.setStore("user", res.user);      //用户信息-存入我的个人中心本地数据
                            console.log(res.user);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
                console.log(this.user.detail);
                this.intentionForm.huntingStatus = this.user.detail.huntingStatus;
                this.intentionForm.expectIndustry = this.user.detail.expectIndustry;
                this.intentionForm.selfEvaluation = this.user.detail.selfEvaluation;
                this.intentionForm.expectPost = this.user.detail.expectPost;
                this.intentionForm.salaryRange = this.user.detail.salaryRange;
                this.expectPositionType = CommonUtils.getEnumObjList('POSITION_TYPE_'+this.user.detail.expectIndustry);
                this.showIntention.expectIndustry = CommonUtils.getKeyName('POSITION_TYPE', this.user.detail.expectIndustry);
                this.showIntention.expectPost = CommonUtils.getKeyName('POSITION_TYPE_'+this.user.detail.expectIndustry,this.user.detail.expectPost);
                this.showIntention.huntingStatus = CommonUtils.getKeyName('HUNTING_STATUS', this.user.detail.huntingStatus);
                this.showIntention.salaryRange = CommonUtils.getKeyName('SALARY_RANGE', this.user.detail.salaryRange);
            },
            updateIntention(formName) {//更新求职意向
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.intentionForm.id = this.user.detail.id;
                        updateWillings(this.intentionForm,CommonUtils.getStore("token"))
                            .then(res=>{
                                if(res.code===0){
                                    this.$message.success("更新成功");
                                    setTimeout(()=>{
                                        this.$router.go(0);
                                    },500);
                                }else if (res.code===1){
                                    this.$router.push("/login");
                                } else{
                                    this.$message.error(res.message);
                                }
                            })
                    } else {
                        console.log("err");
                        return false;
                    }
                })
            },
            changeExpPositon(value){//当修改期望行业时需要把期望岗位置为空
                this.expectPositionType = CommonUtils.getEnumObjList('POSITION_TYPE_'+value);
                this.intentionForm.expectPost = "";
            }
        },
        created() {
            this.init();
        }
    }
</script>

<style scoped>

</style>