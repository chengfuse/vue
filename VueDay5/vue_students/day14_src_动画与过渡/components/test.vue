<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition name="check" appear>
      <h1 v-show="isShow">Rush  B</h1>
    </transition>
  </div>
</template>

<script>
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