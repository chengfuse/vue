<template>
  <div>
    <div><input class="header" type="text"  v-model="valueDate"  @keyup.enter="addDate"></div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data(){
    return{
      valueDate:"",
    }
  },
  methods:{
      addDate(){
        pubsub.publish('addvalue',this.valueDate);
        this.valueDate="";
      }
  }
}
</script>

<style scoped>
.header{
  margin-top: 2px;
  margin-bottom: 7px;
  width: 290px;
  height: 20px;
}
</style>