import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store/index'
import 'vue-awesome/icons'
//使用vue-awesome
import Icon from 'vue-awesome/components/Icon'
//使用表情包
import VueEmoji from 'emoji-vue';
Vue.component('v-icon', Icon);
Vue.component('VueEmoji', VueEmoji);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
