<template>
<!--

   -->
  <div class="student">
    <h2>名字：{{stuName}}</h2>
    <div>性别：{{stuSex}}</div>
    <div>年龄:{{stuAge}}</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data(){
    return {
      stuName:"三上井雅",
      stuAge:39,
      stuSex:'女',
    }
  },
  methods:{
  },
  mounted() {

  },
  beforeDestroy() {

  }
}
</script>

<style lang="less" scoped>
@base: 5px;
  .student{
    padding: @base;
    background-color: #daedff;
    border-radius: 5px;

  }

</style>