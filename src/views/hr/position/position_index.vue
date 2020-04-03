<template>
    <div class="application-main">
        <div>
            <div class="container-xl px-3 mt-4">
                <div class="h-card float-md-left">
                    <div class="clearfix">
                        <div class="float-left col-3">
                            <img class="avatar avatar-before-user-status  height-full width-full" src="../../../assets/img/msg_avatar.png" alt>
                        </div>
                        <div >
                            <p class="company-name">我的公司:阿里云</p>
                        </div>
                    </div>
                </div>
                <div class="main-card float-md-left col-8">
                    <div class="position-relative">

                        <div class="company-position-list">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
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

        }
    }
</script>

<style scoped>
@import "../../../assets/css/hr/position/index.css";
</style>