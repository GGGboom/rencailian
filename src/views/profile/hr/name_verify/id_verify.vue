<template>
    <div class="id-verify">
        <el-form :model="idForm" ref="idForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="真实姓名" prop="name">
                <el-input v-model="idForm.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="identityCardNo">
                <el-input v-model="idForm.identityCardNo"></el-input>
            </el-form-item>
            <el-form-item label="身份证图片" prop="name">
                <div>
                    <el-upload
                            class="upload-demo"
                            drag
                            enctype="multipart/form-data"
                            :multiple="false"
                            :limit="1"
                            :file-list="fileList"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :auto-upload="false"
                            :on-exceed="fileExceed"
                            :on-change="fileChange">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                    <div class="d-flex normal-margin-top">
                        <el-button type="primary">确 定</el-button>
                    </div>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "id_verify",
        data(){
            return{
                idForm:{
                    name:"",
                    identityCardNo:"",
                },
                fileList:[]
            }
        },
        methods:{
            fileChange(file){
                this.fileList.push(file);//上传文件变化时将文件对象push进files数组
                console.log(file);
            },
            fileExceed(){
                this.$message.warning("一次只能上传一个文件");
            },
            upload(){
                let data = new FormData();
                if(this.fileList.length===0){
                    this.$message.error("未选择文件！");
                } else if((3-this.resumeCount)<=0){
                    this.$message.error("最多只能上传三个简历附件！");
                } else{
                    this.fileList.forEach(item=>{
                        data.append('file', item.raw);
                        data.append('fileName',item.name);
                        console.log(item.name);
                    });
                }
            },
        },
        created() {

        }
    }
</script>

<style scoped>
    @import "../../../../assets/css/profile/hr/id_verify.css";
</style>