<template>
  <div>
<!--   接收用 $route query 用发的就用query 接收 就是用什么发就用什么收  -->
<!--    <div>消息编号:{{$route.query.id}}</div>-->
<!--    <div>消息标题:{{$route.query.content}}</div>-->
    <!--   接收用 $route params 用发的就用params接收 就是用什么发就用什么收  -->
    <div>消息编号:{{id}}</div>
    <div>消息标题:{{content}}</div>
  </div>
</template>

<script>
export default {
  name: "MessageDetail",
  props:['id','content']
}
</script>

<style scoped>

</style>