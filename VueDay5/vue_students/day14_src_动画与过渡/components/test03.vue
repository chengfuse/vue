<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounce"
        leave-active-class="animate__fadeOutDown"
        appear>
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
    text-shadow: 2px 2px 10px #c3fffd;
    background-color: #000000;
  }

</style>