<template>
    <div>
        <el-pagination
                :page-size="20"
                :pager-count="11"
                layout="prev, pager, next"
                @current-change="currentChange"
                :style="object"
                :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Pager",
        data(){
            return{
                object:{
                    width:'800px',
                    'margin-bottom':'10px'
                }
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