
import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import  {BootstrapVue,IconsPlugin } from 'bootstrap-vue';
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus=this; //安装全局事件
  }
}).$mount('#app');
