import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
//引入store组件
import store from "./store";
import  {BootstrapVue,IconsPlugin } from 'bootstrap-vue';

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
//创建vm
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  store
}).$mount('#app');
