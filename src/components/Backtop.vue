<template>
    <div class="bottom_tools">
        <div class="qr_tool">二维码</div>
        <a id="feedback" href="http://www.17sucai.com" title="意见反馈">意见反馈</a>
        <a id="scrollUp" href="javascript:;" title="飞回顶部"></a>
        <img class="qr_img" src="../assets/img/components/qr_img.png">
    </div>
</template>

<script>
    import $ from 'jquery';
    $(function(){
        let $bottomTools = $('.bottom_tools');
        let $qrTools = $('.qr_tool');
        let qrImg = $('.qr_img');

        $(window).scroll(function () {
            let scrollHeight = $(document).height();
            let scrollTop = $(window).scrollTop();
            let $windowHeight = $(window).innerHeight();
            scrollTop > 10 ? $("#scrollUp").fadeIn().css("display","block") : $("#scrollUp").fadeOut();
            $bottomTools.css("bottom", scrollHeight - scrollTop > $windowHeight ? 40 : $windowHeight + scrollTop + 40 - scrollHeight);
        });

        $('#scrollUp').click(function (e) {
            e.preventDefault();
            $('html,body').animate({ scrollTop:0});
        });

        $qrTools.hover(function () {
            qrImg.fadeIn();
        }, function(){
            qrImg.fadeOut();
        });

    });
    export default {
        name: "Backtop",
        props: {},
        data(){
            return {
                target:'',
                
            };
        },
        methods:{

        }
    }
</script>

<style scoped>
    @import "../assets/css/components/Backtop.css";
</style>