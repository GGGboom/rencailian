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
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
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
                            <VDistpicker @selected="proviceAddress" province="广东省" city="广州市" area="海珠区"></VDistpicker>
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
    import {strToDate} from '../../../utils/dateUtil';
    import VDistpicker from 'v-distpicker';
    import {getStore,setStore} from "../../../utils/localStorageUtil";

    export default {
        name: "info",
        components: {
            VDistpicker
        },
        data() {
            return {
                statusList:[
                    {
                        txt:"在职-暂不考虑",
                        id:1
                    },{
                        txt:"在职-考虑机会",
                        id:2
                    },{
                        txt:"在职-月内到岗",
                        id:3
                    },{
                        txt:"离职-随时到岗",
                        id:4
                    },
                ],
                user: null,
                ruleForm: {
                    name: "",
                    gender: "男",
                    birthday: null,
                    workCity: "",
                    huntingStatus: null
                },
                imageUrl: require("../../../assets/img/msg_avatar.png")
            }
        },
        methods: {
            selectGet(vId){
                let obj = this.statusList.find((item)=>{
                    return item.id === vId;
                });
                this.ruleForm.huntingStatus = obj.id;
                console.log(`${this.ruleForm.huntingStatus}+${obj.id}`)
            },
            //获取求职状态
            getStatus(n) {
                switch (n) {
                    case 1: {
                        return "在职-暂不考虑";
                    }
                    case 2: {
                        return "在职-考虑机会";
                    }
                    case 3: {
                        return "在职-月内到岗";
                    }
                    case 4: {
                        return "离职-随时到岗";
                    }
                    default: {
                        return null;
                    }
                }
            },
            proviceAddress(data) {
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
            //保存修改
            async saveInfomation() {
                let formdata = new FormData();
                this.user.birthday = '1997-01-01';
                formdata.append("name",this.ruleForm.name);
                formdata.append("birthday",'1997-01-01');
                formdata.append("huntingStatus",this.ruleForm.huntingStatus);
                this.user.huntingStatus = this.ruleForm.huntingStatus;
                formdata.append("workCity",this.ruleForm.workCity);
                formdata.append("gender",this.ruleForm.gender=="男"?1:2);
                this.$post(`/jobhunter/userCenter?authorization=${JSON.parse(localStorage.getItem("user")).token}`, formdata)
                    .then(res => {
                        if (res.code === 0) {
                            this.$message.success("修改成功");
                            //修改成功则修改localstorage
                            setStore("user",this.user);
                            this.$router.go(0);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        created() {
            this.user = getStore("user");
            this.ruleForm.name = this.user.name;
            this.ruleForm.birthday = new Date(strToDate(this.user.headerImagePath));
            this.ruleForm.huntingStatus = this.getStatus(this.user.huntingStatus);
            this.ruleForm.workCity = 1;
            this.ruleForm.userId = this.user.userId;
        },
        mounted() {

        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/info.css";
</style>