import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//创建实例
const store  = new Vuex.Store({
    state:{
        //在登录注册页面中不需要页头和页脚,该数据用于去掉页头和页脚
        isLogin:false,
        user:{
            "companyId": null,
            "userId": null,
            "name": null,
            "headerImagePath": null,
            "position": null,
            "verifiedStatus": null,
            "account": null,
            //用户类型 1是应聘者，2是招聘者
            "identityType": 2,
            "receivingMailbox": null,
            "cellphone": null,
            "identityCardNo": null,
            "loginEmail": null,
            "licenceCompanyName": null,
            "bstWallets": [
                {
                    "id": 914328292933632,
                    "name": "18321260396"
                }
            ]
        }
    },
    mutations:{
        removeHeaderAndFooter:(state ,payload)=> {
            state.isLogin = payload;
        }
    }

});
export default store