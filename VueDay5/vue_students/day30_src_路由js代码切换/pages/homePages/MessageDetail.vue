<template>
  <div>
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