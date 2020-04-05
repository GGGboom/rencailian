<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "company_index",
        data() {
            return {

            };
        },beforeCreate() {
            this.$emit('setHeader','company');
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/jobHunter/company/company.css";
</style>