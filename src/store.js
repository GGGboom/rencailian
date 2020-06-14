import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//创建实例
const store  = new Vuex.Store({
    state:{
        loginState:false,
        pageState:true,//在登录注册页面中不需要页头和页脚,该数据用于控制页头和页脚
        identityType:1,//用户类型 1是招聘者，2是应聘者
        search:"",     //用于记录应聘者-公司、应聘者-职业和招聘者-人才中搜索历史
        //用户基本信息
        user:{
            "companyId": null,
            "userId": null,
            "name": null,
            "headerImagePath": null,
            "position": null,
            "verifiedStatus": null,
            "account": null,
            "identityType": 2,
            "receivingMailbox": null,
            "cellphone": null,
            "identityCardNo": null,
            "loginEmail": null,
            "licenceCompanyName": null,
            "bstWallets": [
            ],
            detail:{}
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
        //保存用户类型
        saveUserType:(state,payload)=>{
           state.  identityType = payload;
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