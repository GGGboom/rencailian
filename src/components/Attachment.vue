<template>
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
        <div class="d-flex d-flex-jte normal-margin-top">
                <el-button @click="closedialog">取 消</el-button>
                <el-button type="primary" @click="uploadAttach">确 定</el-button>
        </div>
    </div>
</template>

<script>
    import {CommonUtils} from "../utils/commonUtil";
    import {uploadResumeAttach} from "../api/user";

    export default {
        name: "Attachment",
        data(){
            return{
                resumeCount:0,
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
            uploadAttach(){
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
                    uploadResumeAttach(data,CommonUtils.getStore("token"))
                        .then((res)=>{
                            if(res.code===0){
                                this.$emit("CloseDialog");
                                this.$message.success("上传成功");
                                this.$router.go(0);
                            }else{
                                this.$message.error(res.msg);
                                this.$emit("CloseDialog");
                            }

                        })
                        .catch(err=>{
                            console.log(err);
                        })
                }
            },
            closedialog(){                  //关闭对话框
                this.$emit("CloseDialog");
            }
        },
        mounted() {
            this.resumeCount = CommonUtils.getStore("resume").length;
        }
    }
</script>

<style scoped>

</style>