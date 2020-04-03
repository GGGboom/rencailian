<template>
    <div style="background: #fff">
        <div class="page-content container clearfix">
            <div class="col-3 float-left pr-4">
                <div class="menu position-relative">
                    <h3 class="menu-heading">
                        个人设置
                    </h3>
                    <div v-if="this.$store.state.user.identityType==1">
                        <router-link v-for="subitem in jobHunter" :to="subitem.link" :key="subitem.index" :class="subitem.index==index?'active':''" @click.native="setHeadAndAct(subitem)" class="js-selected-navigation-item menu-item">
                            {{subitem.subName}}
                        </router-link>
                    </div>
                    <div v-if="this.$store.state.user.identityType==2">
                        <router-link v-for="subitem in hr" :to="subitem.link" :key="subitem.index" :class="subitem.index==index?'active':''" @click.native="setHeadAndAct(subitem)" class="js-selected-navigation-item menu-item">
                            {{subitem.subName}}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-9 float-left">
                <div class="Subhead mt-0 mb-0">
                    <h2 class="Subhead-heading">{{subHead}}</h2>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Profile",
        data() {
            return{
                subHead:"我的信息",
                // 应聘者导航栏菜单
                jobHunter:[
                    {
                        subName:'我的信息',
                        link:"/profile/info",
                        index:1
                    },
                    {
                        subName:'我的收藏',
                        link:"/profile/collect",
                        index:2
                    },
                    {
                        subName:'隐私设置',
                        link:"/profile/privacy",
                        index:3
                    },
                    {
                        subName:'我的账号',
                        link:"/profile/account",
                        index:4
                    },
                    {
                        subName:'切换身份',
                        link:"/profile/switch",
                        index:5
                    },
                    {
                        subName:'投递记录',
                        link:"/profile/history",
                        index:6
                    },
                    {
                        subName:'面试安排',
                        link:"/profile/interview",
                        index:7
                    },
                    {
                        subName:'智能签约',
                        link:"/profile/contract",
                        index:8
                    },
                ],
                // 招聘者导航栏菜单
                hr:[
                    {
                        subName:'实名认证',
                        link:"/profile/nameCet",
                        index:1
                    },
                    {
                        subName:'公司认证',
                        link:"/profile/companyCet",
                        index:2
                    },
                    {
                        subName:'我的账号',
                        link:"/profile/account",
                        index:4
                    },
                    {
                        subName:'切换身份',
                        link:"/profile/switch",
                        index:5
                    },
                    {
                        subName:'投递记录',
                        link:"/profile/history",
                        index:6
                    },
                    {
                        subName:'面试安排',
                        link:"/profile/interview",
                        index:7
                    },
                    {
                        subName:'智能签约',
                        link:"/profile/contract",
                        index:8
                    },
                    {
                        subName:'简历管理',
                        link:"/profile/resumeManage",
                        index:9
                    }
                ],
                index:1
            }
        },
        methods: {
            setHeadAndAct(item){
                this.subHead = item.subName;
                this.index = item.index;
            }
        },
        mounted(){
        },
        created() {
            console.log(this.$store.state.user.identityType);
        }
    }
</script>

<style scoped>
    @import "../../assets/css/profile/index.css";
</style>