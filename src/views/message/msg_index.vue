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
                                    <li v-for="chatItem in chatRecords"
                                        :key="chatItem.receiveUserId"
                                        :class="chatItem.receiveUserId==index?'selected':''"
                                        @click="change(chatItem)">
                                        <div class="figure">
                                            <img v-bind:src="chatItem.receiveUserHeaderImage">
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
                    <div class="chat-record">
                        <div class="article">
                            <div class="layout">
                                <span>{{chatIndex}}</span>
                                <el-divider direction="vertical"></el-divider>
                                <span>{{chatPosition}}</span>
                            </div>
                        </div>
                        <div class="chat-message">
                            <ul class="im-list">
                                <li class="item-friend">
                                    <div class="message-text">
                                        <div class="figure">
                                            <img :src="chatAvatar">
                                        </div>
                                        <div class="text">
                                            <p>
                                                <span>
                                                    Hello，看了你的简历，我很欣赏，想和你进一步沟通
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="item-myself">
                                    <div class="message-text">
                                        <div class="text">
                                            <p>
                                                好的，请稍等
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat-im chat-editor">
                            <div class="emoji">
                                <VueEmoji ref="emoji"  @input="onInput" width="100%" :value="myText" />
                            </div>
                        </div>
                        <div class="chat_btn">
                            <el-button size="mini" @click="clearTextarea">清空</el-button>
                            <el-button size="mini">发送</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //使用表情包组件
    export default {

        name: "msg_index",
        data(){
            return{
                index:1,
                chatRecords:[
                    {
                        receiveUserName:"吴女士",
                        receiveUserId:1,
                        updateTime:"03月07日",
                        receiveUserHeaderImage:require("../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"阿里云"
                    },
                    {
                        receiveUserName:"张先生",
                        receiveUserId:2,
                        updateTime:"03月04日",
                        receiveUserHeaderImage:require("../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"腾讯"
                    },
                    {
                        receiveUserName:"郭先生",
                        receiveUserId:3,
                        updateTime:"03月01日",
                        receiveUserHeaderImage:require("../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"百度"
                    },
                    {
                        receiveUserName:"黄先生",
                        receiveUserId:4,
                        updateTime:"03月02日",
                        receiveUserHeaderImage:require("../../assets/img/msg_avatar.png"),
                        receiveUserPosition:"京东"
                    }
                ],
                chatIndex:"",
                chatPosition:"",
                chatAvatar:"",
                myText:""
            }
        },
        methods:{
            change:function(item){
                this.index=item.receiveUserId;
                this.chatIndex = item.receiveUserName;
                this.chatPosition = item.receiveUserPosition;
            },
            onInput(event) {
                console.log(event);
                //event.data contains the value of the textarea
            },
            clearTextarea(){
                this.$refs.emoji.clear()
            },
        },
        mounted() {
            this.chatIndex = this.chatRecords[0].receiveUserName;
            this.chatPosition = this.chatRecords[0].receiveUserPosition;
            this.chatAvatar = require("../../assets/img/msg_avatar.png");
        }
    }
</script>

<style scoped>
@import "../../assets/css/message/index.css";
</style>