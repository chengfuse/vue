/**
 *  全局事件总线
 *  1.一种组件间通信的方式，适用于任意组件间通信
 *  2.安全事件总线
 *    new Vue({
 *       render: h => h(App),
 *       beforeCreate() {
 *          Vue.prototype.$bus=this; //安装全局事件
 *       }
 *      })
 *   3.使用事件 A组件发送 B 组件接收
 *    1.发送数据 A组件想发送数据泽通过全局定义的$bus.$emit 绑定如下代码
 *      this.$bus.$emit('绑定属性',绑定数据);
 *    2.接收数据 B组件接收代码
 *      mounted() {
 *       this.$bus.$on('hello',(data)=>{ //$on获取A组件对接属性
 *         console.log('学生所在的学校',data)
 *       });
 *     },
 *     beforeDestroy() {
 *       this.$bus.$off(); //B组件事件销毁后应解除绑定
 *     }
 * 
 */
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus=this; //安装全局事件
  }
}).$mount('#app')
