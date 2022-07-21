<template>

  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <div>学校地址：{{address}}</div>
  </div>
</template>

<script>
import {med} from "../mixin";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data(){
    return {
      name:"南京师范大学",
      address:"南京",
    }
  },
  mixins:[med]
}
</script>

<style scoped>

</style>