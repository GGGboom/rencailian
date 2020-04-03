<template>
    <div>
        <div class="border-bottom border-gray-dark py-3 display-flex">
            <form class="d-md-flex">
                <div class="form-item">
                    <el-dropdown size="medium" split-button type="primary" @command="handleCommand">
                        {{dropbtxt}}
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="all">全部</el-dropdown-item>
                            <el-dropdown-item command="release">已发布</el-dropdown-item>
                            <el-dropdown-item command="pause">已暂停</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="form-item">
                    <el-button size="medium" type="primary" @click="release">发布新职位</el-button>
                </div>
            </form>
        </div>
        <ul>
            <li class="width-full d-flex py-4 border-bottom space-btw li-hover" v-for="item in positions" :key="item.id">
                <div class="d-inline-block">
                    <p class="ft-weight pd">{{item.positionName}}
                        <el-tag size="mini">
                            已发布
                        </el-tag>
                    </p>
                    <div class="pd">
                        <span class="span-hover">{{item.salaryStart}}-{{item.salaryEnd}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span class="span-hover">{{item.education}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span class="span-hover">5-10年</span>
                    </div>
                    <p  class="pd">
                    <span class="font-color">
                        更新时间:2020/04/02 星期一
                    </span>
                    </p>
                </div>
                <div class="d-flex">
                    <div class="">
                        <el-button icon="el-icon-edit" size="mini" @click="edit(item)">编辑</el-button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "all_position",
        data(){
            return{
                dropbtxt:"全部",
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                positions:[
                    {
                        positionName:"软件工程师",
                        id:1,
                        salaryStart:10,
                        salaryEnd:30,
                        updateTime:"",
                        status:"已发布",
                        education:"硕士"
                    },
                    {
                        positionName:"软件工程师",
                        id:2,
                        salaryStart:10,
                        salaryEnd:20,
                        updateTime:"",
                        status:"已发布",
                        education:"本科"
                    },
                    {
                        positionName:"软件工程师",
                        id:3,
                        salaryStart:10,
                        salaryEnd:20,
                        updateTime:"",
                        status:"已发布",
                        education:"本科"
                    },
                    {
                        positionName:"软件工程师",
                        id:4,
                        salaryStart:10,
                        salaryEnd:20,
                        updateTime:"",
                        status:"已发布",
                        education:"本科"
                    },
                    {
                        positionName:"软件工程师",
                        id:5,
                        salaryStart:10,
                        salaryEnd:20,
                        updateTime:"",
                        status:"已发布",
                        education:"本科"
                    }
                ]
            }
        },
        methods:{
            edit(item){
                this.$router.push({name:"edit",params:{item:item,txt:"编辑"}});
            },
            handleCommand(command){
                switch (command) {
                    case "release":{
                        this.dropbtxt = "已发布";
                        break;
                    }
                    case "pause":{
                        this.dropbtxt = "已暂停";
                        break;
                    }
                    default:{
                        this.dropbtxt = "全部";
                        break;
                    }
                }
            },
            release(){
                this.$router.push({name:"edit",params:{txt:"发布新职位"}});
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/hr/position/all.css";
</style>