<template>
    <div>
        <el-steps :active="active" simple>
            <el-step title="上传身份证" ></el-step>
            <el-step title="上传营业执照" ></el-step>
        </el-steps>
        <!--0为上传身份证-->
        <div v-if="this.active===0">
            <div class="info-list">
                <div class="info-item">
                    <div class="item-left">
                        <span class="emphase">第一步：点击相机上传身份证正面图片（只用于识别,不保存图片）</span>
                    </div>
                </div>
                <div class="info-item">
                    <div class="item-left">
                        <span>真实姓名</span>
                    </div>
                    <div class="item-right">
                        <span></span>
                    </div>
                </div>
                <div class="info-item">
                    <div class="item-left">
                        <span>身份证号</span>
                    </div>
                    <div class="item-right">
                        <span></span>
                    </div>
                </div>
                <div class="info-item">
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
                </div>
                <div class="info-item">
                    <div class="item-left">
                        <span class="emphase">第二步：点击相机上传自拍照，将与身份证照片比对</span>
                    </div>
                </div>
                <div class="info-item">
                    <div class="item-left">
                        <span>对比结果</span>
                    </div>
                    <div class="item-right">
                        <span></span>
                    </div>
                </div>
                <div class="info-item">
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
                </div>
            </div>
        </div>
        <!--0为上传身份证-->

        <!--1为上传营业执照-->
        <div v-if="this.active===1">
            <div class="info-list">
                <div class="info-item">
                    <div class="item-left" style="flex: 1;display: flex;align-items: center;">
                        <span>公司全称</span>
                    </div>
                    <div class="item-right" style="flex: 1;">
                        <span>
                            <el-input v-model="companyName" placeholder="请输入与营业执照匹配的公司全称"></el-input>
                        </span>
                    </div>
                </div>
                <div class="info-item">
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
                        <div class="el-upload__text">上传营业执照<em>原件</em></div>
                    </el-upload>
                </div>
            </div>
        </div>
        <!--1为上传营业执照-->
        <el-button style="margin-top: 12px;float: right" @click="next">下一步</el-button>
    </div>
</template>

<script>
    export default {
        name: "verified_name_id",
        data(){
            return{
                active: 0,              //0为上传身份证，1为上传营业执照，2等待结果
                resumeCount:0,
                fileList:[],
                companyName:""
            }
        },
        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            },
            fileExceed(){

            },
            fileChange(){

            }
        }
    }
</script>

<style scoped>
    .page-content .el-steps{
        background: #f3f5f8;
    }

</style>