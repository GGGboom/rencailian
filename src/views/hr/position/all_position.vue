<template>
    <div class="normal-pad-top">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first"></el-tab-pane>
            <el-tab-pane label="已发布" name="second"></el-tab-pane>
            <el-tab-pane label="已暂停" name="third"></el-tab-pane>
        </el-tabs>
        <ul>
            <li class="width-full d-flex py-4 border-bottom space-btw li-hover" v-for="item in showList" :key="item.id"
                @click="goToEdit">
                <div class="d-inline-block">
                    <p class="ft-weight pd">
                        {{item.name}}
                        <el-tag type="danger" size="mini" v-if="item.publishStatus===2">
                            已暂停
                        </el-tag>
                        <el-tag type="success" size="mini" v-if="item.publishStatus===1">
                            已发布
                        </el-tag>
                    </p>
                    <div class="pd">
                        <span class="span-hover">{{item.salaryRange}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span class="span-hover">{{item.education}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span class="span-hover">{{item.serviceLength}}</span>
                    </div>
                    <p class="pd">
                    <span class="font-color">
                        更新时间:{{item.updateTime}}
                    </span>
                    </p>
                </div>
                <div class="d-flex">
                    <div class="">
                        <el-button icon="el-icon-edit" size="mini" @click="editPosition(item)">编辑</el-button>
                        <el-button icon="el-icon-delete" size="mini" v-if="item.publishStatus===2"
                                   @click="operatePostion(item,0)">删除
                        </el-button>
                        <el-button icon="el-icon-error" size="mini" v-if="item.publishStatus===1"
                                   @click="operate(item,2)">暂停
                        </el-button>
                        <el-button icon="el-icon-s-promotion" size="mini" v-if="item.publishStatus===2"
                                   @click="operate(item,1)">重新发布
                        </el-button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="suspend" @click="release">
            发布新职位
        </div>
        <!--<div class="layout-center normal-margin-top">-->
            <!--<el-pagination-->
                    <!--v-if="total>5"-->
                    <!--:page-size="pageSize"-->
                    <!--:current-page.sync="currentPage"-->
                    <!--layout="prev, pager, next"-->
                    <!--@current-change="currentChange"-->
                    <!--:total="total">-->
            <!--</el-pagination>-->
        <!--</div>-->
    </div>
</template>

<script>
    import {operatePostion, getMinePosition} from "../../../api/job";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "all_position",
        data() {
            return {
                dropbtxt: "全部",
                activeName: 'first',
                positions: [],
                publishingPosi: [],//发布中
                publishAll: [],//已发布
                stopPosi: [],//停止发布
                pageSize: 5,
                total: 0,
                currentPage: 1,
                showList: []
            }
        },
        methods: {
            //0删除 1重新发布 2暂停 3刷新 4编辑
            operate(item, status) {
                switch (status) {
                    case 0: {     //0删除
                        operatePostion(item.positionId, 0, item, CommonUtils.getStore("token"))
                            .then(res => {
                                if (res.code === 0) {
                                    this.$message.success("删除成功");
                                    setTimeout(() => {
                                        this.$router.go(0);
                                    }, 900);
                                } else {
                                    this.$message.error(res.message);
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        break;
                    }
                    case 1: {     //1重新发布
                        operatePostion(item.positionId, 1, item, CommonUtils.getStore("token"))
                            .then(res => {
                                console.log(res);
                                if (res.code === 0) {
                                    this.$message.success("重新发布成功");
                                    setTimeout(() => {
                                        this.$router.go(0);
                                    }, 900);
                                } else {
                                    this.$message.error(res.message);
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        break;
                    }
                    case 2: {     //2暂停
                        operatePostion(item.positionId, 2, item, CommonUtils.getStore("token"))
                            .then(res => {
                                if (res.code === 0) {
                                    this.$message.success("暂停成功");
                                    setTimeout(() => {
                                        this.$router.go(0);
                                    }, 900)
                                } else {
                                    this.$message.error(res.message);
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        break;
                    }
                    case 3: {     //3刷新
                        break;
                    }
                    case 4: {     //4编辑
                        break;
                    }
                }
            },
            editPosition(item) {
                sessionStorage.setItem('edit_position', JSON.stringify(item));
                this.$router.push({name: "position_edit", params: {positionId: item.positionId, type: 0}});
            },
            handleClick(tab) {
                if (tab.index === "0") {
                    this.showList = this.positions;
                } else if (tab.index === "1") {
                    this.showList = this.publishingPosi;
                    this.total = this.publishingPosi.length;
                } else if (tab.index === "2") {
                    this.showList = this.stopPosi;
                    this.total = this.stopPosi.length;
                }
            },
            release() {
                this.$router.push({name: "position_edit", params: {positionId: undefined, type: 1}});
            },
            currentChange(page) {
                console.log(page)
            },
            get() {
                getMinePosition({authorization: CommonUtils.getStore("token")})
                    .then(res => {
                        res.positions.forEach(item => {
                            item.salaryRange = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                            item.serviceLength = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                            item.updateTime = CommonUtils.getFormatDateTime(item.updateTime, "yyyy-MM-dd HH:mm:ss");
                            item.education = CommonUtils.getKeyName('EDUCATION', item.education);
                            if (item.publishStatus == 1) {      //已发布
                                this.publishingPosi.push(item);
                            } else if (item.publishStatus == 2) {      //2暂停
                                this.stopPosi.push(item);
                            }
                            if (item.publishStatus != 0) {
                                this.positions.push(item);
                            }
                        });
                        this.showList = this.positions;
                        this.total = this.positions.length;
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            goToEdit() {

            }
        },
        created() {
            this.get();
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/hr/position/all.css";

    .layout-center {
        display: flex;
        justify-content: center;
        background: #fff;
    }

    .el-pagination {
        white-space: nowrap;
        padding: 2px 5px;
        color: #303133;
        font-weight: 700;
    }

    .selected {
        color: #409EFF;
    }
</style>