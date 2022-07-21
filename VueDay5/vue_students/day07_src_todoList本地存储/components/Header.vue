<template>
  <div>
    <div><input class="header" type="text"  v-model="valueDate"  @keyup.enter="addDate"></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  props:["adddate"],
  data(){
    return{
      valueDate:"",
    }
  },
  methods:{
      addDate(){
        this.adddate(this.valueDate);
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