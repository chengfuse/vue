//引入Vue核心组件库
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


/**
 * 1.概念: 当state中的数据需要经过加工后再使用时，可以使用getters加工。
 *
 */

import  count  from './count';
import  person  from './persion'
//常见暴露store
//组件读取 $store.getters.bigSum
export  default  new Vuex.Store({
    modules:{
        countAbout:count,
        personAbout:person,
    },
})
