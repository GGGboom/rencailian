import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/router'
import store from './store'
import 'vue-awesome/icons'
//使用vue-awesome
import Icon from 'vue-awesome/components/Icon'
//使用font-awesome
import 'font-awesome/css/font-awesome.min.css';


Vue.component('v-icon', Icon);
Vue.config.productionTip = false;

import {$post} from "./utils/request";
Vue.prototype.$post = $post;


router.beforeEach((to, from, next) => {
  //每刷新一次页面，重新请求数据
  let user = JSON.parse(localStorage.getItem("user"));
  if(user){//保存登录状态和用户类型
      store.state.loginState=true;
      store.state.identityType = user.identityType;
      if(store.state.search===to.params.search){
          to.params.search = null;
      }else{
          store.state.search=to.params.search;
      }
      next();
  }else{
    store.state.loginState=false;
  }
  //路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
});

// 消除因为在页面中间跳转路由而导致的页面不置顶
router.afterEach(() => {
  window.scroll(0, 0);
});


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
