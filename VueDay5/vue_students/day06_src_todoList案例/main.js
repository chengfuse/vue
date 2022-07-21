
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
//render: p=>p('h3','你好！'),
}).$mount('#app')
