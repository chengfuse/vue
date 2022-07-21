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
            meta:{title:"关于"}
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
    if(to.meta.isAuth){
        if(localStorage.getItem("vue_token")==='12345'){
            next();
        }else{
            alert("你无权限访问!");
        }
    }else{
        next();
    }
});

router.afterEach((to, from)=>{
    console.log("后置路由守卫",to,from);
    document.title=to.meta.title || 'vue系统';
})
export  default router;