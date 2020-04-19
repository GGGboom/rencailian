<template>
    <div class="application-main">
        <div class="inner">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "position_index",
        data(){
            return{

            }
        },
        methods:{

        },
        beforeCreate() {
            this.$emit('setHeader','position');
        }
    }
</script>

<style scoped>
@import "../../../assets/css/hr/position/index.css";
</style>