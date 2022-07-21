<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group name="check" appear>
      <h1 v-show="!isShow" key="1">Rush  B</h1>
      <h1 v-show="isShow" key="2">hello word</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "test",
  data(){
    return{
      isShow:true,
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
  /*开始  到结束*/
  .check-enter,.check-leave-to{
    transform: translateX(-100%);
  }
  /*开始起点  结束起点*/
  .check-enter-active,.check-leave-active{
    transition: 2s linear;
  }
  /* */
  .check-enter-to,.check-leave{
    transform: translateX(0);
  }

</style>