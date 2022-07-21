/**
 * 消息发布与订阅
 * 1.一种组件间通信的方式，适用于任意组件间的通信
 * 2.使用步骤
 *   2.1 安装subpub: npm i pubsub-js
 *   2.2 引入: import pubsub from "pubsub-js";
 *   2.3 接收数据：A组件接收数据，则A组件中订阅消息，订阅的回调留在A组件自身
 *        mounted() {
 *         this.pubId=pubsub.subscribe('showSchool',(data)=>{
 *             console.log("app接收school订阅：",data)
 *          });
 *        },
 *    2.4 提供数据： pubsub.publish('xxx',this.name);   //订阅消息
 *    2.5 最好在组件使用前销毁 berforeDestroy中 pubsub.unsubscribe(pid);
 */
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate() {
  }
}).$mount('#app')
