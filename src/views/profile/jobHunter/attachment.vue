<template>
    <div class="attach-container">
        <div class="warning-container">
            <img src="../../../assets/img/i.png" alt>
            <span class="warning">最多可上传三个简历附件</span>
        </div>
        <div class="flex-list-header">
            <div class="flex-row">
                <div class="flex-cell first">
                    简历文件
                </div>
                <div class="flex-cell first">
                    创建时间
                </div>
                <div class="flex-cell first">
                    操作
                </div>
            </div>
        </div>
        <div v-for="item in resumes" :key="item.id" class="flex-list-item">
            <div class="flex-row content">
                <div class="flex-cell first state">
                    <el-button type="text" disabled="">
                        {{item.fileName}}
                    </el-button>
                </div>
                <div class="flex-cell first state">
                    <el-button type="text" disabled="">
                        {{item.createTime}}
                    </el-button>
                </div>
                <div class="flex-cell first hash">
                    <el-button type="text" @click="deleteResume(item.id)">
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
                width="400px">
            <App-Attach @CloseDialog="CloseDialog"></App-Attach>

        </el-dialog>
    </div>
</template>

<script>
    import Attach from  '../../../components/Attachment';
    import {getResumeAtt,deleteResume} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "attachment",
        data(){
            return{
                attachDia:false,
                resumes: []            //附件简历
            }
        },
        components:{
            'App-Attach':Attach
        },
        methods:{
            deleteResume(id){
                this.$confirm('确定删除？', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteResume(null,CommonUtils.getStore("token"),id)
                        .then(res=>{
                            console.log(res);
                            if(res.code===0){
                                this.$message.success("删除成功");
                                setTimeout(()=>{
                                    this.get();                 //更新本地简历数据
                                    this.$router.go(0);
                                },100)
                            }
                        })
                        .catch(err=>{
                            console.log(err);
                            this.$message.warning("删除失败");
                        })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            get(){
                getResumeAtt({authorization:CommonUtils.getStore("token")})
                    .then(res=>{
                        if(res.code===0){
                            res.resumes.forEach(function(item){
                                item.fileName = item.fileName.length>15?item.fileName.substr(0,12):item.fileName;
                                item.createTime = CommonUtils.getFormatDateTime(item.createTime,'yyyy-MM-dd HH:mm:ss');
                            });
                            CommonUtils.setStore("resume",res.resumes);
                            this.resumes = res.resumes;
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })

            },
            CloseDialog(){
                this.attachDia = false;
            }
        },
        mounted() {
            this.get();
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

</style>