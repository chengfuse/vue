<template>
  <div class="data-item">
      <h3>{{title}}</h3>
      <slot name="content"> <!--    具名插槽  -->
        就等着你的插件跳进来！我好活埋。
      </slot>
      <slot name="footer">
        一脚踢死你！
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
    text-align: center;
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