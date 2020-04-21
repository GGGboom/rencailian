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
                <span>{{company.companyName}}</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>公司简称</span>
            </div>
            <div class="item-right">
                <span>{{company.simpleName}}</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>公司规模</span>
            </div>
            <div class="item-right">
                <span>{{company.companySize}}</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>发展阶段</span>
            </div>
            <div class="item-right">
                <span>{{company.financingRound}}</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>所属行业</span>
            </div>
            <div class="item-right">
                <span>{{company.industryType}}</span>
            </div>
        </div>
        <div class="contract-content">
            <p>公司简介</p>
            <div class="ct-content">
                <span>{{company.description}}</span>
            </div>
        </div>
        <div class="info-item">
            <div class="item-left">
                <span>公司网址</span>
            </div>
            <div class="item-right">
                <span>{{company.officialWebsite}}</span>
            </div>
        </div>
        <div class="contract-content">
            <p>公司地址</p>
            <div class="ct-content">
                <span>{{company.address}}</span>
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
    import {CommonUtils} from "../../../utils/commonUtil";

    export default {
        name: "company_certification",
        data(){
            return{
                company:{}
            }
        },
        created() {
            let local_my_company = CommonUtils.getStore("my_company");
            if(local_my_company!=null && typeof(local_my_company)!='undefined'){
                this.company = local_my_company;
            }
            this.company.industryType = CommonUtils.getKeyName('INDUSTRY_TYPE',this.company.industryType);
            this.company.companySize = CommonUtils.getKeyName('COMPANY_SIZE',this.company.companySize);
            this.company.financingRound = CommonUtils.getKeyName('FINANCING_ROUND',this.company.financingRound);
            for(let i=0;i<this.company.companyImageList.length;i++){
                let image = this.company.companyImageList[i];
                this.company.companyImageList[i].imagePath = CommonUtils.staticPathPrefix + image.filePosition;
            }
            for(let i=0;i<this.company.companyProductList.length;i++){
                let product = this.company.companyProductList[i];
                this.company.companyProductList[i].productLogoPath = CommonUtils.staticPathPrefix + product.productLogoPath;
            }
        }
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

</style>