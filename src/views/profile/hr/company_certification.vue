<template>
    <div class="info-list">
        <div class="info-item">
            <div class="item-left">
                <span class="emphase">公司信息</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>公司logo</span>
            </div>
            <div class="item-right">
                <span></span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>公司全称</span>
            </div>
            <div class="item-right">
                <span>阿里云</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>公司简称</span>
            </div>
            <div class="item-right">
                <span>阿里云</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>公司规模</span>
            </div>
            <div class="item-right">
                <span>500-1000</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>发展阶段</span>
            </div>
            <div class="item-right">
                <span>D轮及以上</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>所属行业</span>
            </div>
            <div class="item-right">
                <span>互联网</span>
            </div>
        </div>
        <div class="contract-content">
            <p>公司简介</p>
            <div class="ct-content">
                <span>阿里云，阿里巴巴集团旗下云计算品牌，全球卓越的云计算技术和服务提供商。创立于2009年，在杭州、北京、硅谷等地设有研发中心和运营机构。</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>公司网址</span>
            </div>
            <div class="item-right">
                <span>www.aliyun.com</span>
            </div>
        </div>
        <div class="contract-content">
            <p>公司地址</p>
            <div class="ct-content">
                <span>上海市浦东新区世纪大道</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span class="emphase">公司产品</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>产品商标</span>
            </div>
            <div class="item-right">
                <span></span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>产品名称</span>
            </div>
            <div class="item-right">
                <span></span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>产品链接</span>
            </div>
            <div class="item-right">
                <span></span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>产品介绍</span>
            </div>
            <div class="item-right">
                <span></span>
            </div>
        </div>
        <div class="contract-btn">
            <div class="btn-box">
                <el-button type="primary">编辑公司地址</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "company_certification"
    }
</script>

<style scoped>
    .info-list{

    }
    .info-list .info-item{
        border-bottom: 1px solid #e1e4e8;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-self: center;
        font-size: 16px;
    }
    .info-list .contract-content{
        padding: 20px 0;
        display: block;
        font-size: 16px;
        border-bottom: 1px solid #e1e4e8;
    }
    .info-list .contract-content .ct-content{
        padding: 10px 0;
    }

    .info-list .contract-btn{
        display: flex;
        justify-content: flex-end;
        padding: 20px 0;
    }
    .contract-btn .btn-box{
        display: flex;
        justify-content: space-between;
    }
    .info-list .info-item .item-left{

    }
    .info-list .info-item .item-right{

    }
    .emphase{
        font-size: 19px;
        padding-left: 5px;
        border-left: 2px solid #0366d6;
    }
</style>