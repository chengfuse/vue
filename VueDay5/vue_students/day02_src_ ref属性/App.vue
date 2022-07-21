<template>
  <div id="app">
    <div ref="ms">{{msg}}</div>
    <School ref="sch"/>
    <button @click="showDome">点击</button>
  </div>
</template>

<script>
import School from "@/components/Student";

export default {
  name: 'App',
  components: {
    School
  },
  data(){
    return{
      msg:"欢迎来到南京航天大学"
    }
  },
  methods:{
    showDome(){
      console.log("本地ref msg");
      console.log(this.$refs.ms);
      console.log("子组件ref的sch");
      console.log(this.$refs.sch);
      this.$refs.sch.name="南京师范大学";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
