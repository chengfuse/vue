<template>
  <div>我是About组件</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  mounted() {
    console.log('%%%',this.$route)
  },
  //组件守卫
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to,from,next){
    console.log("About----beforeRouteEnter",to,from);
    if(to.meta.isAuth){ //判断蛋当前路由是否需要进行权限控制
      if(localStorage.getItem("vue_token")==='12345'){ //权限控制的具体规则
        next(); //放行
      }else{
                    alert("你无权限访问!");
      }
    }else{
      next(); //放行
    }
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to,from,next){
    console.log("About----beforeRouteLeave",to,from);
    next();
  }
}
</script>

<style scoped>

</style>