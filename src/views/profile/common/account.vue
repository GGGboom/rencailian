<template>
    <div>
        <p>
            账号：18302179970
        </p>
        <div class="passbtn">
            <el-button type="primary" size="small" @click="dialogFormVisible = true">登录密码</el-button>
        </div>
        <span>点击可修改密码</span>
        <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="400px">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" :label-width="formLabelWidth" class="demo-ruleForm">
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div class="warning-container">
                <img src="../../../assets/img/i.png" alt>
                <span class="warning">请输入6-25位字母、数字组合</span>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    import {changePasswd} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "account",
        data(){
            var validatePass = (rule, value, callback) => {
                var password_reg=/(^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$)/;
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if(!password_reg.test(value)){
                    callback(new Error('输入的密码不符合规范'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                var password_reg=/(^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$)/;
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                }else if(!password_reg.test(value)) {
                    callback(new Error('输入的密码不符合规范'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                dialogFormVisible: false,
                formLabelWidth: '80px',
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                }
            };
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var data = {
                            "password":this.password
                        };
                        changePasswd(data,CommonUtils.getStore("token"))
                            .then(res=>{
                                console.log(res);
                                if(res.code===0){
                                    this.dialogFormVisible = false;
                                    this.$message.success("修改成功");
                                    setTimeout(()=>{
                                        this.$router.go(0);
                                    },100);
                                }else{
                                    this.$message.error(res.message);
                                }
                            })
                            .catch(err=>{
                                console.log(err);
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
@import "../../../assets/css/profile/account.css";
</style>