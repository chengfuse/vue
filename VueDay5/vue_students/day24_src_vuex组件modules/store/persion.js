export  default {
    //准备actions对象一响应组件中用户的动作
    namespaced:true,
    actions :{

    },
//准备mutations对象一修改state中的数据
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value);
        },
    },
//准备state对象一保存具体数据
    state:{
        personList:[
            {id:1,name:"小泽玛丽亚"},
            {id:2,name:"深田永美"},
            {id:3,name:"吉泽明步"},
        ]
    },
//store.js 中追加getters
    getters:{
    },
}