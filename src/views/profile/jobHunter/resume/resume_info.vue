<template>
    <!--用户信息-->
    <div class="resume-userinfo normal-margin-top">
        <div v-if="baseInfo" class="item-primary">
            <div class="info-flex">
                <div class="info-flex-item">
                    <p class="name">{{baseForm.name}}</p>
                    <div class="label">
                                        <span class="label-item">
                                            <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                            {{baseForm.birthdayTxt}}
                                        </span>
                        <el-divider direction="vertical"></el-divider>
                        <span class="label-item" v-if="baseForm.gender==='1'">
                                            <i  class="fa fa-mars" aria-hidden="true"></i>
                                            男
                                        </span>
                        <span class="label-item" v-else>
                                            <i  class="fa fa-venus" aria-hidden="true"></i>
                                            女
                                        </span>

                        <el-divider direction="vertical"></el-divider>
                        <span class="label-item">
                                            <i class="el-icon-location-outline"></i>{{baseForm.citysTxt}}
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
                        <el-form-item prop="name">
                        <el-input v-model="baseForm.name" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <!--姓名-->


                <!--求职状态-->
                <div class="form-item">
                    <div class="item-label">
                        当前求职状态
                    </div>
                    <div class="item-content">
                        <el-form-item prop="huntingStatus">
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
                        </el-form-item>
                    </div>
                </div>
                <!--求职状态-->

                <!--生日-->
                <div class="form-item">
                    <div class="item-label">
                        生日
                    </div>
                    <div class="item-content">
                        <el-form-item prop="birthday">
                        <el-date-picker
                                v-model="baseForm.birthday"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                        </el-form-item>
                    </div>
                </div>
                <!--所在城市-->
                <div class="form-item">
                    <div class="item-label">
                        所在城市
                    </div>
                    <div class="item-content">
                        <el-form-item prop="citys">
                        <el-select v-model="baseForm.citys" placeholder="请选择">
                            <el-option v-for="item in cities" :key="item.value" :label="item.label"
                                       :value="item.value">

                            </el-option>
                        </el-select>
                        </el-form-item>
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-label">
                        性别
                    </div>
                    <div class="item-content">
                        <el-form-item prop="gender">
                            <el-radio-group v-model="baseForm.gender">
                                <el-radio label="1">男</el-radio>
                                <el-radio label="2">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
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
</template>

<script>
    import {CommonUtils} from "../../../../utils/commonUtil";
    import {saveInfo} from "../../../../api/user";
    export default {
        name: "resume_info",
        data(){
            return{
                baseInfo: true,                                                                     //用户信息
                baseForm: {                                                                         //基本信息表单
                    gender: "",
                    name: "",
                    birthday: "",
                    citys: "",
                    huntingStatus: ""
                },
                baseFormRules: {
                    gender: [
                        {required: true, message: '请选择性别', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '请输入名字', trigger: 'blur'},
                    ],
                    birthday: [
                        {type: 'date', required: true, message: '请选择生日', trigger: 'change'}
                    ],
                    citys: [
                        {required: true, message: '请选择城市', trigger: 'blur'}
                    ],
                    huntingStatus: [
                        {required: true, message: '请选择求职状态', trigger: 'blur'}
                    ]
                },
                cities:CommonUtils.getEnumObjList('WORK_CITY'),                                     //工作城市
                avatar: '',                                                                         //头像url
            }
        },
        methods:{
            init(user) {//初始化数据
                this.user = user;
                if (user.detail !== null) {
                    this.baseForm.name = this.user.name;
                    this.baseForm.birthday = CommonUtils.strToDate(this.user.detail.birthday);
                    this.baseForm.birthdayTxt = CommonUtils.getFormatDateTime(CommonUtils.strToDate(this.user.detail.birthday).getTime(),"yyyy-MM-dd");
                    this.baseForm.huntingStatus = this.user.detail.huntingStatus.toString();
                    this.baseForm.citysTxt = CommonUtils.getKeyName('WORK_CITY', this.user.detail.workCity);
                    this.baseForm.gender = user.detail.gender.toString();
                    this.baseForm.citys = this.user.detail.workCity;
                }
            },
            updateBaseInfo(formName) {//更新基本信息
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let user = CommonUtils.getStore("user");
                        let formdata = new FormData();
                        formdata.append("name", this.baseForm.name);
                        formdata.append("birthday", CommonUtils.dateToString(this.baseForm.birthday));
                        formdata.append("huntingStatus", this.baseForm.huntingStatus);
                        formdata.append("workCity", this.baseForm.citys);
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
                                } else if(res.code===1){
                                    this.$router.push("/login");
                                }else{
                                    this.$message.error(res.message);
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
        },
        created() {
            this.avatar = CommonUtils.staticPathPrefix + CommonUtils.getStore("user").headerImagePath;
            this.init(CommonUtils.getStore("user"));
            console.log(this.cities);
        }
    }
</script>

<style scoped>

</style>