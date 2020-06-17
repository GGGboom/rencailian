<template>
    <div>
        <div class="name-cet mg-top" v-loading="loading" v-if="!isVerify">
            <div v-if="isVerify">
                <div class="cet-item" v-if="isCheck">
                    <i class="el-icon-success"></i>
                    <span class="i-padding">您已通过实名认证</span>
                </div>
                <div class="cet-item" v-else>
                    <i class="el-icon-error"></i>
                    <span class="i-padding">您未通过实名认证</span>
                </div>
                <div class="name-item">
                    <div class="item-left">
                        <span>姓名</span>
                    </div>
                    <div class="item-right">
                        <span>{{user.name}}</span>
                    </div>
                </div>
                <div class="name-item">
                    <div class="item-left">
                        <span>身份证号</span>
                    </div>
                    <div class="item-right">
                        <span>{{user.identityCardNo}}</span>
                    </div>
                </div>
                <div class="name-item">
                    <div class="item-left">
                        <span>公司全称</span>
                    </div>
                    <div class="item-right">
                        <span>{{company.companyName}}</span>
                    </div>
                </div>
                <div class="contract-btn">
                    <div class="btn-box">
                        <el-button type="primary" @click="dialogShow = true">更换公司</el-button>
                    </div>
                </div>
            </div>
            <div v-else class="no-verify empty-box" >
                <div class="message">
                    <img class="mark" src="../../../../assets/img/i.png" alt>
                    <span class="message-txt">
                    您未通过实名验证,
                    <el-button type="text" @click="goToVerify">点击</el-button>
                    进行实名验证
                </span>
                </div>
            </div>
            <el-dialog
                    title="更换公司"
                    :visible.sync="dialogShow"
                    width="30%"
                    :before-close="handleClose">
                <span>更换公司会清空您已认证通过的企业信息，是否确认更换？</span>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogShow = false">取 消</el-button>
                <el-button type="primary" @click="goToVerify">确 定</el-button>
            </span>
            </el-dialog>
        </div>
        <div v-else>
            <el-steps :active="activeIndex" finish-status="success" simple>
                <el-step title="第一步" ></el-step>
                <el-step title="第二步" ></el-step>
                <el-step title="步骤 3" ></el-step>
            </el-steps>
            <div class="" style="margin-top: 20px">
                <id-verify></id-verify>
            </div>

        </div>
    </div>
</template>

<script>
    import {getHrInfo} from "../../../../api/user";
    import {CommonUtils} from "../../../../utils/commonUtil";

    import idVerify from './id_verify';

    export default {
        name: "name_certification",
        components:{
            idVerify
        },
        data() {
            return {
                isCheck: true,
                dialogShow:false,
                loading:true,
                isVerify:false,
                user:{},
                company:{},
                activeIndex:1,
            }
        },
        methods:{
            handleClose() {
                this.dialogShow = false;
            },
            get(){
                getHrInfo({authorization:CommonUtils.getStore("token")})
                    .then(res=>{
                        if(res.code===0){
                            CommonUtils.setStore("my_company",res.company);
                            this.company = res.company;
                            this.user = res.user;
                            if(res.user.verifiedStatus<2){
                                this.isVerify = false;
                            }else if(res.user.verifiedStatus===3){
                                this.isVerify = true;
                            }
                        }
                        console.log(res);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            personalVerified () {
                if(this.user.verifiedStatus==null){
                    CommonUtils.jumpParentPageDelayed('verified_personal_id.html',0);
                }
                switch(this.user.verifiedStatus){
                    case 0://未认证
                        break;
                    case 1://身份认证通过,营业执照未认证
                        break;
                    case 2://营业执照认证中
                        break;
                    case 3://认证通过
                        break;
                    case 4://营业执照认证失败
                        break;
                    default:
                }
            },
            goToVerify(){
                this.isVerify = true;
            }
        },
        async created() {
            setTimeout(()=>{
                this.loading = false;
            },500);
            this.get();
        }
    }
</script>

<style scoped>
    @import "../../../../assets/css/profile/name_certification.css";
</style>