<template>
    <div class="company-search home-site">
        <div class="filter-box">
            <div class="filter-condition ">
                <!--行业-->
                <div class="filter-row industry">
                    <span class="title">行业类型:</span>
                    <div class="content">
                        <el-link :underline="false">不限</el-link>
                        <el-link :underline="false">电子商务</el-link>
                        <el-link :underline="false">游戏</el-link>
                        <el-link :underline="false">媒体</el-link>
                        <el-link :underline="false">广告营销</el-link>
                        <el-link :underline="false">数据服务</el-link>
                        <el-link :underline="false">医疗健康</el-link>
                        <el-link :underline="false">生活服务</el-link>
                        <el-link :underline="false">O2O</el-link>
                        <el-link :underline="false">音乐/视频/阅读</el-link>
                        <el-link :underline="false">在线教育</el-link>
                        <el-link :underline="false">社交网络</el-link>
                        <el-link :underline="false">人力资源服务</el-link>
                        <el-link :underline="false">企业服务</el-link>
                        <el-link :underline="false">信息安全</el-link>
                        <el-link :underline="false">智能硬件</el-link>
                        <el-link :underline="false">移动互联网</el-link>
                        <el-link :underline="false">互联网</el-link>
                        <el-link :underline="false">计算机软件</el-link>
                        <el-link :underline="false">通信/网络设备</el-link>
                        <el-link :underline="false">广告/公关/会展</el-link>
                        <el-link :underline="false">互联网金融</el-link>
                        <el-link :underline="false">物流/仓储</el-link>
                        <el-link :underline="false">贸易/进出口</el-link>
                        <el-link :underline="false">汽车生产</el-link>
                    </div>
                </div>
                <!--融资阶段-->
                <div class="filter-row stage">
                    <span class="title">融资阶段:</span>
                    <div class="content">
                        <el-link :underline="false">不限</el-link>
                        <el-link :underline="false">未融资</el-link>
                        <el-link :underline="false">天使轮</el-link>
                        <el-link :underline="false">A轮</el-link>
                        <el-link :underline="false">B轮</el-link>
                        <el-link :underline="false">C轮</el-link>
                        <el-link :underline="false">D轮及以上</el-link>
                        <el-link :underline="false">已上市</el-link>
                        <el-link :underline="false">不需要融资</el-link>
                    </div>
                </div>
                <!--公司规模-->
                <div class="filter-row scale">
                    <span class="title">公司规模:</span>
                    <div class="content">
                        <el-link :underline="false">0-20人</el-link>
                        <el-link :underline="false">20-99人</el-link>
                        <el-link :underline="false">100-499人</el-link>
                        <el-link :underline="false">500-999人</el-link>
                        <el-link :underline="false">1000-9999人</el-link>
                        <el-link :underline="false">10000人以上</el-link>
                    </div>
                </div>
            </div>
            <div id="top_filter_bar" class="top-filter-bar">
                <div class="inner">
                    <div class="filter-bar-item">
                        <div>
                            <el-dropdown>
                            <span class="el-dropdown-link">
                                公司规模<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>0-20人</el-dropdown-item>
                                    <el-dropdown-item>20-99人</el-dropdown-item>
                                    <el-dropdown-item>100-499人</el-dropdown-item>
                                    <el-dropdown-item>1000-9999人</el-dropdown-item>
                                    <el-dropdown-item>10000人以上</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                    <div class="filter-bar-item">
                        <div>
                            <el-dropdown>
                            <span class="el-dropdown-link">
                                融资阶段<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                                <el-dropdown-menu size="mini" slot="dropdown">
                                    <el-dropdown-item>不限</el-dropdown-item>
                                    <el-dropdown-item>未融资</el-dropdown-item>
                                    <el-dropdown-item>天使轮</el-dropdown-item>
                                    <el-dropdown-item>A轮</el-dropdown-item>
                                    <el-dropdown-item>B轮</el-dropdown-item>
                                    <el-dropdown-item>C轮</el-dropdown-item>
                                    <el-dropdown-item>D轮及以上</el-dropdown-item>
                                    <el-dropdown-item>已上市</el-dropdown-item>
                                    <el-dropdown-item>不需要融资</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                    <div class="filter-bar-item">
                        <div>
                            <el-dropdown>
                            <span class="el-dropdown-link">
                                公司规模<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>0-20人</el-dropdown-item>
                                    <el-dropdown-item>20-99人</el-dropdown-item>
                                    <el-dropdown-item>100-499人</el-dropdown-item>
                                    <el-dropdown-item>1000-9999人</el-dropdown-item>
                                    <el-dropdown-item>10000人以上</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--公司-->
        <div class="inner home-inner">
            <div class="home-box">
                <div class="common-tab-box company-tab-box">
                    <div class="common-tab company-tab">
                        <div>
                            <div name="first">
                                <el-row :gutter="12">
                                    <el-col :span="8">
                                        <router-link to="">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="8">
                                        <router-link to="">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="8">
                                        <router-link to="">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="8">
                                        <router-link to="">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                    <el-col :span="8">
                                        <router-link to="/">
                                            <el-card shadow="hover">
                                                <div class="company-img">
                                                    <el-image
                                                            style="width: 100px; height: 100px"
                                                            :src="url"
                                                            :fit="fit"
                                                            :lazy='true'></el-image>
                                                    <div class="company-right">
                                                        <p>
                                                            <span>阿里云 <span class="credit">信用:100</span></span>
                                                            <span>上海市上海城区浦东</span>
                                                            <span class="Authentication">认证通过</span>
                                                        </p>
                                                        <div class="common-tag company-tag">
                                                            <span>上海</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>3-5年</span>
                                                            <el-divider direction="vertical"></el-divider>
                                                            <span>本科</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="split">
                                                    <el-divider></el-divider>
                                                </div>
                                                <div class="company-bot">
                                                    <span class="company">全部在招职业</span>
                                                    <span class="recruit-nbr">11</span>
                                                </div>
                                            </el-card>
                                        </router-link>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination
                                :background="false"
                                layout="prev, pager, next"
                                :total="1000">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    $(function () {
        $(window).scroll(function () {
            let scrollTop = $(window).scrollTop();
            scrollTop > 268 ? $("#top_filter_bar").addClass("show") : $("#top_filter_bar").removeClass("show") ;
        });
    });
    export default {
        name: "allcompany",
        data() {
            return {
                fit: "fill",
                company: 'first',
                url: require("../../assets/img/alibaba.jpg")
            }

        },
        methods: {
            getFoucs: function () {
                // this.styleObject.border = '1px solid #53cac3';
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/css/company/allcompany.css";
</style>