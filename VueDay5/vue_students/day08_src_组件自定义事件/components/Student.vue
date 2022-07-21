<template>
<!--

   -->
  <div class="student">
    <h2>名字：{{stuName}}</h2>
    <div>性别：{{stuSex}}</div>
    <div>年龄:{{stuAge}}</div>
    <button @click="showName">显示学生名称</button>
    <button @click="unbind">取消绑定</button>
    <button @click="death">组件本地销毁</button>
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
    showName(){
      this.$emit("studentName",this.stuName);
    },
    unbind(){
      //解除绑定
      console.log("解除绑定！！！！");
      this.$off('studentName');
    //  this.$off(['studentName','eventName']); //多个解绑属性
    //  this.$off() //解除绑定所有
    },
    death(){
      this.$destroy();
    }
  },
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