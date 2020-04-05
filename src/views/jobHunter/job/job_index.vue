<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "job_index",
        beforeCreate() {
            this.$emit('setHeader','job');
        }
    }
</script>

<style scoped>

</style>