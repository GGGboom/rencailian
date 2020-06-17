#人才链

## 项目运行
```
npm install
npm run serve
```
## 项目布局
```$xslt
rencailian/
├── babel.config.js                          // babel配置
├── doc                                      // 文档
│   └── 规格.txt
├── package.json                             // 配置文件
├── package-lock.json
├── public                                   // 公共文件
│   ├── favicon.ico                          // 图标
│   └── index.html                           // 入口html文件
└── src                                      // 源码目录
    ├── api                                  // API接口
    │   ├── company.js                       // 公司管理API
    │   ├── job.js                           // 职位管理API
    │   ├── meg.js                           // 消息的API
    │   ├── resume.js                        // 简历管理API
    │   ├── talent.js                        // 人才的API
    │   └── user.js                          // 用户管理的API
    ├── App.vue                              // 页面入口文件
    ├── assets                               // 资源目录
    │   ├── css                              // css资源目录
    │   └── img                              // img资源目录
    ├── components                           // 组件目录
    │   ├── Attachment.vue                   // 简历附件组件
    │   ├── Backtop.vue                      // 返回顶部组件
    │   ├── Footer.vue                       // 页脚组件
    │   ├── Header.vue                       // 导航栏组件
    │   └── Pager.vue                        // 分页组件
    ├── main.js                              // 程序入口文件，加载各种公共组件
    ├── plugins                              // 插件
    │   └── element.js
    ├── router
    │   └── router.js                        // 路由配置
    ├── store.js                             // vuex状态管理
    ├── utils                                // 工具目录
    │   ├── basicDatas.js                    // 存储静态数据
    │   ├── commonUtil.js                    // 工具函数
    │   ├── request.js                       // axios的封装
    │   └── validate.js                      // 表单验证
    └── views                                // 页面目录
        ├── Home.vue                         // 首页
        ├── hr                               // 招聘者的人才和职位
        │   ├── msg                          // 招聘者的聊天目录
        │   ├── position                     // 招聘者的人才目录
        │   └── talent                       // 招聘者的职位目录
        ├── jobHunter                        // 应聘者的公司和职位
        │   ├── company                      // 应聘者的公司目录
        │   ├── job                          // 应聘者的职位目录
        │   └── msg                          // 应聘者的聊天目录
        ├── Login.vue                        // 登录页面
        └── profile                          // 个人中心页面
            ├── common                       // 招聘者和应聘者的公共页面
            ├── hr                           // 招聘者的个人中心页面
            ├── index.vue                    // index页面
            └── jobHunter                    // 应聘者的个人中心页面
```
## 效果演示
[演示地址](http://176.122.181.106:8080/)
