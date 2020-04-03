<template>
    <div id="app">
        <Header v-if="!this.$store.state.isLogin"></Header>
        <router-view/>
        <Backtop v-if="!this.$store.state.isLogin"></Backtop>
        <Footer v-if="!this.$store.state.isLogin"></Footer>
    </div>

</template>
<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import Backtop from '@/components/Backtop.vue';
    export default {
        name: 'App',
        components: {
            Header,
            Footer,
            Backtop

        },
        data(){
            return{
                isAtLogin:false
            }
        },
        created() {

        },
        mounted() {

        },
        watch:{

        }
    }
</script>
<style>
    @import "assets/css/app.css";
</style>
