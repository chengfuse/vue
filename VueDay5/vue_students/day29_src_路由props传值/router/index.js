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
                            // path:"detail",
                            path:"detail/:id/:content",
                            component: ()=>import("@/pages/homePages/MessageDetail"),
                            //props的第一种写法,值为对象,该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{id:1,content:"hello"},
                            //props的第二种写法,值为布尔,若布尔值为真,就会把该路由组件收到的所有params参数,以props的形式传给Detail组件,
                            // props:true,
                            //props 第三种写法,值为函数
                            props({params}){
                                return{
                                    id:params.id,
                                    content:params.content,
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
/**
 * 路由组件几个注意:
 *  1. 路由组件通常存放在pages文件夹,一般文件通常存放在components文件夹.
 *  2. 通过切换, 隐藏了路由组件,默认是销毁掉的,需要的时候再去挂载.\
 *  3. 每个组件都有自己的$router属性,里面存储自己的路由信息
 *  3.整个应用只有一个router,可以通过组件的$router属性获取到
 */
