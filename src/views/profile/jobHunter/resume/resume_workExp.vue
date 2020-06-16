<template>
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
                                <span class="gray period">{{item.startTime+" "}}至 {{" "+item.endTime}}</span>
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
                        <div class="resume-delete" @click="deleteHandle(item.id)">
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
                                    <el-option v-for="item in industryType" :key="item.value"
                                               :label="item.label" :value="item.value">
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
</template>

<script>
    import {CommonUtils} from "../../../../utils/commonUtil";
    import {getInfo} from "../../../../api/user";
    import {updateWorkExp} from "../../../../api/resume";
    import {deleteWorkExp} from "../../../../api/resume";
    export default {
        name: "resume_education",
        data(){
            return{
                experience: true,                                                                   //工作经历
                experienceForm: {
                    companyName: "",
                    industryType: "",
                    startTime: "",
                    endTime: "",
                    positionName: "",
                    departName: "",
                    workDescription: "",
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
                workExperiencesList: [],                                                            //工作经验列表
                industryType: CommonUtils.getEnumObjList('POSITION_TYPE'),                         //行业类型数组
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
                if (user.workExperiences != null && user.workExperiences !== undefined) {
                    this.workExperiences = user.workExperiences;
                }
                if (this.user.workExperiences.length > 0) {
                    this.workExperiencesList = this.user.workExperiences
                }
            },
            showWorkExper(id, type) {
                this.experience = false;
                if (type === 0) {                   //修改工作经历
                    let workExperiences = CommonUtils.getStore("user").workExperiences;
                    workExperiences.forEach(item => {
                        if (item.id === id) {
                            this.experienceForm.companyName = item.companyName;
                            this.experienceForm.industryType = item.industryType;
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
                }

            },
            updateExperience(formName) {             //新建工作经历
                this.$refs[formName].validate(async valid => {
                    if (valid) {
                        if (this.experienceForm.startTime.getTime() > this.experienceForm.endTime.getTime()) {
                            this.$message.error("结束时间不能小于开始时间");
                        } else {
                            let data = {
                                industryType: this.experienceForm.industryType,
                                startTime: CommonUtils.dateToString(this.experienceForm.startTime),
                                endTime: CommonUtils.dateToString(this.experienceForm.endTime),
                                positionName: this.experienceForm.positionName,
                                departName: this.experienceForm.departName,
                                workDescription: this.experienceForm.workDescription,
                                companyName: this.experienceForm.companyName,
                                position: 0,
                                ishidden: 0                 //是否隐藏简历
                            };
                            if (this.experienceForm.id !== undefined) {
                                data.id = this.experienceForm.id;
                            }
                            console.log(data);
                            let res = await updateWorkExp(JSON.stringify(data), CommonUtils.getStore("token"));
                            if (res.code === 0) {
                                this.$message.success("修改成功");
                                setTimeout(() => {
                                    this.$router.go(0);
                                }, 1000);
                                console.log(res);
                            } else {
                                console.log(res);
                            }
                        }
                    } else {
                        console.log("err!")
                    }
                })
            },
            async deleteHandle(id){
                let res = await deleteWorkExp(null,CommonUtils.getStore("token"),id);
                console.log("run");
                if(res.code===0){
                    this.$message.success("删除成功");
                    setTimeout(()=>{
                        this.$router.go(0);
                    },900);
                }else{
                    this.$message.error(res.message);
                }
            }
        },
        created() {
            this.get();
        }
    }
</script>

<style scoped>

</style>