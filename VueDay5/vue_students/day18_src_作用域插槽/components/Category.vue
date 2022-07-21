<template>
  <div class="data-item">
      <h3>{{title}}</h3>
      <slot :games="games">
        就等着你的插件跳进来！我好活埋。
      </slot>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  data(){
    return{
      games:['红色警戒','gate5','战地风云','使命召唤'],
    }
  },
  props:["title"]
}
</script>

<style scoped>
  .data-item{
    background-color: lightskyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    margin-top: 10px;
    text-align: center;
    background-color: orange;
  }
  .cate-foods{
    width: 100%;
  }
  .cate-films{
    width: 100%;
  }
</style>