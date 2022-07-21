export  default {
    install(Vue){
        Vue.filter('mySlice',function (value) {
            return value+"===>>"
        });
        Vue.directive('vshow',{
            bind(element,binding){
                element.value=binding.value;
            },
            inserted(element,){
                element.focus();
            },
            update(element,binding){
                //自定义修改时的值
                element.value=binding.value;
            }
        });

        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200,
                }
            }
        })

        Vue.prototype.hello= ()=>{alert("hello")};
    }
}
/**
 * 插件:
 *  功能：用于增强Vue
 *  本质：包含install方法的一个对象，install的第一个参数时Vue，第二个以后的参数时插件使用者传递的数据。
 *  定义插件：
 *      对象。install = function(Vue,options){
 *          Vue.filter(...)
 *
 *          Vue.directive(...)
 *
 *          Vue.mixin(...)
 *
 *          Vue.prototype.$mymehoth= functon(){....}
 *           Vue.prototype.$myprototype= ***
 *      }
 *  使用插件：vue.use
 *
 */