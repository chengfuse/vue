<template>
  <div id="app">
    <div >{{msg}}</div>
    <Student name="深田永美" sex="女" :age="38"/>
  </div>
</template>

<script>
import Student from "@/components/Student";

export default {
  name: 'App',
  components: {
    Student
  },
  data(){
    return{
      msg:"欢迎来到南京航天大学"
    }
  },
  methods:{
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
