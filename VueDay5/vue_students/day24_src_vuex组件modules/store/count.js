export  default {
    //准备actions对象一响应组件中用户的动作
    namespaced:true,
    actions :{
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
    },
//准备mutations对象一修改state中的数据
    mutations:{
        Increment(state,value){
            state.sum+=value;
        },
        Decrement(state,value){
            state.sum-=value;
        },
    },
//准备state对象一保存具体数据
    state:{
        sum:0,
        studentName:"小泽玛丽亚",
        schoolName:"早稻田大学",
    },
//store.js 中追加getters
   getters:{
        bigSum(state){
            return state.sum*10;
        }
    },
}