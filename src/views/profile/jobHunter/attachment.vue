<template>
    <div class="attach-container">
        <div class="wallet-msg">
            <img src="../../../assets/img/i.png" alt>
            <span class="wallet-warning">最多可上传三个简历附件</span>
        </div>
        <div class="flex-list-header">
            <div class="flex-row">
                <div class="flex-cell first">
                    简历文件
                </div>
                <div class="flex-cell first">
                    更新时间
                </div>
                <div class="flex-cell first">
                    操作
                </div>
            </div>
        </div>
        <div class="flex-list-item">
            <div class="flex-row content">
                <div class="flex-cell first state">
                    <el-button type="text" disabled="">
                        18321260396.doc
                    </el-button>
                </div>
                <div class="flex-cell first state">
                    <el-button type="text" disabled="">
                        2020-01-01
                    </el-button>
                </div>
                <div class="flex-cell first hash">
                    <el-button type="text">
                        删除
                    </el-button>
                </div>
            </div>
        </div>
        <div class="attach-btn">
            <el-button type="primary" @click="attachDia=true">上传简历附件</el-button>
        </div>
        <el-dialog
                title="上传简历附件"
                :visible.sync="attachDia"
                width="400px"
                :before-close="handleClose">
            <App-Attach></App-Attach>
            <span slot="footer" class="dialog-footer">
                <el-button @click="attachDia = false">取 消</el-button>
                <el-button type="primary" @click="attachDia = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Attach from  '../../../components/Attachment';
    export default {
        name: "attachment",
        data(){
            return{
                attachDia:false
            }
        },
        components:{
            'App-Attach':Attach
        }
    }
</script>

<style scoped>
.attach-btn{
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
}
.attach-btn .el-button{

    border-radius: 0;
}
.attach-container .wallet-msg{
    padding-bottom: 5px;
    display: flex;
    align-items: center;
}
.attach-container .wallet-msg img{
    width: 15px;
    height: 15px;
}
.attach-container .wallet-msg .wallet-warning{
    padding-left: 5px;
    font-size: 12px;
    color: #969696;
}
</style>