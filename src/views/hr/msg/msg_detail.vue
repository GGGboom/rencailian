<template>
    <div class="chat-record">
        <div class="article">
            <div class="layout">
                <span>{{receive.name}}</span>
                <el-divider direction="vertical"></el-divider>
                <span>{{connectState}}</span>
            </div>
        </div>
        <div class="chat-message">
            <ul class="im-list">
                <template v-for="(item,index) in records">
                    <li :class="item.isMine===false?'item-friend':'item-myself'" :key="index" v-if="item.type===11">
                        <div class="message-text">
                            <div class="chat-resume">
                                <p>
                                    {{item.name}}
                                </p>
                                <div class="chat-company">
                                    {{item.companyName}}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li :class="item.isMine===false?'item-friend':'item-myself'" :key="index" v-if="item.type===1">
                        <div class="message-text">
                            <div class="figure" v-if="item.isMine===false">
                                <img :src="receive.headerImage">
                            </div>
                            <div class="text">
                                <p>
                                <span v-html="replaceFace(item.content)">
                                </span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li :class="item.isMine===false?'item-friend':'item-myself'" :key="index" v-if="item.type===2 || (item.type===3 && item.status===1)">
                        <div class="message-text">
                            <div class="figure" v-if="item.isMine===false">
                                <img :src="receive.headerImage">
                            </div>
                            <div class="text">
                                <p>
                                <span v-html="replaceFace(item.content)">
                                </span>
                                </p>
                            </div>
                        </div>
                    </li>
                </template>

            </ul>
        </div>
        <div class="chat-im chat-editor">
            <div class="tools-bar">
                <el-popover
                        class="normal-pad-right"
                        placement="top"
                        width="400"
                        trigger="click">
                   <div class="emoj-panel">
                       <el-row :gutter="12">
                           <el-col v-for="(item,index) in EXPS" :key="index" :span="2">
                               <img :src="item.url" class="emoj-item" alt="" :data="item.code" v-on:click="content+=item.code">
                           </el-col>
                       </el-row>
                   </div>
                    <el-button type="text" slot="reference"  plain><i class="fa fa-smile-o emoj" aria-hidden="true"></i></el-button>
                </el-popover>
                <el-popover
                        placement="top"
                        width="400"
                        trigger="click">
                    <div class="tool-panel">
                        <div>
                            <img class="medium-pad-right" src="../../../assets/img/contact.png" alt="" @click="dialogVisible=true"  title="发送联系方式">
                        </div>
                        <div>
                            <img class="medium-pad-right" src="../../../assets/img/resume.png" alt="" @click="sendMsg('我想要你的一份附件简历，可以发给我吗？',3,1)" title="求简历">
                        </div>
                        <div>
                            <el-upload
                                    class="avatar-uploader"
                                    :action="apiImgUrlPost"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img src="../../../assets/img/photo.png" alt=""   title="发送图片">
                            </el-upload>
                        </div>
                    </div>
                    <el-button type="text" slot="reference" plain><i class="fa fa-plus-circle emoj" aria-hidden="true"></i></el-button>
                </el-popover>
            </div>
            <div class="editor-area">
                <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="content">
                </el-input>
            </div>
        </div>
        <div class="chat_btn">
            <el-button size="mini" >清空</el-button>
            <el-button size="mini" @click="sendMsg(content,2,1,'1')">发送</el-button>
        </div>

        <!--对话框-->
        <el-dialog
                :visible.sync="dialogVisible"
                width="30%">
            <div class="chat-diag-title">发送联系方式</div>
            <div class="chat-diag-title">{{user.cellphone}}</div>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="diagHide">确 定</el-button>
            </span>
        </el-dialog>
        <!--对话框-->

    </div>
</template>

<script>

    import {CommonUtils} from "../../../utils/commonUtil";

    export default {

        name: "hr_msg_detail",
        props: {
            receive: {type: Object, required: true}
        },
        data(){
            return{
                chatPosition:"",                //聊天框中招聘者的职位
                content:"",                     //聊天输入框内容
                websocket:{},                   //websocket连接实例
                socketUrl:'',                   //websocket连接url
                user:{},                        //“我的基本信息”
                sendId:0,                       //发送者id,即本身
                receivedId:0,                   //接受者id，即接收信息的人
                records: [],                    //聊天记录
                videoRoomLink : '',             //会议室连接
                videoRoomLinkTo:'',             //会议室所连接到的地方
                positionInfo:{},                //职位信息
                connectState:"",                //连接状态
                maxSize:100 * 1024,             //图片的最大上传容量
                imageUrl:"",                    //图片上传url
                statusInfo: {
                    willGoInterview: false,     //同意面试
                    hasSendResume: false        //已发送简历
                },
                talentUser: {},                 //人才用户
                sendTalentUserInfo:{},          //发送人才用户信息
                beginVideoCall: false,          //用于视频聊天
                dialogVisible:false,            //发送联系方式和面试的对话框
                apiImgUrlPost:CommonUtils.domainNamePrefix+'chat/temporary?authorization='+CommonUtils.getStore("token"),
                EXPS: [                         // 表情
                    { file: '100.gif', code: '/::)', title: '微笑',reg:/\/::\)/g },
                    { file: '101.gif', code: '/::~', title: '伤心',reg:/\/::~/g },
                    { file: '102.gif', code: '/::B', title: '美女',reg:/\/::B/g },
                    { file: '103.gif', code: '/::|', title: '发呆',reg:/\/::\|/g },
                    { file: '104.gif', code: '/:8-)', title: '墨镜',reg:/\/:8-\)/g },
                    { file: '105.gif', code: '/::<', title: '哭',reg:/\/::</g },
                    { file: '106.gif', code: '/::$', title: '羞',reg:/\/::\$/g },
                    { file: '107.gif', code: '/::X', title: '哑',reg:/\/::X/g },
                    { file: '108.gif', code: '/::Z', title: '睡',reg:/\/::Z/g },
                    { file: '109.gif', code: '/::\'(', title: '哭',reg:/\/::'\(/g },
                    { file: '110.gif', code: '/::-|', title: '囧',reg:/\/::-\|/g },
                    { file: '111.gif', code: '/::@', title: '怒',reg:/\/::@/g },
                    { file: '112.gif', code: '/::P', title: '调皮',reg:/\/::P/g },
                    { file: '113.gif', code: '/::D', title: '笑',reg:/\/::D/g },
                    { file: '114.gif', code: '/::O', title: '惊讶',reg:/\/::O/g },
                    { file: '115.gif', code: '/::(', title: '难过',reg:/\/::\(/g },
                    { file: '116.gif', code: '/::+', title: '酷',reg:/\/::\+/g },
                    { file: '117.gif', code: '/:--b', title: '汗',reg:/\/:--b/g },
                    { file: '118.gif', code: '/::Q', title: '抓狂',reg:/\/::Q/g },
                    { file: '119.gif', code: '/::T', title: '吐',reg:/\/::T/g },
                    { file: '120.gif', code: '/:,@P', title: '笑',reg:/\/:,@P/g },
                    { file: '121.gif', code: '/:,@-D', title: '快乐',reg:/\/:,@-D/g },
                    { file: '122.gif', code: '/::d', title: '奇',reg:/\/::d/g },
                    { file: '123.gif', code: '/:,@o', title: '傲' ,reg:/\/:,@o/g},
                    { file: '124.gif', code: '/::g', title: '饿',reg:/\/::g/g },
                    { file: '125.gif', code: '/:|-)', title: '累' ,reg:/\/:\|-\)/g},
                    { file: '126.gif', code: '/::!', title: '吓',reg:/\/::!/g }
                ],
            }
        },
        methods:{
            init(){//初始化数据
                this.initExp();//初始化表情
                this.receivedId = CommonUtils.getStore("receiveUser").receiveUserId;        //获取接收人id
                this.sendId = this.user.userId;
                if(this.sendId===this.receivedId){
                    this.$message.error('不能和自己聊天');
                    return;
                }
                this.socketUrl = "ws://" + CommonUtils.socketDomainNamePrefix + "/sockjs/websocket/"+this.sendId+"-"+this.receivedId;
                this.websocket = new WebSocket(this.socketUrl);
                // else if ('MozWebSocket' in window) {
                //     this.websocket = new MozWebSocket(this.socketUrl);
                // } else {
                //     this.websocket = new SockJS(this.socketUrl);
                // }
                this.websocket.onopen = this.webSocketOpen;
                this.websocket.onmessage = this.webSocketOnMessage;
                this.websocket.onclose = this.webSocketClose;
                this.websocket.onerror = this.webSocketError;
                this.connected = true;
                console.log(this.socketUrl+" webSocketOpen-WebSocket连接状态:"+this.websocket.readyState);
            },
            webSocketOpen(){//打开websocket连接
                this.connectState = '正在聊天';
                console.log('OPENED!!!!!!!!!!!!!!!!!! ');
            },
            webSocketClose(){//关闭websocket连接
                this.websocket = null;
                this.connectState = '已断开聊天';
                console.log('CLOSED!!!!!!!!!!!!!!!!!! ');
            },
            webSocketError(){ //连接失败的handle
                console.log('ERROR: ' + event.data);
                console.log("WebSocket连接失败");
                this.connectState = '连接失败';
            },
            /*
             聊天信息的类型
             1.将消息更新为已读
             2.普通的文本信息
             3.简历<1请求-2发送-3拒绝发送-4接收-5拒绝接受>
             4.面试邀请<1发送-2同意-3拒绝>
             5. 图片
             6. 视频<1发送-2拒绝视频>
             第一个数字代表发送类型，第二个数字代表发送状态
            * */
            webSocketOnMessage(e){//数据接收
                let data = JSON.parse(e.data);
                this.productinfos = JSON.parse(e.data);
                if (data.code === 0) {
                    let list = data['list'];
                    for (let i = 0; i < list.length; i++) {
                        let item = list[i];
                        if (item.type === 3 && item.status === 2) {//已发送简历
                            this.statusInfo.hasSendResume = true;
                        } else if (item.type === 4 && item.status === 2) {//已同意面试邀请
                            this.statusInfo.willGoInterview = true;
                        } else if (item.type === 12) {
                            this.talentUser = JSON.parse(item.message);
                            console.log(this.talentUser);
                            this.sendTalentUserInfo = false;
                        }
                        if (this.user.userId === item["sendId"]) {
                            if (item['type'] === 1 || item['type'] === 2 || item['type'] === 3 || item['type'] === 7 || item['type'] === 6 || item['type'] === 5 || (item['type'] === 4 && item['status'] > 1)) {
                                this.records.push({
                                    type: item["type"],//右边
                                    time: CommonUtils.getFormatDateTime(item['sendTime'], 'yyyy-MM-dd HH:mm:ss'),
                                    content: item["message"],
                                    read: item['readStatus'],
                                    status: item['status'],
                                    isMine: true
                                });
                            } else if (item.type === 11 && item.status === 1) {
                                let position = JSON.parse(item["message"]);
                                if (position != null) {
                                    this.positionInfo = position;
                                    position.type = item["type"];
                                    position.time = CommonUtils.getFormatDateTime(item['sendTime'], 'yyyy-MM-dd HH:mm:ss');
                                    position.read = item['readStatus'];
                                    position.status = item['status'];
                                    position.isMine = true;
                                    this.records.push(position);
                                }

                            } else if (item.type === 4 && item.status === 1) {
                                let adviceInfo = JSON.parse(item["message"]);
                                this.adviceInfo = adviceInfo;
                                adviceInfo.type = item["type"];
                                adviceInfo.time = CommonUtils.getFormatDateTime(item['sendTime'], 'yyyy-MM-dd HH:mm:ss');
                                adviceInfo.read = item['readStatus'];
                                adviceInfo.status = item['status'];
                                adviceInfo.isMine = true;
                                this.records.push(adviceInfo);
                            }
                        } else {
                            if (item['type'] === 1 || item['type'] === 2 || item['type'] === 3 || item['type'] === 7 || item['type'] === 6 || item['type'] === 5 || (item['type'] === 4 && item['status'] > 1)) {
                                if (this.beginVideoCall === true && item['type'] === 6 && item["message"] != '' && item["status"] === 2) {
                                    this.videoRoomLinkTo = item["message"];
                                    // this.videoCallTalent();未加入函数
                                }
                                if (this.beginVideoCall === true && item['type'] === 6 && item["message"] === '' && item["status"] === 2) {
                                    this.beginVideoCall = false;
                                }
                                this.records.push({
                                    type: item["type"],//左边
                                    time: CommonUtils.getFormatDateTime(item['sendTime'], 'yyyy-MM-dd HH:mm:ss'),
                                    content: item["message"],
                                    status: item['status'],
                                    read: item['readStatus'],
                                    isMine: false
                                });
                            } else if (item.type === 11 && item.status === 1) {
                                let position = JSON.parse(item["message"]);
                                if (position != null) {
                                    this.positionInfo = position;
                                    position.type = item["type"];
                                    position.time = CommonUtils.getFormatDateTime(item['sendTime'], 'yyyy-MM-dd HH:mm:ss');
                                    position.read = item['readStatus'];
                                    position.status = item['status'];
                                    position.isMine = false;
                                    this.records.push(position);
                                }
                            } else if (item.type === 4 && item.status === 1) {
                                let adviceInfo = JSON.parse(item["message"]);
                                this.adviceInfo = adviceInfo;
                                adviceInfo.type = item["type"];
                                adviceInfo.time = CommonUtils.getFormatDateTime(item['sendTime'], 'yyyy-MM-dd HH:mm:ss');
                                adviceInfo.read = item['readStatus'];
                                adviceInfo.status = item['status'];
                                adviceInfo.isMine = false;
                                this.records.push(adviceInfo);
                            }
                        }
                    }
                }
                console.log(this.records);
            },
            close(){
                if (this.wsIsAlive()) {
                    console.log('CLOSING ...');
                    this.websocket.close();
                }
                this.connected = false;
            },
            /*
            发送信息
            content为文本信息，type为信息种类，status为发送状态
             */
            sendMsg: function (content, type, status, info) {
                let _this = this;
                if (content === '' && type <= 2) {
                    _this.$toast('请输入消息');
                    return;
                }
                if (_this.websocket && _this.websocket.readyState === 1) {
                    let data = {};
                    data["sendId"] = _this.user.userId;
                    data["receivedId"] = Number(_this.receivedId);
                    data["type"] = type;
                    data["sort"] = 1;
                    data["status"] = status;
                    console.log(data);
                    //console.log('readyState='+_this.websocket.readyState);
                    if (type === 11) { //职位
                        data["message"] = JSON.stringify(info);
                        _this.websocket.send(JSON.stringify(data));
                        info.content = JSON.stringify(info);
                        info.isMine = true;
                        info.type = type;
                        info.status = status;
                        _this.records.push(info);
                    } else if (type === 4 && status === 1) {//面试
                        let adviceInfo = {
                            name: this.talentUser.name,
                            positionName: this.positionInfo.name,
                            positionId: this.positionInfo.positionId,
                            interviewTime: this.interviewTime,
                            interviewAddress: this.positionInfo.address,
                            description: this.description
                        };
                        data["message"] = JSON.stringify(adviceInfo);
                        _this.websocket.send(JSON.stringify(data));
                        //adviceInfo.content=JSON.stringify(adviceInfo);
                        adviceInfo.isMine = true;
                        adviceInfo.type = type;
                        adviceInfo.status = status;
                        _this.records.push(adviceInfo);
                    } else if (type === 12) {
                        data["message"] = JSON.stringify(info);
                        _this.websocket.send(JSON.stringify(data));
                    } else {
                        data["message"] = content;
                        _this.websocket.send(JSON.stringify(data));
                        _this.records.push({
                            'isMine': true,
                            'type': type,
                            'status': status,
                            'content': content
                        });
                    }
                    _this.content = '';
                } else {
                    this.init();
                }
            },
            wsIsAlive(){//是否保持连接状态
                return (typeof(this.websocket) === 'object'
                    && this.websocket !== null
                    && 'readyState' in this.websocket
                    && this.websocket.readyState === this.websocket.OPEN
                );
            },
            initExp(){//初试化表情
                this.EXPS.forEach(item=>{
                    item.url = require('../../../assets/img/emotion/'+item.file);
                })
            },
            replaceFace(con){//替换表情代码
                let exps=this.EXPS;
                for(let i=0;i<exps.length;i++){
                    con = con.replace(exps[i].reg, `<img src="${require('../../../assets/img/emotion/'+exps[i].file)}" alt="" />`);
                }
                return con;
            },
            handleAvatarSuccess(res, file) {//发送图片,上传成功之后的handle
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {//发送图片,上传之前检查文件大小和格式
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size <this.maxSize;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            diagHide(){
                this.dialogVisible = false;
                this.sendMsg(this.user.cellphone, 2, 1);
            }
        },
        created() {
            this.user = CommonUtils.getStore("user");
            console.log(this.user);
            this.init();
        },
        watch:{
            receive:{
                handler(newValue){
                    this.records=[];
                    this.init();
                    console.log(newValue);
                },
                deep:true
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/message/index.css";
    .el-dialog__body{
        padding: 0;
    }
</style>