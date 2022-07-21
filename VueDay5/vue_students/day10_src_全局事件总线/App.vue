<template>
  <div id="app">
    <div >{{msg}}</div>
    <School ></School>
    <hr/>
    <Student />

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
