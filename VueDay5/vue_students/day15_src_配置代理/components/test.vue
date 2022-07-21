<template>
  <div>
    <button @click="connectService">控制台日志</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "test",
  data(){
    return{
      isShow:true,
    }
  },
  methods:{
    connectService(){
      axios.get('http://localhost:8080/api/student/get').then(
          response=>{
            console.log("请求成功！",response.data);
          },
          error=>{
            console.log("请求失败!",error.message);
          }
      )
    }
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
    color: aqua;
    padding: 5px;
    height: 59px;
    width: 500px;
    text-shadow: 2px 2px 6px #c3fffd;
    background-color: #000000;
    position: relative;
  } 
  .check-enter-active{
    animation: recode  2s  linear;
  }
  .check-leave-active{
    animation: recode  2s  linear reverse;
  }
  @keyframes  recode  {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0);
    }
  }
</style>