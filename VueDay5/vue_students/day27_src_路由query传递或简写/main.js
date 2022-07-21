import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import  {BootstrapVue,IconsPlugin } from 'bootstrap-vue';
import VueRouter from "vue-router";
import router from "@/router";
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
//创建vm
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router:router, //自定义配置路由
}).$mount('#app');
