<template>
  <div class="bodey-title">
    <Count title="游戏"></Count>
    <hr/>
    <Persion></Persion>
  </div>
</template>

<script>
import Count from "@/components/Count";
import Persion from "@/components/Persion";
export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: {
    Count,Persion
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
.bodey-title{

}

</style>
