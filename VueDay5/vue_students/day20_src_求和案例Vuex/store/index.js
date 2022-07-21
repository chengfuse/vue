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
}

//常见暴露store
export  default  new Vuex.Store({
    actions,
    mutations,
    state,
})
