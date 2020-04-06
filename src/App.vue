<template>
    <div id="app">
        <Header :page="name" v-if="this.$store.state.pageState"></Header>
        <router-view @setHeader="setHeader"/>

        <Footer v-if="this.$store.state.pageState"></Footer>
    </div>
</template>
<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    export default {
        name: 'App',
        components: {
            Header,
            Footer
        },
        data(){
            return{
                name:""
            }
        },
        methods:{
            setHeader(name){
                this.name = name;
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
