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
                           <el-input v-model="ruleForm.name"></el-input>
                       </dd>
                   </dl>
                   <dl class="form-group">
                       <dt>
                           <label for="user_sex">性别</label>
                       </dt>
                       <dd>
                           <el-radio-group v-model="ruleForm.sex">
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
                                   v-model="ruleForm.data"
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
                   <dl class="form-group">
                       <dt>
                           <label for="user_status">求职状态</label>
                       </dt>
                       <dd>
                           <el-select v-model="ruleForm.status" placeholder="求职状态">
                               <el-option label="在职-考虑机会" value="1"></el-option>
                               <el-option label="在职-考虑机会" value="2"></el-option>
                               <el-option label="在职-考虑机会" value="3"></el-option>
                               <el-option label="在职-考虑机会" value="4"></el-option>
                           </el-select>
                       </dd>
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
                            <img  class="avatar" :src="imageUrl" >
                            <div class="avatar_mask">
                                <i class="el-icon-edit avatar-uploader-icon" ></i>
                            </div>
                        </el-upload>
                    </div>
                </dd>
            </dl>
        </div>
    </div>

</template>

<script>
    import VDistpicker from 'v-distpicker'
    export default {
        name: "info",
        components:{
            VDistpicker
        },
        data(){
            return{
                ruleForm: {
                    name:""
                },
                rules: {

                },
                imageUrl:require("../../assets/img/msg_avatar.png")
            }
        },
        methods:{
            proviceAddress(data){
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
            }
        },
        mounted() {

        },
        created() {

        }
    }
</script>

<style scoped>
    @import "../../assets/css/profile/info.css";
</style>