import  vueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
//创建router实例对象 .管理
export  default  new vueRouter({
    routes:[
        {
            name:"about", //配置路由名称  在多个嵌套有利于简写代码
            path:"/about",
            component:About,
        },
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"message",
                    component: ()=>import("@/pages/homePages/Message"),
                    children:[
                        {
                            name:"detail",
                            path:"detail",
                            component: ()=>import("@/pages/homePages/MessageDetail"),
                            props({query}){
                                return{
                                    id:query.id,
                                    content:query.content,
                                }
                            },
                        }
                    ]
                },
                {
                    path:"news",
                    component: ()=>import("@/pages/homePages/News"),
                }
            ]
        }
    ]
})
