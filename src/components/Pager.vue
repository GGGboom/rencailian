<template>
    <div class="layout-center">
        <el-pagination
                :page-size="20"
                :pager-count="11"
                layout="prev, pager, next"
                @current-change="currentChange"
                :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Pager",
        data(){
            return{

            }
        },
        methods:{
            currentChange(number){
                console.log(number);
            }
        }
    }
</script>

<style scoped>
.layout-center{
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
</style>