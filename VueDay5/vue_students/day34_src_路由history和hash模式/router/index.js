import  vueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";

/**
 * 路由器的两种工作模式、
 * 1.对于一个url来说，什么时hash值？ --#及其后面的内容的就是hash值
 * 2.hash值不会包含在http请求中，即：hash值不会带给服务器。
 * 3.hash模式:
 *  1.地址中永远带着#号，不美观。
 *  2.若以后地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
 *  3.兼容性较好。
 * 4.history模式：
 *  1.地址干净美观。
 *  2.兼容性和hash模式相比略差
 *  3.应用部署上线时需要后端人员支持，解决刷新页面服务段404的问题。
 *
 * @type {VueRouter}
 */

//创建router实例对象 .管理
const router= new vueRouter({
    mode:"history", //路由模式 默认为 hash 路径端口：/#/ 例如 http://localhost:8080/#/home/message
    // history：路径端口/ 例如 http://localhost:8080/home/message
    routes:[
        {
            name:"about", //配置路由名称  在多个嵌套有利于简写代码
            path:"/about",
            component:About,
            meta:{title:"关于"} //配置路由的附件信息
        },
        {
            path:"/home",
            component:Home,
            meta:{title:"主页"},
            children:[
                {
                    path:"message",
                    component: ()=>import("@/pages/homePages/Message"),
                    meta:{title:"主页",isAuth:true},
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
                            meta:{title:"详细",isAuth:true},
                        }
                    ]
                },
                {
                    path:"news",
                    component: ()=>import("@/pages/homePages/News"),
                    meta:{title:"主页",isAuth:true},
                }
            ]
        }
    ]
});
router.beforeEach((to,from,next)=>{
    console.log("前置路由守卫",to,from);
    if(to.meta.isAuth){ //判断蛋当前路由是否需要进行权限控制
        if(localStorage.getItem("vue_token")==='12345'){ //权限控制的具体规则
            next(); //放行
        }else{
            alert("你无权限访问!");
        }
    }else{
        next(); //放行
    }
});
//全局后置守卫，初始化时执行，路由切换后执行
router.afterEach((to, from)=>{
    console.log("后置路由守卫",to,from);
    document.title=to.meta.title || 'vue系统'; //修改网页的title
})
export  default router;