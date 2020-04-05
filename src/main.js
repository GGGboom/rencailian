import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import 'vue-awesome/icons'
//使用vue-awesome
import Icon from 'vue-awesome/components/Icon'
//使用vue-awesome

//使用font-awesome
import 'font-awesome/css/font-awesome.min.css';

//使用表情包
import VueEmoji from 'emoji-vue';
Vue.component('v-icon', Icon);
Vue.component('VueEmoji', VueEmoji);
Vue.config.productionTip = false;

import {$post} from './utils/request';
Vue.prototype.$post = $post;

router.beforeEach((to, from, next) => {
  //每刷新一次页面，重新请求数据
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if(user){
      //设置vuex登录状态为已登录
      store.state.loginState=true;
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


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
