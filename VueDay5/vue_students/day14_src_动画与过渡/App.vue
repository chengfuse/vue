<template>
  <div id="app">
    <test></test>
    <test02></test02>
    <test03></test03>
  </div>
</template>

<script>
import test from "@/components/test";
import test02 from "@/components/test02";
import test03 from "@/components/test03";
export default {
  name: 'App',
  components: {
    test,test02,test03
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
