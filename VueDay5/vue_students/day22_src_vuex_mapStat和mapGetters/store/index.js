//引入Vue核心组件库
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//准备actions对象一响应组件中用户的动作
const actions ={
    incrementOdd(content,value) {
        if (content.state.sum % 2){
            content.commit("Increment",value);
        }
    },
    incrementWait(content,value){
        setTimeout(()=>{
            content.commit("Increment",value);
        },200);
    }
};
//准备mutations对象一修改state中的数据
const  mutations={
    Increment(state,value){
        state.sum+=value;
    },
    Decrement(state,value){
        state.sum-=value;
    },
};
//准备state对象一保存具体数据
const state={
    sum:0,
    studentName:"小泽玛丽亚",
    schoolName:"早稻田大学",
};
//store.js 中追加getters
const  getters={
    bigSum(state){
        return state.sum*10;
    }
};
/**
 * 1.概念: 当state中的数据需要经过加工后再使用时，可以使用getters加工。
 *
 */
//常见暴露store
//组件读取 $store.getters.bigSum
export  default  new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
