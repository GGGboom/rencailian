<template>
    <div>
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
        name: "Pagination",
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

</style>