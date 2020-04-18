<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "talent_index",
        components:{

        },
        data(){
            return{

            }
        },
        methods:{
            goToDetail(){
                this.$router.push("/talent/detail");
            }
        }
    }
</script>

<style scoped>
@import "../../../assets/css/hr/talent/index.css";
</style>