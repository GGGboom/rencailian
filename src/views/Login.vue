<template>
    <div class="main">
        <div class="login-card">
            <h1>登录</h1>
            <div class="login-form">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="form-table">
                    <el-form-item prop="account">
                        <el-input class="form-item" v-model="ruleForm.account" autocomplete="off"
                                  placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input class="form-item" type="password" v-model="ruleForm.pass" autocomplete="off"
                                  placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <div class="agree">
                        <label>
                            <input type="checkbox" v-model="ruleForm.checked">
                            <span>记住我</span>
                        </label>
                    </div>
                    <el-form-item>
                        <el-button class="btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>

    </div>


</template>
<script>
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validateAccount = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                ruleForm: {
                    account: '',
                    pass: '',
                    age: '',
                    checked: true
                },
                rules: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    age: [
                        {validator: checkAge, trigger: 'blur'}
                    ],
                    account: [
                        {validator: validateAccount, trigger: 'blur'}
                    ],
                    checked:[
                        {validator: validateAccount, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            rememberMe() {
                if (this.ruleForm.checked) {
                    localStorage.setItem('account', this.ruleForm.account);
                } else {
                    localStorage.removeItem('account');
                }
            }
        }
    }
</script>