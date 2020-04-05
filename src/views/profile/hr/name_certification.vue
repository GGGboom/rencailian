<template>
    <div class="name-cet mg-top" v-loading="loading">
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
                    <span>潘双全</span>
                </div>
            </div>
            <div class="name-item">
                <div class="item-left">
                    <span>身份证号</span>
                </div>
                <div class="item-right">
                    <span>5101*****1238</span>
                </div>
            </div>
            <div class="name-item">
                <div class="item-left">
                    <span>公司全称</span>
                </div>
                <div class="item-right">
                    <span>阿里云</span>
                </div>
            </div>
            <div class="contract-btn">
                <div class="btn-box">
                    <el-button type="primary" @click="dialogShow = true">更换公司</el-button>
                </div>
            </div>
        </div>
        <div v-else class="no-verify" >
            <div class="message">
                <img class="mark" src="../../../assets/img/i.png" alt>
                <span class="message-txt">
                    您未通过实名验证,
                    <el-button type="text">点击</el-button>
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
                <el-button type="primary" @click="dialogShow = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "name_certification",
        data() {
            return {
                isCheck: true,
                dialogShow:false,
                loading:true,
                isVerify:false
            }
        },
        methods:{
            handleClose() {
                this.dialogShow = false;
            }
        },
        async created() {
            setTimeout(()=>{
                this.loading = false;
            },900);

        }
    }
</script>

<style scoped>
    .no-verify{
        display: flex;
        justify-content: center;
        min-height: 290px;
        align-items: center;
    }
    .no-verify .message{
        display: flex;
        align-items: center;
    }
    .no-verify .message .message-txt{
        margin-left: 5px;
    }
    .no-verify .message .mark{
        width: 25px;
    }
    .name-cet {
        min-height: 270px;
    }

    .name-cet .name-item {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
    }

    .name-cet .name-item .n-left {
        flex: 1;
    }

    .name-cet .name-item .n-right {

    }

    .i-padding {
        color: #586069 !important;
        padding-left: 5px;
        font-size: 13px;
    }

    .name-cet {

    }

    .name-cet .name-item {
        border-bottom: 1px solid #e1e4e8;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-self: center;
        font-size: 16px;
    }

    .name-cet .contract-content {
        padding: 20px 0;
        display: block;
        font-size: 16px;
        border-bottom: 1px solid #e1e4e8;
    }

    .name-cet .contract-content .ct-content {
        padding: 10px 0;
    }

    .name-cet .contract-btn {
        display: flex;
        justify-content: flex-end;
        padding: 20px 0;
    }

    .contract-btn .btn-box {
        display: flex;
        justify-content: space-between;
    }

    .item-right {
        color: #cfcfcf;
    }
    .mg-top{
        margin-top: 20px;
    }
</style>