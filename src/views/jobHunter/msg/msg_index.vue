<template>
    <div class="inner" id="main">
        <div id="container">
            <div class="chat-container page-container">
                <div class="chat-wrap">
                    <div>
                        <div class="chat-user">
                            <div class="article">
                                联系人
                            </div>
                            <div class="user-list">
                                <ul>
                                    <li v-for="chatItem in chatMesIn10Days"
                                        :key="chatItem.id"
                                        :class="chatItem.receiveUserId===index?'selected':''"
                                        @click="change(chatItem)">
                                        <router-link to="/talent/msg/detail">
                                            <div class="figure">
                                                <img v-bind:src="chatItem.headerImage">
                                            </div>
                                            <div class="text">
                                                <div class="title">
                                                    <span class="name">{{chatItem.receiveUserName}}</span>
                                                    <span class="time">{{chatItem.updateTime}}</span>
                                                </div>
                                                <p class="gray">
                                                    <span>{{chatItem.receiveUserPosition}}</span>
                                                    <el-divider direction="vertical"></el-divider>
                                                    <span>人事经理</span>
                                                </p>
                                            </div>
                                        </router-link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <Detail :receive="receive"></Detail>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getChatList} from "../../../api/meg";
    import {CommonUtils} from "../../../utils/commonUtil";
    import Detail from "./msg_detail";
    //使用表情包组件
    export default {

        name: "msg_index",
        components:{
            Detail
        },
        data(){
            return{
                index:0,                        //聊天列表默认高亮下标
                chatMesBefore10Days: [],        //10天之前的聊天列表
                chatMesIn10Days: [],            //10天之内的聊天列表
                receive:{                       //接受信息的人，传给msg_detail的数据
                    name:"",                    //姓名
                    position:"",                //职位
                    headerImage:"",             //头像
                    receiveUserId:""
                }
            }
        },
        methods:{
            get(){//获取聊天列表
                getChatList({authorization:CommonUtils.getStore("token")})
                    .then(data=>{
                        if (data.code === 0) {
                            let chatMes = data.chatRecords;
                            console.log(chatMes);
                            let in10days = [];
                            let before10days = [];
                            let tendaymill = CommonUtils.servalDaysBeforeMill(10);
                            let today = CommonUtils.getFormatDateTime(new Date().getTime(), 'yyyy-MM-dd');
                            for (let i = 0; i < chatMes.length; i++) {
                                let item = chatMes[i];
                                item.headerImage = CommonUtils.staticPathPrefix + item.receiveUserHeaderImage;
                                if (tendaymill > item.updateTime) {
                                    item.updateTime = CommonUtils.getFormatDateTime(item.updateTime, 'yyyy-MM-dd');
                                    before10days.push(item);
                                } else {
                                    let time = CommonUtils.getFormatDateTime(item.updateTime, 'yyyy-MM-dd HH:mm');
                                    if (time.indexOf(today) != -1) {
                                        item.updateTime = CommonUtils.getFormatDateTime(item.updateTime, 'HH:mm');
                                    } else {
                                        item.updateTime = CommonUtils.getFormatDateTime(item.updateTime, 'MM-dd');
                                    }
                                    in10days.push(item);
                                }
                            }
                            this.change(data.chatRecords[0]);
                            this.chatMesIn10Days = in10days;
                            this.chatMesBefore10Days = before10days;
                            // console.log(this.chatMesBefore10Days);
                            // console.log(this.chatMesIn10Days);
                        } else {
                            if (data.code === 1) {
                                this.router.push({name:'login'});
                            }
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            change:function(item){//切换聊天对象
                this.receive.receiveUserId =item.receiveUserId;
                this.receive.name = item.receiveUserName;
                this.receive.headerImage = item.headerImage;
                this.index=item.receiveUserId;
                this.chatPosition = item.receiveUserPosition;
                this.setReceiveUser(item.receiveUserId,item.headerImage,item.receiveUserName);
            },
            setReceiveUser(userId,headerImage,name){//将聊天对象的信息存入localstorage
                let receiveUser={};
                receiveUser.receiveUserId = userId;
                receiveUser.headerImage = headerImage;
                receiveUser.name = name;
                CommonUtils.setStore("receiveUser",receiveUser);
            }
        },
        mounted() {
            this.get();
        },
        beforeCreate() {
            this.$emit('setHeader','msg');
        },
        watch:{

        }
    }
</script>

<style scoped>
    @import "../../../assets/css/message/index.css";
</style>