<template>
<!--
  配置项props
    功能：让组件接收外部传过来的数据
      （1）.传递数据：
        <Demo  name="xxx"/>
      （2）.接收数据：
           第一种方式（只接收）：
             props:["name","age","sex"],
           第二种方式（限制类型）：
              props:{
                name:String,
              }
           第三种方式（限制类型 限制必要性 指定默认值）
              props:{
                  name:{
                    type:String,
                    required:true, //是否必要属性
                    default:'李四', //默认属性
                  },
                },
        备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
             若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
   -->
  <div>
    <div>名字：{{stuName}}</div>
    <div>性别：{{stuSex}}</div>
    <div>年龄:{{stuAge}}</div>
    <button @click="updateAge">修改年龄</button>
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
    updateAge(){
      this.stuAge=28;
    },
  },
}
</script>

<style scoped>

</style>