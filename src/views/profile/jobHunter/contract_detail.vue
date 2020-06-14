<template>
    <div>
        <div class="d-flex d-flex-sbt">
            <el-button type="text" icon="el-icon-back" @click="goBack">返回</el-button>
            <el-button type="text" v-if="detailContract.contractStatus===5" @click="arbitrationDialog=true">申请仲裁</el-button>
            <el-button type="text" v-if="detailContract.contractStatus>=7">查看仲裁进度</el-button>
        </div>
        <div class="contract-list">
            <div class="contract-item">
                <span v-if="detailContract.contractStatus==0">进度：甲方发起签约(签约成功后，合约不能修改)</span>
                <span v-if="detailContract.contractStatus==1">进度：甲方已签约(签约成功后，合约不能修改)</span>
                <span v-if="detailContract.contractStatus==2">进度：乙方已签约,等待12小时后合同自动生效</span>
                <span v-if="detailContract.contractStatus==3">进度：超过48小时未签署失效</span>
                <span v-if="detailContract.contractStatus==4">进度：乙方拒签</span>
                <span v-if="detailContract.contractStatus==5">合同生效</span>
                <span v-if="detailContract.contractStatus==6">合同正常到期</span>
                <span v-if="detailContract.contractStatus==7">甲方触发违约条款</span>
                <span v-if="detailContract.contractStatus==8">乙方触发违约条款</span>
                <span v-if="detailContract.contractStatus==9">甲方发起仲裁</span>
                <span v-if="detailContract.contractStatus==10">乙方发起仲裁</span>
                <span v-if="detailContract.contractStatus==11">平台已受理仲裁申请</span>
                <span v-if="detailContract.contractStatus==12">甲方仲裁成功</span>
                <span v-if="detailContract.contractStatus==13">甲方仲裁失败</span>
                <span v-if="detailContract.contractStatus==14">乙方仲裁成功</span>
                <span v-if="detailContract.contractStatus==15">乙方仲裁失败</span>
            </div>
            <div class="contract-item">
                <div class="item-left">
                    <span>甲方:阿里云</span>
                </div>
                <div class="item-right">
                    <span>签约日期:{{getContactDate(detailContract.startTime)}}</span>
                </div>
            </div>
            <div class="contract-item">
                <div class="item-left">
                    <span>乙方:张恒华</span>
                </div>
                <div class="item-right">
                    <span>解约日期:{{getContactDate(detailContract.startTime)}}</span>
                </div>
            </div>
            <div class="contract-item">
                <div class="item-left">
                    <span>基本薪资（按月）:</span>
                </div>
                <div class="item-right">
                    <span>{{detailContract.basicSalary}}</span>
                </div>
            </div>
            <div class="contract-item">
                <div class="item-left">
                    <span>绩效薪资（按月）:</span>
                </div>
                <div class="item-right">
                    <span>{{detailContract.performanceSalary}}</span>
                </div>
            </div>
            <div class="contract-item">
                <div class="item-left">
                    <span>其他薪资（按月）:</span>
                </div>
                <div class="item-right">
                    <span>{{detailContract.otherSalary}}</span>
                </div>
            </div>
            <div class="contract-item">
                <div class="item-left">
                    <span>工资总月数:</span>
                </div>
                <div class="item-right">
                    <span>{{detailContract.countSalary}}</span>
                </div>
            </div>
            <div class="contract-item">
                <div class="item-left">
                    <span>年薪:</span>
                </div>
                <div class="item-right">
                    <span>{{detailContract.yearlySalary}}</span>
                </div>
            </div>
            <div class="contract-content">
                <p>合约内容</p>
                <div class="ct-content">
                    <span>{{detailContract.contractDescription}}</span>
                </div>
            </div>
            <div class="contract-btn" v-if="detailContract.contractStatus===1">
                <div class="btn-box">
                    <el-button>拒绝签约</el-button>
                    <el-button type="primary" @click="signDialog = true">完成签约</el-button>
                </div>
            </div>
            <div class="contract-btn" v-if="detailContract.contractStatus>=2 && detailContract.contractStatus<=6 && detailContract.contractStatus!=5">
                <div class="btn-box">
                    <el-button type="primary">立即沟通</el-button>
                </div>
            </div>
            <div class="contract-btn" v-if="detailContract.contractStatus!==6 && detailContract.contractStatus>=5 && detailContract.contractStatus<=15">
                <div class="btn-box">
                    <el-button type="primary">下载合同</el-button>
                </div>
            </div>
        </div>

        <!--签约对话框-->
        <el-dialog
                title="申请仲裁"
                :visible.sync="signDialog"
                width="400px">
            <span>确定签约吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="signDialog = false">取 消</el-button>
                <el-button type="primary" @click="signDialog = false">确 定</el-button>
        </span>
        </el-dialog>
        <!--签约对话框-->

        <!--是否仲裁-->
        <el-dialog
                title="申请仲裁"
                :visible.sync="arbitrationDialog"
                width="600px">

            <div class="arbitration-list">
                <div class="arbitration-content">
                    <p>申请原因</p>
                    <div class="ct-content">
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="description">
                        </el-input>
                    </div>
                </div>
                <div class="arbitration-content">
                    <p>申请赔偿金额</p>
                    <div class="ct-content">
                        <el-input v-model="compensateMoney" placeholder="单位元"></el-input>
                    </div>
                </div>
                <div class="arbitration-content">
                    <p>上传仲裁材料</p>
                    <el-upload
                            action="https://jsonplaceholder.typicode.com/contract/single/"
                            list-type="picture-card"
                            enctype="multipart/form-data"
                            :data="formdata"
                            :limit="5"
                            :auto-upload="false"
                            :file-list="fileList"
                            :on-change="fileChange"
                            :before-upload="beforeUpload"
                            :on-exceed="fileExceed">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <div class="warning-container">
                        <img src="../../../assets/img/i.png" alt>
                        <span class="warning">最多可上传5个材料</span>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="arbitrationDialog = false">取 消</el-button>
                <el-button type="primary" @click="uploadFile">确 定</el-button>
            </span>
        </el-dialog>
        <!--是否仲裁-->
    </div>
</template>

<script>
    import {getContractDetail,applyArbitration} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";
    export default {
        name: "contractDetail_jobhunter",
        data() {
            return {
                contractId: null,
                detailContract: {},
                signDialog:false,
                arbitrationDialog:false,
                description:"",
                compensateMoney:null,
                dialogImageUrl: '',
                dialogVisible: false,
                fileList:[],
                test:"",
                formdata:{}
            }
        },
        methods: {
            fileChange(file){
                this.fileList.push(file);//上传文件变化时将文件对象push进files数组
                console.log(file);
            },
            fileExceed(){
                this.$message.warning("文件不能超过五个");
            },
            uploadFile(){
                let data = new FormData();
                data.append('contractId',this.contractId);
                data.append('compensateMoney',this.compensateMoney);
                data.append('description',this.description);
                console.log(this.fileList);
                this.fileList.forEach(item=>{
                    data.append('image', item.raw);
                    data.append('fileName',item.name);
                    console.log(item.name);
                });
                applyArbitration(data,CommonUtils.getStore("token"))
                    .then((res)=>{
                        console.log(res);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            beforeUpload(file){
                console.log(file);
            },
            goBack() {
                this.$router.push("/profile/contract");
            },
            get() {
                getContractDetail({authorization: CommonUtils.getStore("token")}, this.contractId)
                    .then(res => {
                        if(res.code===0){
                            this.detailContract = res.contract;
                            console.log(this.detailContract);
                        }else if(res.code===1){
                            this.$router.push("/login");
                        }else{
                            this.$message.error(res.message);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            getContactDate(obj) {
                return CommonUtils.getFormatDateTime(obj, 'yyyy-MM-dd HH:mm:ss').substr(0, 10);
            }
        },
        created() {
            this.contractId = this.$route.query.id;
            this.get();
        },
        mounted() {
            if(this.fileList.length>0){
                console.log(this.fileList);
            }
        },
        watch:{

        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/contract.css";
</style>