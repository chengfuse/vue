import  vueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
//创建router实例对象 .管理
export  default  new vueRouter({
    routes:[
        {
            path:"/about",
            component:About,
        },
        {
            path:"/home",
            component:Home,
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
