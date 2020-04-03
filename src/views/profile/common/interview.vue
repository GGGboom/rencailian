<template>
    <div>
        <Calendar
                v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate"
                v-on:isToday="clickToday"
                :markDateMore=arr
        ></Calendar>
    </div>
</template>

<script>
    import Calendar from 'vue-calendar-component';
    export default {
        name: "Interview",
        data(){
            return{
                arr:[{date:'2020/3/25',className:"mark1"}, {date:'2020/3/26',className:"mark2"}]
            }
        },
        components: {
            Calendar
        },
        methods:{
            clickDay(data) {
                console.log(data); //选中某天
            },
            changeDate(data) {
                console.log(data); //左右点击切换月份
            },
            clickToday(data) {
                console.log(data); //跳到了本月
            }
        }
    }
</script>

<style scoped>

</style>