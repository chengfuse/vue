<template>
<!--

   -->
  <div>
    <h2>名字：{{stuName}}</h2>
    <div>性别：{{stuSex}}</div>
    <div>年龄:{{stuAge}}</div>
    <input type="text" v-vshow="name">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data(){
    return {
      stuName:this.name,
      stuAge:this.age,
      stuSex:this.sex,
    }
  },
  /*  限制类型
  props:{
    name:String,
    age:Number,
    sex:String
  }
  */
  props:["name","age","sex"], //只接收
  /* props 复杂写法 限制类型 限制必要性 指定默认值
  props:{
    name:{
      type:String,
      required:true, //是否必要属性
    },
    age:{
      type:Number,
      default:18, //默认属性
    },
    sex:{
      type:String,
      required: true,
    }
  },*/
  methods:{

  },
}
</script>

<style scoped>

</style>