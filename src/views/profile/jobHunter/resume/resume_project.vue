<template>
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
                        <div class="resume-delete" @click="deleteHandle(item.id,1)">
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
</template>

<script>
    import {CommonUtils} from "../../../../utils/commonUtil";
    import {getInfo} from "../../../../api/user";
    import {updateProjectExp} from "../../../../api/resume";
    import {deleteWorkExp,deleteProjectExp,deleteDegree} from "../../../../api/resume";
    export default {
        name: "resume_project",
        data(){
            return{
                project: true,                                                                      //项目经历
                projectForm: {                    //项目经历表单
                    projectName: "",
                    projectRole: "",
                    startTime: "",
                    endTime: "",
                    projectUrl: "",
                    projectDescprition: "",
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
                projectList: [],                                                                    //项目经验列表
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
                if (user.degrees != null) {
                    this.degreesList = user.degrees;
                }
                if (user.projects != null && user.projects !== undefined) {
                    this.projectList = user.projects;
                }
                if (this.user.workExperiences.length > 0) {
                    this.workExperiencesList = this.user.workExperiences
                }
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
            async deleteHandle(id,type){
                let res={};
                switch (type) {
                    case 0:{            //删除工作经历
                        res = await deleteWorkExp(null,CommonUtils.getStore("token"),id);
                        break;
                    }
                    case 1:{            //删除项目经历
                        res = await deleteProjectExp(null,CommonUtils.getStore("token"),id);
                        break;
                    }
                    case 2:{            //删除教育经历
                        res = await deleteDegree(null,CommonUtils.getStore("token"),id);
                        break;
                    }
                }
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