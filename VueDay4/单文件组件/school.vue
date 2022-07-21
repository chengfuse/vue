<template>
  <div>
    <div>学校名称：{{name}}</div>
    <div>学校地址：{{address}}</div>
    <div>学校电话：{{phone}}</div>
    <div>
       <h3>学生：</h3>
       <student></student>
    </div>
  </div>
</template>
<script>
import {student} from "./student";
  export  default {
    name:"school",
    components:{
      student
    },
    data(){
      return {
        name:"麻省理工学院",
        address:"美国洛杉矶",
        phone:"010-4452340",
      }
    },
    methods:{

    }
  }
</script>
<style scoped>

</style>