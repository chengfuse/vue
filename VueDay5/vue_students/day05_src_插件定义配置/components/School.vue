<template>

  <div>
    <h2>学校名称：{{name |mySlice}}</h2>
    <div>学校地址：{{address}}</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data(){
    return {
      name:"南京师范大学",
      address:"南京",
    }
  },
}
</script>

<style scoped>

</style>