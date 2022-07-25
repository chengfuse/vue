import  vueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
//创建router实例对象 .管理
const router= new vueRouter({
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
                    // beforeEnter(to,from,next){ //前置独享路由守卫 注：独享路由没有 后置一般配合全局后置
                    //     console.log("前置路由守卫",to,from);
                    //         if(to.meta.isAuth){ //判断蛋当前路由是否需要进行权限控制
                    //             if(localStorage.getItem("vue_token")==='12345'){ //权限控制的具体规则
                    //                 next(); //放行
                    //             }else{
                    //                 alert("你无权限访问!");
                    //             }
                    //         }else{
                    //             next(); //放行
                    //         }
                    // }
                }
            ]
        }
    ]
});
/**
 * 路由守卫：
 *  1.这作用：对路由进行权限控制
 *  2.分类：全局守卫，独享守卫，组件守卫
 *
 */
//全局前置守卫；初始化时执行，每次路由切换前执行
// router.beforeEach((to,from,next)=>{
//     console.log("前置路由守卫",to,from);
//     if(to.meta.isAuth){ //判断蛋当前路由是否需要进行权限控制
//         if(localStorage.getItem("vue_token")==='12345'){ //权限控制的具体规则
//             next(); //放行
//         }else{
//             alert("你无权限访问!");
//         }
//     }else{
//         next(); //放行
//     }
// });
//全局后置守卫，初始化时执行，路由切换后执行
router.afterEach((to, from)=>{
    console.log("后置路由守卫",to,from);
    document.title=to.meta.title || 'vue系统'; //修改网页的title
})
export  default router;