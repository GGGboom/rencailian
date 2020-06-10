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
                                        :key="chatItem.receiveUserId"
                                        :class="chatItem.id===index?'selected':''"
                                        @click="change(chatItem)">
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
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getChatList} from "../../../api/meg";
    import {CommonUtils} from "../../../utils/commonUtil";
    //使用表情包组件
    export default {

        name: "msg_index",
        data(){
            return{
                index:0,                        //聊天列表默认高亮下标
                chatMesBefore10Days: [],        //10天之前的聊天列表
                chatMesIn10Days: [],            //10天之内的聊天列表
                chatIndex:"",                   //聊天框默认下标
            }
        },
        methods:{
            get(){
                getChatList({authorization:CommonUtils.getStore("token")})
                    .then(data=>{
                        if (data.code === 0) {
                            let chatMes = data.chatRecords;
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
                            this.index = data.chatRecords[0].id;
                            this.chatAvatar = data.chatRecords[0].headerImage;
                            this.chatMesIn10Days = in10days;
                            this.chatMesBefore10Days = before10days;
                            console.log(this.chatMesBefore10Days);
                        } else {
                            if (data.code == 1) {
                                this.router.push({name:'login'});
                            }
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
            change:function(item){
                this.index=item.id;
                this.chatIndex = item.receiveUserName;
                this.chatPosition = item.receiveUserPosition;
            },
            onInput(event) {
                this.myText = event.data
                //event.data contains the value of the textarea
            },
            clearTextarea(){
                this.$refs.emoji.clear();
            },
            sendMsg(){

            },
            showPanel(){
                if(this.flag===true){
                    this.flag = false;
                }else{
                    this.flag = true;
                }
            }
        },
        mounted() {
            this.chatAvatar = require("../../../assets/img/msg_avatar.png");
            this.get();
        },
        beforeCreate() {
            this.$emit('setHeader','msg');
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/message/index.css";
</style>