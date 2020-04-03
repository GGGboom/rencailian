<template>
<div>
    <div class="border-bottom border-gray-dark py-3 display-flex">
        <el-button type="text" icon="el-icon-back" size="medium" @click="goback">返回</el-button>
        <el-divider direction="vertical"></el-divider>
        <span class="head">{{head}}</span>
    </div>
    <form ref="form" :model="form">
        <div class="border-bottom border-gray-dark py form-item space-btw item-container">
            <div>
                <span class="item-label">
                    职位名称
                </span>
            </div>
            <div class="pad-left">
                <el-input
                        placeholder="职位名称"
                        v-model="form.name"
                        size="medium"
                        maxlength="100px">
                </el-input>
            </div>
        </div>
        <div class="border-bottom border-gray-dark py form-item space-btw item-container">
            <div>
                <span class="item-label">
                    薪资范围
                </span>
            </div>
            <div class="pad-left">
                <el-input
                        placeholder="左端点"
                        v-model="form.salaryStart"
                        size="medium"
                        maxlength="100px">
                </el-input>
                -
                <el-input
                        placeholder="右端点"
                        v-model="form.salaryEtart"
                        size="medium"
                        maxlength="100px">
                </el-input>
            </div>
        </div>
        <div class="border-bottom border-gray-dark py form-item space-btw item-container">
            <div>
                <span class="item-label">
                    地址
                </span>
            </div>
            <div class="pad-left">
                <el-input
                        placeholder="请输入地址"
                        v-model="form.address"
                        size="medium"
                        maxlength="100px">
                </el-input>
            </div>
        </div>
        <div class="border-bottom border-gray-dark py form-item space-btw item-container">
            <div>
                <span class="item-label">
                    学历要求
                </span>
            </div>
            <div class="pad-left">
                <el-input
                        placeholder="学历要求"
                        v-model="form.education"
                        size="medium"
                        maxlength="100px">
                </el-input>
            </div>
        </div>
        <div class="border-bottom border-gray-dark py form-item space-btw item-container">
            <div>
                <span class="item-label">
                    职位描述
                </span>
            </div>
            <div class="textarea pad-left flex-row-2">
                <el-input type="textarea" v-model="form.desc" placeholder="请输入职位描述"></el-input>
            </div>
        </div>
        <div class="border-bottom border-gray-dark py form-item space-btw item-container">
            <div>
                <span class="item-label">
                    职位要求
                </span>
            </div>
            <div class="textarea pad-left flex-row-2">
                <el-input type="textarea" v-model="form.qualifications" placeholder="请输入职位要求（可选）"></el-input>
            </div>
        </div>
        <div class="form-btn">
            <el-button type="primary">发布</el-button>
        </div>
    </form>
</div>
</template>

<script>
    export default {
        name: "edit",
        data(){
            return{
                form:{
                    name:"",
                    salaryStart:"",
                    salaryEnd:"",
                    address:"",
                    education:"",
                    desc:"",
                    qualifications:""
                },
                head:""
            }
        },
        methods:{
            goback(){
                this.$router.push("/position/all")
            }
        },
        created() {
            console.log(this.$route.params);
            this.head = this.$route.params.txt;
        },
        mounted() {
        }
    }
</script>

<style scoped>
@import "../../../assets/css/hr/position/edit.css";
</style>