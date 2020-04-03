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
            <span>今日面试(0)</span>
        </div>
    </div>
</template>

<script>
    import Calendar from 'vue-calendar-component';
    export default {
        name: "Interview",
        data(){
            return{
                // arr2: ['2018/6/23'],
                arr2: ['2020/3/31'],
                arr: [
                    {
                        date: "2020/3/26",
                        className: "mark1"
                    },
                    {
                        date: "2018/8/13",
                        className: "mark2"
                    }
                ]
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
            }
        },
        created() {

        }
    }
</script>

<style scoped>
    .info{
        padding: 15px 0;
    }
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