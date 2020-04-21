<template>
    <div class="calendar">
        <Calendar
                ref="Calendar"
                :markDate="arr2"
                v-on:isToday="clickToday"
                agoDayHide="1530115221"
                v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate"
        ></Calendar>
        <div class="info">
            <span>今日面试({{interviewCount}})</span>
        </div>

        <!--面试时间线-->
        <div class="block">
            <el-timeline>
                <el-timeline-item v-for="item in interview" :key="item.id" :timestamp="item.interviewTime.toDateString()" placement="top">
                    <el-card>
                        <h4>
                            <span>{{item.position.name}}</span>
                            <span class="interview-address">面试地址：{{item.position.address}}</span>
                        </h4>
                        <div class="d-flex time-item">
                            <div class="time-img">
                                <img src="../../../assets/img/msg_avatar.png" alt>
                            </div>
                            <div class="time-hr ">
                                <span>{{item.hrName}}</span>
                                <span>{{item.position.simpleName}}</span>
                                <span>{{item.hrPosition}}</span>
                            </div>
                        </div>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
        <!--面试时间线-->
    </div>
</template>

<script>
    import {hrInterview} from "../../../api/user";
    import {CommonUtils} from "../../../utils/commonUtil";
    import Calendar from 'vue-calendar-component';
    export default {
        name: "hr_interview",
        data(){
            return{
                arr2: ['2020/4/11'],// arr2: ['2018/6/23'],
                interview:[],
                interviewCount:0
            };
        },
        components: {
            Calendar
        },
        methods:{
            clickDay(data) {
                console.log(data); //选中某天
            },
            changeDate(data) {
                console.log(data); //左右点击切换月份
            },
            clickToday(data) {
                console.log(data); //跳到了本月
            },
            get(){
                hrInterview({authorization:CommonUtils.getStore("token")})
                    .then(res=>{
                        if(res.code===0){
                            this.interview = res.interview;
                        }
                        this.interview.forEach(item=>{
                            item.interviewTime = item.interviewTime==null?new Date():item.interviewTime;

                        })
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }
        },
        created() {
            this.get();
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/profile/interview.css";
    .wh_container >>> .wh_content_all{
        background-color:#ffffff!important;
        border:1px solid #dfe0e6;
        width:600px;
        border-radius: 6px;
    }
    .wh_container{
        margin: 0px!important;
    }

    .wh_container >>> .wh_item_date{
        color:#211d48;

    }
    .wh_container >>> .wh_item_date:hover{
        color:#ffffff;
        background: #136aa7;
        border-radius: 50%;
    }
    .wh_container >>>  .wh_other_dayhide{
        color:#cccccc;
    }

    .wh_container >>> .wh_content_item{
        margin-bottom: 5px;
        margin-top: 5px;
    }

    .wh_container >>> .wh_content{
        color:black;
    }

    .wh_container >>> .wh_top_tag{
        color:black;
    }
    .wh_container >>> .wh_content_li{
        color:#162947;
        font-weight: bold;
    }
    .wh_container >>> .wh_jiantou1{
        border-top: 2px solid #162947;
        border-left: 2px solid #162947;
    }
    .wh_container >>> .wh_jiantou2{
        border-top: 2px solid #162947;
        border-right: 2px solid #162947;
    }


    .wh_container >>> .wh_content_item>.wh_isMark{
        background-color: rgba(19,105,167,0.15);
        /*border-radius: 0px;*/
    }
    .wh_container >>> .wh_content_item .wh_isToday{
        background-color: rgba(19,105,167,1);
        /*border-radius: 0px;*/
        color: #ffffff;
    }
    .wh_container >>> .wh_content_item .wh_chose_day{
        background-color: rgba(19,105,167,1);
        /*border-radius: 0px;*/
        color: #ffffff;
    }
</style>