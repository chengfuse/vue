<template>

  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <div>学校地址：{{address}}</div>
    <button @click="getShow">显示学校名称</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data(){
    return {
      name:"南京师范大学",
      address:"南京",
    }
  },
  props:["getSchoolName"],
  methods:{
    getShow(){
      this.getSchoolName(this.name);
    }
  }
}
</script>

<style lang="less" scoped>
.school{
  padding: 5px;
  background-color: #ffe9e9;
  border-radius: 5px;
}
</style>