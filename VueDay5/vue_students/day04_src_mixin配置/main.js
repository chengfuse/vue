/*
*  关于不同版本的Vue:
*     1. vue.js与vue.runtime.xxx.js的区别：
*         1.1. vue.js 是完整的Vue，包含：核心功能+模板解析器。
*         1.2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器
*     2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render
*     函数接收到的createElement函数去指定具体的内容。
* */
import Vue from 'vue'
import App from './App.vue'
import  {med} from './mixin'
Vue.config.productionTip = false
Vue.mixin(med);

/**
 *  mixin（混入）
 *   功能：可以把相同的多个组件配置成一个提取对象
 *   使用功能：
 *    第一步定义混合，例如：
 *      {
 *          data(){....},
 *          methods:{....},
 *          .....
 *      }
 *    第二部使用混入，例如：
 *      （1）.全局混入：Vue.mixin(xxx)
 *      （2）.局部混入：mixins:['xxx']
 */
new Vue({
  render: h => h(App),
//render: p=>p('h3','你好！'),
}).$mount('#app')
