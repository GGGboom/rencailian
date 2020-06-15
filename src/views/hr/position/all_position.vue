<template>
    <div class="normal-pad-top">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first"></el-tab-pane>
            <el-tab-pane label="已发布" name="second"></el-tab-pane>
            <el-tab-pane label="已暂停" name="third"></el-tab-pane>
        </el-tabs>

        <!--职位表格-->
        <el-table
                :data="showList"
                border
                style="width: 100%">
            <el-table-column
                    label="职位"
                    width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="更新时间"
                    width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.updateTimeTxt }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="基本信息"
                    width="280">
                <template slot-scope="scope">
                    <span class="span-hover">{{scope.row.salaryRangeTxt}}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span class="span-hover">{{scope.row.educationTxt}}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span class="span-hover">{{scope.row.serviceLengthTxt}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="操作">
                <template slot-scope="scope">
                    <el-button icon="el-icon-edit" size="mini" @click="editPosition(scope.row)" type="primary">编辑</el-button>
                    <el-button icon="el-icon-delete" size="mini" v-if="scope.row.publishStatus===2" type="danger"
                               @click="operate(scope.row,0)">删除
                    </el-button>
                    <el-button icon="el-icon-error" size="mini" v-if="scope.row.publishStatus===1" type="warning"
                               @click="operate(scope.row,2)">暂停
                    </el-button>
                    <el-button icon="el-icon-s-promotion" size="mini" v-if="scope.row.publishStatus===2" type="success"
                               @click="operate(scope.row,1)">重新发布
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--职位表格-->

        <div class="suspend" @click="release">
            发布新职位
        </div>
    </div>
</template>

<script>
    import {operatePostion, getMinePosition} from "../../../api/job";
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "all_position",
        data() {
            return {
                activeName: 'first',                            //用于在全部、已发布和已暂停之间切换
                positions: [],                                  //包含所有的职位
                publishingPosi: [],                             //发布中的职位
                publishAll: [],                                 //已发布的职位
                stopPosi: [],                                   //停止发布的职位
                pageSize: 5,                                    //用于分页,页面大小,为之后系统扩展所用
                total: 0,                                       //用于分页,所有条数,为之后系统扩展所用
                currentPage: 1,                                 //用于分页，当前页面,为之后系统扩展所用
                showList: [],                                   //用于显示职位
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
                                } else if(res.code===1){
                                    this.$router.push("/login");
                                } else{
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
                                } else if(res.code===1){
                                    this.$router.push("/login");
                                } else{
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
                                } else if(res.code===1){
                                    this.$router.push("/login");
                                } else{
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
            editPosition(item) {//编辑职位，在编辑职位之前将职位的基本信息存入sessionStorage，方便之后的操作
                delete item.serviceLengthTxt;
                delete item.educationTxt;
                delete item.salaryRangeTxt;
                delete item.updateTimeTxt;
                sessionStorage.setItem('edit_position', JSON.stringify(item));
                this.$router.push({name: "position_edit", query: {positionId: item.positionId, type: 0}});
            },
            handleClick(tab) {//切换的handle函数
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
            release() {//发布新职位
                this.$router.push({name: "position_edit", params: {positionId: undefined, type: 1}});
            },
            get() {//获取所有职位信息
                getMinePosition({authorization: CommonUtils.getStore("token")})
                    .then(res => {
                        if(res.code===0){
                            console.log(res);
                            res.positions.forEach(item => {
                                item.salaryRangeTxt = CommonUtils.getKeyName('SALARY_RANGE', item.salaryRange);
                                item.serviceLengthTxt = CommonUtils.getKeyName('SERVICE_LENGTH', item.serviceLength);
                                item.updateTimeTxt = CommonUtils.getFormatDateTime(item.updateTime, "yyyy-MM-dd HH:mm:ss");
                                item.educationTxt = CommonUtils.getKeyName('EDUCATION', item.education);
                                if (item.publishStatus === 1) {      //已发布
                                    this.publishingPosi.push(item);
                                } else if (item.publishStatus === 2) {      //2暂停
                                    this.stopPosi.push(item);
                                }
                                if (item.publishStatus !== 0) {
                                    this.positions.push(item);
                                }
                            });
                            this.showList = this.positions;
                            this.total = this.positions.length;
                        }else if(res.code===1){
                            this.$router.push("/login");
                        } else{
                            this.$message.error(res.message);
                        }

                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
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