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
                    <el-form-item prop="type">
                        <el-cascader
                                v-model="form.type"
                                :options="positionTypeList"
                                :props="{ expandTrigger: 'hover' }"
                                @change="handleChange"
                                :show-all-levels="false">

                        </el-cascader>
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
                        <el-select v-model="form.salaryRange" placeholder="请选择" >
                            <el-option v-for="item in salaryRangeList" :key="item.value" :label="item.label"
                                       :value="item.value">
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
                            <el-option v-for="item in workExperiences" :key="item.value"
                                       :label="item.label" :value="item.value">
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
                            <el-option v-for="item in educationList" :key="item.value"
                                       :label="item.label" :value="item.value">
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
                <el-button type="primary" @click="save('form')">保存</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    import {CommonUtils} from "../../../utils/commonUtil";
    import {editPosition} from "../../../api/job";

    export default {
        name: "edit",
        data() {
            return {
                head: "",
                salaryRangeList: CommonUtils.getEnumObjList('SALARY_RANGE'),                    //薪资范围数组
                positionTypeList: CommonUtils.getEnumObjList('POSITION_TYPE'),                  //行业类型数组
                educationList: CommonUtils.getEnumObjList("EDUCATION"),                         //教育经验数组
                serviceLengthList: CommonUtils.getEnumObjList("SERVICE_LENGTH"),                //经验数组
                workExperiences: CommonUtils.getEnumObjList("SERVICE_LENGTH"),                  //工作经验数组
                form: {
                    name: "",
                    type: undefined,
                    salaryRange: "",
                    address: "",
                    serviceLength: null,
                    education: null,
                    description: "",
                    positionRequire: "",
                    longitude: 0,
                    latitude: 0,
                    province: "",
                    city: "",
                    area: "",
                },
                rules:{
                    type: [
                        {required: true, message: '请输入类型', trigger: 'blur'},
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
            }
        },
        methods: {
            handleChange(value) {
                console.log(value);
                this.form.type = value[1];
            },
            init(){//初始化数据
                for(let i = 0; i<this.positionTypeList.length; i++){
                    this.positionTypeList[i].children = [];
                    this.positionTypeList[i].children = CommonUtils.getSubEnumObjList(this.positionTypeList[i].data_code,this.positionTypeList[i].name);
                }
                /*
                很神奇，query.type传过来时是整数类型，刷新之后则变成了string类型，所以这里要强制转化一下
                 */
                if (Number(this.$route.query.type) === 0) {//将之前存入sessionStorage的值赋给data
                    let data = JSON.parse(sessionStorage.getItem('edit_position'));
                    this.form = data;
                    this.head = "编辑职位";
                } else {
                    this.head = "发布新职位";
                }
            },
            goback() {//返回所有职位页面
                this.$router.push("/position/all");
            },
            save(formName){//检验并提交表单
                console.log(this.form);
                this.$refs[formName].validate(async valid=>{
                    if(valid){
                        let publish = this.form;
                        if(Number(this.$route.query.type) === 0){//如果是编辑，则要加上companyId和positionID
                            let data = JSON.parse(sessionStorage.getItem('edit_position'));
                            publish.companyId = data.companyId;
                            publish.positionId = data.positionId;
                            publish.name = CommonUtils.getKeyNameByKeyValue(this.form.type);
                            delete publish.updateTime;
                            delete publish.createTime;
                        }
                        await editPosition(publish,CommonUtils.getStore("token"))
                            .then(res=>{
                                if(res.code===0){
                                    this.$message.success("保存成功");
                                    setTimeout(()=>{
                                        this.$router.push("/position/all");
                                    },500);
                                }else if(res.code===1){
                                    this.$router.push("/login");
                                }else{
                                    this.$message.error(res.message);
                                }
                            })
                            .catch(err=>{
                                console.log(err);
                            })
                    }
                })
            },
        },
        created() {
            this.init();
        },
        watch:{
            form:{
                handler(value){
                    console.log(value);
                },
                deep:true
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/hr/position/edit.css";
</style>