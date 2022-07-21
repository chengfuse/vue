<template>
  <div>
    <div>我是news1组件<input type="text" placeholder=""/></div>
    <div>我是news2组件<input type="text" placeholder=""/></div>
    <div>我是news3组件<input type="text" placeholder=""/></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "News",
  beforeDestroy() {
    console.log("News组件准备销毁");
  },
  destroyed() {
    console.log("News组件以销毁");
  }
}
</script>

<style scoped>

</style>