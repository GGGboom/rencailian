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
                talentUser:{},
                positions:[],
                positionsNames:[],
                value:0,
            }
        },
        methods:{
            init(){
                this.talentUser=JSON.parse(sessionStorage.getItem('talentUser'));
                this.talentUser.huntingStatusTxt = CommonUtils.getKeyName('HUNTING_STATUS', this.talentUser.huntingStatus);
                console.log(this.talentUser)
                this.minePublishPost(this.talentUser.expectPost);
            },
            minePublishPost(expectPost){
                if(expectPost!=''){
                    getExpectPost({positionName:expectPost,authorization:CommonUtils.getStore("token")})
                        .then(res=>{
                            if(res.code===0){
                                this.positions = res.position;
                                this.positions.forEach(function(item){
                                    let obj = {'label':item.name,'value':item.positionId};
                                    this.positionsNames.push(obj);
                                });
                            }
                            console.log(res);
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                }
            },
            chat(){
                if(this.value!=0){
                    let receivedId = this.talentUser.userId;
                    for(let i=0;i<this.positions.length;i++){
                        if(this.positions[i].positionId==this.value){
                            sessionStorage.setItem('chatPosition',JSON.stringify(this.positions[i]));
                        }
                    }
                    this.$router.push({path:"/msg",query:{receivedId:receivedId,name:this.talentUser.name,from:"td"}});
                }else{
                    if(this.talentUser.expectPost==null || typeof(this.talentUser.expectPost)=='undefined'){
                        this.$message.error('该求职者没有期望岗位');
                    }else if(this.positionsNames.length==0){
                        this.$message.error('您未发布职位，或发布的职位中没有与该求职者匹配的');
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