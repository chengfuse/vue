<template>
  <div class="container">
    <Search></Search>
    <Content></Content>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Content from "@/components/Count";
import Search from "@/components/Search";
export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: {
    Search,Content
  },

  data() {
    return {
    }
  },
}
</script>

<style>
#app {
  /*text-align: center;*/
}
</style>
