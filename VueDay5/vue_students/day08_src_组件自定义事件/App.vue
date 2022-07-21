<template>
  <div id="app">
    <div >{{msg}}</div>
<!--  通过父组件给子组件组件传递函数类型为props实现：子给夫传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <hr/>
    <!--  通过父组件给子组件绑定一个自定义事件实现：子传夫传递数据 -->
<!--  第一种写法 注意: 如原生@click的@会被误以为 子传递夫的事件绑定 解决是 如@click 或其他vue原件加.native-->
    <Student v-on:studentName="getStudentName" @click.native="showStudent" />
<!--  第二种写法  <Student @studentName.once="getStudentName" />-->
    <!--  通过父组件给子组件绑定一个自定义事件实现：子传夫传递数据 使用ref-->
<!--    <student ref="stu"></student>-->

  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";
export default {
  name: 'App',
  components: {
    Student,School
  },
  data(){
    return{
      msg:"欢迎来到南京航天大学"
    }
  },
  methods:{
    getStudentName(name){
      console.log("App收到的学生名称：",name);
      alert(name);
    },
    getSchoolName(name){
      console.log("App收到的学校名称：",name);
      alert(name);
    },
    showStudent(){
      alert("点击的时student");
    }
  },
  mounted() {
    //ref 实现子传夫
    // setTimeout(()=>{
    //   this.$refs.stu.$on('studentName',this.getStudentName)
    // },100)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background-color: #effffc;
  color: #2c3e50;
  padding: 10px;
  margin-top: 60px;
}
</style>
