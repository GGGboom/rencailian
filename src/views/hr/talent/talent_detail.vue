<template>
    <div>
        <div class="talent-detail-box bgd">
            <div class="inner">
                <!--其他信息-->
                <div class="sider">
                    <div class="sider-company">
                        <div class="sider-item">
                            <el-button type="primary" @click="chat">立即沟通</el-button>
                        </div>
                    </div>
                </div>
                <!--其他信息-->

                <!--人才消息-->
                <div class="talent-detail">
                    <div class="detail-op">
                        <div class="detail-figure">
                            <img src="../../../assets/img/msg_avatar.png" alt>
                        </div>
                        <div class="name">
                            <span class="gray online-status">
                                信用<em class="vdot">·</em>{{talentUser.reputationScore}}
                            </span>
                        </div>
                        <div class="name">
                            <span class="gray online-status">
                                {{talentUser.name}}<em class="vdot">·</em>刚刚在线
                            </span>
                        </div>

                    </div>
                    <div class="detail-content">
                        <div class="job-sec">
                            <h3>基本信息</h3>
                            <div class="text">
                                1、职位描述
                                <br>
                                {{talentUser.salaryRangeTxt}}|{{talentUser.serviceLengthTxt}}|{{talentUser.educationTxt}}
                                <br>
                                2、职业要求
                                <br>
                                11111
                            </div>
                        </div>
                        <div class="job-sec">
                            <h3>求职状态</h3>
                            <div class="text">
                                {{talentUser.huntingStatusTxt}}
                            </div>
                        </div>
                        <div class="job-sec">
                            <h3>期望职位</h3>
                            <div class="text">
                                {{talentUser.expectPost===''?'无数据':talentUser.expectPost}}
                            </div>
                        </div>
                        <div class="job-sec">
                            <h3>自我评价</h3>
                            <div class="job-location">

                            </div>
                            <div class="text">
                                {{talentUser.selfEvaluation===null?"无数据":talentUser.selfEvaluation}}
                            </div>
                        </div>
                        <div class="job-sec">
                            <h3>
                                推荐我的发布职位给该求职者
                            </h3>
                            <div class="text">
                                根据期望岗位匹配
                            </div>
                        </div>
                    </div>
                </div>
                <!--人才消息-->
            </div>
        </div>
    </div>
</template>

<script>
    import {getExpectPost} from "../../../api/talent";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "talent_detail",
        data(){
            return{
                info:{
                    position:{}
                },
                company:{},
                talentUser:{},                          //应聘者信息
                positions:[],                           //招聘者的期望职位列表
                positionsNames:[],                      //招聘者的职位名字列表
                value:0,
            }
        },
        methods:{
            init(){//初始化数据
                this.talentUser=JSON.parse(sessionStorage.getItem('talentUser'));
                this.talentUser.huntingStatusTxt = CommonUtils.getKeyName('HUNTING_STATUS', this.talentUser.huntingStatus);
                this.minePublishPost(this.talentUser.expectPost);
            },
            minePublishPost(expectPost){//获取应聘者的期望职位，expectPost为应聘者的期望职位名称
                if(expectPost!==''){//应聘者的期望职位不为空，则查询招聘者发布的职位是否有符合应聘者的
                    getExpectPost({positionName:expectPost,authorization:CommonUtils.getStore("token")})
                        .then(res=>{
                            if(res.code===0){
                                this.positions = res.position;
                                this.positions.forEach(function(item){
                                    let obj = {'label':item.name,'value':item.positionId};
                                    this.positionsNames.push(obj);
                                });
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
            },
            chat(){//聊天handle
                if(this.value!==0){//招聘者发布的职位与应聘者的期望职位相匹配则转到聊天界面
                    let receiveUser = {};
                    for(let i=0;i<this.positions.length;i++){
                        if(this.positions[i].positionId===this.value){
                            sessionStorage.setItem('chatPosition',JSON.stringify(this.positions[i]));
                        }
                    }
                    //转到聊天界面前需要将应聘者的头像，名字和userId存入localstorage当中
                    receiveUser.headerImage = this.talentUser.headerImagePath;
                    receiveUser.name = this.talentUser.name;
                    receiveUser.receiveUserId = this.talentUser.userId;
                    CommonUtils.setStore("receiveUser",receiveUser);
                    this.$router.push("/hr/msg");
                }else{//招聘者发布的职位与应聘者的期望职位不匹配
                    if(this.talentUser.expectPost==null || typeof(this.talentUser.expectPost)=='undefined'){
                        this.$message.error('该求职者没有期望岗位');
                    }else if(this.positionsNames.length===0){
                        this.$message.error('您未发布职位或发布的职位中没有与该求职者匹配的');
                    }else{
                        this.$message.error('请推荐您发布的岗位给求职者');
                    }
                }
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/hr/talent/talent_detail.css";
</style>