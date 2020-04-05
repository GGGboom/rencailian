<template>
    <div class="wallet-container">
        <div class="flex-list-header">
            <div class="flex-row">
                <div class="flex-cell first">
                    钱包名称
                </div>
                <div class="flex-cell first">
                    钱包余额
                </div>
                <div class="flex-cell first">
                    钱包地址
                </div>
                <div class="flex-cell first">
                    操作
                </div>
            </div>

        </div>
        <div class="flex-list-item">
            <div class="flex-row content">
                <div class="flex-cell first state">
                    18321260396
                </div>
                <div class="flex-cell first state">
                    111111
                </div>
                <div class="flex-cell first hash">
                    0xef669a690958251c5e68f202a4513120124c414760418938c6c402d6772541f0
                </div>
                <div class="flex-cell first hash">
                    <el-button type="text">
                        删除
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wallet"
    }
</script>

<style scoped>
@import "../../../assets/css/profile/wallet.css";
</style>