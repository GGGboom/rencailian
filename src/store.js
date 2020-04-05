import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//创建实例
const store  = new Vuex.Store({
    state:{
        loginState:false,
        pageState:true,//在登录注册页面中不需要页头和页脚,该数据用于控制页头和页脚
        //用户基本信息
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
    getters:{
        //获取登录状态
        isLogin: state => state.isLogin,
    },
    mutations:{
        //保存登录状态
        login:(state ,payload)=> {
            state.loginState = payload;
        },
        exit:state => {
            localStorage.removeItem('user');
            state.loginState = false;
        },
        //修改页面状态，用于控制header，footer和backtotop
        changePageState:(state ,payload)=> {
            state.pageState = payload;
        }
    },

    // 应用mutations
    actions: {
        //获取登录状态
        userLogin({commit}, flag) {
            commit("userStatus", flag)
        },
    }
});
export default store