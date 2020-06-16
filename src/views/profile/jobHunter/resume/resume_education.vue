<template>
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
                                <span class="gray period">{{item.startTime+" "}}至 {{" "+item.endTime}}</span>
                            </div>
                            <h4>
                                <span>{{item.major}}</span>
                                <span class="prev-line">{{item.degree}}</span>
                            </h4>
                        </div>
                        <div class="resume-delete">
                            <el-button type="text" icon="el-icon-delete" @click="deleteHandle(item.id)">删除
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
                                    <el-option v-for="item in educationList" :key="item.value"
                                               :label="item.label" :value="item.value">
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
</template>

<script>
    import {CommonUtils} from "../../../../utils/commonUtil";
    import {getInfo} from "../../../../api/user";
    import {updateDegree,deleteDegree} from "../../../../api/resume";
    export default {
        name: "resume_education",
        data(){
            return{
                education: true,                                                                    //教育经历
                educationForm: {
                    college: "",
                    major: "",
                    degree: "",
                    startTime: {},
                    endTime: {}
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
                degreesList: [],                                                                    //教育经历列表
                educationList: CommonUtils.getEnumObjList('EDUCATION'),                            //教育类型数组
            }
        },
        methods:{
            get() {
                getInfo({authorization: CommonUtils.getStore("token")})
                    .then(async res => {
                        if (res.code === 0) {
                            await CommonUtils.setStore("user", res.user);      //用户信息-存入我的个人中心本地数据
                            this.show(res.user);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            show(user) {
                this.user = user;
                if (user.degrees != null) {
                    this.degreesList = user.degrees;
                }
                if (this.user.workExperiences.length > 0) {
                    this.workExperiencesList = this.user.workExperiences
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
                            }else if(res.code===1){
                                this.$router.push("/login");
                            }else{
                                this.$message.error(res.message);
                            }
                        }
                    }else{
                        console.log("err!")
                    }
                })
            },
            async deleteHandle(id){
                let res = await deleteDegree(null,CommonUtils.getStore("token"),id);
                if(res.code===0){
                    this.$message.success("删除成功");
                    setTimeout(()=>{
                        this.$router.go(0);
                    },900);
                }else{
                    this.$message.error(res.message);
                }
            },
        },
        created() {
            this.get();
        }
    }
</script>

<style scoped>

</style>