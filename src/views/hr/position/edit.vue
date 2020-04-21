<template>
    <div>
        <div class="border-bottom border-gray-dark py-3 display-flex">
            <el-button type="text" icon="el-icon-back" size="medium" @click="goback">返回</el-button>
            <el-divider direction="vertical"></el-divider>
            <span class="head">{{head}}</span>
        </div>
        <el-form :rules="rules" ref="form" :model="form">
            <div class="border-bottom border-gray-dark py form-item space-btw item-container">
                <div>
                <span class="item-label">
                    职位名称
                </span>
                </div>
                <div class="pad-left">
                    <el-form-item prop="name">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option v-for="item in positionType" :key="item.id"
                                       :label="item.txt" :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </div>
            <div class="border-bottom border-gray-dark py form-item space-btw item-container">
                <div>
                <span class="item-label">
                    薪资范围
                </span>
                </div>
                <div class="pad-left">
                    <el-form-item prop="salaryRange">
                        <el-select v-model="form.salaryRange" placeholder="请选择">
                            <el-option v-for="item in salaryRange" :key="item.id" :label="item.txt"
                                       :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </div>
            <div class="border-bottom border-gray-dark py form-item space-btw item-container">
                <div>
                <span class="item-label">
                    详细地址
                </span>
                </div>
                <div class="pad-left">
                    <el-form-item prop="address">
                        <el-input
                                placeholder="请输入地址"
                                v-model="form.address"
                                size="medium"
                                maxlength="100px">
                        </el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="border-bottom border-gray-dark py form-item space-btw item-container">
                <div>
                <span class="item-label">
                    经验要求
                </span>
                </div>
                <div class="pad-left">
                    <el-form-item prop="serviceLength">
                        <el-select v-model="form.serviceLength" placeholder="请选择">
                            <el-option v-for="item in workExperiences" :key="item.id"
                                       :label="item.txt" :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </div>
            <div class="border-bottom border-gray-dark py form-item space-btw item-container">
                <div>
                <span class="item-label">
                    学历要求
                </span>
                </div>
                <div class="pad-left">
                    <el-form-item prop="education">
                        <el-select v-model="form.education" placeholder="请选择">
                            <el-option v-for="item in educationList" :key="item.id"
                                       :label="item.txt" :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </div>
            <div class="border-bottom border-gray-dark py form-item space-btw item-container">
                <div>
                <span class="item-label">
                    职位描述
                </span>
                </div>
                <div class="textarea pad-left flex-row-2">
                    <el-form-item prop="description">
                        <el-input type="textarea" v-model="form.description" placeholder="请输入职位描述"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="border-bottom border-gray-dark py form-item space-btw item-container">
                <div>
                <span class="item-label">
                    职位要求
                </span>
                </div>
                <div class="textarea pad-left flex-row-2">
                    <el-form-item prop="positionRequire">
                        <el-input type="textarea" v-model="form.positionRequire" placeholder="请输入职位要求（可选）"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="form-btn">
                <el-button type="primary" @click="save('form')">{{btnName}}</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    import {CommonUtils} from "../../../utils/commonUtil";
    import {getPosition,editPosition} from "../../../api/job";

    export default {
        name: "edit",
        data() {
            return {
                form: {
                    name: "",
                    type: undefined,
                    salaryRange: "",
                    address: "",
                    serviceLength: "",
                    education: "",
                    description: "",
                    positionRequire: "",
                    longitude: 128,
                    latitude: 47,
                    province: "黑龙江",
                    city: "黑河",
                    area: "爱辉区",
                },
                rules:{
                    name: [
                        {required: true, message: '请输入名称', trigger: 'blur'},
                    ],
                    salaryRange: [
                        {required: true, message: '请选择薪资范围', trigger: 'blur'}
                    ],
                    address: [
                        {required: true, message: '请输入详细地址', trigger: 'blur'}
                    ],
                    serviceLength: [
                        {required: true, message: '请选择详细经验要求', trigger: 'blur'}
                    ],
                    education: [
                        {required: true, message: '请选择学历要求', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请输入职位描述', trigger: 'blur'}
                    ]
                },
                head: "",
                // SERVICE_LENGTH
                salaryRange: CommonUtils.getEnumNameList('SALARY_RANGE'),
                positionType: CommonUtils.getEnumNameList('POSITION_TYPE'),
                educationList: CommonUtils.getEnumNameList("EDUCATION", true),
                serviceLengthList: CommonUtils.getEnumNameList("SERVICE_LENGTH", true),
                workExperiences: CommonUtils.getEnumNameList("SERVICE_LENGTH"),
                positionId:0,
                result:{},
                btnName:"发布"
            }
        },
        methods: {
            goback() {
                this.$router.push("/position/all");
            },
            get(){
                let user = CommonUtils.getStore("user");
                getPosition({authorization:CommonUtils.getStore("token")},user.companyId)
                    .then(res=>{
                        console.log(res);
                        if(res.code===0){
                            this.result = res.company;
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            save(formName){
                this.$refs[formName].validate(valid=>{
                    if(valid){
                        let data = JSON.parse(sessionStorage.getItem('edit_position'));
                        let publish = this.form;
                        if(this.$route.params.type === 0){          //如果是编辑，则要加上companyId和positionID
                            publish.companyId=data.companyId;
                            publish.positionId= data.positionId;
                        }
                        publish.name = CommonUtils.getKeyName("POSITION_TYPE",publish.name);
                        editPosition(publish,CommonUtils.getStore("token"))
                            .then(res=>{
                                if(res.code===0){
                                    setTimeout(()=>{
                                        this.$router.push("/position/all");
                                    },900)
                                }
                                console.log(res);
                            })
                            .catch(err=>{
                                console.log(err);
                            })
                    }else{
                        console.log("");
                    }
                })
            }
        },
        created() {
            this.get();
            if (this.$route.params.type === 0) {
                this.head = "编辑职位";
                this.btnName = "保存";
                let data = JSON.parse(sessionStorage.getItem('edit_position'));
                this.form.name = CommonUtils.getKeyValue('POSITION_TYPE',(data.name));
                this.form.serviceLength = CommonUtils.getKeyValue('SERVICE_LENGTH',(data.serviceLength));
                this.form.education = CommonUtils.getKeyValue('EDUCATION',(data.education));
                this.form.salaryRange = CommonUtils.getKeyValue('SALARY_RANGE',(data.salaryRange));
                this.form.description = data.description;
                this.form.positionRequire = data.positionRequire;
                this.form.name = data.name;
                this.form.address = data.address;
            } else {
                this.head = "发布新职位";
            }
            this.positionId = this.$route.params.positionId;
        },
        mounted() {

        }
    }
</script>

<style scoped>
    @import "../../../assets/css/hr/position/edit.css";
</style>