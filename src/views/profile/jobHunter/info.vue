<template>
    <div class="clearfix gutter d-flex flex-shrink-0">
        <div class="col-8">
            <form ref="ruleForm" :model="ruleForm">
                <div>
                    <dl class="form-group">
                        <dt>
                            <label for="user_name">姓名</label>
                        </dt>
                        <dd>
                            <el-input v-model="ruleForm.name">
                            </el-input>
                        </dd>
                    </dl>
                    <dl class="form-group">
                        <dt>
                            <label for="user_sex">性别</label>
                        </dt>
                        <dd>
                            <el-radio-group v-model="ruleForm.gender">
                                <el-radio label="1">男</el-radio>
                                <el-radio label="2">女</el-radio>
                            </el-radio-group>
                        </dd>
                    </dl>
                    <dl class="form-group">
                        <dt>
                            <label for="user_name">生日</label>
                        </dt>
                        <dd>
                            <el-date-picker
                                    v-model="ruleForm.birthday"
                                    type="date"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </dd>
                    </dl>
                    <dl class="form-group">
                        <dt>
                            <label for="user_city">所在城市</label>
                        </dt>
                        <dd>
                            <VDistpicker @selected="proviceAddress" :placeholders="placeholders"></VDistpicker>
                        </dd>
                    </dl>
                    <dl class="form-group border-bottom">
                        <dt>
                            <label for="user_status">求职状态</label>
                        </dt>
                        <dd>
                            <el-select v-model="ruleForm.huntingStatus" @change="selectGet" placeholder="求职状态">
                                <el-option v-for="item in statusList" :key="item.id" :label="item.txt" :value="item.id"></el-option>
                            </el-select>
                        </dd>
                    </dl>
                    <dl class="form-group">
                        <dt>
                            <el-button type="primary" @click="saveInfomation">保存</el-button>
                        </dt>
                    </dl>
                </div>
            </form>
        </div>
        <div class="col-4 d-inline-block">
            <dl>
                <dt>
                    <label class="d-block mb-2">头像</label>
                </dt>
                <dd class="avatar-upload-container clearfix position-relative">
                    <div class="avatar-upload">
                        <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                            <img class="avatar" :src="imageUrl">
                            <div class="avatar_mask">
                                <i class="el-icon-edit avatar-uploader-icon"></i>
                            </div>
                        </el-upload>
                    </div>
                </dd>
            </dl>
        </div>
    </div>

</template>

<script>

    import VDistpicker from 'v-distpicker';
    import {getInfo,saveInfo} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";
    export default {
        name: "info",
        components: {
            VDistpicker
        },
        methods: {
            selectGet(vId){
                let obj = this.statusList.find((item)=>{
                    return item.id === vId;
                });
                this.ruleForm.huntingStatus = obj.id;
                console.log(`${this.ruleForm.huntingStatus}+${obj.id}`)
            },
            proviceAddress(data) {//城市选择器
                console.log(data)
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            async saveInfomation() {        //保存修改
                let user = CommonUtils.getStore("user");
                let formdata = new FormData();
                formdata.append("name",this.ruleForm.name);
                formdata.append("birthday",CommonUtils.dateToString(this.ruleForm.birthday));
                formdata.append("huntingStatus",this.ruleForm.huntingStatus);
                formdata.append("workCity",1);
                formdata.append("gender",this.ruleForm.gender);
                saveInfo(formdata,JSON.parse(localStorage.getItem("token")))
                    .then(res => {
                        if (res.code === 0) {
                            user.gender = this.ruleForm.gender;
                            user.huntingStatus = this.ruleForm.huntingStatus;
                            user.name = this.ruleForm.name;
                            user.birthday = CommonUtils.dateToString(this.ruleForm.birthday);
                            this.$message.success("修改成功");
                            CommonUtils.setStore("user",user);          //修改成功则修改localstorage
                            setTimeout(()=>{
                                this.$router.go(0);
                            },1000);
                        }else if(res.code===1){
                            this.$router.push("/login");
                        }else{
                            this.$message.error(res.message);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        created() {
            //获取基本信息
            getInfo({authorization:CommonUtils.getStore("token")}).then(res=>{
                if(res.code===0){
                    this.ruleForm.name = res.user.name;
                    this.ruleForm.gender = res.user.detail.gender.toString();
                    this.ruleForm.birthday = CommonUtils.strToDate(res.user.detail.birthday);
                    this.ruleForm.workCity = res.user.detail.workCity;
                    this.ruleForm.huntingStatus = res.user.detail.huntingStatus;
                }else if(res.code===1){
                    this.$router.push("/login");
                }else{
                    this.$message.error(res.message);
                }
            }).catch(err=>{
                console.log(err);
            });

            let user = CommonUtils.getStore("user");                      //获取头像
            if(typeof user!== "undefined" || user!==undefined){
                this.imageUrl = CommonUtils.staticPathPrefix + user.headerImagePath;
            }
        },
        mounted() {

        },
        data() {
            return {
                statusList:CommonUtils.getEnumNameList('HUNTING_STATUS'),
                ruleForm: {
                    name: "",
                    gender: 1,
                    birthday: null,
                    workCity: null,
                    huntingStatus: null
                },
                imageUrl: require("../../../assets/img/msg_avatar.png"),
                placeholders: {
                    province: '上海市',
                    city: '上海城区',
                    area: '松江区',
                }
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/jobhunter/info.css";
</style>