<template>
  <div>
    <span :style="styleT">我是vue</span>
    <div>我是news1组件<input type="text" placeholder=""/></div>
    <div>我是news2组件<input type="text" placeholder=""/></div>
    <div>我是news3组件<input type="text" placeholder=""/></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "News",
  data(){
    return{
      timer:"",
      styleT:{ opacity:1}
    }
  },
  activated() {
    console.log("News激活时触发");
    this.timer=setInterval(()=>{
      console.log('@');
      this.styleT.opacity-=0.01;
      if(this.styleT.opacity<=0) this.styleT.opacity=1;
    },16);
  },
  deactivated() {
    console.log("News失活时触发");
    clearInterval(this.timer);
  },
}
/**
 * 路由使用组件生命周期钩子
 * 1.作用:路由组件所有独有的两个钩子,用于捕获路由组件的激活状态呢
 * 2.具体名字:
 *  2.1.activated路由组件被激活时触发
 *  2.2.deactivated 路由组件失活时触发
 */
</script>

<style scoped>

</style>